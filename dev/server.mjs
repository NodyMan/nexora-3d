// Local QA server: static site + the real business routes backed by an
// in-memory store. Never used in production; there is no seed path or admin
// secret in the deployed Function.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { application } from '../functions/routes.mjs';
import { webcrypto } from 'node:crypto';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', process.env.SITE_DIR || 'site');
const PORT = Number(process.env.PORT || 4173);
const DEMO_ADMIN = 'studio-master-2026';
const DEMO_CODE = 'DEMO-2026';
const DEMO_EMAIL = 'dilnoza@arise.example';

class BackendError extends Error {
  constructor(code, status) {
    super(code);
    this.code = code;
    this.status = status;
  }
}

const clone = (value) => JSON.parse(JSON.stringify(value));
const applyColumns = (row, columns) => {
  if (!columns || columns === '*') return { ...row };
  const out = {};
  for (const key of columns.split(',').map((item) => item.trim())) out[key] = row[key];
  return out;
};

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
      this.store[this.table] = rows.filter((row) => !this.matches(row));
      return null;
    }
    let result = rows.filter((row) => this.matches(row));
    if (this.orderBy) {
      const [column, ascending] = this.orderBy;
      result = [...result].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * (ascending ? 1 : -1));
    }
    return result.slice(0, this.limitN).map((row) => applyColumns(row, this.columns));
  }
  then(resolve) {
    try { resolve({ data: this.run(), error: null }); }
    catch { resolve({ data: null, error: { code: 'fake_failure', status: 500 } }); }
  }
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

const db = { from: (table) => new Query(store, table) };
const storage = {
  async createSignedUrl(objectPath) { return { signedUrl: `/fake-download?path=${encodeURIComponent(objectPath)}` }; },
  async createSignedUploadUrl(objectPath) { return { signedUrl: `/fake-upload?path=${encodeURIComponent(objectPath)}` }; },
  async download(objectPath) {
    const file = uploads.get(objectPath);
    if (!file) {
      const error = new Error('missing');
      error.code = 'storage_object_not_found';
      throw error;
    }
    return new Response(file.body, { headers: { 'content-type': file.type } });
  },
};

const handle = application({
  db,
  storage,
  BackendError,
  env: (name) => ({ PORTAL_ADMIN: DEMO_ADMIN })[name],
});

const digest = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const hash = await webcrypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const PROJECT_ID = '22222222-2222-4222-8222-222222222222';
const nowIso = new Date().toISOString();

store.portal_clients.push({
  id: CLIENT_ID,
  name: 'Dilnoza Karimova',
  company: 'Arise Learning',
  email: DEMO_EMAIL,
  created_at: nowIso,
});
store.portal_access_codes.push({
  id: '33333333-3333-4333-8333-333333333333',
  client_id: CLIENT_ID,
  code_hash: await digest(`portal:${DEMO_CODE.replace(/-/g, '')}`),
  expires_at: new Date(Date.now() + 30 * 86400000).toISOString(),
  used_at: null,
  created_at: nowIso,
});
store.portal_projects.push({
  id: PROJECT_ID,
  client_id: CLIENT_ID,
  name: 'Arise — mentor platform',
  summary: 'Multilingual AI mentor for the full school-to-university arc.',
  status: 'building',
  phase: 'MVP build',
  progress: 62,
  start_date: '2026-09-01',
  target_date: '2026-12-15',
  created_at: nowIso,
  updated_at: nowIso,
});
store.portal_updates.push({
  id: '44444444-4444-4444-8444-444444444444',
  client_id: CLIENT_ID,
  project_id: PROJECT_ID,
  title: 'Mentor evaluation round two',
  body: 'The Uzbek and Russian mentor paths now share a single structured contract. Mixed-language student prompts are answering correctly in 94% of the evaluation set — up from 71% at kick-off.',
  created_at: nowIso,
});
store.portal_invoices.push({
  id: '55555555-5555-4555-8555-555555555555',
  client_id: CLIENT_ID,
  project_id: PROJECT_ID,
  number: 'NX-2026-07',
  amount: 4800,
  currency: 'USD',
  status: 'sent',
  issued_date: '2026-10-12',
  due_date: '2026-10-26',
  note: 'Phase 2 milestone',
  created_at: nowIso,
});
const FILE_ID = '66666666-6666-4666-8666-666666666666';
store.portal_files.push({
  id: FILE_ID,
  client_id: CLIENT_ID,
  project_id: PROJECT_ID,
  name: 'Arise — design handoff.pdf',
  object_path: `portal/${CLIENT_ID}/${FILE_ID}`,
  size: 184320,
  content_type: 'application/pdf',
  status: 'ready',
  created_at: nowIso,
});
uploads.set(`portal/${CLIENT_ID}/${FILE_ID}`, {
  type: 'application/pdf',
  body: Buffer.from('%PDF-1.4\n% Nexora Studio demo handoff\n'),
});

/* --------------------------------------------------------------------------
   HTTP
   -------------------------------------------------------------------------- */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on('data', (chunk) => chunks.push(chunk));
    request.on('end', () => resolve(Buffer.concat(chunks)));
    request.on('error', reject);
  });
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${PORT}`);
  const pathname = url.pathname;

  if (pathname === '/fake-upload') {
    const objectPath = url.searchParams.get('path') || '';
    const body = await readBody(request);
    uploads.set(objectPath, { type: request.headers['content-type'] || 'application/octet-stream', body });
    response.writeHead(200).end('ok');
    return;
  }
  if (pathname === '/fake-download') {
    const objectPath = url.searchParams.get('path') || '';
    const file = uploads.get(objectPath);
    if (!file) { response.writeHead(404).end('missing'); return; }
    response.writeHead(200, { 'content-type': file.type }).end(file.body);
    return;
  }

  if (pathname.startsWith('/functions/v1/app/')) {
    const body = await readBody(request);
    const headers = { ...request.headers };
    const init = {
      method: request.method,
      headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : body,
    };
    try {
      const result = await handle({
        request: new Request(`http://127.0.0.1:${PORT}${pathname}${url.search}`, init),
      });
      const outHeaders = {};
      result.headers.forEach((value, key) => { outHeaders[key] = value; });
      response.writeHead(result.status, outHeaders).end(Buffer.from(await result.arrayBuffer()));
    } catch (error) {
      if (error instanceof BackendError) {
        response.writeHead(error.status, { 'content-type': 'application/json' }).end(JSON.stringify({ error: error.code }));
      } else {
        console.error(error);
        response.writeHead(500, { 'content-type': 'application/json' }).end(JSON.stringify({ error: 'server_error' }));
      }
    }
    return;
  }

  let relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(ROOT, relative);
  if (!filePath.startsWith(ROOT + path.sep)) { response.writeHead(403).end('forbidden'); return; }
  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('not a file');
    const content = await readFile(filePath);
    response.writeHead(200, { 'content-type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' }).end(content);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Nexora QA server on http://127.0.0.1:${PORT}`);
  console.log(`Admin console code: ${DEMO_ADMIN}`);
  console.log(`Client portal: ${DEMO_EMAIL} / ${DEMO_CODE}`);
});
