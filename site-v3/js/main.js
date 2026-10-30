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

const contactForm = $('#contact-form');
if (contactForm) {
  const statusEl = $('#contact-status', contactForm);
  const submit = $('[type="submit"]', contactForm);
  const submitLabel = $('.submit-label', contactForm);
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

  contactForm.addEventListener('input', () => {
    if (contactForm.dataset.state === 'error' || contactForm.dataset.state === 'success') setFormState('idle', '');
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;
    if (!contactForm.reportValidity()) {
      setFormState('error', 'Please check the highlighted fields.');
      return;
    }
    const data = new FormData(contactForm);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      projectType: String(data.get('projectType') || ''),
      budget: '',
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''),
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
        contactForm.reset();
        setFormState('success', 'Your brief is with us. A founder will reply personally.');
      } else if (response.status === 429) {
        setFormState('error', 'Too many briefs from this address. Try again in a few minutes.');
      } else if (response.status === 400) {
        setFormState('error', 'Please check the highlighted fields.');
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
