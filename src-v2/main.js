import { createField } from '../src/field.js';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(pointer: fine)').matches;
const body = document.body;

/* ---------- Split headings into masked words ---------- */
for (const el of $$('[data-split]')) {
  const words = el.textContent.trim().split(/\s+/);
  el.setAttribute('aria-label', words.join(' '));
  el.innerHTML = words
    .map((w, i) => `<span class="split-word" aria-hidden="true"><span style="--d:${i * 45}ms">${w}</span></span>`)
    .join(' ');
}

/* ---------- Statement: words light up with scroll ---------- */
const scrub = $('[data-scrub]');
let scrubWords = [];
if (scrub) {
  const words = scrub.textContent.trim().split(/\s+/);
  scrub.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(' ');
  scrubWords = $$('.word', scrub);
}

/* ---------- Loader ---------- */
// The inline boot script in index.html draws the loader; this bundle reports
// its own stage and the 3D scene's, then reveals the hero once it completes.
const boot = window.nxBoot;
boot?.mark('script');
const showPage = () => {
  body.classList.add('is-ready');
  revealHero();
};
if (boot) boot.whenDone(() => setTimeout(showPage, 350));
else requestAnimationFrame(showPage);

function revealHero() {
  $$('.hero [data-split], .hero [data-reveal]').forEach((el, i) => {
    el.style.setProperty('--d', `${i * 120}ms`);
    el.classList.add('is-in');
  });
}

/* ---------- Reveal on view ---------- */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
      if (e.target.matches('[data-count]')) countUp(e.target);
    }
  },
  { rootMargin: '0px 0px -12% 0px' },
);
$$('[data-reveal], [data-split], [data-count]').forEach((el) => {
  if (!el.closest('.hero')) io.observe(el);
});
// Stagger siblings that share a parent.
$$('.stats, .caps__list, .steps, .chapters, .beliefs__list, .people__list, .record__stats').forEach((group) => {
  $$('[data-reveal]', group).forEach((el, i) => el.style.setProperty('--d', `${i * 90}ms`));
});

function countUp(el) {
  const end = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const t0 = performance.now();
  const dur = REDUCED ? 1 : 1400;
  const plain = el.hasAttribute('data-plain');
  const format = (n) => (plain ? String(n) : end >= 1000 ? n.toLocaleString('en-US') : String(n).padStart(2, '0')) + suffix;
  const run = (now) => {
    const p = clamp((now - t0) / dur, 0, 1);
    el.textContent = format(Math.round(end * (1 - Math.pow(1 - p, 4))));
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

/* ---------- Smooth wheel scroll ---------- */
const smooth = { current: window.scrollY, target: window.scrollY, active: false };
const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

if (FINE && !REDUCED) {
  window.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey || body.classList.contains('menu-open')) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      if (!smooth.active) smooth.current = smooth.target = window.scrollY;
      smooth.target = clamp(smooth.target + delta, 0, maxScroll());
      smooth.active = true;
    },
    { passive: false },
  );
}

function scrollToY(y) {
  if (REDUCED) {
    window.scrollTo(0, y);
    return;
  }
  smooth.current = window.scrollY;
  smooth.target = clamp(y, 0, maxScroll());
  smooth.active = true;
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = id ? document.getElementById(id) : null;
  if (!el && id !== 'top') return;
  e.preventDefault();
  closeMenu();
  scrollToY(el ? el.getBoundingClientRect().top + window.scrollY : 0);
  history.replaceState(null, '', `#${id}`);
});

/* ---------- Menu ---------- */
const menuBtn = $('#menu-btn');
const menu = $('#menu');
function closeMenu() {
  body.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  $('.menu-btn__label').textContent = 'Menu';
}
menuBtn.addEventListener('click', () => {
  const open = !body.classList.contains('menu-open');
  if (!open) return closeMenu();
  body.classList.add('menu-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-hidden', 'false');
  $('.menu-btn__label').textContent = 'Close';
});
menu.addEventListener('click', (e) => {
  if (e.target === menu) closeMenu();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* ---------- Cursor + magnetic buttons ---------- */
const cursor = $('#cursor');
const cursorLabel = $('#cursor-label');
const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
const cur = { x: mouse.x, y: mouse.y };
if (FINE) {
  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const labelled = e.target.closest('[data-cursor]');
    cursor.classList.toggle('is-label', !!labelled);
    if (labelled) cursorLabel.textContent = labelled.dataset.cursor;
    cursor.classList.toggle('is-hover', !labelled && !!e.target.closest('a, button'));
    cursor.classList.toggle('is-dark', !!e.target.closest('.cta, .footer, .marquee, .record'));
  });

  for (const el of $$('[data-magnetic]')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  }
}

/* ---------- Clock ---------- */
const clocks = $$('[data-clock]');
const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tashkent' });
const tickClock = () => clocks.forEach((c) => (c.textContent = `FER ${fmt.format(new Date())}`));
tickClock();
setInterval(tickClock, 15000);

/* ---------- 3D fields ---------- */
const heroCanvas = $('#hero-canvas');
const hero = $('.hero');
const narrow = innerWidth < 720;
let heroProgress = 0;
// Sit the cluster to the right on wide screens so the headline stays clear.
const heroAnchor = (camera) => {
  const wide = camera.aspect > 1.1;
  return { x: wide ? 4.4 : 0, y: wide ? -0.4 : 2.6 };
};
const heroFields = [
  createField(heroCanvas, {
    count: narrow ? 18 : 28,
    tilt: [1.8, 1.1],
    anchor: heroAnchor,
    scrollFactor: () => heroProgress,
  }),
  // The front layer: a few large shapes drawn in front of everything, parked
  // on homes that frame the cluster but stay off the headline and the switch.
  createField($('#hero-front'), {
    count: narrow ? 3 : 4,
    sizes: [0.85, 1.2],
    pull: 3,
    homes: (camera) =>
      camera.aspect > 1.1
        ? [[-3.4, 5.2], [4.8, 3.9], [5.8, -2.2], [-1.6, -4.9]]
        : [[-3.4, 4.4], [3.4, 3.2], [-0.2, 7.2]],
    spread: 12,
    tilt: [1.8, 1.1],
    anchor: heroAnchor,
    scrollFactor: () => heroProgress,
  }),
].filter(Boolean);
// The loader's last stage is the first rendered frame of the hero scene.
if (heroFields.length) heroCanvas.addEventListener('field-ready', () => boot?.mark('scene'), { once: true });
else boot?.mark('scene');

/* ---------- Discipline switch: collapse, re-dress, burst ---------- */
const CAPTIONS = {
  all: 'Three disciplines. One accountable team.',
  mobile: 'Native-feeling iOS and Android on React Native and Expo.',
  web: 'Platforms and portals that are fast at the first paint.',
  ai: 'LLM mentors and agents with real guardrails.',
};
const switchEl = $('.switch');
const chips = $$('.chip', switchEl);
const caption = $('#switch-caption');
let switching = false;

chips.forEach((chip) =>
  chip.addEventListener('click', async () => {
    const variant = chip.dataset.variant;
    if (switching || chip.classList.contains('is-active')) return;
    switching = true;
    switchEl.classList.add('is-busy');
    chips.forEach((c) => {
      const on = c === chip;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    hero.dataset.variant = variant;
    caption.classList.add('is-swapping');
    // Swap the caption while the shapes are hidden at the centre.
    setTimeout(() => {
      caption.textContent = CAPTIONS[variant];
      caption.classList.remove('is-swapping');
    }, REDUCED ? 0 : 550);
    await Promise.all(heroFields.map((f) => f.morphTo(variant)));
    switching = false;
    switchEl.classList.remove('is-busy');
  }),
);

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
const pickCard = $('.picker__card');
if (pickCard) {
  const pchips = $$('.pchip');
  const lead = $('#pick-lead');
  const role = $('#pick-role');
  const steps = $('#pick-steps');
  const pickCta = $('#pick-cta');
  let swapTimer = 0;
  const render = (key) => {
    const p = PICKS[key];
    lead.textContent = p.lead;
    role.textContent = p.role;
    steps.innerHTML = p.steps.map((s) => `<li>${s}</li>`).join('');
    pickCta.href = `./contact.html?type=${encodeURIComponent(p.type)}`;
  };
  pchips.forEach((chip) =>
    chip.addEventListener('click', () => {
      if (chip.classList.contains('is-active')) return;
      pchips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      clearTimeout(swapTimer);
      if (REDUCED) return render(chip.dataset.pick);
      pickCard.classList.add('is-swapping');
      swapTimer = setTimeout(() => {
        render(chip.dataset.pick);
        pickCard.classList.remove('is-swapping');
      }, 260);
    }),
  );
}

/* ---------- Chapter rail: where you are in the story ---------- */
const rail = $('#rail');
const railNo = $('#rail-no');
const railName = $('#rail-name');
const railFill = $('#rail-fill');
const chapters = $$('[data-chapter]');
const DARK_CHAPTERS = new Set(['Our story', 'Contact']);

const ctaCanvas = $('#cta-canvas');
const cta = $('.cta');
let ctaProgress = 0;
createField(ctaCanvas, {
  count: innerWidth < 720 ? 14 : 22,
  palette: 'lime',
  spread: 10,
  anchor: (camera) => ({ x: camera.aspect > 1.1 ? 3.8 : 0, y: (camera.aspect > 1.1 ? 3 : 6) + (REDUCED ? 0 : (1 - ctaProgress) * -8) }),
  scrollFactor: () => 0,
});

/* ---------- Scroll-driven frame loop ---------- */
const header = $('#header');
const record = $('.record');
const recordPin = $('.record__pin');
// Phones and reduced motion get the static layout from CSS instead.
const pinRecord = () => !REDUCED && window.innerWidth > 720;
const marquee = $('#marquee');
const parallax = $$('[data-parallax]');
let lastY = window.scrollY;
let marqueeX = 0;
let velocity = 0;

function frame() {
  if (smooth.active) {
    smooth.current += (smooth.target - smooth.current) * 0.1;
    if (Math.abs(smooth.target - smooth.current) < 0.5) {
      smooth.current = smooth.target;
      smooth.active = false;
    }
    window.scrollTo(0, smooth.current);
  }

  const y = window.scrollY;
  const dy = y - lastY;
  velocity += (dy - velocity) * 0.15;
  lastY = y;
  const vh = window.innerHeight;

  if (y > vh * 0.6 && dy > 2 && !body.classList.contains('menu-open')) header.classList.add('is-hidden');
  if (dy < -2 || y < vh * 0.6) header.classList.remove('is-hidden');

  heroProgress = clamp(y / hero.offsetHeight, 0, 1);
  const ctaRect = cta.getBoundingClientRect();
  ctaProgress = clamp(1 - ctaRect.top / vh, 0, 1);
  const recordRect = record.getBoundingClientRect();
  // The record section, the CTA and the footer are dark.
  header.classList.toggle('is-dark', ctaRect.top < 40 || (recordRect.top < 40 && recordRect.bottom > 40));

  // Record: the giant number shrinks across the pinned stretch, then the word arrives.
  if (pinRecord()) {
    const r = recordPin.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
    const k = clamp(p / 0.75, 0, 1);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    record.style.setProperty('--e', e.toFixed(4));
    record.style.setProperty('--w', clamp((e - 0.55) / 0.45, 0, 1).toFixed(4));
  }

  if (rail && chapters.length) {
    // The current chapter is the last one whose top has passed mid-screen.
    let index = 0;
    for (let i = 0; i < chapters.length; i += 1) if (chapters[i].getBoundingClientRect().top < vh * 0.5) index = i;
    const name = chapters[index].dataset.chapter;
    if (railName.textContent !== name) {
      railName.textContent = name;
      railNo.textContent = `${String(index + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}`;
      rail.classList.toggle('is-dark', DARK_CHAPTERS.has(name));
    }
    rail.classList.toggle('is-on', y > vh * 0.5);
    railFill.style.transform = `scaleX(${clamp(y / Math.max(1, maxScroll()), 0, 1).toFixed(4)})`;
  }

  if (scrubWords.length) {
    const r = scrub.getBoundingClientRect();
    const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
    const lit = Math.round(p * scrubWords.length);
    scrubWords.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
  }

  if (!REDUCED) {
    marqueeX -= 1.1 + Math.abs(velocity) * 0.35;
    const half = marquee.scrollWidth / 2;
    if (-marqueeX >= half) marqueeX += half;
    marquee.style.transform = `translate3d(${marqueeX}px,0,0)`;

    for (const el of parallax) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty('--py', `${p * -40}px`);
    }
  }

  if (FINE) {
    cur.x += (mouse.x - cur.x) * 0.2;
    cur.y += (mouse.y - cur.y) * 0.2;
    cursor.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
  }

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
