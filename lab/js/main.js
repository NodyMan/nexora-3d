/* --------------------------------------------------------------------------
   Nexora Studio — site v3
   Header, mobile menu, Fergana clock, first-step picker, contact form.
   No build step: loaded as an ES module next to i18n.js.
   -------------------------------------------------------------------------- */

import { getLang, setText } from './i18n.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* ---------- Header border once the page scrolls ---------- */

const header = $('.site-header');
const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */

const menuToggle = $('#menu-toggle');
const mobileMenu = $('#mobile-menu');
if (menuToggle && mobileMenu) {
  const setOpen = (open) => {
    mobileMenu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    setText($('.menu-toggle__label', menuToggle), open ? 'Close' : 'Menu');
  };
  menuToggle.addEventListener('click', () => setOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menuToggle.focus();
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 960) setOpen(false); });
}

/* ---------- Fergana clock (UTC+5) ---------- */

const clockFormat = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tashkent', hour: '2-digit', minute: '2-digit', hour12: false });
function updateClock() {
  const value = `FER ${clockFormat.format(new Date())}`;
  $$('[data-clock]').forEach((el) => { el.textContent = value; });
}
updateClock();
window.setInterval(updateClock, 30000);

$$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

/* ---------- Copy email ---------- */

$$('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      setText(button, 'Copied');
    } catch (error) {
      window.getSelection()?.selectAllChildren(button.previousElementSibling || button);
      setText(button, 'Select and copy');
    }
    window.setTimeout(() => setText(button, 'Copy'), 2200);
  });
});

/* ---------- First-step picker: who leads it, what happens first ---------- */

const PICKS = {
  mobile: {
    type: 'Mobile app',
    lead: 'Makhmud Nasriddinov',
    role: 'CTO · systems and mobile engineering',
    steps: [
      'Map the one flow your users will repeat every day.',
      'Decide what must keep working on weak phones and bad connections.',
      'Put an installable build in your hands early, then every week.',
    ],
  },
  web: {
    type: 'Web platform',
    lead: 'Makhmud Nasriddinov',
    role: 'CTO · systems architecture and cloud',
    steps: [
      'Model the data first — it outlives every screen.',
      'Prove the riskiest integration before anything else.',
      'Ship to a live staging link you can click through every week.',
    ],
  },
  ai: {
    type: 'AI product',
    lead: 'Nurahmadov Xayrullo',
    role: 'CAIO · applied machine learning',
    steps: [
      'Write down what the AI must never invent.',
      'Ground every answer in data you trust, not in the model’s memory.',
      'Test it on real questions from your users before launch.',
    ],
  },
  brand: {
    type: 'Brand & site',
    lead: 'Abduraximov Nizomiddin',
    role: 'Co-founder · design and art direction',
    steps: [
      'Find the one thing people should feel in the first five seconds.',
      'Build a design system, not a pile of pages.',
      'Make it fast on a mid-range phone, then make it move.',
    ],
  },
  unsure: {
    type: 'Something else',
    lead: 'All three founders',
    role: 'Systems, AI and design — on one call',
    steps: [
      'Tell us the problem, not the solution.',
      'We tell you honestly whether software is the answer.',
      'If it is, you leave the call with a first route.',
    ],
  },
};

const pickCard = $('.pick-card');
if (pickCard) {
  const chips = $$('[data-pick]');
  const render = (id) => {
    const pick = PICKS[id];
    setText($('#pick-lead'), pick.lead);
    setText($('#pick-role'), pick.role);
    const list = $('#pick-steps');
    list.innerHTML = '';
    pick.steps.forEach((step) => {
      const li = document.createElement('li');
      setText(li, step);
      list.appendChild(li);
    });
    $('#pick-cta').href = `./contact.html?type=${encodeURIComponent(pick.type)}`;
  };
  chips.forEach((chip) => chip.addEventListener('click', () => {
    chips.forEach((other) => other.setAttribute('aria-pressed', String(other === chip)));
    render(chip.dataset.pick);
  }));
}

/* ---------- Contact form ---------- */

// What each field needs, said plainly next to the field.
const FIELD_HELP = {
  name: 'Please write your name.',
  email: 'Please enter an email we can reply to, like you@company.com.',
  message: 'Tell us a little more: at least 10 characters.',
  company: 'Please shorten the company name.',
  projectType: 'Please pick a project type from the list.',
};

const contactForm = $('#contact-form');
if (contactForm) {
  const statusEl = $('#contact-status', contactForm);
  const submit = $('[type="submit"]', contactForm);
  const submitLabel = $('.submit-label', contactForm);
  const thanks = $('#thanks');
  const message = contactForm.elements.message;
  const counter = $('[data-count]', contactForm);
  let sending = false;

  // Links elsewhere on the site pass ?type=…; preselect it if it is a real option.
  const presetType = new URLSearchParams(window.location.search).get('type');
  const typeSelect = contactForm.elements.projectType;
  if (presetType && typeSelect && [...typeSelect.options].some((option) => option.value === presetType)) {
    typeSelect.value = presetType;
  }

  const setFormState = (state, key) => {
    contactForm.dataset.state = state;
    contactForm.setAttribute('aria-busy', String(state === 'sending'));
    if (!key) {
      delete statusEl.dataset.i18n;
      statusEl.textContent = '';
      return;
    }
    setText(statusEl, key);
  };

  function markField(name, bad) {
    const input = contactForm.elements[name];
    if (!input) return;
    const field = input.closest('.field');
    let note = $('.field__error', field);
    input.setAttribute('aria-invalid', String(bad));
    field.classList.toggle('is-invalid', bad);
    if (bad) {
      if (!note) {
        note = document.createElement('span');
        note.className = 'field__error';
        note.id = `${input.id}-error`;
        field.appendChild(note);
        input.setAttribute('aria-describedby', [input.getAttribute('aria-describedby'), note.id].filter(Boolean).join(' '));
      }
      setText(note, FIELD_HELP[name]);
    } else if (note) {
      const rest = (input.getAttribute('aria-describedby') || '').split(' ').filter((id) => id && id !== note.id).join(' ');
      if (rest) input.setAttribute('aria-describedby', rest);
      else input.removeAttribute('aria-describedby');
      note.remove();
    }
  }

  // Check the fields the same way the server does, so problems show before sending.
  function invalidFields() {
    const bad = [];
    if (contactForm.elements.name.value.trim().length < 2) bad.push('name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contactForm.elements.email.value.trim())) bad.push('email');
    if (message.value.trim().length < 10) bad.push('message');
    return bad;
  }

  function updateCounter() {
    const n = message.value.trim().length;
    counter.textContent = n >= 10 ? '✓' : `${n}/10`;
    counter.classList.toggle('is-ok', n >= 10);
  }
  message.addEventListener('input', updateCounter);
  updateCounter();

  contactForm.addEventListener('input', (event) => {
    const name = event.target.name;
    if (name && event.target.getAttribute('aria-invalid') === 'true' && !invalidFields().includes(name)) markField(name, false);
    if (contactForm.dataset.state === 'error') setFormState('idle', '');
  });

  // A one-off burst of lime, violet and silver pieces, with a few hearts.
  function burst(host) {
    host.textContent = '';
    const colors = ['#c6ff3d', '#6a5cf0', '#d9dde3', '#0d0e10'];
    for (let i = 0; i < 34; i += 1) {
      const piece = document.createElement('i');
      if (i % 7 === 0) {
        piece.className = 'is-heart';
        piece.textContent = '♥';
      }
      const angle = (i / 34) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 90 + Math.random() * 140;
      piece.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
      piece.style.setProperty('--y', `${Math.sin(angle) * dist - 40}px`);
      piece.style.setProperty('--r', `${Math.round(Math.random() * 540 - 270)}deg`);
      piece.style.setProperty('--c', colors[i % colors.length]);
      piece.style.setProperty('--d', `${Math.round(Math.random() * 120)}ms`);
      host.appendChild(piece);
    }
  }

  // codeSent: the confirmation email (with the portal access code) went out.
  function showThanks(name, email, codeSent) {
    $('.thanks__name', thanks).textContent = name.split(/\s+/)[0];
    $('.thanks__email', thanks).textContent = email;
    const portalNote = $('.thanks__portal', thanks);
    if (portalNote) portalNote.hidden = !codeSent;
    contactForm.hidden = true;
    thanks.hidden = false;
    thanks.classList.remove('is-playing');
    void thanks.offsetWidth; // restart the animation
    thanks.classList.add('is-playing');
    burst($('.thanks__burst', thanks));
    thanks.focus({ preventScroll: true });
    thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // The 3D logo in the background joins in.
    window.dispatchEvent(new CustomEvent('nexora:celebrate'));
  }

  $('#thanks-again')?.addEventListener('click', () => {
    thanks.hidden = true;
    contactForm.hidden = false;
    setFormState('idle', '');
    updateCounter();
    contactForm.elements.name.focus();
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;
    const bad = invalidFields();
    ['name', 'email', 'message'].forEach((name) => markField(name, bad.includes(name)));
    if (bad.length) {
      setFormState('error', 'Please fix the fields marked in red.');
      contactForm.elements[bad[0]].focus();
      return;
    }
    const data = new FormData(contactForm);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || ''),
      projectType: String(data.get('projectType') || ''),
      budget: '',
      message: String(data.get('message') || ''),
      // The spam trap is named so browser autofill never fills it.
      website: String(data.get('nx_trap') || ''),
      locale: getLang(),
    };
    sending = true;
    submit.disabled = true;
    setFormState('sending', 'Sending your brief…');
    setText(submitLabel, 'Sending…');
    try {
      const response = await fetch('/functions/v1/app/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });
      if (response.status === 201) {
        const result = await response.json().catch(() => ({}));
        contactForm.reset();
        setFormState('success', '');
        showThanks(payload.name, payload.email, result.confirmed === true);
      } else if (response.status === 429) {
        setFormState('error', 'Too many briefs from this address. Try again in a few minutes.');
      } else if (response.status === 400) {
        const body = await response.json().catch(() => ({}));
        const fields = Array.isArray(body.fields) && body.fields.length ? body.fields : ['message'];
        fields.forEach((name) => markField(name, true));
        setFormState('error', 'Please fix the fields marked in red.');
      } else {
        setFormState('error', 'Something went wrong. Write to support@nexorastudio.world instead.');
      }
    } catch (error) {
      setFormState('error', 'Something went wrong. Write to support@nexorastudio.world instead.');
    } finally {
      sending = false;
      submit.disabled = false;
      setText(submitLabel, 'Send brief');
    }
  });
}
