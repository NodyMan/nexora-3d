import { t, setText, getLang } from './i18n.js';
import { createField } from './field.js';

const docEl = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* --------------------------------------------------------------------------
   Loader
   -------------------------------------------------------------------------- */

const loader = $('#loader');
const loaderCount = $('#loader-count');
const loaderBar = $('#loader-bar');
const startedAt = performance.now();
let loaderFinished = false;

function setLoaderProgress(value) {
  const pct = Math.round(Math.min(100, Math.max(0, value)));
  if (loaderCount) loaderCount.textContent = String(pct).padStart(2, '0');
  if (loaderBar) loaderBar.style.width = `${pct}%`;
}

function finishLoader() {
  if (loaderFinished) return;
  loaderFinished = true;
  setLoaderProgress(100);
  const elapsed = performance.now() - startedAt;
  const wait = reduceMotion ? 0 : Math.max(0, 230 + 900 - elapsed);
  window.setTimeout(() => {
    body.classList.add('is-ready');
    if (loader) loader.classList.add('is-done');
    const heroReveals = $$('.hero .reveal');
    heroReveals.forEach((el, index) => {
      window.setTimeout(() => el.classList.add('is-in'), reduceMotion ? 0 : 120 * index);
    });
    window.setTimeout(() => loader?.remove(), 1400);
  }, wait);
}

if (reduceMotion) {
  setLoaderProgress(100);
  finishLoader();
} else if (loader) {
  let progress = 0;
  const timer = window.setInterval(() => {
    progress = Math.min(90, progress + 3 + Math.random() * 7);
    setLoaderProgress(progress);
    if (progress >= 90) window.clearInterval(timer);
  }, 90);
  window.addEventListener('load', () => {
    window.clearInterval(timer);
    setLoaderProgress(100);
    finishLoader();
  });
  window.setTimeout(finishLoader, 3400);
} else {
  finishLoader();
}

/* --------------------------------------------------------------------------
   WebGL — kinetic object field in the page hero and the CTA band
   -------------------------------------------------------------------------- */

const pageHero = $('.page-hero');
const ctaBand = $('.cta-band');
let heroProgress = 0;
let ctaProgress = 0;

function initFields() {
  const canvas = $('#scene');
  if (canvas && pageHero) {
    pageHero.prepend(canvas);
    canvas.classList.add('field');
    const field = createField(canvas, {
      count: window.innerWidth < 720 ? 14 : 20,
      // Keep the cluster up and to the right, clear of the bottom-left headline.
      anchor: (camera) => (camera.aspect > 1.1 ? { x: 5.2, y: 2.4 } : { x: 0, y: 7 }),
      scrollFactor: () => heroProgress,
    });
    docEl.classList.add(field ? 'scene-ready' : 'no-webgl');
  } else if (canvas) {
    canvas.remove();
  }

  if (ctaBand) {
    const ctaCanvas = document.createElement('canvas');
    ctaCanvas.className = 'field';
    ctaCanvas.setAttribute('aria-hidden', 'true');
    ctaBand.prepend(ctaCanvas);
    createField(ctaCanvas, {
      count: window.innerWidth < 720 ? 10 : 16,
      palette: 'dark',
      spread: 10,
      anchor: (camera) => ({ x: camera.aspect > 1.1 ? 5 : 0, y: (camera.aspect > 1.1 ? 1.5 : 7.5) + (1 - ctaProgress) * -8 }),
    });
  }
}

initFields();

/* --------------------------------------------------------------------------
   Header, progress, clock
   -------------------------------------------------------------------------- */

const header = $('#site-header');
const progressEl = $('#scroll-progress');
const darkZones = $$('.cta-band, .site-footer');
let scrollTicking = false;
let lastScrollY = window.scrollY;

function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(() => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const dy = y - lastScrollY;
    lastScrollY = y;
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
      if (y > vh * 0.6 && dy > 2 && !body.classList.contains('menu-open')) header.classList.add('is-hidden');
      if (dy < -2 || y < vh * 0.6) header.classList.remove('is-hidden');
      header.classList.toggle('is-dark', darkZones.some((zone) => {
        const r = zone.getBoundingClientRect();
        return r.top < 42 && r.bottom > 42;
      }));
    }
    if (pageHero) heroProgress = Math.min(1, Math.max(0, y / pageHero.offsetHeight));
    if (ctaBand) ctaProgress = Math.min(1, Math.max(0, 1 - ctaBand.getBoundingClientRect().top / vh));
    const max = docEl.scrollHeight - window.innerHeight;
    if (progressEl) progressEl.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    updateParallax();
    scrollTicking = false;
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function updateClock() {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tashkent',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const value = `FER ${formatter.format(new Date())}`;
  $$('[data-clock]').forEach((el) => { el.textContent = value; });
}
updateClock();
window.setInterval(updateClock, 30000);

/* --------------------------------------------------------------------------
   Navigation / mobile menu
   -------------------------------------------------------------------------- */

const menuToggle = $('#menu-toggle');
const mobileMenu = $('#mobile-menu');

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('menu-open', open);
  if (open) {
    const first = mobileMenu.querySelector('a, button');
    window.setTimeout(() => first?.focus(), 220);
  } else if (document.activeElement && mobileMenu.contains(document.activeElement)) {
    menuToggle.focus();
  }
}

menuToggle?.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileMenu?.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (!mobileMenu || menuToggle?.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') {
    setMenu(false);
    return;
  }
  if (event.key === 'Tab') {
    const focusables = $$('a, button', mobileMenu).filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1240 && mobileMenu?.classList.contains('is-open')) setMenu(false);
}, { passive: true });

/* --------------------------------------------------------------------------
   Scroll reveals
   -------------------------------------------------------------------------- */

const revealEls = $$('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const delay = target.dataset.delay;
        if (delay) target.style.setProperty('--d', `${Number(delay) * 90}ms`);
        target.classList.add('is-in');
        observer.unobserve(target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  revealEls.forEach((el) => {
    if (el.closest('.hero')) return;
    revealObserver.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* --------------------------------------------------------------------------
   Animated counters
   -------------------------------------------------------------------------- */

function formatCounter(value, el) {
  const decimals = Number(el.dataset.decimals || 0);
  const format = el.dataset.format;
  if (format === 'comma') return Math.round(value).toLocaleString('en-US');
  if (decimals > 0) return value.toFixed(decimals);
  return String(Math.round(value));
}

function animateCounter(el) {
  const target = Number(el.dataset.count || 0);
  if (reduceMotion) {
    el.textContent = formatCounter(target, el);
    return;
  }
  const duration = 1500;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatCounter(target * eased, el);
    if (progress < 1) window.requestAnimationFrame(tick);
    else el.textContent = formatCounter(target, el);
  };
  el.textContent = formatCounter(0, el);
  window.requestAnimationFrame(tick);
}

const counters = $$('[data-count]');
if (counters.length) {
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach(animateCounter);
  }
}

/* --------------------------------------------------------------------------
   Case dialogs
   -------------------------------------------------------------------------- */

const dialogButtons = $$('[data-dialog]');

dialogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (!dialog) return;
    dialog.showModal();
    body.classList.add('dialog-open');
  });
});

$$('.case-dialog').forEach((dialog) => {
  const close = () => {
    dialog.close();
    body.classList.remove('dialog-open');
  };
  $$('[data-close-dialog]', dialog).forEach((button) => button.addEventListener('click', close));
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('close', () => body.classList.remove('dialog-open'));
});

/* --------------------------------------------------------------------------
   Copy email
   -------------------------------------------------------------------------- */

const copyButton = $('#copy-email');
const liveRegion = $('#live-region');

function legacyCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try { document.execCommand('copy'); } catch (error) { /* noop */ }
  area.remove();
}

copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.email || 'support@nexorastudio.world';
  let copied = false;
  try {
    await navigator.clipboard.writeText(email);
    copied = true;
  } catch (error) {
    legacyCopy(email);
    copied = true;
  }
  const label = $('.copy-btn__label', copyButton);
  setText(label, copied ? 'Copied' : 'Copy');
  copyButton.classList.add('is-copied');
  if (liveRegion) liveRegion.textContent = copied ? t('Email address copied to clipboard.') : t('Could not copy the email address.');
  window.setTimeout(() => {
    copyButton.classList.remove('is-copied');
    setText(label, 'Copy');
  }, 2200);
});

/* --------------------------------------------------------------------------
   Contact form
   -------------------------------------------------------------------------- */

const contactForm = $('#contact-form');
if (contactForm) {
  const statusEl = $('#contact-status', contactForm);
  const submit = $('.contact-form__submit', contactForm);
  const submitLabel = $('.contact-form__submit-label', contactForm);
  const email = 'support@nexorastudio.world';
  let sending = false;

  // The homepage picker links here with ?type=…; preselect it if it is a real option.
  const presetType = new URLSearchParams(location.search).get('type');
  const typeSelect = contactForm.elements.projectType;
  if (presetType && typeSelect && [...typeSelect.options].some((o) => o.value === presetType)) {
    typeSelect.value = presetType;
  }

  function setFormState(state, key) {
    contactForm.dataset.state = state;
    contactForm.setAttribute('aria-busy', String(state === 'sending'));
    if (!statusEl) return;
    if (!key) {
      delete statusEl.dataset.i18n;
      statusEl.textContent = '';
      return;
    }
    setText(statusEl, key);
  }

  contactForm.addEventListener('input', () => {
    if (contactForm.dataset.state === 'error' || contactForm.dataset.state === 'success') {
      setFormState('idle', '');
    }
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
      budget: String(data.get('budget') || ''),
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
        if (liveRegion) liveRegion.textContent = t('Your brief is with us. A founder will reply personally.');
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

/* --------------------------------------------------------------------------
   Custom cursor
   -------------------------------------------------------------------------- */

const cursor = $('.cursor');
if (cursor && finePointer && !reduceMotion) {
  const dot = $('.cursor__dot', cursor);
  const ring = $('.cursor__ring', cursor);
  const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const ringPos = { ...target };
  let cursorSeen = false;
  let cursorFrame = 0;

  window.addEventListener('pointermove', (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    if (!cursorSeen) {
      cursorSeen = true;
      docEl.classList.add('has-cursor');
      ringPos.x = target.x;
      ringPos.y = target.y;
    }
    const interactive = event.target.closest('a, button, [data-tilt], .cap');
    cursor.classList.toggle('is-hover', Boolean(interactive));
    cursor.classList.remove('is-hidden');
  }, { passive: true });

  document.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
  document.addEventListener('pointerenter', () => cursor.classList.remove('is-hidden'));

  const drawCursor = () => {
    ringPos.x += (target.x - ringPos.x) * 0.14;
    ringPos.y += (target.y - ringPos.y) * 0.14;
    if (dot) dot.style.transform = `translate(${target.x}px, ${target.y}px) translate(-50%, -50%)`;
    if (ring) ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
    cursorFrame = window.requestAnimationFrame(drawCursor);
  };
  drawCursor();
  window.addEventListener('pagehide', () => window.cancelAnimationFrame(cursorFrame), { once: true });
}

/* --------------------------------------------------------------------------
   Magnetic pills + tilt cards
   -------------------------------------------------------------------------- */

if (finePointer && !reduceMotion) {
  $$('.pill, .copy-btn').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (event.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `translate(${dx * 4}px, ${dy * 3}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  $$('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1100px) rotateX(${(-py * 2.2).toFixed(2)}deg) rotateY(${(px * 2.6).toFixed(2)}deg)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* --------------------------------------------------------------------------
   Parallax
   -------------------------------------------------------------------------- */

const parallaxEls = $$('[data-parallax]');
function updateParallax() {
  if (reduceMotion || !parallaxEls.length) return;
  const mid = window.innerHeight / 2;
  parallaxEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
    const speed = Number(el.dataset.parallax || 0.08);
    const offset = -(rect.top + rect.height / 2 - mid) * speed;
    el.style.setProperty('--py', `${offset.toFixed(1)}px`);
  });
}
if (parallaxEls.length) {
  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax, { passive: true });
  updateParallax();
}

/* --------------------------------------------------------------------------
   Ticker duplicate
   -------------------------------------------------------------------------- */

$$('[data-marquee]').forEach((track) => {
  track.innerHTML += track.innerHTML;
});
