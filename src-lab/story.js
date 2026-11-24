/* --------------------------------------------------------------------------
   Nexora Studio — lab: the history as a 3D scroll story (not deployed)
   A sticky full-screen canvas inside a tall section. Scrolling flies the
   camera down a tunnel of glowing rings and drifting dust, past our real app
   screens on the walls, to the silver Nexora logo at the end. Four chapters
   of the studio's history fade in and out along the way.
   Bundled to lab/js/story.js with:
     npx esbuild nexora-3d/src-lab/story.js --bundle --format=esm --minify --target=es2020 --outfile=nexora-3d/lab/js/story.js
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, LineSegments, Color, FogExp2, Vector2, Vector3,
  TorusGeometry, PlaneGeometry, BufferGeometry, BufferAttribute, ExtrudeGeometry, Shape,
  MeshBasicMaterial, PointsMaterial, LineBasicMaterial, MeshPhysicalMaterial, CanvasTexture,
  AdditiveBlending, DoubleSide, PointLight, HemisphereLight, PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace, MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const section = document.querySelector('.story');
const canvas = section?.querySelector('.story__canvas');

const BG = 0x0b0a1f;
const LIME = 0xc6ff3d;
const VIOLET = 0x6a5cf0;
const RADIUS = 6;
const LENGTH = 168;
const SCREENS = [
  './assets/work/arise-welcome.jpg',
  './assets/work/digitallib-home.jpg',
  './assets/work/arise-skilltree.jpg',
  './assets/work/digitallib-reader.jpg',
  './assets/work/arise-ari.jpg',
  './assets/work/digitallib-alif.jpg',
];

const smooth = (t) => t * t * (3 - 2 * t);
// How visible a chapter is at scroll progress p, for a window [a, b].
const windowed = (p, a, b, fade = 0.04) => smooth(MathUtils.clamp((p - a) / fade, 0, 1)) * smooth(MathUtils.clamp((b - p) / fade, 0, 1));

/* The Nexora mark: two concave four-pointed halves split on a diagonal. */
function logoMesh() {
  const pieces = [
    [[160, 15], [292, 148], [185, 210], [128, 97]],
    [[47, 185], [150, 128], [208, 240], [175, 322]],
  ];
  const apart = [[0.045, 0.045], [-0.045, -0.045]];
  const chrome = new MeshPhysicalMaterial({ color: 0xe4e8ee, metalness: 0.9, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.05 });
  const group = new Group();
  pieces.forEach((tips, k) => {
    const pts = tips.map(([x, y]) => [(x - 170) / 130, -(y - 168) / 130]);
    const cx = pts.reduce((s, p) => s + p[0], 0) / 4;
    const cy = pts.reduce((s, p) => s + p[1], 0) / 4;
    const shape = new Shape();
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 0; i < 4; i += 1) {
      const a = pts[i];
      const b = pts[(i + 1) % 4];
      const mx = (a[0] + b[0]) / 2;
      const my = (a[1] + b[1]) / 2;
      shape.quadraticCurveTo(mx + (cx - mx) * 0.62, my + (cy - my) * 0.62, b[0], b[1]);
    }
    const geometry = new ExtrudeGeometry(shape, { depth: 0.26, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.045, bevelSegments: 10, curveSegments: 40 });
    geometry.translate(apart[k][0], apart[k][1], -0.13);
    group.add(new Mesh(geometry, chrome));
  });
  return group;
}

/* A phone-shaped card with one of our screenshots, as a texture. */
function screenTexture(image) {
  const w = 460;
  const h = 1000;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  const r = 56;
  const round = (x, y, ww, hh, rr) => {
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + ww, y, x + ww, y + hh, rr);
    ctx.arcTo(x + ww, y + hh, x, y + hh, rr);
    ctx.arcTo(x, y + hh, x, y, rr);
    ctx.arcTo(x, y, x + ww, y, rr);
    ctx.closePath();
  };
  ctx.fillStyle = '#050507';
  round(0, 0, w, h, r);
  ctx.fill();
  ctx.save();
  round(14, 14, w - 28, h - 28, r - 14);
  ctx.clip();
  if (image) ctx.drawImage(image, 14, 14, w - 28, h - 28);
  ctx.restore();
  ctx.strokeStyle = 'rgba(198, 255, 61, 0.55)';
  ctx.lineWidth = 4;
  round(2, 2, w - 4, h - 4, r);
  ctx.stroke();
  const texture = new CanvasTexture(c);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const loadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });

async function init() {
  if (!section || !canvas) return;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch (error) {
    section.classList.add('story--flat');
    return;
  }
  const mobile = window.innerWidth <= 860;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
  renderer.setClearColor(BG, 1);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  const scene = new Scene();
  scene.fog = new FogExp2(BG, 0.035);
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  scene.add(new HemisphereLight(0xb9b2ff, 0x0b0a1f, 0.6));

  const camera = new PerspectiveCamera(60, 1, 0.1, 120);

  /* Rings along the tunnel; every fifth one glows lime. */
  const rings = new Group();
  const ringGeo = new TorusGeometry(RADIUS, 0.022, 8, 160);
  for (let i = 0; i < 44; i += 1) {
    const lime = i % 5 === 0;
    const ring = new Mesh(ringGeo, new MeshBasicMaterial({
      color: lime ? LIME : VIOLET, transparent: true, opacity: lime ? 0.95 : 0.45, blending: AdditiveBlending, depthWrite: false,
    }));
    ring.position.z = -i * 4;
    ring.userData.spin = (i % 2 ? 1 : -1) * (0.04 + (i % 3) * 0.02);
    rings.add(ring);
  }
  scene.add(rings);

  /* Long lines along the tunnel wall. */
  const lineCount = 28;
  const linePos = new Float32Array(lineCount * 6);
  for (let i = 0; i < lineCount; i += 1) {
    const a = (i / lineCount) * Math.PI * 2;
    linePos.set([Math.cos(a) * RADIUS, Math.sin(a) * RADIUS, 6, Math.cos(a) * RADIUS, Math.sin(a) * RADIUS, -LENGTH - 10], i * 6);
  }
  const lineGeo = new BufferGeometry();
  lineGeo.setAttribute('position', new BufferAttribute(linePos, 3));
  scene.add(new LineSegments(lineGeo, new LineBasicMaterial({ color: VIOLET, transparent: true, opacity: 0.22 })));

  /* Dust: points inside the tunnel. */
  const dustCount = mobile ? 900 : 2200;
  const dust = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * (RADIUS - 0.4);
    dust.set([Math.cos(a) * r, Math.sin(a) * r, 6 - Math.random() * (LENGTH + 20)], i * 3);
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new BufferAttribute(dust, 3));
  const dustPoints = new Points(dustGeo, new PointsMaterial({ color: 0xdcd8ff, size: 0.05, transparent: true, opacity: 0.8, depthWrite: false }));
  scene.add(dustPoints);

  /* Our app screens on the walls, on a slow spiral. */
  const images = await Promise.all(SCREENS.map(loadImage));
  const textures = images.map(screenTexture);
  const panelGeo = new PlaneGeometry(1.5, 1.5 / 0.46);
  const panels = [];
  for (let i = 0; i < 16; i += 1) {
    const a = i * 2.2 + 0.6;
    const z = -10 - i * 8.5;
    const panel = new Mesh(panelGeo, new MeshBasicMaterial({ map: textures[i % textures.length], color: 0xa9a9b4, side: DoubleSide, transparent: true, fog: true }));
    panel.position.set(Math.cos(a) * (RADIUS - 1.2), Math.sin(a) * (RADIUS - 1.2), z);
    panel.lookAt(0, 0, z + 3);
    panel.userData.base = panel.position.clone();
    panel.userData.phase = i;
    scene.add(panel);
    panels.push(panel);
  }

  /* The logo at the end of the tunnel, with a lime light behind it. */
  const logo = logoMesh();
  logo.position.set(0, 0, -LENGTH);
  logo.scale.setScalar(1.6);
  scene.add(logo);
  const glow = new PointLight(LIME, 40, 30, 2);
  glow.position.set(0, 0, -LENGTH - 3);
  scene.add(glow);
  const fill = new PointLight(0xffffff, 18, 20, 2);
  fill.position.set(2, 3, -LENGTH + 6);
  scene.add(fill);

  /* Post: bloom on the glowing rings (desktop only). */
  let composer = null;
  if (!mobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new Vector2(1, 1), 1.1, 0.5, 0.82));
    composer.addPass(new OutputPass());
  }

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    composer?.setSize(w, h);
    camera.aspect = w / h;
    camera.fov = w < h ? 72 : 60;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  /* Scroll progress through the section, 0..1. */
  const ui = {
    head: section.querySelector('.story__head'),
    chapters: [...section.querySelectorAll('.story__chapter')],
    count: section.querySelector('.story__count'),
    bar: section.querySelector('.story__bar i'),
  };
  const WINDOWS = [[0.06, 0.27], [0.3, 0.51], [0.54, 0.75], [0.78, 1.02]];
  let progress = 0;
  let eased = 0;
  const readScroll = () => {
    const rect = section.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    progress = MathUtils.clamp(-rect.top / Math.max(span, 1), 0, 1);
  };
  window.addEventListener('scroll', readScroll, { passive: true });
  readScroll();

  const pointer = new Vector2();
  section.addEventListener('pointermove', (event) => {
    pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
  }, { passive: true });

  function updateUi(p) {
    if (ui.head) {
      const o = 1 - smooth(MathUtils.clamp((p - 0.02) / 0.05, 0, 1));
      ui.head.style.opacity = o.toFixed(3);
      ui.head.style.transform = `translateY(${(-30 * (1 - o)).toFixed(1)}px)`;
    }
    let current = 0;
    ui.chapters.forEach((el, i) => {
      const o = windowed(p, WINDOWS[i][0], WINDOWS[i][1]);
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translateY(${(24 * (1 - o)).toFixed(1)}px)`;
      el.style.visibility = o < 0.01 ? 'hidden' : 'visible';
      if (p >= WINDOWS[i][0]) current = i;
    });
    if (ui.count) ui.count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(ui.chapters.length).padStart(2, '0')}`;
    if (ui.bar) ui.bar.style.transform = `scaleX(${p.toFixed(4)})`;
  }

  const target = new Vector3();
  function step(dt, t) {
    eased += (progress - eased) * Math.min(1, dt * 4);
    const p = eased;
    // Fly from the entrance to just in front of the logo.
    const z = 6 - smooth(p) * (LENGTH - 7);
    const sway = 1 - smooth(MathUtils.clamp((p - 0.85) / 0.15, 0, 1));
    camera.position.set(
      Math.sin(p * Math.PI * 3) * 1.1 * sway + pointer.x * 0.4,
      Math.cos(p * Math.PI * 2) * 0.6 * sway + pointer.y * 0.3,
      z,
    );
    target.set(camera.position.x * 0.3, camera.position.y * 0.3, z - 10);
    camera.lookAt(target);
    camera.rotation.z += Math.sin(p * Math.PI * 4) * 0.06 * sway;

    rings.children.forEach((ring) => { ring.rotation.z += ring.userData.spin * dt; });
    panels.forEach((panel) => {
      panel.position.y = panel.userData.base.y + Math.sin(t * 0.8 + panel.userData.phase) * 0.12;
    });
    dustPoints.rotation.z += dt * 0.02;
    logo.rotation.y = Math.sin(t * 0.5) * 0.5 + pointer.x * 0.3;
    logo.rotation.x = Math.sin(t * 0.35) * 0.15 - pointer.y * 0.2;
    glow.intensity = 25 + smooth(MathUtils.clamp((p - 0.7) / 0.3, 0, 1)) * 60;
    updateUi(p);
  }

  function render() {
    if (composer) composer.render();
    else renderer.render(scene, camera);
  }

  let visible = false;
  let frame = 0;
  let last = performance.now();
  let clock = 0;
  const tick = (now) => {
    frame = 0;
    if (!visible || document.hidden) return;
    const dt = Math.min((now - last) / 1000, 1 / 20);
    last = now;
    clock += dt;
    step(dt, clock);
    render();
    frame = requestAnimationFrame(tick);
  };
  const start = () => {
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  }).observe(section);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });

  // Test hook (only with ?scenedebug): set the scroll position of the story and draw.
  if (new URLSearchParams(location.search).has('scenedebug')) {
    window.labStory = {
      at(p) {
        progress = p;
        eased = p;
        for (let i = 0; i < 30; i += 1) { clock += 1 / 60; step(1 / 60, clock); }
        render();
        return p;
      },
    };
  }

  section.classList.add('story--ready');
}

init();
