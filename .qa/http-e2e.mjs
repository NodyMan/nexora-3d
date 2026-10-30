const BASE = 'http://127.0.0.1:4173/functions/v1/app/api';
let pass = 0;
const ok = (condition, label) => {
  if (!condition) { console.error('FAIL', label); process.exitCode = 1; }
  else { pass += 1; console.log('ok  ', label); }
};
const cookieFrom = (response) => (response.headers.get('set-cookie') || '').split(';')[0];

async function call(path, { method = 'GET', body, cookie = '' } = {}) {
  const headers = {};
  if (body !== undefined) headers['content-type'] = 'application/json';
  if (cookie) headers.cookie = cookie;
  const response = await fetch(`${BASE}${path}`, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  let data = null;
  try { data = await response.json(); } catch { /* empty */ }
  return { status: response.status, data, cookie: cookieFrom(response) };
}

const stamp = Date.now();
const email = `qa-${stamp}@client.example`;

let r = await call('/contact', { method: 'POST', body: { name: 'QA Lead', email: `lead-${stamp}@brief.example`, company: 'QA Co', projectType: 'Web platform', budget: '$5–15k', message: 'A real brief through HTTP.', website: '', locale: 'en' } });
ok(r.status === 201 && r.data?.ok, 'contact brief accepted');

r = await call('/contact', { method: 'POST', body: { name: 'Bot', email: `bot-${stamp}@brief.example`, message: 'spam', website: 'https://spam.example' } });
ok(r.status === 200 && r.data?.ok, 'honeypot accepted silently');

r = await call('/contact', { method: 'POST', body: { name: '', email: 'not-an-email', message: '' } });
ok(r.status === 400, 'invalid brief rejected');

r = await call('/admin/login', { method: 'POST', body: { code: 'wrong-code' } });
ok(r.status === 401, 'wrong console code rejected');

r = await call('/admin/login', { method: 'POST', body: { code: 'studio-master-2026' } });
ok(r.status === 200, 'console login works');
const admin = r.cookie;
ok(admin.startsWith('nx_admin='), 'admin cookie issued');

r = await call('/admin/overview', { cookie: admin });
ok(r.status === 200 && Array.isArray(r.data?.clients), 'overview readable');

r = await call('/admin/clients', { method: 'POST', cookie: admin, body: { name: 'QA Client', company: 'QA Studio', email } });
ok(r.status === 201 && r.data?.client?.id, 'client created');
const clientId = r.data.client.id;

r = await call('/admin/clients', { method: 'POST', cookie: admin, body: { name: 'QA Client', company: 'QA Studio', email } });
ok(r.status === 409, 'duplicate client rejected');

r = await call(`/admin/clients/${clientId}/codes`, { method: 'POST', cookie: admin });
ok(r.status === 201 && r.data?.code, 'access code issued');
const code = r.data.code;

r = await call('/portal/login', { method: 'POST', body: { email, code: code.toLowerCase() } });
ok(r.status === 200, 'client signs in with code');
const client = r.cookie;
ok(client.startsWith('nx_portal='), 'client cookie issued');

r = await call('/portal/login', { method: 'POST', body: { email, code } });
ok(r.status === 401, 'access code cannot be reused');

r = await call('/admin/overview', { cookie: client });
ok(r.status === 401, 'client cookie cannot read console');

r = await call('/admin/projects', { method: 'POST', cookie: admin, body: { clientId, name: 'QA Platform', summary: 'End-to-end QA project.', status: 'building', phase: 'QA', progress: 40, startDate: '2026-10-01', targetDate: '2026-12-01' } });
ok(r.status === 201, 'project created');
const projectId = r.data.project.id;

r = await call(`/admin/projects/${projectId}`, { method: 'PATCH', cookie: admin, body: { status: 'review', progress: 75, phase: 'Stabilisation', targetDate: '2026-12-08' } });
ok(r.status === 200 && r.data?.project?.progress === 75, 'project status updated');

r = await call('/admin/updates', { method: 'POST', cookie: admin, body: { clientId, projectId, title: 'QA round complete', body: 'All checks pass over HTTP.' } });
ok(r.status === 201, 'client update posted');

r = await call('/admin/invoices', { method: 'POST', cookie: admin, body: { clientId, projectId, number: `NX-QA-${stamp}`, amount: 1200, currency: 'USD', status: 'sent', issuedDate: '2026-10-28', dueDate: '2026-11-11', note: 'QA invoice' } });
ok(r.status === 201, 'invoice issued');
const invoiceId = r.data.invoice.id;

r = await call(`/admin/invoices/${invoiceId}/status`, { method: 'POST', cookie: admin, body: { status: 'paid' } });
ok(r.status === 200 && r.data?.invoice?.status === 'paid', 'invoice marked paid');

r = await call('/admin/files', { method: 'POST', cookie: admin, body: { clientId, projectId, name: 'qa-brief.pdf', size: 2048, contentType: 'application/pdf' } });
ok(r.status === 201 && r.data?.signedUrl, 'upload intent created');
const fileId = r.data.id;

const upload = await fetch(`http://127.0.0.1:4173${r.data.signedUrl}`, { method: 'PUT', headers: { 'content-type': 'application/pdf' }, body: Buffer.from('%PDF-1.4\nQA\n') });
ok(upload.ok, 'file uploaded to storage');

r = await call(`/admin/files/${fileId}/complete`, { method: 'POST', cookie: admin });
ok(r.status === 200 && r.data?.status === 'ready', 'upload verified');

r = await call('/portal/dashboard', { cookie: client });
ok(r.status === 200 && r.data?.projects?.some((p) => p.id === projectId), 'dashboard shows project');
ok(r.data?.files?.some((f) => f.id === fileId), 'dashboard shows file');
ok(r.data?.invoices?.some((i) => i.id === invoiceId && i.status === 'paid'), 'dashboard shows paid invoice');
ok(r.data?.updates?.some((u) => u.title === 'QA round complete'), 'dashboard shows update');

r = await call(`/portal/files/${fileId}/download`, { method: 'POST', cookie: client });
ok(r.status === 200 && r.data?.url, 'download URL issued');
const file = await fetch(`http://127.0.0.1:4173${r.data.url}`);
ok(file.ok && (await file.arrayBuffer()).byteLength > 0, 'download URL serves bytes');

r = await call('/portal/logout', { method: 'POST', cookie: client });
ok(r.status === 200, 'client signs out');
r = await call('/portal/dashboard', { cookie: client });
ok(r.status === 401, 'signed-out session rejected');

r = await call('/admin/logout', { method: 'POST', cookie: admin });
ok(r.status === 200, 'console signs out');

console.log(`\n${pass} HTTP checks passed.`);
