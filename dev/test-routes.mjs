import assert from 'node:assert/strict';
import { application } from '../functions/routes.mjs';

class BackendError extends Error {
  constructor(code, status) {
    super(code);
    this.code = code;
    this.status = status;
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function applyColumns(row, columns) {
  if (!columns || columns === '*') return { ...row };
  const out = {};
  for (const key of columns.split(',').map((item) => item.trim())) out[key] = row[key];
  return out;
}

class Query {
  constructor(store, table) {
    this.store = store;
    this.table = table;
    this.filters = [];
    this.op = 'select';
    this.payload = null;
    this.orderBy = null;
    this.limitN = Infinity;
    this.columns = null;
  }
  select(columns) { this.columns = columns; return this; }
  eq(column, value) { this.filters.push([column, value]); return this; }
  order(column, options = {}) { this.orderBy = [column, options.ascending !== false]; return this; }
  limit(count) { this.limitN = count; return this; }
  insert(payload) { this.op = 'insert'; this.payload = payload; this.columns = null; return this; }
  update(payload) { this.op = 'update'; this.payload = payload; return this; }
  delete() { this.op = 'delete'; return this; }
  matches(row) { return this.filters.every(([column, value]) => row[column] === value); }
  run() {
    const rows = this.store[this.table];
    if (this.op === 'insert') {
      const items = Array.isArray(this.payload) ? this.payload : [this.payload];
      for (const item of items) rows.push(clone(item));
      return this.columns ? items.map((item) => applyColumns(item, this.columns)) : null;
    }
    if (this.op === 'update') {
      const hit = rows.filter((row) => this.matches(row));
      for (const row of hit) Object.assign(row, clone(this.payload));
      return this.columns ? hit.map((row) => applyColumns(row, this.columns)) : null;
    }
    if (this.op === 'delete') {
      const keep = rows.filter((row) => !this.matches(row));
      this.store[this.table] = keep;
      return null;
    }
    let result = rows.filter((row) => this.matches(row));
    if (this.orderBy) {
      const [column, ascending] = this.orderBy;
      result = [...result].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * (ascending ? 1 : -1));
    }
    result = result.slice(0, this.limitN);
    return result.map((row) => applyColumns(row, this.columns));
  }
  then(resolve) {
    try { resolve({ data: this.run(), error: null }); }
    catch { resolve({ data: null, error: { code: 'fake_failure', status: 500 } }); }
  }
}

function createDb(store) {
  return { from: (table) => new Query(store, table) };
}

function createStorage(store) {
  return {
    async createSignedUrl(path) { return { signedUrl: `/fake-download?path=${encodeURIComponent(path)}` }; },
    async createSignedUploadUrl(path) { return { signedUrl: `/fake-upload?path=${encodeURIComponent(path)}` }; },
    async download(path) {
      const bytes = store.get(path);
      if (!bytes) {
        const error = new Error('missing');
        error.code = 'storage_object_not_found';
        throw error;
      }
      return new Response(bytes.body, { headers: { 'content-type': bytes.type } });
    },
  };
}

const store = {
  inquiries: [],
  portal_clients: [],
  portal_access_codes: [],
  portal_sessions: [],
  portal_projects: [],
  portal_updates: [],
  portal_invoices: [],
  portal_files: [],
};
const uploads = new Map();
const env = (name) => ({ PORTAL_ADMIN: 'studio-master-2026', CONTACT_TO_EMAIL: '' })[name];
const handle = application({ db: createDb(store), storage: createStorage(uploads), BackendError, env });

let base = 'http://localhost/functions/v1/app';
let cookies = { client: '', admin: '' };

async function call(path, { method = 'GET', body, cookie = '' } = {}) {
  const headers = {};
  if (body !== undefined) headers['content-type'] = 'application/json';
  if (cookie) headers.cookie = cookie;
  let response;
  try {
    response = await handle({
      request: new Request(`${base}${path}`, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
      }),
    });
  } catch (error) {
    if (!(error instanceof BackendError)) throw error;
    return { status: error.status, data: { error: error.code }, setCookie: '' };
  }
  const setCookie = response.headers.get('set-cookie') || '';
  let data = null;
  try { data = await response.json(); } catch { /* no body */ }
  return { status: response.status, data, setCookie };
}

const cookieValue = (setCookie) => (setCookie || '').split(';')[0];

// Health
let result = await call('/api/health');
assert.equal(result.status, 200);
assert.equal(result.data.ok, true);

// Contact
result = await call('/api/contact', { method: 'POST', body: {
  name: 'Aziza Karimova', email: 'aziza@example.com', company: 'Silk Road Lab',
  projectType: 'Web platform', budget: '$10–25k', message: 'We need a booking platform for 12 hotels before spring.',
  locale: 'en', website: '',
} });
assert.equal(result.status, 201);
assert.equal(store.inquiries.length, 1);
assert.equal(store.inquiries[0].email, 'aziza@example.com');

// Honeypot silently drops
await call('/api/contact', { method: 'POST', body: { website: 'spam', name: 'Spam', email: 'spam@example.com', message: 'Buy things now please' } });
assert.equal(store.inquiries.length, 1);

// Invalid contact
result = await call('/api/contact', { method: 'POST', body: { name: 'A', email: 'nope', message: 'hi' } });
assert.equal(result.status, 400);

// Admin login boundaries
result = await call('/api/admin/login', { method: 'POST', body: { code: 'wrong' } });
assert.equal(result.status, 401);
result = await call('/api/admin/login', { method: 'POST', body: { code: 'studio-master-2026' } });
assert.equal(result.status, 200);
cookies.admin = cookieValue(result.setCookie);
assert.ok(cookies.admin.startsWith('nx_admin='));

result = await call('/api/admin/overview', { cookie: cookies.admin });
assert.equal(result.status, 200);
assert.equal(result.data.inquiries.length, 1);

// Client creation
result = await call('/api/admin/clients', { method: 'POST', cookie: cookies.admin, body: {
  name: 'Aziza Karimova', company: 'Silk Road Lab', email: 'aziza@example.com',
} });
assert.equal(result.status, 201);
const clientId = result.data.client.id;

result = await call('/api/admin/clients', { method: 'POST', cookie: cookies.admin, body: {
  name: 'Aziza Karimova', company: 'Silk Road Lab', email: 'aziza@example.com',
} });
assert.equal(result.status, 409);

// Access code
result = await call(`/api/admin/clients/${clientId}/codes`, { method: 'POST', cookie: cookies.admin });
assert.equal(result.status, 201);
const code = result.data.code;
assert.match(code, /^[A-Z2-9]{4}-[A-Z2-9]{4}$/);

result = await call('/api/portal/login', { method: 'POST', body: { email: 'aziza@example.com', code: 'AAAA-AAAA' } });
assert.equal(result.status, 401);

result = await call('/api/portal/login', { method: 'POST', body: { email: 'aziza@example.com', code } });
assert.equal(result.status, 200);
cookies.client = cookieValue(result.setCookie);
assert.ok(cookies.client.startsWith('nx_portal='));

// One-time code cannot be reused
result = await call('/api/portal/login', { method: 'POST', body: { email: 'aziza@example.com', code } });
assert.equal(result.status, 401);

// Dashboard access control
result = await call('/api/portal/dashboard');
assert.equal(result.status, 401);
result = await call('/api/portal/dashboard', { cookie: cookies.admin });
assert.equal(result.status, 401);

// Projects, updates, invoices
result = await call('/api/admin/projects', { method: 'POST', cookie: cookies.admin, body: {
  clientId, name: 'Booking platform', summary: 'Reservation flow, rates and a back office.',
  status: 'building', phase: 'Build', progress: 45, startDate: '2026-10-01', targetDate: '2027-02-01',
} });
assert.equal(result.status, 201);
const projectId = result.data.project.id;

await call(`/api/admin/projects/${projectId}`, { method: 'PATCH', cookie: cookies.admin, body: { status: 'review', progress: 60 } });

await call('/api/admin/updates', { method: 'POST', cookie: cookies.admin, body: {
  clientId, projectId, title: 'Rate engine is live', body: 'Seasonal pricing and min-stay rules are working against the test inventory.',
} });

result = await call('/api/admin/invoices', { method: 'POST', cookie: cookies.admin, body: {
  clientId, projectId, number: 'NX-2026-04', amount: 4800, currency: 'USD', status: 'sent',
  issuedDate: '2026-10-15', dueDate: '2026-11-15', note: 'Second milestone',
} });
assert.equal(result.status, 201);
const invoiceId = result.data.invoice.id;

// File intent, upload and verification
result = await call('/api/admin/files', { method: 'POST', cookie: cookies.admin, body: {
  clientId, projectId, name: 'design-system.pdf', size: 18, contentType: 'application/pdf',
} });
assert.equal(result.status, 201);
const fileId = result.data.id;
const objectPath = store.portal_files.find((row) => row.id === fileId).object_path;
uploads.set(objectPath, { type: 'application/pdf', body: new TextEncoder().encode('PDF demo bytes') });

result = await call(`/api/admin/files/${fileId}/complete`, { method: 'POST', cookie: cookies.admin });
assert.equal(result.status, 200);
assert.equal(result.data.status, 'ready');

// Client dashboard
result = await call('/api/portal/dashboard', { cookie: cookies.client });
assert.equal(result.status, 200);
assert.equal(result.data.client.company, 'Silk Road Lab');
assert.equal(result.data.projects[0].status, 'review');
assert.equal(result.data.projects[0].progress, 60);
assert.equal(result.data.updates.length, 1);
assert.equal(result.data.invoices[0].number, 'NX-2026-04');
assert.equal(result.data.files.length, 1);
assert.equal(result.data.files[0].object_path, undefined);

// Download: client owns it, unknown other client does not
result = await call(`/api/portal/files/${fileId}/download`, { method: 'POST', cookie: cookies.client });
assert.equal(result.status, 200);
assert.match(result.data.url, /^\/fake-download\?path=/);

// Logout invalidates the session
result = await call('/api/portal/logout', { method: 'POST', cookie: cookies.client });
assert.equal(result.status, 200);
result = await call('/api/portal/dashboard', { cookie: cookies.client });
assert.equal(result.status, 401);

// Admin logout
result = await call('/api/admin/logout', { method: 'POST', cookie: cookies.admin });
assert.equal(result.status, 200);
result = await call('/api/admin/overview', { cookie: cookies.admin });
assert.equal(result.status, 401);

// Unknown routes and methods
result = await call('/api/nope');
assert.equal(result.status, 404);
result = await call('/api/contact');
assert.equal(result.status, 404);

console.log('All portal route checks passed.');
console.log(`inquiries=${store.inquiries.length} clients=${store.portal_clients.length} sessions=${store.portal_sessions.length}`);
