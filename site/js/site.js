/* --------------------------------------------------------------------------
   Nexora Studio — site v9
   Scroll reveal, service hover → girih colour on the monolith, and loading
   the valley scene (js/fx/world.js) once the page has painted. Header, menu,
   clock, copy button and the contact form live in main.js.
   -------------------------------------------------------------------------- */

const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// ?fx turns motion on even when the browser asks for reduced motion (for testing).
const FORCE = new URLSearchParams(location.search).has('fx');
// Reduced motion still shows the valley, just without anything moving by itself.
const STILL = REDUCED && !FORCE;

/* ---------- Reveal ---------- */
const reveals = $$('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

/* ---------- Mobile menu closes after a link is used ---------- */
$$('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  const toggle = document.getElementById('menu-toggle');
  if (toggle?.getAttribute('aria-expanded') === 'true') toggle.click();
}));

/* ---------- Hovering a service recolours the girih on the monolith ---------- */
$$('[data-service]').forEach((row) => {
  const on = () => window.dispatchEvent(new CustomEvent('nexora:service', { detail: Number(row.dataset.service) }));
  const off = () => window.dispatchEvent(new CustomEvent('nexora:service-leave'));
  row.addEventListener('pointerenter', on);
  row.addEventListener('focus', on);
  row.addEventListener('pointerleave', off);
  row.addEventListener('blur', off);
});

/* ---------- 3D valley ---------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (error) {
    return false;
  }
}

// One camera angle per inner page, so each page header shows the valley differently.
const VIEWS = { services: 1, work: 2, about: 0, journal: 1, contact: 2, estimate: 1 };

if (hasWebGL()) {
  const start = () => {
    const world = document.querySelector('canvas.world');
    if (world) {
      import('./fx/world.js')
        .then(({ mountWorld }) => mountWorld(world, {
          mode: 'home',
          still: STILL,
          onReady: () => document.documentElement.classList.add('has-world'),
          onFail: () => { document.documentElement.classList.remove('has-world'); world.remove(); },
        }))
        .catch(() => {});
    }
    const pageCanvas = document.querySelector('.page-hero__canvas');
    if (pageCanvas) {
      const hero = pageCanvas.closest('.page-hero');
      const name = (location.pathname.split('/').pop() || 'index').replace('.html', '');
      import('./fx/world.js')
        .then(({ mountWorld }) => mountWorld(pageCanvas, {
          mode: 'page',
          view: VIEWS[name] ?? 0,
          still: STILL,
          onReady: () => hero.classList.add('is-live'),
          onFail: () => { hero.classList.remove('is-live'); pageCanvas.remove(); },
        }))
        .catch(() => {});
    }
    const cards = $$('[data-depth-card]');
    if (cards.length && !STILL) import('./fx/cards.js').then(({ mountCards }) => mountCards(cards)).catch(() => {});
  };
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

/* ---------- Next page: keep scrolling at the bottom to go on ----------
   At the very bottom of a page, further wheel / swipe / arrow-key movement
   fills a bar in the "next page" panel; when it is full we navigate. Stop
   pushing and the bar drains, so nobody is moved on by accident. */
const nextPanel = document.querySelector('[data-next-page]');
if (nextPanel) {
  const NEXT_FLAG = 'nx-next-page';
  let p = 0;
  let lastPush = 0;
  let going = false;
  let touchY = null;
  let running = false;
  const atBottom = () => {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
  };
  const render = () => nextPanel.style.setProperty('--p', p.toFixed(3));
  const go = () => {
    if (going) return;
    going = true;
    p = 1;
    render();
    nextPanel.classList.add('is-going');
    try { sessionStorage.setItem(NEXT_FLAG, '1'); } catch (error) { /* private mode */ }
    window.location.href = nextPanel.href;
  };
  const loop = (now) => {
    // Drain when the visitor stops pushing.
    if (!going && now - lastPush > 260) p = Math.max(0, p - 0.035);
    render();
    if (p > 0 && !going) requestAnimationFrame(loop);
    else running = false;
  };
  const push = (amount) => {
    if (going) return;
    p = Math.min(1, Math.max(0, p + amount));
    lastPush = performance.now();
    if (p >= 1) { go(); return; }
    render();
    if (!running) { running = true; requestAnimationFrame(loop); }
  };
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) return;
    const dy = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
    if (dy > 0 && atBottom()) push(Math.min(dy, 120) / 700);
    else if (dy < 0 && p > 0) push(dy / 300);
  }, { passive: true });
  window.addEventListener('touchstart', (e) => { touchY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (touchY === null) return;
    const y = e.touches[0].clientY;
    const dy = touchY - y;
    touchY = y;
    if (dy > 0 && atBottom()) push(dy / (window.innerHeight * 0.45));
    else if (dy < 0 && p > 0) push(dy / 200);
  }, { passive: true });
  window.addEventListener('touchend', () => { touchY = null; }, { passive: true });
  window.addEventListener('keydown', (e) => {
    if (e.target.closest?.('input, textarea, select, [contenteditable]')) return;
    if (['ArrowDown', 'PageDown', ' ', 'End'].includes(e.key) && atBottom()) push(0.34);
  });
  // Coming back with the browser's back button: start empty again.
  window.addEventListener('pageshow', () => { going = false; p = 0; nextPanel.classList.remove('is-going'); render(); });
}


/* ---------- Contact page: book a call; estimator page; brief prefill ---------- */
const bookingRoot = document.querySelector('[data-booking]');
if (bookingRoot) import('./booking.js').then(({ mountBooking }) => mountBooking(bookingRoot)).catch(() => {});
const estimator = document.querySelector('[data-estimator]');
if (estimator) import('./estimate.js').then(({ mountEstimator }) => mountEstimator(estimator)).catch(() => {});

// The estimator hands its answers to the brief form.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  let brief = null;
  try { brief = JSON.parse(sessionStorage.getItem('nx-brief') || 'null'); sessionStorage.removeItem('nx-brief'); } catch (error) { brief = null; }
  if (brief && typeof brief.message === 'string') {
    const type = contactForm.elements.projectType;
    if (type && [...type.options].some((o) => o.value === brief.projectType)) type.value = brief.projectType;
    const message = contactForm.elements.message;
    message.value = brief.message.slice(0, 4000);
    message.dispatchEvent(new Event('input', { bubbles: true }));
    type?.dispatchEvent(new Event('change', { bubbles: true }));
    setTimeout(() => contactForm.elements.name?.focus({ preventScroll: true }), 300);
  }
}

/* ---------- App screens on the home steles ---------- */
// Arrow buttons and dots under each product; the valley listens for 'nexora:screen'.
$$('[data-screens]').forEach((group) => {
  const station = Number(group.dataset.screens);
  const dots = $$('[data-dot]', group);
  const show = (index) => dots.forEach((d, i) => d.classList.toggle('is-on', i === index));
  show(0);
  $$('[data-screen-step]', group).forEach((b) => b.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('nexora:screen', { detail: { station, step: Number(b.dataset.screenStep) } }));
  }));
  window.addEventListener('nexora:screen-shown', (e) => { if (e.detail.station === station) show(e.detail.index); });
  // Swipe sideways on the product section (phones), or click its right half (desktop).
  const section = group.closest('[data-station]');
  let x0 = null;
  let y0 = null;
  section?.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; }, { passive: true });
  section?.addEventListener('pointerup', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    const dy = e.clientY - y0;
    x0 = null;
    if (e.target.closest('a, button, input, textarea, select')) return;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      window.dispatchEvent(new CustomEvent('nexora:screen', { detail: { station, step: dx < 0 ? 1 : -1 } }));
    } else if (Math.abs(dx) < 6 && Math.abs(dy) < 6 && e.pointerType === 'mouse' && e.clientX > window.innerWidth * 0.55) {
      window.dispatchEvent(new CustomEvent('nexora:screen', { detail: { station, step: 1 } }));
    }
  }, { passive: true });
});

/* ---------- Sound (off by default) ---------- */
const soundButton = document.querySelector('[data-sound]');
if (soundButton) {
  let on = false;
  try { on = localStorage.getItem('nx-sound') === 'on'; } catch (error) { on = false; }
  let engine = null;
  const sync = () => {
    soundButton.setAttribute('aria-pressed', String(on));
    soundButton.classList.toggle('is-on', on);
  };
  const ensure = () => (engine ? Promise.resolve(engine) : import('./sound.js').then((m) => { engine = m; return m; }));
  const apply = () => ensure().then((m) => (on ? m.start() : m.stop())).catch(() => {});
  sync();
  // Browsers only allow audio after a click or key press, so a saved "on" waits for the first one.
  if (on) {
    const first = () => { apply(); window.removeEventListener('pointerdown', first); window.removeEventListener('keydown', first); };
    window.addEventListener('pointerdown', first);
    window.addEventListener('keydown', first);
  }
  soundButton.addEventListener('click', () => {
    on = !on;
    try { localStorage.setItem('nx-sound', on ? 'on' : 'off'); } catch (error) { /* private mode */ }
    sync();
    apply();
  });
  const tick = (kind) => { if (on && engine) engine.blip(kind); };
  $$('[data-service], .btn, .nav a').forEach((n) => n.addEventListener('pointerenter', () => tick('hover'), { passive: true }));
  window.addEventListener('nexora:screen-shown', () => tick('screen'));
  document.addEventListener('click', (e) => { if (e.target.closest('a, button')) tick('click'); });
}
