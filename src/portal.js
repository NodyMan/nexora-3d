/* --------------------------------------------------------------------------
   Nexora Studio — client portal
   Email + one-time access code, then a read-only workspace: project status,
   updates, invoices and shared files.
   -------------------------------------------------------------------------- */

import { t, setText, getLang } from './i18n.js';

const API = '/functions/v1/app/api/portal';
const root = document.querySelector('[data-portal-root]');
const loginView = document.getElementById('portal-login');
const dashView = document.getElementById('portal-dashboard');
const notice = document.getElementById('portal-notice');
const noticeText = document.getElementById('portal-notice-text');
const form = document.getElementById('portal-form');
const statusEl = document.getElementById('portal-status');
const submit = document.getElementById('portal-submit');
const submitLabel = document.getElementById('portal-submit-label');
const logout = document.getElementById('portal-logout');
const retry = document.getElementById('portal-retry');
const live = document.getElementById('portal-live');

const els = {
  name: document.getElementById('portal-name'),
  email: document.getElementById('portal-session-email'),
  projects: document.getElementById('portal-projects'),
  projectsCount: document.getElementById('portal-projects-count'),
  updates: document.getElementById('portal-updates'),
  updatesCount: document.getElementById('portal-updates-count'),
  invoices: document.getElementById('portal-invoices'),
  invoicesCount: document.getElementById('portal-invoices-count'),
  files: document.getElementById('portal-files'),
  filesCount: document.getElementById('portal-files-count'),
};

const PROJECT_LABEL = {
  discovery: 'Discovery',
  building: 'In build',
  review: 'In review',
  live: 'Live',
  paused: 'Paused',
};
const INVOICE_LABEL = { draft: 'Draft', sent: 'Sent', paid: 'Paid', overdue: 'Overdue' };

let state = null;
let busy = false;

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

function announce(message) {
  if (live) live.textContent = message;
}

async function api(path, options = {}) {
  const init = { credentials: 'same-origin', ...options };
  if (init.body) init.headers = { 'content-type': 'application/json', ...(init.headers || {}) };
  const response = await fetch(`${API}${path}`, init);
  let data = null;
  try { data = await response.json(); } catch (error) { /* no body */ }
  return { status: response.status, data };
}

function locale() {
  const lang = getLang();
  return lang === 'ru' ? 'ru-RU' : lang === 'uz' ? 'uz-UZ' : 'en-GB';
}

function fmtDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  if (getLang() === 'uz') {
    const months = ['yanv', 'fev', 'mart', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  return new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
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
    return new Intl.NumberFormat(locale(), {
      style: 'currency',
      currency: currency || 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    return `${currency || ''} ${amount}`.trim();
  }
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function countLabel(list) {
  return list.length ? String(list.length).padStart(2, '0') : '';
}

function emptyState(container, message) {
  container.replaceChildren(el('p', 'pcard__empty', message));
}

function showOnly(view) {
  root.dataset.view = view;
  loginView.hidden = view !== 'login';
  dashView.hidden = view !== 'dashboard';
  notice.hidden = view !== 'notice';
}

function setStatus(message, isOk = false) {
  if (!statusEl) return;
  statusEl.classList.toggle('pstatus--ok', isOk);
  if (message) setText(statusEl, message);
  else { delete statusEl.dataset.i18n; statusEl.textContent = ''; }
}

/* --------------------------------------------------------------------------
   Views
   -------------------------------------------------------------------------- */

function showLogin(message) {
  showOnly('login');
  setStatus(message || '');
}

function showNotice(message) {
  showOnly('notice');
  if (noticeText) setText(noticeText, message || 'Could not load your workspace. Try again.');
}

function renderProjects(projects) {
  const wrap = els.projects;
  wrap.replaceChildren();
  if (!projects.length) { emptyState(wrap, t('No projects yet.')); return; }
  projects.forEach((project) => {
    const card = el('article', 'pproject');
    const top = el('div', 'pproject__top');
    top.append(el('h3', null, project.name || '—'));
    const status = String(project.status || 'discovery');
    const tag = el('span', 'tag', t(PROJECT_LABEL[status] || 'Discovery'));
    tag.dataset.status = status;
    top.append(tag);
    card.append(top);
    if (project.summary) card.append(el('p', 'pproject__summary', project.summary));
    const bar = el('div', 'pproject__bar');
    const fill = el('span');
    const progress = Math.max(0, Math.min(100, Number(project.progress) || 0));
    fill.style.setProperty('--p', `${progress}%`);
    bar.append(fill);
    card.append(bar);
    const meta = el('div', 'pproject__meta');
    const addMeta = (label, value) => {
      const item = el('span');
      item.append(document.createTextNode(`${label} `));
      item.append(el('b', null, value));
      meta.append(item);
    };
    addMeta(t('Progress'), `${progress}%`);
    if (project.start_date) addMeta(t('Started'), fmtDate(project.start_date));
    if (project.target_date) addMeta(t('Target'), fmtDate(project.target_date));
    card.append(meta);
    wrap.append(card);
  });
}

function renderUpdates(updates) {
  const wrap = els.updates;
  wrap.replaceChildren();
  if (!updates.length) { emptyState(wrap, t('No updates yet — the first one lands after kick-off.')); return; }
  updates.forEach((update) => {
    const item = el('article', 'pupdate');
    const time = el('time', null, fmtDate(update.created_at));
    time.setAttribute('datetime', update.created_at || '');
    item.append(time);
    item.append(el('h3', null, update.title || '—'));
    if (update.body) item.append(el('p', null, update.body));
    wrap.append(item);
  });
}

function renderInvoices(invoices) {
  const wrap = els.invoices;
  wrap.replaceChildren();
  if (!invoices.length) { emptyState(wrap, t('Invoices will appear here once issued.')); return; }
  invoices.forEach((invoice) => {
    const row = el('div', 'pinvoice');
    const id = el('div', 'pinvoice__id');
    id.append(el('b', null, invoice.number || t('Invoice')));
    const parts = [t('Invoice')];
    if (invoice.issued_date) parts.push(`${t('Issued')} ${fmtDate(invoice.issued_date)}`);
    if (invoice.due_date) parts.push(`${t('Due')} ${fmtDate(invoice.due_date)}`);
    id.append(el('span', null, parts.join(' · ')));
    if (invoice.note) id.append(el('span', null, invoice.note));
    row.append(id);
    const side = el('div', 'pinvoice__side');
    const status = String(invoice.status || 'sent');
    const tag = el('span', 'tag', t(INVOICE_LABEL[status] || 'Sent'));
    tag.dataset.status = status;
    side.append(tag);
    side.append(el('span', 'pinvoice__amount', fmtAmount(Number(invoice.amount), invoice.currency)));
    row.append(side);
    wrap.append(row);
  });
}

function renderFiles(files) {
  const wrap = els.files;
  wrap.replaceChildren();
  if (!files.length) { emptyState(wrap, t('Files shared by the studio will appear here.')); return; }
  files.forEach((file) => {
    const row = el('div', 'pfile');
    const id = el('div', 'pfile__id');
    id.append(el('b', null, file.name || '—'));
    id.append(el('span', null, `${fmtSize(Number(file.size))} · ${fmtDate(file.created_at)}`));
    row.append(id);
    const button = el('button', 'pbtn pbtn--small', t('Download'));
    button.type = 'button';
    button.dataset.fileId = file.id;
    row.append(button);
    wrap.append(row);
  });
}

function renderDashboard() {
  if (!state) return;
  const { client, projects, updates, invoices, files } = state;
  if (els.name) els.name.textContent = client?.name ? client.name.split(' ')[0] : '—';
  if (els.email) els.email.textContent = client?.email || '';
  els.projectsCount.textContent = countLabel(projects);
  els.updatesCount.textContent = countLabel(updates);
  els.invoicesCount.textContent = countLabel(invoices);
  els.filesCount.textContent = countLabel(files);
  renderProjects(projects);
  renderUpdates(updates);
  renderInvoices(invoices);
  renderFiles(files);
}

/* --------------------------------------------------------------------------
   Data flow
   -------------------------------------------------------------------------- */

async function loadWorkspace() {
  root.dataset.loading = 'true';
  try {
    const { status, data } = await api('/dashboard');
    if (status === 200 && data?.ok) {
      state = {
        client: data.client || {},
        projects: Array.isArray(data.projects) ? data.projects : [],
        updates: Array.isArray(data.updates) ? data.updates : [],
        invoices: Array.isArray(data.invoices) ? data.invoices : [],
        files: Array.isArray(data.files) ? data.files : [],
      };
      renderDashboard();
      showOnly('dashboard');
      return;
    }
    state = null;
    if (status === 401) { showLogin(); return; }
    showNotice();
  } catch (error) {
    showNotice();
  } finally {
    root.dataset.loading = 'false';
  }
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (busy) return;
  if (!form.reportValidity()) { setStatus('Enter your email and access code.'); return; }
  const email = String(form.email.value || '').trim().toLowerCase();
  const code = String(form.code.value || '').trim();
  busy = true;
  submit.disabled = true;
  setText(submitLabel, 'Signing in…');
  setStatus('');
  try {
    const { status } = await api('/login', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    });
    if (status === 200) {
      form.reset();
      await loadWorkspace();
    } else if (status === 401) {
      setStatus('That email and code do not match. Check the code or ask for a new one.');
    } else {
      setStatus('Something went wrong. Write to support@nexorastudio.world instead.');
    }
  } catch (error) {
    setStatus('Something went wrong. Write to support@nexorastudio.world instead.');
  } finally {
    busy = false;
    submit.disabled = false;
    setText(submitLabel, 'Open portal');
  }
});

logout?.addEventListener('click', async () => {
  logout.disabled = true;
  try { await api('/logout', { method: 'POST' }); } catch (error) { /* noop */ }
  state = null;
  logout.disabled = false;
  showLogin();
  announce(t('Sign out'));
});

retry?.addEventListener('click', () => { loadWorkspace(); });

els.files?.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-file-id]');
  if (!button || button.disabled) return;
  const id = button.dataset.fileId;
  button.disabled = true;
  setText(button, 'Downloading…');
  try {
    const { status, data } = await api(`/files/${id}/download`, { method: 'POST' });
    if (status === 200 && data?.url) {
      const link = document.createElement('a');
      link.href = data.url;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.append(link);
      link.click();
      link.remove();
      setText(button, 'Download');
    } else if (status === 409) {
      setText(button, 'This file is not ready yet.');
      window.setTimeout(() => setText(button, 'Download'), 2400);
    } else {
      setText(button, 'Download failed. Try again.');
      window.setTimeout(() => setText(button, 'Download'), 2400);
    }
  } catch (error) {
    setText(button, 'Download failed. Try again.');
    window.setTimeout(() => setText(button, 'Download'), 2400);
  } finally {
    button.disabled = false;
  }
});

window.addEventListener('nexora:lang', () => {
  if (state) renderDashboard();
});

loadWorkspace();
