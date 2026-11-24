// Forms on the v11 contact and estimate pages: the brief, the call booking and
// the timeline estimator. Talks to the same endpoints as the previous site.
import { mountBooking } from './v11-booking.js';
import { mountEstimator } from './v11-estimate.js';

const $ = (s, el = document) => el.querySelector(s);
const API = '/functions/v1/app/api/contact';

const booking = $('[data-booking]');
if (booking) mountBooking(booking);
const estimator = $('[data-estimator]');
if (estimator) mountEstimator(estimator);

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); button.textContent = 'Copied'; } catch { button.textContent = 'Press Ctrl+C'; }
    setTimeout(() => { button.textContent = 'Copy'; }, 1800);
  });
});

const form = $('#contact-form');
if (form) brief(form);

function brief(form) {
  const status = $('[data-status]', form);
  const submit = $('[type="submit"]', form);
  const label = $('[data-submit-label]', form);
  const counter = $('[data-count]', form);
  const thanks = $('#thanks');
  const message = form.elements.message;
  let sending = false;

  const setType = (value) => {
    const input = [...form.querySelectorAll('input[name="projectType"]')].find((i) => i.value === value);
    if (input) input.checked = true;
  };
  // ?type=… from links elsewhere, or answers handed over by the estimator.
  setType(new URLSearchParams(location.search).get('type'));
  try {
    const carried = JSON.parse(sessionStorage.getItem('nx-brief') || 'null');
    sessionStorage.removeItem('nx-brief');
    if (carried && typeof carried.message === 'string') {
      setType(carried.projectType);
      message.value = carried.message.slice(0, 4000);
      setTimeout(() => form.elements.name.focus({ preventScroll: true }), 400);
    }
  } catch { /* private mode */ }

  const count = () => {
    const n = message.value.trim().length;
    counter.textContent = n >= 10 ? '✓' : `${n}/10`;
    counter.classList.toggle('is-ok', n >= 10);
  };
  message.addEventListener('input', count);
  count();

  const HELP = { name: 'Please enter your name.', email: 'Please enter a valid email.', message: 'Tell us a little more — at least 10 characters.' };
  const mark = (name, bad) => {
    const input = form.elements[name];
    const field = input.closest('.field');
    field.classList.toggle('is-invalid', bad);
    input.setAttribute('aria-invalid', String(bad));
    let note = $('.field__error', field);
    if (bad && !note) { note = document.createElement('span'); note.className = 'field__error'; note.textContent = HELP[name]; field.append(note); }
    if (!bad && note) note.remove();
  };
  const invalid = () => {
    const bad = [];
    if (form.elements.name.value.trim().length < 2) bad.push('name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.elements.email.value.trim())) bad.push('email');
    if (message.value.trim().length < 10) bad.push('message');
    return bad;
  };
  form.addEventListener('input', (e) => {
    if (e.target.getAttribute('aria-invalid') === 'true' && !invalid().includes(e.target.name)) mark(e.target.name, false);
  });

  const say = (text, state = '') => { status.textContent = text; form.dataset.state = state; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return;
    const bad = invalid();
    ['name', 'email', 'message'].forEach((n) => mark(n, bad.includes(n)));
    if (bad.length) { say('Please fix the fields marked in orange.', 'error'); form.elements[bad[0]].focus(); return; }
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || ''),
      projectType: String(data.get('projectType') || ''),
      budget: '',
      message: String(data.get('message') || ''),
      website: String(data.get('nx_trap') || ''),
      locale: 'en',
    };
    sending = true;
    submit.disabled = true;
    label.textContent = 'Sending…';
    say('Sending your brief…', 'sending');
    try {
      const response = await fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify(payload) });
      if (response.status === 201) {
        const result = await response.json().catch(() => ({}));
        form.reset();
        count();
        say('');
        $('[data-thanks-name]', thanks).textContent = payload.name.split(/\s+/)[0];
        $('[data-thanks-email]', thanks).textContent = payload.email;
        $('.thanks__portal', thanks).hidden = result.confirmed !== true;
        form.hidden = true;
        thanks.hidden = false;
        thanks.focus({ preventScroll: true });
        thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (response.status === 429) {
        say('Too many briefs from this address. Try again in a few minutes.', 'error');
      } else if (response.status === 400) {
        const body = await response.json().catch(() => ({}));
        (Array.isArray(body.fields) && body.fields.length ? body.fields : ['message']).forEach((n) => form.elements[n] && mark(n, true));
        say('Please fix the fields marked in orange.', 'error');
      } else {
        say('Something went wrong. Write to support@nexorastudio.world instead.', 'error');
      }
    } catch {
      say('Something went wrong. Write to support@nexorastudio.world instead.', 'error');
    } finally {
      sending = false;
      submit.disabled = false;
      label.textContent = 'Send brief';
    }
  });

  $('[data-thanks-again]', thanks)?.addEventListener('click', () => {
    thanks.hidden = true;
    form.hidden = false;
    form.elements.name.focus();
  });
}
