// Business routes for the Nexora Studio site: contact intake and the client
// portal. Dependencies are injected so the same module runs in the deployed
// Deno runtime and in credential-free local tests.
//
// This module never trusts browser-supplied identities, object paths or roles.
// Portal authorization is an opaque session cookie whose hash is stored in
// Postgres; storage paths are always derived on the server.

const CLIENT_COOKIE = 'nx_portal';
const ADMIN_COOKIE = 'nx_admin';
const CLIENT_SESSION_DAYS = 30;
const ADMIN_SESSION_HOURS = 12;
const MAX_BODY = 24 * 1024;
const MAX_UPLOAD = 25 * 1024 * 1024;

const PROJECT_STATUSES = ['discovery', 'building', 'review', 'live', 'paused'];
const INVOICE_STATUSES = ['draft', 'sent', 'paid', 'overdue'];
const CURRENCIES = ['UZS', 'USD', 'EUR'];
const FILE_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/svg+xml',
  'text/plain',
  'application/zip',
  'application/octet-stream',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

const text = (value, max, { required = true, min = 0 } = {}) => {
  if (typeof value !== 'string') return required ? null : '';
  const trimmed = value.trim();
  if (required && trimmed.length < Math.max(1, min)) return null;
  if (trimmed.length > max) return null;
  return trimmed;
};

const isEmail = (value) => typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const isUuid = (value) => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
const isDate = (value) => value === '' || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value));

export function application({ db, storage, BackendError, env = () => undefined, fetchImpl = fetch }) {
  const fail = (code, status) => {
    throw new BackendError(code, status);
  };
  const rows = (result) => {
    if (!result || result.error) fail(result?.error?.code || 'storage_unavailable', result?.error?.status || 503);
    return result.data || [];
  };
  const now = () => new Date();
  const iso = (date) => date.toISOString();

  async function body(request, limit = MAX_BODY) {
    if (!request.headers.get('content-type')?.startsWith('application/json')) fail('invalid_input', 400);
    const reader = request.body?.getReader();
    if (!reader) fail('invalid_input', 400);
    let size = 0;
    const chunks = [];
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > limit) {
          await reader.cancel();
          fail('payload_too_large', 413);
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    try {
      const parsed = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) fail('invalid_input', 400);
      return parsed;
    } catch {
      fail('invalid_input', 400);
    }
  }

  async function digest(value) {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    return Array.from(new Uint8Array(bytes)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  function randomToken() {
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    let binary = '';
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function readCookie(request, name) {
    const raw = request.headers.get('cookie') || '';
    for (const part of raw.split(';')) {
      const index = part.indexOf('=');
      if (index === -1) continue;
      if (part.slice(0, index).trim() !== name) continue;
      return decodeURIComponent(part.slice(index + 1).trim());
    }
    return '';
  }

  function setCookie(request, name, value, maxAge) {
    const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
    return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
  }

  const json = (data, status = 200, headers = {}) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers },
    });

  async function session(request, role) {
    const name = role === 'admin' ? ADMIN_COOKIE : CLIENT_COOKIE;
    const token = readCookie(request, name);
    if (!token || token.length < 20 || token.length > 200) return null;
    const tokenHash = await digest(token);
    const found = rows(
      await db
        .from('portal_sessions')
        .select('token_hash,client_id,role,expires_at')
        .eq('token_hash', tokenHash)
        .limit(1)
    )[0];
    if (!found || found.role !== role) return null;
    if (new Date(found.expires_at).getTime() <= Date.now()) {
      await db.from('portal_sessions').delete().eq('token_hash', tokenHash);
      return null;
    }
    return { tokenHash, clientId: found.client_id };
  }

  async function requireAdmin(request) {
    const admin = await session(request, 'admin');
    if (!admin) fail('unauthorized', 401);
    return admin;
  }

  async function requireClient(request) {
    const client = await session(request, 'client');
    if (!client?.clientId) fail('unauthorized', 401);
    return client;
  }

  async function ownedClient(clientId) {
    const client = rows(
      await db.from('portal_clients').select('id,name,company,email').eq('id', clientId).limit(1)
    )[0];
    if (!client) fail('not_found', 404);
    return client;
  }

  async function notifyInquiry(inquiry) {
    const key = env('RESEND_API_KEY');
    const to = env('CONTACT_TO_EMAIL');
    if (!key || !to) return false;
    const from = env('CONTACT_FROM_EMAIL') || 'Nexora Studio <onboarding@resend.dev>';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: inquiry.email,
          subject: `Project inquiry — ${inquiry.company || inquiry.name}`,
          text: [
            `Name: ${inquiry.name}`,
            `Email: ${inquiry.email}`,
            `Company: ${inquiry.company || '—'}`,
            `Project: ${inquiry.project_type || '—'}`,
            `Budget: ${inquiry.budget || '—'}`,
            `Locale: ${inquiry.locale || 'en'}`,
            '',
            inquiry.message,
          ].join('\n'),
        }),
        signal: controller.signal,
      });
      return response.ok;
    } catch {
      return false;
    } finally {
      clearTimeout(timer);
    }
  }

  async function verifyUploadedObject(response) {
    const type = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase() || '';
    if (!response.ok || !response.body) fail('invalid_upload', 422);
    const reader = response.body.getReader();
    let size = 0;
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      void reader.cancel().catch(() => {});
    }, 15000);
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (timedOut) fail('storage_unavailable', 503);
        if (done) break;
        size += value.byteLength;
        if (size > MAX_UPLOAD) fail('invalid_upload', 422);
      }
    } catch (error) {
      if (error instanceof BackendError) throw error;
      fail('storage_unavailable', 503);
    } finally {
      clearTimeout(timer);
      await reader.cancel().catch(() => {});
      reader.releaseLock();
    }
    if (!size) fail('invalid_upload', 422);
    if (type && !FILE_TYPES.includes(type)) fail('invalid_upload', 422);
    return { size, contentType: type || 'application/octet-stream' };
  }

  function generateCode() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const bytes = crypto.getRandomValues(new Uint8Array(8));
    let raw = '';
    for (const byte of bytes) raw += alphabet[byte % alphabet.length];
    return `${raw.slice(0, 4)}-${raw.slice(4)}`;
  }

  return async (ctx) => {
    const request = ctx.request;
    const url = new URL(request.url);
    const pathname = url.pathname;
    const match = pathname.match(/^\/(?:functions\/v1\/)?(?:app|app-d[0-9a-f]{32})(\/.*)?$/);
    if (!match) fail('not_found', 404);
    const path = match[1] || '/';
    const method = request.method;

    if (path === '/api/health' && method === 'GET') return json({ ok: true });

    /* Contact --------------------------------------------------------------- */
    if (path === '/api/contact' && method === 'POST') {
      const data = await body(request);
      if (typeof data.website === 'string' && data.website.trim()) return json({ ok: true });
      const name = text(data.name, 120, { min: 2 });
      const email = isEmail(data.email) ? data.email.trim().toLowerCase() : null;
      const company = text(data.company, 160, { required: false });
      const projectType = text(data.projectType, 60, { required: false });
      const budget = text(data.budget, 60, { required: false });
      const message = text(data.message, 4000, { min: 10 });
      const locale = ['en', 'ru', 'uz'].includes(data.locale) ? data.locale : 'en';
      if (!name || !email || company === null || projectType === null || budget === null || !message) {
        fail('invalid_input', 400);
      }
      const recent = rows(
        await db
          .from('inquiries')
          .select('id,created_at')
          .eq('email', email)
          .order('created_at', { ascending: false })
          .limit(3)
      );
      if (recent.some((row) => Date.now() - new Date(row.created_at).getTime() < 2 * 60 * 1000)) {
        fail('rate_limited', 429);
      }
      const inquiry = {
        id: crypto.randomUUID(),
        name,
        email,
        company,
        project_type: projectType,
        budget,
        message,
        locale,
        created_at: iso(now()),
      };
      rows(await db.from('inquiries').insert(inquiry).select('id'));
      const notified = await notifyInquiry(inquiry);
      return json({ ok: true, notified }, 201);
    }

    /* Client portal --------------------------------------------------------- */
    if (path === '/api/portal/login' && method === 'POST') {
      const data = await body(request, 8192);
      const email = isEmail(data.email) ? data.email.trim().toLowerCase() : null;
      const code = typeof data.code === 'string' ? data.code.replace(/[^a-z0-9]/gi, '').toUpperCase() : '';
      if (!email || code.length < 6 || code.length > 32) fail('invalid_credentials', 401);
      const client = rows(
        await db.from('portal_clients').select('id,name,company,email').eq('email', email).limit(1)
      )[0];
      if (!client) fail('invalid_credentials', 401);
      const codeHash = await digest(`portal:${code}`);
      const found = rows(
        await db
          .from('portal_access_codes')
          .select('id,expires_at,used_at')
          .eq('client_id', client.id)
          .eq('code_hash', codeHash)
          .limit(1)
      )[0];
      if (!found || found.used_at || new Date(found.expires_at).getTime() <= Date.now()) {
        fail('invalid_credentials', 401);
      }
      const used = rows(
        await db
          .from('portal_access_codes')
          .update({ used_at: iso(now()) })
          .eq('id', found.id)
          .select('id,used_at')
      );
      if (!used.length) fail('invalid_credentials', 401);
      const token = randomToken();
      const expires = new Date(Date.now() + CLIENT_SESSION_DAYS * 86400000);
      rows(
        await db.from('portal_sessions').insert({
          token_hash: await digest(token),
          client_id: client.id,
          role: 'client',
          expires_at: iso(expires),
          created_at: iso(now()),
        })
      );
      return json(
        { ok: true, client: { name: client.name, company: client.company } },
        200,
        { 'set-cookie': setCookie(request, CLIENT_COOKIE, token, CLIENT_SESSION_DAYS * 86400) }
      );
    }

    if (path === '/api/portal/logout' && method === 'POST') {
      const current = await session(request, 'client');
      if (current) await db.from('portal_sessions').delete().eq('token_hash', current.tokenHash);
      return json({ ok: true }, 200, { 'set-cookie': setCookie(request, CLIENT_COOKIE, '', 0) });
    }

    if (path === '/api/portal/dashboard' && method === 'GET') {
      const current = await requireClient(request);
      const client = await ownedClient(current.clientId);
      const projects = rows(
        await db
          .from('portal_projects')
          .select('id,name,summary,status,phase,progress,start_date,target_date,updated_at')
          .eq('client_id', client.id)
          .order('created_at', { ascending: true })
          .limit(50)
      );
      const updates = rows(
        await db
          .from('portal_updates')
          .select('id,project_id,title,body,created_at')
          .eq('client_id', client.id)
          .order('created_at', { ascending: false })
          .limit(50)
      );
      const invoices = rows(
        await db
          .from('portal_invoices')
          .select('id,project_id,number,amount,currency,status,issued_date,due_date,note')
          .eq('client_id', client.id)
          .order('created_at', { ascending: false })
          .limit(50)
      );
      const files = rows(
        await db
          .from('portal_files')
          .select('id,project_id,name,size,content_type,created_at')
          .eq('client_id', client.id)
          .eq('status', 'ready')
          .order('created_at', { ascending: false })
          .limit(50)
      );
      return json({ ok: true, client, projects, updates, invoices, files });
    }

    const download = path.match(/^\/api\/portal\/files\/([0-9a-f-]{36})\/download$/);
    if (download && isUuid(download[1]) && method === 'POST') {
      const current = await requireClient(request);
      const file = rows(
        await db
          .from('portal_files')
          .select('id,client_id,object_path,status')
          .eq('id', download[1])
          .eq('client_id', current.clientId)
          .limit(1)
      )[0];
      if (!file || file.status !== 'ready') fail('not_found', 404);
      try {
        const signed = await storage.createSignedUrl(file.object_path, 300);
        return json({ ok: true, url: signed.signedUrl });
      } catch {
        fail('storage_unavailable', 503);
      }
    }

    /* Admin ----------------------------------------------------------------- */
    if (path === '/api/admin/login' && method === 'POST') {
      const secret = env('PORTAL_ADMIN');
      if (!secret) fail('service_not_configured', 503);
      const data = await body(request, 8192);
      const code = typeof data.code === 'string' ? data.code.trim() : '';
      const candidate = await digest(`admin:${code}`);
      const expected = await digest(`admin:${secret}`);
      let diff = candidate.length ^ expected.length;
      for (let index = 0; index < expected.length; index += 1) {
        diff |= candidate.charCodeAt(index) ^ expected.charCodeAt(index);
      }
      if (!code || diff !== 0) fail('invalid_credentials', 401);
      const token = randomToken();
      rows(
        await db.from('portal_sessions').insert({
          token_hash: await digest(token),
          client_id: null,
          role: 'admin',
          expires_at: iso(new Date(Date.now() + ADMIN_SESSION_HOURS * 3600000)),
          created_at: iso(now()),
        })
      );
      return json(
        { ok: true },
        200,
        { 'set-cookie': setCookie(request, ADMIN_COOKIE, token, ADMIN_SESSION_HOURS * 3600) }
      );
    }

    if (path === '/api/admin/logout' && method === 'POST') {
      const current = await session(request, 'admin');
      if (current) await db.from('portal_sessions').delete().eq('token_hash', current.tokenHash);
      return json({ ok: true }, 200, { 'set-cookie': setCookie(request, ADMIN_COOKIE, '', 0) });
    }

    if (path === '/api/admin/overview' && method === 'GET') {
      await requireAdmin(request);
      const clients = rows(
        await db
          .from('portal_clients')
          .select('id,name,company,email,created_at')
          .order('created_at', { ascending: false })
          .limit(200)
      );
      const inquiries = rows(
        await db
          .from('inquiries')
          .select('id,name,email,company,project_type,budget,message,locale,created_at')
          .order('created_at', { ascending: false })
          .limit(100)
      );
      const codes = rows(
        await db
          .from('portal_access_codes')
          .select('id,client_id,expires_at,used_at,created_at')
          .order('created_at', { ascending: false })
          .limit(400)
      );
      const projects = rows(
        await db
          .from('portal_projects')
          .select('id,client_id,name,summary,status,phase,progress,start_date,target_date,updated_at')
          .order('created_at', { ascending: false })
          .limit(100)
      );
      const invoices = rows(
        await db
          .from('portal_invoices')
          .select('id,client_id,project_id,number,amount,currency,status,issued_date,due_date,note')
          .order('created_at', { ascending: false })
          .limit(100)
      );
      const files = rows(
        await db
          .from('portal_files')
          .select('id,client_id,project_id,name,size,content_type,status,created_at')
          .order('created_at', { ascending: false })
          .limit(100)
      );
      return json({ ok: true, clients, inquiries, codes, projects, invoices, files });
    }

    if (path === '/api/admin/clients' && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request);
      const name = text(data.name, 120, { min: 2 });
      const company = text(data.company, 160, { min: 2 });
      const email = isEmail(data.email) ? data.email.trim().toLowerCase() : null;
      if (!name || !company || !email) fail('invalid_input', 400);
      const existing = rows(
        await db.from('portal_clients').select('id').eq('email', email).limit(1)
      );
      if (existing.length) fail('email_exists', 409);
      const client = {
        id: crypto.randomUUID(),
        name,
        company,
        email,
        created_at: iso(now()),
      };
      try {
        rows(await db.from('portal_clients').insert(client).select('id'));
      } catch (error) {
        if (error instanceof BackendError) fail('email_exists', 409);
        throw error;
      }
      return json({ ok: true, client }, 201);
    }

    const codeRoute = path.match(/^\/api\/admin\/clients\/([0-9a-f-]{36})\/codes$/);
    if (codeRoute && isUuid(codeRoute[1]) && method === 'POST') {
      await requireAdmin(request);
      await ownedClient(codeRoute[1]);
      const code = generateCode();
      const expires = new Date(Date.now() + 30 * 86400000);
      rows(
        await db.from('portal_access_codes').insert({
          id: crypto.randomUUID(),
          client_id: codeRoute[1],
          code_hash: await digest(`portal:${code.replace(/-/g, '')}`),
          expires_at: iso(expires),
          used_at: null,
          created_at: iso(now()),
        })
      );
      return json({ ok: true, code, expiresAt: iso(expires) }, 201);
    }

    if (path === '/api/admin/projects' && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request);
      const clientId = isUuid(data.clientId) ? data.clientId : null;
      const name = text(data.name, 140, { min: 2 });
      const summary = text(data.summary, 600, { required: false });
      const status = PROJECT_STATUSES.includes(data.status) ? data.status : 'discovery';
      const phase = text(data.phase, 80, { required: false });
      const progress = Number.isInteger(data.progress) ? Math.max(0, Math.min(100, data.progress)) : 0;
      const startDate = isDate(data.startDate) ? data.startDate : '';
      const targetDate = isDate(data.targetDate) ? data.targetDate : '';
      if (!clientId || !name || summary === null || phase === null) fail('invalid_input', 400);
      await ownedClient(clientId);
      const project = {
        id: crypto.randomUUID(),
        client_id: clientId,
        name,
        summary,
        status,
        phase,
        progress,
        start_date: startDate,
        target_date: targetDate,
        created_at: iso(now()),
        updated_at: iso(now()),
      };
      rows(await db.from('portal_projects').insert(project).select('id'));
      return json({ ok: true, project }, 201);
    }

    const projectRoute = path.match(/^\/api\/admin\/projects\/([0-9a-f-]{36})$/);
    if (projectRoute && isUuid(projectRoute[1]) && method === 'PATCH') {
      await requireAdmin(request);
      const data = await body(request);
      const patch = { updated_at: iso(now()) };
      if (PROJECT_STATUSES.includes(data.status)) patch.status = data.status;
      if (Number.isInteger(data.progress)) patch.progress = Math.max(0, Math.min(100, data.progress));
      if (typeof data.phase === 'string' && data.phase.length <= 80) patch.phase = data.phase.trim();
      if (isDate(data.targetDate)) patch.target_date = data.targetDate;
      const updated = rows(
        await db.from('portal_projects').update(patch).eq('id', projectRoute[1]).select('id,status,progress,phase,target_date')
      );
      if (!updated.length) fail('not_found', 404);
      return json({ ok: true, project: updated[0] });
    }

    if (path === '/api/admin/updates' && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request);
      const clientId = isUuid(data.clientId) ? data.clientId : null;
      const projectId = data.projectId === '' || data.projectId == null ? null : isUuid(data.projectId) ? data.projectId : false;
      const title = text(data.title, 160, { min: 2 });
      const message = text(data.body, 4000, { min: 2 });
      if (!clientId || projectId === false || !title || !message) fail('invalid_input', 400);
      await ownedClient(clientId);
      const update = {
        id: crypto.randomUUID(),
        client_id: clientId,
        project_id: projectId,
        title,
        body: message,
        created_at: iso(now()),
      };
      rows(await db.from('portal_updates').insert(update).select('id'));
      return json({ ok: true, update }, 201);
    }

    if (path === '/api/admin/invoices' && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request);
      const clientId = isUuid(data.clientId) ? data.clientId : null;
      const projectId = data.projectId === '' || data.projectId == null ? null : isUuid(data.projectId) ? data.projectId : false;
      const number = text(data.number, 40, { min: 1 });
      const amount = Number.isInteger(data.amount) && data.amount >= 0 && data.amount <= 1000000000000 ? data.amount : null;
      const currency = CURRENCIES.includes(data.currency) ? data.currency : null;
      const status = INVOICE_STATUSES.includes(data.status) ? data.status : 'sent';
      const issued = isDate(data.issuedDate) ? data.issuedDate : '';
      const due = isDate(data.dueDate) ? data.dueDate : '';
      const note = text(data.note, 300, { required: false });
      if (!clientId || projectId === false || !number || amount === null || !currency || !issued || note === null) {
        fail('invalid_input', 400);
      }
      await ownedClient(clientId);
      const invoice = {
        id: crypto.randomUUID(),
        client_id: clientId,
        project_id: projectId,
        number,
        amount,
        currency,
        status,
        issued_date: issued,
        due_date: due,
        note,
        created_at: iso(now()),
      };
      rows(await db.from('portal_invoices').insert(invoice).select('id'));
      return json({ ok: true, invoice }, 201);
    }

    const invoiceRoute = path.match(/^\/api\/admin\/invoices\/([0-9a-f-]{36})\/status$/);
    if (invoiceRoute && isUuid(invoiceRoute[1]) && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request, 4096);
      if (!INVOICE_STATUSES.includes(data.status)) fail('invalid_input', 400);
      const updated = rows(
        await db.from('portal_invoices').update({ status: data.status }).eq('id', invoiceRoute[1]).select('id,status')
      );
      if (!updated.length) fail('not_found', 404);
      return json({ ok: true, invoice: updated[0] });
    }

    if (path === '/api/admin/files' && method === 'POST') {
      await requireAdmin(request);
      const data = await body(request);
      const clientId = isUuid(data.clientId) ? data.clientId : null;
      const projectId = data.projectId === '' || data.projectId == null ? null : isUuid(data.projectId) ? data.projectId : false;
      const name = text(data.name, 160, { min: 1 });
      const size = Number.isInteger(data.size) && data.size > 0 && data.size <= MAX_UPLOAD ? data.size : null;
      const contentType = FILE_TYPES.includes(data.contentType) ? data.contentType : 'application/octet-stream';
      if (!clientId || projectId === false || !name || size === null) fail('invalid_input', 400);
      await ownedClient(clientId);
      const id = crypto.randomUUID();
      const objectPath = `portal/${clientId}/${id}`;
      rows(
        await db.from('portal_files').insert({
          id,
          client_id: clientId,
          project_id: projectId,
          name,
          object_path: objectPath,
          size,
          content_type: contentType,
          status: 'pending',
          created_at: iso(now()),
        }).select('id')
      );
      try {
        const signed = await storage.createSignedUploadUrl(objectPath, { upsert: false });
        return json({ ok: true, id, signedUrl: signed.signedUrl }, 201);
      } catch {
        fail('storage_unavailable', 503);
      }
    }

    const fileRoute = path.match(/^\/api\/admin\/files\/([0-9a-f-]{36})\/(complete|download)$/);
    if (fileRoute && isUuid(fileRoute[1]) && method === 'POST') {
      await requireAdmin(request);
      const found = rows(
        await db
          .from('portal_files')
          .select('id,client_id,object_path,status,size,content_type')
          .eq('id', fileRoute[1])
          .limit(1)
      )[0];
      if (!found) fail('not_found', 404);
      if (fileRoute[2] === 'complete') {
        let uploaded;
        try {
          uploaded = await storage.download(found.object_path);
        } catch (error) {
          if (error?.code === 'storage_object_not_found') fail('upload_pending', 409);
          fail('storage_unavailable', 503);
        }
        const actual = await verifyUploadedObject(uploaded);
        rows(
          await db
            .from('portal_files')
            .update({ status: 'ready', size: actual.size, content_type: actual.contentType })
            .eq('id', found.id)
            .eq('status', 'pending')
            .select('id')
        );
        return json({ ok: true, id: found.id, status: 'ready', size: actual.size });
      }
      if (found.status !== 'ready') fail('upload_pending', 409);
      try {
        const signed = await storage.createSignedUrl(found.object_path, 300);
        return json({ ok: true, url: signed.signedUrl });
      } catch {
        fail('storage_unavailable', 503);
      }
    }

    fail('not_found', 404);
  };
}
