/* --------------------------------------------------------------------------
   Nexora Studio — book a 20-minute intro call (contact page, [data-booking]).
   Slots come from /api/booking/slots: every day 19:00–24:00 Fergana time
   (UTC+5). Times are shown in Fergana time, plus the visitor's own time
   when it differs.
   -------------------------------------------------------------------------- */

// v11 copy of booking.js: English only, without the old i18n module.
const translateDynamic = () => {};

const API = '/functions/v1/app/api/booking';
const FERGANA = 'Asia/Tashkent';

const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

const lang = () => (['ru', 'uz'].includes(document.documentElement.lang) ? document.documentElement.lang : 'en');
const intl = () => ({ en: 'en-GB', ru: 'ru-RU', uz: 'uz-Latn-UZ' })[lang()];
// Browsers often lack Uzbek date names (they print "M11"), so Uzbek uses our own.
const UZ_DAYS = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const UZ_DAYS_SHORT = ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'];
const UZ_MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
function fmtUz(date, opts) {
  // Wall-clock parts in the requested zone (Fergana unless none is given).
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: opts.timeZone, weekday: 'short', day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })
    .formatToParts(date).map((p) => [p.type, p.value]));
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  if (opts.hour) return `${parts.hour}:${parts.minute}`;
  if (opts.weekday === 'long') return `${Number(parts.day)}-${UZ_MONTHS[Number(parts.month) - 1]}, ${UZ_DAYS[dow].toLowerCase()}`;
  if (opts.weekday) return UZ_DAYS_SHORT[dow];
  if (opts.month) return UZ_MONTHS[Number(parts.month) - 1].slice(0, 3);
  return String(Number(parts.day));
}
const fmt = (date, opts) => {
  if (lang() === 'uz') return fmtUz(date, opts);
  try {
    return new Intl.DateTimeFormat(intl(), opts).format(date);
  } catch (error) {
    return new Intl.DateTimeFormat('en-GB', opts).format(date);
  }
};
const visitorZone = (() => {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (error) { return ''; }
})();
// Same offset as Fergana right now? Then there is no need to show a second time.
const sameAsFergana = (() => {
  const d = new Date();
  const a = fmt(d, { timeZone: FERGANA, hour: '2-digit', minute: '2-digit', hour12: false });
  const b = fmt(d, { hour: '2-digit', minute: '2-digit', hour12: false });
  return a === b;
})();

export function mountBooking(root) {
  const days = root.querySelector('[data-booking-days]');
  const slots = root.querySelector('[data-booking-slots]');
  const picked = root.querySelector('[data-booking-picked]');
  const form = root.querySelector('[data-booking-form]');
  const status = root.querySelector('[data-booking-status]');
  const done = root.querySelector('[data-booking-done]');
  let data = null;
  let day = 0;
  let start = '';

  const say = (message) => { status.textContent = message; translateDynamic(status); };

  function renderDays() {
    days.replaceChildren(...data.days.map((d, i) => {
      const date = new Date(`${d.date}T12:00:00+05:00`);
      const free = d.slots.filter((s) => s.free).length;
      const b = el('button', 'booking__day');
      b.type = 'button';
      b.setAttribute('aria-pressed', String(i === day));
      b.disabled = free === 0;
      b.append(el('span', 'booking__dow', fmt(date, { timeZone: FERGANA, weekday: 'short' })), el('b', 'num', fmt(date, { timeZone: FERGANA, day: 'numeric' })), el('span', 'booking__mon', fmt(date, { timeZone: FERGANA, month: 'short' })));
      b.setAttribute('data-no-i18n', '');
      b.addEventListener('click', () => { day = i; start = ''; render(); });
      return b;
    }));
  }

  function renderSlots() {
    const list = data.days[day]?.slots || [];
    slots.replaceChildren(...list.map((s) => {
      const when = new Date(s.start);
      const b = el('button', 'booking__slot');
      b.type = 'button';
      b.disabled = !s.free;
      b.setAttribute('aria-pressed', String(s.start === start));
      b.setAttribute('data-no-i18n', '');
      b.append(el('b', 'num', fmt(when, { timeZone: FERGANA, hour: '2-digit', minute: '2-digit', hour12: false })));
      if (!sameAsFergana) b.append(el('small', null, fmt(when, { hour: '2-digit', minute: '2-digit', hour12: false })));
      b.addEventListener('click', () => { start = s.start; render(); form.querySelector('input[name="name"]').focus({ preventScroll: true }); });
      return b;
    }));
  }

  function render() {
    renderDays();
    renderSlots();
    form.hidden = !start;
    if (start) {
      const when = new Date(start);
      picked.textContent = `${fmt(when, { timeZone: FERGANA, weekday: 'long', day: 'numeric', month: 'long' })} · ${fmt(when, { timeZone: FERGANA, hour: '2-digit', minute: '2-digit', hour12: false })}`;
    }
  }

  async function load() {
    try {
      const response = await fetch(`${API}/slots`, { credentials: 'same-origin' });
      const json = await response.json();
      if (!response.ok || !json?.ok) throw new Error('slots');
      data = json;
      // Start on the first day that still has a free slot (tonight may be over).
      day = Math.max(0, data.days.findIndex((d) => d.slots.some((s) => s.free)));
      root.classList.add('is-ready');
      render();
    } catch (error) {
      say('Could not load free times. Email us and we will find a time.');
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || !start) return;
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    say('Booking…');
    try {
      const response = await fetch(API, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: form.name.value, email: form.email.value, topic: form.topic.value, start, locale: lang(), website: form.nx_trap.value }),
      });
      if (response.status === 201) {
        const when = new Date(start);
        done.querySelector('[data-booking-when]').textContent = `${fmt(when, { timeZone: FERGANA, weekday: 'long', day: 'numeric', month: 'long' })}, ${fmt(when, { timeZone: FERGANA, hour: '2-digit', minute: '2-digit', hour12: false })}`;
        done.querySelector('[data-booking-email]').textContent = form.email.value.trim();
        root.classList.add('is-done');
        done.hidden = false;
        say('');
        done.focus({ preventScroll: false });
        return;
      }
      if (response.status === 409) { say('Someone just took that time. Pick another one.'); start = ''; await load(); return; }
      if (response.status === 429) { say('You already have two calls booked. Reply to the confirmation email to change them.'); return; }
      say('Check your name, email and the chosen time.');
    } catch (error) {
      say('Could not book the call. Try again or email us.');
    } finally {
      button.disabled = false;
    }
  });

  load();
}
