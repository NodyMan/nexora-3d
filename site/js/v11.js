// Nexora Studio — site v11 motion engine.
// Uses GSAP + ScrollTrigger + Lenis from the CDN when they load; without them
// the pages stay fully readable and static.
(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const pointer = { x: innerWidth * 0.7, y: innerHeight * 0.4, tx: innerWidth * 0.7, ty: innerHeight * 0.4, moved: 0 };
  let scrollVel = 0;

  /* ======================================================================
     Live background: a pixel field that waves, follows the pointer,
     sends out ripples, and flows with the scroll.
     ====================================================================== */
  function field() {
    const canvas = $('.bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const glow = $('.bg-glow');
    const CELL = 22;
    const R = 240;
    let w, h, cols, rows, seeds, phase = 0, last = 0;
    const ripples = [];

    const resize = () => {
      const dpr = 1;
      w = innerWidth; h = innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL) + 1; rows = Math.ceil(h / CELL) + 1;
      seeds = new Float32Array(cols * rows).map(() => Math.random());
    };
    resize();
    addEventListener('resize', resize);

    let lastRipple = 0;
    addEventListener('pointermove', (e) => {
      const dx = e.clientX - pointer.tx, dy = e.clientY - pointer.ty;
      pointer.tx = e.clientX; pointer.ty = e.clientY; pointer.moved = performance.now();
      const now = performance.now();
      if (Math.hypot(dx, dy) > 18 && now - lastRipple > 140) {
        ripples.push({ x: e.clientX, y: e.clientY, t: now, power: 0.35 });
        lastRipple = now;
      }
    }, { passive: true });
    addEventListener('pointerdown', (e) => ripples.push({ x: e.clientX, y: e.clientY, t: performance.now(), power: 1 }), { passive: true });

    const draw = (now) => {
      const dt = Math.min(50, now - last || 16); last = now;
      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      if (glow) glow.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
      phase += (reduced ? 0 : dt * 0.0004) + scrollVel * 0.004;
      scrollVel *= 0.9;
      for (let i = ripples.length - 1; i >= 0; i--) if (now - ripples[i].t > 1800) ripples.splice(i, 1);

      ctx.clearRect(0, 0, w, h);
      const idle = Math.min(1, (now - pointer.moved) / 2500);
      for (let y = 0; y < rows; y++) {
        const cy = y * CELL + CELL / 2;
        for (let x = 0; x < cols; x++) {
          const cx = x * CELL + CELL / 2;
          const s = seeds[y * cols + x];
          const v = Math.sin(x * 0.11 + phase * 2.2) + Math.sin(y * 0.15 - phase * 1.6 + x * 0.04);
          let a = Math.max(0, v - 1.05) * 0.12 * (0.5 + s);
          let hot = 0;
          // Pointer halo
          const d = Math.hypot(cx - pointer.x, cy - pointer.y);
          if (d < R) {
            const k = 1 - d / R;
            a += k * k * 0.42 * (1 - idle * 0.5);
            if (k > 0.45 && s > 0.55) hot = k;
          }
          // Ripples
          if (ripples.length) for (const r of ripples) {
            const age = now - r.t;
            const rad = age * 0.55;
            const ring = Math.abs(Math.hypot(cx - r.x, cy - r.y) - rad);
            if (ring < 36) {
              const f = (1 - ring / 36) * (1 - age / 1800) * r.power;
              a += f * 0.6;
              if (s > 0.7) hot = Math.max(hot, f);
            }
          }
          if (a < 0.025) continue;
          const size = (CELL - 4) * Math.min(1.25, 0.55 + a * 1.4);
          const off = (CELL - size) / 2;
          ctx.fillStyle = hot > 0.2
            ? `rgba(255,106,43,${Math.min(0.95, a * 1.6)})`
            : `rgba(236,230,216,${Math.min(0.3, a)})`;
          ctx.fillRect(x * CELL + off, y * CELL + off, size, size);
        }
      }
    };

    const loop = (t) => { if (!document.hidden) draw(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }

  /* ======================================================================
     Header, menu
     ====================================================================== */
  function header() {
    const top = $('.top');
    let last = scrollY;
    addEventListener('scroll', () => {
      const y = scrollY;
      top.classList.toggle('is-scrolled', y > 40);
      if (Math.abs(y - last) > 6) {
        top.classList.toggle('is-hidden', y > last && y > 300 && !root.classList.contains('is-menu'));
        last = y;
      }
    }, { passive: true });
    const btn = $('.top__menu'), drawer = $('.drawer');
    btn?.addEventListener('click', () => {
      const open = !drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', open);
      root.classList.toggle('is-menu', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  /* ======================================================================
     Text helpers
     ====================================================================== */
  // Wraps every word in a mask: <span class="sl"><span>word</span></span>. Keeps <em>, <br>, links.
  function split(el) {
    if (el.dataset.splitDone) return $$('.sl > span', el);
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const parts = n.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
            const outer = document.createElement('span'); outer.className = 'sl';
            const inner = document.createElement('span'); inner.textContent = p;
            outer.appendChild(inner); frag.appendChild(outer);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    };
    walk(el);
    $$('.sl', el).forEach((s) => { s.style.display = 'inline-block'; });
    el.dataset.splitDone = '1';
    return $$('.sl > span', el);
  }

  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>_';
  function scramble(el) {
    const final = el.dataset.text || (el.dataset.text = el.textContent);
    let f = 0; const total = 22;
    const step = () => {
      f++;
      el.textContent = final.split('').map((ch, i) =>
        /[\s—·.]/.test(ch) || f / total > i / final.length ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join('');
      if (f < total + 2) requestAnimationFrame(step); else el.textContent = final;
    };
    step();
  }

  /* ======================================================================
     Page transitions: an apricot curtain with the next page's name.
     ====================================================================== */
  function transitions(gsap) {
    const curtain = $('.curtain');
    const word = $('b', curtain);
    // Replace the CSS translateY(100%) (which GSAP would read as pixels) with a percent offset.
    gsap.set(curtain, { y: 0, yPercent: 100 });
    let came = false;
    try { came = sessionStorage.getItem('nx-v11-curtain') === '1'; sessionStorage.removeItem('nx-v11-curtain'); } catch {}

    const intro = () => document.dispatchEvent(new Event('nx:intro'));
    if (came) {
      word.textContent = document.body.dataset.page || '';
      gsap.set(curtain, { yPercent: 0 }); gsap.set(word, { opacity: 1 });
      gsap.timeline()
        .to(word, { yPercent: -60, opacity: 0, duration: 0.3, ease: 'power3.in' })
        .to(curtain, { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, '-=0.1')
        .add(intro, '-=0.45');
    } else {
      gsap.set(curtain, { yPercent: 100 });
      intro();
    }

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname) || (url.pathname === location.pathname && url.hash)) return;
      e.preventDefault();
      word.textContent = a.dataset.name || a.textContent.trim().replace(/[→↗+]/g, '').trim();
      try { sessionStorage.setItem('nx-v11-curtain', '1'); } catch {}
      prefetch(url.href);
      gsap.timeline({ onComplete: () => { location.href = url.href; } })
        .fromTo(curtain, { yPercent: 100 }, { yPercent: 0, duration: 0.5, ease: 'expo.inOut' })
        .fromTo(word, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.25, ease: 'power3.out' }, '-=0.2');
    });

    // Fetch the next page while the pointer is still on the link, so it opens instantly.
    const done = new Set();
    function prefetch(href) {
      if (done.has(href)) return;
      done.add(href);
      const l = document.createElement('link');
      l.rel = 'prefetch'; l.href = href;
      document.head.appendChild(l);
    }
    const warm = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.origin === location.origin && url.pathname !== location.pathname) prefetch(url.href);
    };
    document.addEventListener('pointerover', warm, { passive: true });
    document.addEventListener('touchstart', warm, { passive: true });
    addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(curtain, { yPercent: 100 }); });
  }

  /* ======================================================================
     Scroll scenes
     ====================================================================== */
  function scenes(gsap, ScrollTrigger) {
    const mm = gsap.matchMedia();

    // Hero: words rise in, then the title drifts up and fades while you scroll away.
    const hero = $('.hero');
    if (hero) {
      const title = $('.hero__title', hero);
      const words = split(title);
      gsap.set(words, { yPercent: 115 });
      gsap.set($$('.hero__kicker, .hero__foot, .hero__hint', hero), { opacity: 0, y: 24 });
      document.addEventListener('nx:intro', () => {
        gsap.to(words, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.06 });
        gsap.to($$('.hero__kicker, .hero__foot, .hero__hint', hero), { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.1, delay: 0.35 });
        const k = $('.hero__kicker', hero); if (k) scramble(k);
      }, { once: true });
      gsap.to(title, { yPercent: -18, opacity: 0.15, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to($('.hero__foot', hero), { y: -60, opacity: 0, ease: 'none', scrollTrigger: { trigger: hero, start: '30% top', end: '80% top', scrub: true } });
    }

    // Headings with data-split: words rise from their masks when they enter.
    $$('[data-split]').forEach((el) => {
      if (el.closest('.hero')) return;
      const words = split(el);
      gsap.fromTo(words, { yPercent: 115 }, {
        yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.05,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Labels scramble in.
    $$('.label').forEach((el) => {
      if (el.closest('.hero')) return;
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => scramble(el) });
    });

    // Fades, batched so neighbours cascade.
    ScrollTrigger.batch('[data-fade]', {
      start: 'top 88%', once: true,
      onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.09, overwrite: true }),
    });

    // Clip reveals for media blocks; images inside zoom out as they open.
    $$('[data-clip]').forEach((el) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
      tl.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'expo.inOut' })
        .from($$('img', el), { yPercent: 30, rotate: (i) => (i - 1) * 6, duration: 1.4, ease: 'expo.out', stagger: 0.08 }, '-=0.9');
    });

    // Phones float at different speeds inside their frames.
    $$('.case__media').forEach((m) => {
      $$('img', m).forEach((img, i) => {
        gsap.to(img, { yPercent: [-14, 10, -22][i % 3], ease: 'none', scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    });

    // Statement: words light up with the scroll.
    $$('[data-words]').forEach((el) => {
      el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
      gsap.to($$('.w', el), { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
    });

    // Counters.
    $$('[data-count]').forEach((el) => {
      const end = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimals || '0', 10);
      const o = { v: 0 };
      gsap.to(o, { v: end, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.textContent = o.v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }); } });
    });

    // Marquee: drifts on its own, speeds up and turns with the scroll.
    $$('.marquee__row').forEach((row) => {
      row.innerHTML += row.innerHTML;
      let x = 0, dir = -1;
      gsap.ticker.add(() => {
        const half = row.scrollWidth / 2;
        dir = scrollVel > 0.5 ? -1 : scrollVel < -0.5 ? 1 : dir;
        x += dir * ((reduced ? 0 : 0.6) + Math.min(14, Math.abs(scrollVel) * 0.5));
        if (x <= -half) x += half; if (x > 0) x -= half;
        row.style.transform = `translate3d(${x}px,0,0)`;
      });
    });

    // Desktop-only pinned scenes.
    mm.add('(min-width: 861px)', () => {
      // "What we do": pinned, each discipline takes its turn.
      $$('.doing').forEach((sec) => {
        const items = $$('.doing__item', sec), copies = $$('.doing__copy p', sec), bar = $('.doing__bar i', sec);
        const set = (i) => { items.forEach((it, j) => it.classList.toggle('is-on', j === i)); copies.forEach((c, j) => c.classList.toggle('is-on', j === i)); };
        set(0);
        ScrollTrigger.create({
          trigger: sec, start: 'top top', end: () => '+=' + innerHeight * items.length * 0.75, pin: true, scrub: true,
          onUpdate: (st) => { set(Math.min(items.length - 1, Math.floor(st.progress * items.length))); if (bar) bar.style.width = st.progress * 100 + '%'; },
        });
        gsap.from(items, { xPercent: -12, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: sec, start: 'top 70%', once: true } });
      });

      // Horizontal tracks: pin and slide the rail sideways.
      $$('.track').forEach((sec) => {
        const rail = $('.track__rail', sec);
        const dist = () => Math.max(0, rail.scrollWidth - innerWidth);
        const tween = gsap.to(rail, { x: () => -dist(), ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
        $$('.panel', rail).forEach((p) => {
          gsap.from(p, { rotate: 4, yPercent: 12, opacity: 0.3, ease: 'none',
            scrollTrigger: { trigger: p, containerAnimation: tween, start: 'left right', end: 'left 60%', scrub: true } });
        });
      });

      // Stacked cards: the card underneath shrinks and dims as the next one covers it.
      $$('.stack').forEach((sec) => {
        const cards = $$('.stack__card', sec);
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.to(card, { scale: 0.9, filter: 'brightness(0.55)', ease: 'none',
            scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 100px', scrub: true } });
        });
      });
    });

    // Next-page title slides in.
    $$('.next__title').forEach((t) => {
      gsap.from($$('span', t), { xPercent: -20, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: t, start: 'top 90%', once: true } });
    });

    addEventListener('load', () => ScrollTrigger.refresh());
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }

  /* ======================================================================
     Founder profiles (native <dialog>)
     ====================================================================== */
  function profiles(gsap) {
    $$('[data-profile]').forEach((btn) => {
      const dlg = document.getElementById(btn.dataset.profile);
      if (!dlg) return;
      const inner = $('.profile__inner', dlg);
      const ini = $('.profile__ini', dlg);
      const parts = $$('.profile__body > *', dlg);
      btn.addEventListener('click', () => {
        dlg.showModal(); window.__lenis?.stop();
        root.classList.add('is-modal');
        if (gsap) {
          gsap.fromTo(inner, { clipPath: 'inset(50% 0 50% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 0.7, ease: 'expo.inOut' });
          gsap.fromTo(ini, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'expo.out', delay: 0.25 });
          gsap.fromTo(parts, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.05, delay: 0.3 });
        }
      });
      const close = () => {
        if (!dlg.open) return;
        const end = () => { dlg.close(); root.classList.remove("is-modal"); window.__lenis?.start(); };
        if (gsap) gsap.to(inner, { clipPath: 'inset(50% 0 50% 0)', duration: 0.45, ease: 'expo.in', onComplete: end }); else end();
      };
      $('[data-close]', dlg).addEventListener('click', close);
      dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
      dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
      dlg.addEventListener('close', () => root.classList.remove('is-modal'));
    });
  }

  /* ======================================================================
     Boot
     ====================================================================== */
  function boot() {
    field();
    header();
    addEventListener('scroll', (() => { let y = scrollY; return () => { scrollVel += (scrollY - y) * 0.15; y = scrollY; }; })(), { passive: true });

    const { gsap, ScrollTrigger, Lenis } = window;
    profiles(gsap);
    if (!gsap || !ScrollTrigger) return; // static, readable pages
    gsap.registerPlugin(ScrollTrigger);
    root.classList.add('motion');

    // With the OS 'reduce motion' setting on, skip smooth scrolling; scroll-linked scenes still follow the user's own scroll.
    if (Lenis && !reduced) {
      const lenis = window.__lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
        const target = $(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -40, duration: 1.4 }); }
      }));
    }
    scenes(gsap, ScrollTrigger);
    transitions(gsap);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
