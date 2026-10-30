/* --------------------------------------------------------------------------
   Nexora Studio — studio console
   Private operations surface: inquiries, clients and access codes, delivery,
   invoices and shared files. English only; never linked from public nav.
   -------------------------------------------------------------------------- */

const API = '/functions/v1/app/api/admin';

const root = document.querySelector('[data-admin-root]');
const loginView = document.getElementById('admin-login');
const appView = document.getElementById('admin-app');
const notice = document.getElementById('admin-notice');
const noticeText = document.getElementById('admin-notice-text');
const loginForm = document.getElementById('admin-form');
const loginStatus = document.getElementById('admin-status');
const toast = document.getElementById('admin-toast');

const PROJECT_LABEL = {
  discovery: 'Discovery',
  building: 'In build',
  review: 'In review',
  live: 'Live',
  paused: 'Paused',
};
const INVOICE_LABEL = { draft: 'Draft', sent: 'Sent', paid: 'Paid', overdue: 'Overdue' };
const FILE_TYPES = new Set([
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
]);

let data = null;
let tab = 'inquiries';

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

async function api(path, options = {}) {
  const init = { credentials: 'same-origin', ...options };
  if (typeof init.body === 'string') init.headers = { 'content-type': 'application/json', ...(init.headers || {}) };
  const response = await fetch(`${API}${path}`, init);
  let payload = null;
  try { payload = await response.json(); } catch (error) { /* no body */ }
  return { status: response.status, data: payload };
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function fmtDate(value, withTime = false) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  if (withTime) { options.hour = '2-digit'; options.minute = '2-digit'; }
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

function fmtSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '—';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit += 1; }
  return `${value >= 10 || unit === 0 ? Math.round(value) : value.toFixed(1)} ${units[unit]}`;
}

function fmtAmount(amount, currency) {
  if (!Number.isFinite(amount)) return '—';
  try {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: currency || 'USD', maximumFractionDigits: 0 }).format(amount);
  } catch (error) {
    return `${currency || ''} ${amount}`.trim();
  }
}

function pad(list) {
  return String(list.length).padStart(2, '0');
}

function clientName(id) {
  return data?.clients.find((client) => client.id === id)?.company || '—';
}

function clientById(id) {
  return data?.clients.find((client) => client.id === id);
}

function showToast(message, kind = 'ok') {
  if (!toast) return;
  toast.textContent = message;
  toast.dataset.kind = kind;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function setLoginStatus(message) {
  if (!loginStatus) return;
  loginStatus.textContent = message || '';
}

function showLogin() {
  root.dataset.view = 'login';
  appView.hidden = true;
  notice.hidden = true;
  loginView.hidden = false;
  window.setTimeout(() => loginForm?.code?.focus({ preventScroll: true }), 60);
}

function showApp() {
  root.dataset.view = 'app';
  loginView.hidden = true;
  notice.hidden = true;
  appView.hidden = false;
}

function showNotice() {
  root.dataset.view = 'notice';
  appView.hidden = true;
  loginView.hidden = true;
  notice.hidden = false;
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    const area = document.createElement('textarea');
    area.value = value;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (copyError) { ok = false; }
    area.remove();
    return ok;
  }
}

async function withButton(button, label, task) {
  const original = button.textContent;
  button.disabled = true;
  if (label) button.textContent = label;
  try { return await task(); }
  finally {
    button.disabled = false;
    button.textContent = original;
  }
}

/* --------------------------------------------------------------------------
   Data
   -------------------------------------------------------------------------- */

async function loadOverview() {
  if (root.dataset.view === 'loading') root.dataset.view = 'loading';
  try {
    const { status, data: payload } = await api('/overview');
    if (status === 200 && payload?.ok) {
      data = payload;
      renderAll();
      showApp();
      return;
    }
    if (status === 401) { showLogin(); return; }
    showNotice();
  } catch (error) {
    showNotice();
  }
}

/* --------------------------------------------------------------------------
   Render
   -------------------------------------------------------------------------- */

function empty(container, message) {
  container.replaceChildren(el('p', 'pcard__empty', message));
}

function renderStats() {
  const unpaid = data.invoices.filter((invoice) => invoice.status !== 'paid');
  document.getElementById('stat-clients').textContent = String(data.clients.length).padStart(2, '0');
  document.getElementById('stat-inquiries').textContent = String(data.inquiries.length).padStart(2, '0');
  document.getElementById('stat-projects').textContent = String(data.projects.length).padStart(2, '0');
  document.getElementById('stat-invoices').textContent = String(unpaid.length).padStart(2, '0');
  document.getElementById('tab-count-inquiries').textContent = data.inquiries.length ? `(${data.inquiries.length})` : '';
  document.getElementById('tab-count-clients').textContent = data.clients.length ? `(${data.clients.length})` : '';
  document.getElementById('admin-inquiries-count').textContent = pad(data.inquiries);
  document.getElementById('admin-clients-count').textContent = pad(data.clients);
  document.getElementById('admin-projects-count').textContent = pad(data.projects);
  document.getElementById('admin-invoices-count').textContent = pad(data.invoices);
  document.getElementById('admin-files-count').textContent = pad(data.files);
}

function renderInquiries() {
  const wrap = document.getElementById('admin-inquiries');
  if (!data.inquiries.length) { empty(wrap, 'No briefs yet. The contact form writes here.'); return; }
  const nodes = data.inquiries.map((inquiry) => {
    const row = el('div', 'arow');
    const main = el('div', 'arow__main');
    const title = [inquiry.name, inquiry.company].filter(Boolean).join(' · ');
    main.append(el('b', null, title || 'Unknown'));
    const contact = document.createElement('span');
    const mail = el('a', null, inquiry.email || '—');
    mail.href = `mailto:${inquiry.email || ''}`;
    contact.append(mail);
    const extra = [inquiry.project_type, inquiry.budget].filter(Boolean).join(' · ');
    if (extra) contact.append(document.createTextNode(` · ${extra}`));
    main.append(contact);
    const time = el('time', null, `${fmtDate(inquiry.created_at, true)} · ${(inquiry.locale || 'en').toUpperCase()}`);
    time.setAttribute('datetime', inquiry.created_at || '');
    main.append(time);
    if (inquiry.message) main.append(el('p', 'arow__message', inquiry.message));
    row.append(main);
    return row;
  });
  wrap.replaceChildren(...nodes);
}

function issueCode(client, container) {
  if (!container) return;
  const block = el('div', 'acode');
  const body = document.createElement('div');
  body.append(el('code', null, client.code));
  body.append(el('span', null, `Single-use · ${client.name} · expires ${fmtDate(client.expiresAt)}`));
  const copy = el('button', 'pbtn pbtn--small', 'Copy');
  copy.type = 'button';
  copy.addEventListener('click', async () => {
    const ok = await copyText(client.code);
    showToast(ok ? 'Access code copied' : 'Copy failed', ok ? 'ok' : 'error');
  });
  block.append(body, copy);
  container.replaceChildren(block);
}

function renderClients() {
  const wrap = document.getElementById('admin-clients');
  if (!data.clients.length) { empty(wrap, 'No clients yet. Create one to issue an access code.'); return; }
  const nodes = data.clients.map((client) => {
    const row = el('div', 'arow');
    const main = el('div', 'arow__main');
    main.append(el('b', null, client.name));
    main.append(el('span', null, `${client.company} · ${client.email}`));
    const active = data.codes.filter((code) => code.client_id === client.id && !code.used_at && new Date(code.expires_at).getTime() > Date.now()).length;
    main.append(el('time', null, active ? `${active} active code${active === 1 ? '' : 's'}` : 'No active code'));
    const side = el('div', 'arow__side');
    const button = el('button', 'pbtn pbtn--small', 'New code');
    button.type = 'button';
    button.addEventListener('click', () => withButton(button, 'Issuing…', async () => {
      const { status, data: payload } = await api(`/clients/${client.id}/codes`, { method: 'POST' });
      if (status === 201 && payload?.code) {
        issueCode({ code: payload.code, name: client.name, expiresAt: payload.expiresAt }, document.getElementById('admin-code'));
        showToast('Access code issued');
        loadOverview();
      } else {
        showToast('Could not issue a code', 'error');
      }
    }));
    side.append(button);
    row.append(main, side);
    return row;
  });
  wrap.replaceChildren(...nodes);
}

function statusOptions(selected, labels) {
  const select = document.createElement('select');
  Object.entries(labels).forEach(([value, label]) => {
    const option = new Option(label, value, false, value === selected);
    select.append(option);
  });
  return select;
}

function renderProjects() {
  const wrap = document.getElementById('admin-projects');
  if (!data.projects.length) { empty(wrap, 'No projects yet. Add one to start the client view.'); return; }
  const nodes = data.projects.map((project) => {
    const row = el('div', 'arow');
    const main = el('div', 'arow__main');
    main.append(el('b', null, project.name));
    const line = [clientName(project.client_id), project.summary].filter(Boolean).join(' · ');
    main.append(el('span', null, line));
    const time = [];
    if (project.target_date) time.push(`Target ${fmtDate(project.target_date)}`);
    if (project.phase) time.push(project.phase);
    time.push(`${project.progress || 0}%`);
    main.append(el('time', null, time.join(' · ')));
    const side = el('div', 'arow__side');
    const status = statusOptions(project.status, PROJECT_LABEL);
    status.dataset.role = 'status';
    const progress = document.createElement('input');
    progress.type = 'number';
    progress.min = '0';
    progress.max = '100';
    progress.step = '1';
    progress.value = String(project.progress || 0);
    progress.dataset.role = 'progress';
    progress.setAttribute('aria-label', `Progress for ${project.name}`);
    const save = el('button', 'pbtn pbtn--small', 'Save');
    save.type = 'button';
    save.addEventListener('click', () => withButton(save, 'Saving…', async () => {
      const { status: code } = await api(`/projects/${project.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: status.value,
          progress: Math.max(0, Math.min(100, Number(progress.value) || 0)),
          phase: project.phase,
          targetDate: project.target_date || '',
        }),
      });
      if (code === 200) { showToast('Project updated'); loadOverview(); }
      else showToast('Could not update project', 'error');
    }));
    side.append(status, progress, save);
    row.append(main, side);
    return row;
  });
  wrap.replaceChildren(...nodes);
}

function renderInvoices() {
  const wrap = document.getElementById('admin-invoices');
  if (!data.invoices.length) { empty(wrap, 'No invoices yet.'); return; }
  const nodes = data.invoices.map((invoice) => {
    const row = el('div', 'arow');
    const main = el('div', 'arow__main');
    main.append(el('b', null, invoice.number));
    main.append(el('span', null, `${clientName(invoice.client_id)} · ${fmtAmount(Number(invoice.amount), invoice.currency)}`));
    const time = [];
    if (invoice.issued_date) time.push(`Issued ${fmtDate(invoice.issued_date)}`);
    if (invoice.due_date) time.push(`Due ${fmtDate(invoice.due_date)}`);
    if (invoice.note) time.push(invoice.note);
    main.append(el('time', null, time.join(' · ')));
    const side = el('div', 'arow__side');
    const status = statusOptions(invoice.status, INVOICE_LABEL);
    status.dataset.invoiceStatus = invoice.id;
    status.addEventListener('change', async () => {
      const previous = invoice.status;
      status.disabled = true;
      const { status: code } = await api(`/invoices/${invoice.id}/status`, {
        method: 'POST',
        body: JSON.stringify({ status: status.value }),
      });
      status.disabled = false;
      if (code === 200) { showToast('Invoice status updated'); loadOverview(); }
      else { status.value = previous; showToast('Could not update invoice', 'error'); }
    });
    side.append(status);
    row.append(main, side);
    return row;
  });
  wrap.replaceChildren(...nodes);
}

function renderFiles() {
  const wrap = document.getElementById('admin-files');
  if (!data.files.length) { empty(wrap, 'No files shared yet.'); return; }
  const nodes = data.files.map((file) => {
    const row = el('div', 'arow');
    const main = el('div', 'arow__main');
    main.append(el('b', null, file.name));
    main.append(el('span', null, `${clientName(file.client_id)} · ${fmtSize(Number(file.size))}`));
    const time = el('time', null, fmtDate(file.created_at, true));
    time.setAttribute('datetime', file.created_at || '');
    main.append(time);
    const side = el('div', 'arow__side');
    const ready = file.status === 'ready';
    const tag = el('span', 'tag', ready ? 'Ready' : 'Pending');
    tag.dataset.status = ready ? 'paid' : 'draft';
    side.append(tag);
    if (ready) {
      const open = el('button', 'pbtn pbtn--small', 'Open');
      open.type = 'button';
      open.addEventListener('click', () => withButton(open, 'Opening…', async () => {
        const { status, data: payload } = await api(`/files/${file.id}/download`, { method: 'POST' });
        if (status === 200 && payload?.url) {
          const link = document.createElement('a');
          link.href = payload.url;
          link.target = '_blank';
          link.rel = 'noopener';
          document.body.append(link);
          link.click();
          link.remove();
        } else {
          showToast('File is not available yet', 'error');
        }
      }));
      side.append(open);
    }
    row.append(main, side);
    return row;
  });
  wrap.replaceChildren(...nodes);
}

function populateClientSelects() {
  document.querySelectorAll('[data-client-select]').forEach((select) => {
    const previous = select.value;
    select.replaceChildren(
      new Option('Select client', ''),
      ...data.clients.map((client) => new Option(`${client.company} — ${client.name}`, client.id))
    );
    if (Array.from(select.options).some((option) => option.value === previous)) select.value = previous;
  });
  refreshProjectSelects();
}

function refreshProjectSelects() {
  document.querySelectorAll('[data-project-select]').forEach((select) => {
    const form = select.closest('form');
    const clientId = form?.querySelector('[data-client-select]')?.value || '';
    const previous = select.value;
    const items = data.projects.filter((project) => !clientId || project.client_id === clientId);
    select.replaceChildren(
      new Option('No project', ''),
      ...items.map((project) => new Option(`${project.name}`, project.id))
    );
    if (Array.from(select.options).some((option) => option.value === previous)) select.value = previous;
  });
}

function renderAll() {
  renderStats();
  renderInquiries();
  renderClients();
  renderProjects();
  renderInvoices();
  renderFiles();
  populateClientSelects();
}

/* --------------------------------------------------------------------------
   Tabs
   -------------------------------------------------------------------------- */

function activateTab(name) {
  tab = name;
  document.querySelectorAll('.admin__tab').forEach((button) => {
    button.setAttribute('aria-selected', String(button.dataset.tab === name));
  });
  ['inquiries', 'clients', 'delivery', 'invoices', 'files'].forEach((key) => {
    const panel = document.getElementById(`panel-${key}`);
    if (panel) panel.hidden = key !== name;
  });
}

document.querySelectorAll('.admin__tab').forEach((button) => {
  button.addEventListener('click', () => activateTab(button.dataset.tab));
});

document.addEventListener('change', (event) => {
  if (event.target.matches('[data-client-select]')) refreshProjectSelects();
});

/* --------------------------------------------------------------------------
   Auth
   -------------------------------------------------------------------------- */

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) { setLoginStatus('Enter the console code.'); return; }
  const submit = document.getElementById('admin-submit');
  const label = document.getElementById('admin-submit-label');
  submit.disabled = true;
  label.textContent = 'Checking…';
  setLoginStatus('');
  try {
    const { status, data: payload } = await api('/login', {
      method: 'POST',
      body: JSON.stringify({ code: loginForm.code.value }),
    });
    if (status === 200) {
      loginForm.reset();
      await loadOverview();
    } else if (status === 401) {
      setLoginStatus('Incorrect console code.');
    } else if (status === 503) {
      setLoginStatus('The console code is not configured yet. Add it in Site Settings.');
    } else {
      setLoginStatus('Could not open the console. Try again.');
    }
  } catch (error) {
    setLoginStatus('Could not open the console. Try again.');
  } finally {
    submit.disabled = false;
    label.textContent = 'Open console';
  }
});

document.getElementById('admin-logout')?.addEventListener('click', async () => {
  try { await api('/logout', { method: 'POST' }); } catch (error) { /* noop */ }
  data = null;
  showLogin();
});

document.getElementById('admin-refresh')?.addEventListener('click', (event) => {
  withButton(event.currentTarget, 'Refreshing…', loadOverview);
});

document.getElementById('admin-retry')?.addEventListener('click', loadOverview);

/* --------------------------------------------------------------------------
   Forms
   -------------------------------------------------------------------------- */

document.getElementById('client-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  await withButton(button, 'Creating…', async () => {
    const { status, data: payload } = await api('/clients', {
      method: 'POST',
      body: JSON.stringify({
        name: form.querySelector('input[name="name"]').value,
        company: form.company.value,
        email: form.email.value,
      }),
    });
    if (status !== 201 || !payload?.client) {
      showToast(status === 409 ? 'A client with this email already exists' : 'Could not create client', 'error');
      return;
    }
    const client = payload.client;
    form.reset();
    const { status: codeStatus, data: codePayload } = await api(`/clients/${client.id}/codes`, { method: 'POST' });
    if (codeStatus === 201 && codePayload?.code) {
      issueCode({ code: codePayload.code, name: client.name, expiresAt: codePayload.expiresAt }, document.getElementById('admin-code'));
      showToast('Client created · access code issued');
    } else {
      showToast('Client created · issue a code from the list');
    }
    loadOverview();
  });
});

document.getElementById('project-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  await withButton(button, 'Adding…', async () => {
    const { status } = await api('/projects', {
      method: 'POST',
      body: JSON.stringify({
        clientId: form.clientId.value,
        name: form.querySelector('input[name="name"]').value,
        summary: form.summary.value,
        status: form.status.value,
        phase: form.phase.value,
        progress: Math.max(0, Math.min(100, Number(form.progress.value) || 0)),
        startDate: form.startDate.value,
        targetDate: form.targetDate.value,
      }),
    });
    if (status === 201) {
      form.reset();
      showToast('Project added');
      loadOverview();
    } else {
      showToast('Could not add project', 'error');
    }
  });
});

document.getElementById('update-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  await withButton(button, 'Publishing…', async () => {
    const { status } = await api('/updates', {
      method: 'POST',
      body: JSON.stringify({
        clientId: form.clientId.value,
        projectId: form.projectId.value || '',
        title: form.querySelector('input[name="title"]').value,
        body: form.querySelector('textarea[name="body"]').value,
      }),
    });
    if (status === 201) {
      form.reset();
      showToast('Update published to the client');
      loadOverview();
    } else {
      showToast('Could not publish update', 'error');
    }
  });
});

document.getElementById('invoice-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  await withButton(button, 'Issuing…', async () => {
    const { status } = await api('/invoices', {
      method: 'POST',
      body: JSON.stringify({
        clientId: form.clientId.value,
        projectId: form.projectId.value || '',
        number: form.number.value,
        amount: Math.round(Number(form.amount.value)),
        currency: form.currency.value,
        status: form.status.value,
        issuedDate: form.issuedDate.value,
        dueDate: form.dueDate.value,
        note: form.note.value,
      }),
    });
    if (status === 201) {
      form.reset();
      resetInvoiceDates();
      showToast('Invoice issued');
      loadOverview();
    } else {
      showToast('Could not issue invoice', 'error');
    }
  });
});

const fileForm = document.getElementById('file-form');
const fileStatus = document.getElementById('file-status');
fileForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector('input[type="file"]');
  const file = input?.files?.[0];
  if (!file) { fileStatus.textContent = 'Choose a file first.'; return; }
  if (file.size > 25 * 1024 * 1024) { fileStatus.textContent = 'File is larger than 25 MB.'; return; }
  if (!form.clientId.value) { fileStatus.textContent = 'Select a client.'; return; }
  const button = form.querySelector('button[type="submit"]');
  const contentType = FILE_TYPES.has(file.type) ? file.type : 'application/octet-stream';
  await withButton(button, 'Uploading…', async () => {
    fileStatus.textContent = 'Requesting upload…';
    const intent = await api('/files', {
      method: 'POST',
      body: JSON.stringify({
        clientId: form.clientId.value,
        projectId: form.projectId.value || '',
        name: file.name,
        size: file.size,
        contentType,
      }),
    });
    if (intent.status !== 201 || !intent.data?.signedUrl) {
      fileStatus.textContent = 'Could not start the upload.';
      return;
    }
    fileStatus.textContent = 'Uploading file…';
    let uploaded = false;
    try {
      const put = await fetch(intent.data.signedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'content-type': contentType },
      });
      uploaded = put.ok;
      if (!uploaded) fileStatus.textContent = `Upload failed (${put.status}).`;
    } catch (error) {
      fileStatus.textContent = 'Upload failed. Check the connection.';
    }
    if (!uploaded) return;
    fileStatus.textContent = 'Verifying…';
    const complete = await api(`/files/${intent.data.id}/complete`, { method: 'POST' });
    if (complete.status === 200) {
      fileStatus.textContent = '';
      form.reset();
      showToast('File shared with the client');
      loadOverview();
    } else {
      fileStatus.textContent = 'Upload saved but verification failed. Try again.';
    }
  });
});

function resetInvoiceDates() {
  const form = document.getElementById('invoice-form');
  if (!form) return;
  const today = new Date();
  const due = new Date(Date.now() + 14 * 86400000);
  form.issuedDate.value = today.toISOString().slice(0, 10);
  form.dueDate.value = due.toISOString().slice(0, 10);
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */

resetInvoiceDates();
activateTab(tab);
loadOverview();
