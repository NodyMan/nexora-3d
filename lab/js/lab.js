/* --------------------------------------------------------------------------
   Nexora Studio — lab additions (not deployed)
   1. Page transitions (view transitions, with a curtain fallback).
   2. Rolling link text.
   3. 2.5D work cards: each card is drawn twice on a 2D canvas, once in colour
      and once as a depth map (near = white), and a WebGL shader shifts pixels
      by depth as the pointer moves, so flat screenshots read as layered space.
   -------------------------------------------------------------------------- */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* ---------- Work cards: what goes into each picture ---------- */

const CARDS = {
  arise: {
    ratio: 1177 / 2560,
    colors: { base: '#2b21a8', glowA: '#7b6cff', glowB: '#c6ff3d' },
    shots: [
      { src: './assets/work/arise-skilltree.jpg', x: 0.25, y: 0.64, w: 0.24, rot: -9, depth: 0.5 },
      { src: './assets/work/arise-ari.jpg', x: 0.75, y: 0.64, w: 0.24, rot: 9, depth: 0.62 },
      { src: './assets/work/arise-welcome.jpg', x: 0.5, y: 0.55, w: 0.28, rot: 0, depth: 0.95 },
    ],
  },
  digitallib: {
    ratio: 900 / 2030,
    colors: { base: '#0f3a2c', glowA: '#2f9a74', glowB: '#c6ff3d' },
    shots: [
      { src: './assets/work/digitallib-reader.jpg', x: 0.25, y: 0.64, w: 0.24, rot: -9, depth: 0.5 },
      { src: './assets/work/digitallib-alif.jpg', x: 0.75, y: 0.64, w: 0.24, rot: 9, depth: 0.62 },
      { src: './assets/work/digitallib-home.jpg', x: 0.5, y: 0.55, w: 0.28, rot: 0, depth: 0.95 },
    ],
  },
};

const W = 1600;
const H = 1100;

const loadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Draws the card in colour and as a depth map from the same layout.
function compose(spec, images) {
  const color = document.createElement('canvas');
  const depth = document.createElement('canvas');
  color.width = depth.width = W;
  color.height = depth.height = H;
  const c = color.getContext('2d');
  const d = depth.getContext('2d');

  // Background: brand colour with two soft glows and a faint grid.
  c.fillStyle = spec.colors.base;
  c.fillRect(0, 0, W, H);
  for (const [x, y, r, col, a] of [[0.2, 0.1, 0.75, spec.colors.glowA, 0.9], [0.85, 0.95, 0.6, spec.colors.glowB, 0.55]]) {
    const g = c.createRadialGradient(x * W, y * H, 0, x * W, y * H, r * W);
    g.addColorStop(0, col);
    g.addColorStop(1, 'transparent');
    c.globalAlpha = a;
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
  }
  c.globalAlpha = 0.08;
  c.strokeStyle = '#ffffff';
  for (let x = 0; x <= W; x += 80) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
  for (let y = 0; y <= H; y += 80) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  c.globalAlpha = 1;

  // Depth of the background: far away, a little nearer at the bottom.
  const dg = d.createLinearGradient(0, 0, 0, H);
  dg.addColorStop(0, '#0a0a0a');
  dg.addColorStop(1, '#2a2a2a');
  d.fillStyle = dg;
  d.fillRect(0, 0, W, H);
  d.filter = 'blur(10px)';

  spec.shots.forEach((shot, i) => {
    const image = images[i];
    const pw = shot.w * W;
    const ph = pw / spec.ratio;
    const radius = pw * 0.13;
    const bezel = pw * 0.035;

    for (const [ctx, isDepth] of [[c, false], [d, true]]) {
      ctx.save();
      ctx.translate(shot.x * W, shot.y * H);
      ctx.rotate((shot.rot * Math.PI) / 180);
      if (isDepth) {
        const v = Math.round(shot.depth * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        roundRect(ctx, -pw / 2, -ph / 2, pw, ph, radius);
        ctx.fill();
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
        ctx.shadowBlur = 70;
        ctx.shadowOffsetY = 40;
        ctx.fillStyle = '#0b0b0e';
        roundRect(ctx, -pw / 2, -ph / 2, pw, ph, radius);
        ctx.fill();
        ctx.shadowColor = 'transparent';
        roundRect(ctx, -pw / 2 + bezel, -ph / 2 + bezel, pw - bezel * 2, ph - bezel * 2, radius - bezel);
        ctx.clip();
        if (image) ctx.drawImage(image, -pw / 2 + bezel, -ph / 2 + bezel, pw - bezel * 2, ph - bezel * 2);
        // A thin highlight along the glass.
        const sheen = ctx.createLinearGradient(-pw / 2, -ph / 2, pw / 2, ph / 2);
        sheen.addColorStop(0, 'rgba(255,255,255,0.18)');
        sheen.addColorStop(0.35, 'rgba(255,255,255,0)');
        ctx.fillStyle = sheen;
        ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      }
      ctx.restore();
    }
  });
  return { color, depth };
}

/* ---------- WebGL: shift pixels by depth ---------- */

const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform vec2 uMouse;
uniform float uHover;
uniform vec2 uCover;
varying vec2 vUv;
void main() {
  // Cover the canvas like background-size: cover, and zoom in a touch on hover.
  vec2 uv = (vUv - 0.5) * uCover / (1.0 + 0.04 * uHover) + 0.5;
  vec2 m = uMouse * (0.018 + 0.014 * uHover);
  float d = texture2D(uDepth, uv).r;
  d = texture2D(uDepth, uv - m * (d - 0.35)).r;
  vec2 duv = uv - m * (d - 0.35);
  float split = 0.0015 * uHover;
  vec3 col = vec3(
    texture2D(uColor, duv + vec2(split, 0.0)).r,
    texture2D(uColor, duv).g,
    texture2D(uColor, duv - vec2(split, 0.0)).b
  );
  float vignette = smoothstep(1.15, 0.3, length(vUv - 0.5));
  gl_FragColor = vec4(col * mix(0.82, 1.0, vignette), 1.0);
}`;

function makeCard(canvas, layers) {
  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
  if (!gl) return null;
  const shader = (type, source) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  };
  const program = gl.createProgram();
  gl.attachShader(program, shader(gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, shader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const texture = (unit, source) => {
    const t = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };
  texture(0, layers.color);
  texture(1, layers.depth);
  gl.uniform1i(gl.getUniformLocation(program, 'uColor'), 0);
  gl.uniform1i(gl.getUniformLocation(program, 'uDepth'), 1);
  const uMouse = gl.getUniformLocation(program, 'uMouse');
  const uHover = gl.getUniformLocation(program, 'uHover');
  const uCover = gl.getUniformLocation(program, 'uCover');

  const state = { mouse: [0, 0], target: [0, 0], hover: 0, hovering: false, visible: true };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    // Scale uv so the 1600x1100 picture covers whatever shape the card has.
    const ar = rect.width / rect.height;
    const src = W / H;
    gl.uniform2f(uCover, ar > src ? 1 : ar / src, ar > src ? src / ar : 1);
  }

  function draw(time) {
    if (!state.hovering && !REDUCED) {
      // A slow drift when the pointer is elsewhere, so the depth still reads.
      state.target = [Math.sin(time * 0.0006) * 0.35, Math.cos(time * 0.0005) * 0.25];
    }
    state.mouse[0] += (state.target[0] - state.mouse[0]) * 0.08;
    state.mouse[1] += (state.target[1] - state.mouse[1]) * 0.08;
    state.hover += ((state.hovering ? 1 : 0) - state.hover) * 0.08;
    gl.uniform2f(uMouse, state.mouse[0], state.mouse[1]);
    gl.uniform1f(uHover, state.hover);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  return { state, resize, draw };
}

async function setupCards(onProgress) {
  const cards = $$('[data-depth-card]');
  const live = [];
  let done = 0;
  const total = cards.reduce((n, card) => n + (CARDS[card.dataset.depthCard]?.shots.length || 0), 0) || 1;

  await Promise.all(cards.map(async (card) => {
    const spec = CARDS[card.dataset.depthCard];
    const canvas = card.querySelector('canvas');
    if (!spec || !canvas) return;
    const images = await Promise.all(spec.shots.map((shot) => loadImage(shot.src).then((img) => {
      done += 1;
      onProgress(done / total);
      return img;
    })));
    const layers = compose(spec, images);
    const view = makeCard(canvas, layers);
    if (!view) {
      // No WebGL: show the flat colour picture instead.
      canvas.replaceWith(Object.assign(layers.color, { style: 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover' }));
      return;
    }
    view.resize();
    new ResizeObserver(() => view.resize()).observe(canvas);
    const media = card.querySelector('.dcard__media');
    media.addEventListener('pointermove', (event) => {
      const rect = media.getBoundingClientRect();
      view.state.target = [((event.clientX - rect.left) / rect.width) * 2 - 1, -(((event.clientY - rect.top) / rect.height) * 2 - 1)];
      view.state.hovering = true;
    });
    media.addEventListener('pointerleave', () => { view.state.hovering = false; });
    new IntersectionObserver(([entry]) => { view.state.visible = entry.isIntersecting; }).observe(canvas);
    live.push(view);
  }));
  onProgress(1);

  // Test hook (only with ?scenedebug): draw the cards by hand when the tab cannot animate.
  if (new URLSearchParams(location.search).has('scenedebug')) {
    window.labCards = {
      draw(time = 0, mouse = null) {
        live.forEach((view) => {
          if (mouse) { view.state.target = mouse; view.state.hovering = true; }
          for (let i = 0; i < 60; i += 1) view.draw(time + i * 16);
        });
        return live.length;
      },
    };
  }

  const tick = (time) => {
    if (!document.hidden) live.forEach((view) => view.state.visible && view.draw(time));
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Curtain between pages ---------- */

function curtain() {
  // Browsers with cross-document view transitions animate pages from lab.css.
  if ('onpagereveal' in window) return;
  const el = document.createElement('div');
  el.className = 'lab-curtain';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<img src="./assets/logo-mark.png" alt="" width="56" height="56" />';
  document.body.appendChild(el);

  let arriving = false;
  try { arriving = sessionStorage.getItem('lab-curtain') === '1'; sessionStorage.removeItem('lab-curtain'); } catch (error) { /* private mode */ }
  if (arriving && !REDUCED) {
    el.classList.add('no-anim', 'is-covering');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.classList.remove('no-anim');
      el.classList.add('is-leaving');
    }));
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || REDUCED || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank') return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.hash) return;
    event.preventDefault();
    el.classList.remove('is-leaving', 'no-anim');
    el.classList.add('is-covering');
    try { sessionStorage.setItem('lab-curtain', '1'); } catch (error) { /* private mode */ }
    setTimeout(() => { location.href = url.href; }, 650);
  });

  // Coming back with the browser's back button restores a covered page; uncover it.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) el.classList.remove('is-covering');
  });
}

/* ---------- Rolling link text ---------- */

function rollingText() {
  const targets = $$('.site-nav a, .header-actions .btn, .actions .btn, .actions .link, .footer-grid a, .mobile-menu nav a');
  targets.forEach((link) => {
    const node = [...link.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim());
    if (!node) return;
    const roll = document.createElement('span');
    roll.className = 'roll';
    const inner = document.createElement('span');
    inner.className = 'roll__in';
    roll.appendChild(inner);
    link.insertBefore(roll, node);
    inner.appendChild(node);
    const sync = () => { inner.dataset.text = inner.textContent.trim(); };
    sync();
    // The language switch rewrites the text; keep the rolled-in copy in step.
    new MutationObserver(sync).observe(inner, { characterData: true, subtree: true, childList: true });
  });
}

/* ---------- Scroll reveal ---------- */

// Text rises in as it enters the screen. Without JS (or with reduced motion) it is simply there.
const REVEAL = [
  '.section-head > *', '.study__info > *', '.study__captions', '.timeline > li', '.rows > li', '.steps > li',
  '.people > li', '.figure', '.prose > *', '.article__meta', '.article__body > *', '.cta > *', '.contact__side > *',
].join(', ');

function scrollReveal() {
  const items = $$(REVEAL).filter((item) => !item.closest('.hero, form, .story'));
  if (!items.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      entry.target.dispatchEvent(new CustomEvent('reveal'));
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  items.forEach((item) => {
    // Siblings that enter together arrive one after another.
    const index = [...item.parentElement.children].indexOf(item);
    item.classList.add('reveal');
    item.style.setProperty('--rd', `${Math.min(index, 5) * 80}ms`);
    io.observe(item);
  });
  document.documentElement.classList.add('reveal-ready');
}

/* ---------- Studio figures count up when they appear ---------- */

function countUp() {
  $$('.figure b').forEach((el) => {
    const final = el.textContent;
    const match = final.match(/[\d.,]+/);
    if (!match) return;
    const target = parseFloat(match[0].replace(/,/g, ''));
    const decimals = (match[0].split('.')[1] || '').length;
    const format = (n) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const run = () => {
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - (1 - t) ** 4;
        el.textContent = t < 1 ? final.replace(match[0], format(target * eased)) : final;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      // If frames stall (background tab), still land on the real number.
      setTimeout(() => { el.textContent = final; }, 1600);
    };
    el.closest('.figure').addEventListener('reveal', run, { once: true });
  });
}

/* ---------- Team portraits tilt toward the pointer ---------- */

function tilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  $$('.person__mark').forEach((mark) => {
    const person = mark.closest('.person');
    person.addEventListener('pointermove', (event) => {
      const rect = mark.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mark.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
      mark.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
      mark.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
      mark.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    person.addEventListener('pointerleave', () => {
      ['--rx', '--ry'].forEach((name) => mark.style.setProperty(name, '0deg'));
    });
  });
}

/* ---------- Buttons lean toward the pointer ---------- */

function magnetic() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  $$('.actions .btn, .header-actions .btn, .cta .btn').forEach((btn) => {
    btn.classList.add('magnetic');
    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${(x * 0.25).toFixed(1)}px, ${(y * 0.35).toFixed(1)}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}

/* ---------- Journal reading progress ---------- */

function readingBar() {
  const articles = $$('.article');
  if (!articles.length) return;
  const bar = document.createElement('div');
  bar.className = 'read-bar';
  bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = '<i></i>';
  document.body.appendChild(bar);
  const first = articles[0];
  const last = articles[articles.length - 1];
  const update = () => {
    const top = first.getBoundingClientRect().top + scrollY - innerHeight * 0.3;
    const end = last.getBoundingClientRect().bottom + scrollY - innerHeight;
    const p = Math.min(1, Math.max(0, (scrollY - top) / Math.max(1, end - top)));
    bar.style.setProperty('--p', p.toFixed(4));
    bar.classList.toggle('is-on', p > 0 && p < 1);
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

/* ---------- Contact form: type chips, progress meter, ticks, growing textarea ---------- */

function formPolish() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const { name, email, message, projectType: select } = form.elements;

  // Project type as chips. The select stays as the real value for the form script.
  if (select) {
    const group = document.createElement('div');
    group.className = 'type-chips';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-labelledby', 'f-type-label');
    const options = [...select.options].filter((option) => option.value);
    const chips = options.map((option) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.dataset.value = option.value;
      chip.addEventListener('click', () => {
        select.value = select.value === option.value ? '' : option.value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        sync();
      });
      group.appendChild(chip);
      return chip;
    });
    const sync = () => chips.forEach((chip, i) => {
      chip.textContent = options[i].textContent;
      chip.setAttribute('aria-pressed', String(select.value === chip.dataset.value));
    });
    select.classList.add('is-chipped');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    select.after(group);
    // The language switch rewrites the option labels; follow it.
    new MutationObserver(sync).observe(select, { subtree: true, characterData: true, childList: true });
    select.addEventListener('change', sync);
    form.addEventListener('reset', () => setTimeout(sync));
    sync();
    // The form script may preselect a type from ?type= after this runs.
    setTimeout(sync);
  }

  // Three required fields fill the meter; each gets a tick when it is good.
  const checks = [
    [name, () => name.value.trim().length >= 2],
    [email, () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())],
    [message, () => message.value.trim().length >= 10],
  ];
  const meter = form.querySelector('.form__meter');
  const update = () => {
    let done = 0;
    checks.forEach(([input, ok]) => {
      const good = ok();
      input.closest('.field').classList.toggle('is-done', good);
      done += good ? 1 : 0;
    });
    if (meter) {
      meter.style.setProperty('--p', String(done / checks.length));
      meter.querySelector('b').textContent = `${done}/${checks.length}`;
    }
    form.classList.toggle('is-ready', done === checks.length);
  };

  // The textarea grows with the text instead of scrolling.
  const grow = () => {
    message.style.height = 'auto';
    message.style.height = `${Math.min(message.scrollHeight + 2, 520)}px`;
  };

  form.addEventListener('input', () => { update(); grow(); });
  form.addEventListener('reset', () => setTimeout(() => { update(); message.style.height = ''; }));
  update();
}

/* ---------- Start ---------- */

curtain();
rollingText();
countUp();
scrollReveal();
tilt();
magnetic();
readingBar();
formPolish();
setupCards(() => {});
