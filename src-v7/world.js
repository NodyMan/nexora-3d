/* --------------------------------------------------------------------------
   v7 world: one bright 3D scene behind the whole home page.
   The camera travels down through stations as the page scrolls:
     0 hero      – the Nexora mark in iridescent glass, candy shapes around it
     1 services  – four glossy icons: phone, browser, AI spark, pencil
     2 Arise     – three phones with real Arise screens
     3 IDrok     – three phones with real IDrok screens
     4 process   – four ice crystals that light up one by one
     5 contact   – the glass mark again, with shapes orbiting it
   A flowing pastel gradient sits behind everything (attached to the camera)
   so the glass refracts it; its accent colour shifts per station.
   Inner pages use mode 'page': only the mark and a few shapes, no journey.
   Everything is generated in code; there are no model files.
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Shape, ExtrudeGeometry, Mesh, MeshPhysicalMaterial,
  PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace, Vector2, Vector3, Color, PlaneGeometry,
  ShaderMaterial, MeshBasicMaterial, DoubleSide, SphereGeometry, TorusGeometry, CapsuleGeometry,
  CylinderGeometry, Raycaster, Plane, DirectionalLight, AmbientLight, TextureLoader, CanvasTexture,
  PointLight,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const PALETTE = {
  base: '#f4f0ff', lavender: '#b9a6ff', sky: '#8fd0ff', peach: '#ffb48f', pink: '#ff8fc8', lime: '#c6ff3d', mint: '#7ff0c8',
};
// Accent blob in the gradient, per station.
const ACCENTS = ['#7ff0c8', '#d9ff6a', '#9d8cff', '#6fe3b4', '#8fd0ff', '#ff9ccf'];
const SPACING = 14;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ---------- Gradient ---------- */
const GRADIENT_VERT = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const GRADIENT_FRAG = `
precision highp float;
uniform float uTime; uniform float uAspect; uniform vec2 uPointer;
uniform vec3 uBase, uC1, uC2, uC3, uC4, uC5;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; } return v; }
vec3 blob(vec3 col, vec3 c, vec2 uv, vec2 at, float size, float strength) {
  float d = length((uv - at) * vec2(uAspect, 1.0)); return mix(col, c, smoothstep(size, 0.0, d) * strength); }
void main() {
  float t = uTime * 0.06; vec2 uv = vUv;
  vec2 warp = vec2(fbm(uv * 2.2 + t), fbm(uv * 2.2 - t + 7.3)) - 0.5; uv += warp * 0.22;
  vec3 col = uBase;
  col = blob(col, uC1, uv, vec2(0.25 + 0.12 * sin(t * 3.1), 0.72 + 0.1 * cos(t * 2.3)), 0.75, 0.8);
  col = blob(col, uC2, uv, vec2(0.78 + 0.1 * cos(t * 2.7), 0.78 + 0.08 * sin(t * 1.9)), 0.7, 0.75);
  col = blob(col, uC3, uv, vec2(0.7 + 0.12 * sin(t * 1.7), 0.22 + 0.1 * cos(t * 2.9)), 0.65, 0.7);
  col = blob(col, uC4, uv, vec2(0.18 + 0.1 * cos(t * 2.2), 0.2 + 0.12 * sin(t * 2.6)), 0.6, 0.55);
  col = blob(col, uC5, uv, mix(vec2(0.66, 0.5), uPointer, 0.3), 0.45, 0.55);
  col += (hash(vUv * 1000.0 + uTime) - 0.5) * 0.018;
  gl_FragColor = vec4(col, 1.0);
}`;

/* ---------- Shapes from the logo ---------- */
const SHARDS = [
  [[160, 15], [292, 148], [183, 193], [127, 96]],
  [[148, 125], [208, 240], [175, 322], [47, 185]],
];
function curvedShape(points, center, scale, pull = 0.38) {
  const v = points.map(([x, y]) => new Vector2((x - center) / scale, -(y - center) / scale));
  const mid = v.reduce((acc, p) => acc.add(p), new Vector2()).multiplyScalar(1 / v.length);
  const shape = new Shape();
  shape.moveTo(v[0].x, v[0].y);
  for (let i = 0; i < v.length; i += 1) {
    const a = v[i];
    const b = v[(i + 1) % v.length];
    const control = a.clone().add(b).multiplyScalar(0.5).lerp(mid, pull);
    shape.quadraticCurveTo(control.x, control.y, b.x, b.y);
  }
  return shape;
}

function studio() {
  const room = new Scene();
  room.background = new Color('#f2eefc');
  const panel = (w, h, color, power, position) => {
    const mesh = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(power), side: DoubleSide }));
    mesh.position.set(...position);
    mesh.lookAt(0, 0, 0);
    room.add(mesh);
  };
  panel(10, 2, '#ffffff', 2.6, [0, 6, 2]);
  panel(4, 6, PALETTE.lavender, 1.6, [-6, 1, 1]);
  panel(4, 6, PALETTE.sky, 1.5, [6, 0, 1]);
  panel(5, 3, PALETTE.peach, 1.5, [2, -5, 3]);
  panel(4, 4, PALETTE.pink, 1.3, [-3, -4, -4]);
  panel(8, 8, '#ffffff', 1.1, [0, 0, 8]);
  return room;
}

/* ---------- Materials ---------- */
const candy = (color, extra = {}) => new MeshPhysicalMaterial({
  color, roughness: 0.22, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.4, sheenColor: new Color('#ffffff'), envMapIntensity: 1.1, ...extra,
});
const crystal = (small, extra = {}) => new MeshPhysicalMaterial({
  color: '#ffffff', metalness: 0, roughness: 0.05, transmission: 1, thickness: 0.9, ior: 1.45,
  iridescence: 1, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 720], dispersion: small ? 0 : 4,
  clearcoat: 1, clearcoatRoughness: 0.03, attenuationColor: new Color('#f3eeff'), attenuationDistance: 6, envMapIntensity: 1.5, ...extra,
});

function makeMark(material) {
  const mark = new Group();
  SHARDS.forEach((points) => {
    const geometry = new ExtrudeGeometry(curvedShape(points, 170, 95), {
      depth: 0.22, bevelEnabled: true, bevelThickness: 0.16, bevelSize: 0.1, bevelSegments: 12, curveSegments: 48,
    });
    geometry.translate(0, 0, -0.11);
    mark.add(new Mesh(geometry, material));
  });
  return mark;
}

function shapeGeometry(kind) {
  switch (kind) {
    case 'torus': return new TorusGeometry(0.7, 0.3, 32, 96);
    case 'capsule': return new CapsuleGeometry(0.42, 0.9, 12, 32);
    case 'box': return new RoundedBoxGeometry(1.1, 1.1, 1.1, 8, 0.28);
    case 'cone': return new CylinderGeometry(0, 0.7, 1.2, 48, 1);
    default: return new SphereGeometry(0.75, 48, 32);
  }
}

// Hero shapes, in the camera frame of station 0 (x right of centre).
const HERO_SHAPES = [
  ['torus', PALETTE.lime, [4.4, 2.3, -0.6], 0.62, false],
  ['box', PALETTE.lavender, [2.7, -2.5, 0.6], 0.6, false],
  ['capsule', PALETTE.sky, [4.7, -1.6, 0], 0.55, false],
  ['sphere', PALETTE.peach, [1.2, 2.8, -2.2], 0.4, false],
  ['cone', PALETTE.mint, [5.4, 0.5, -1.8], 0.42, false],
  ['sphere', PALETTE.pink, [-5.6, 2.9, -2.6], 0.36, false],
  ['sphere', '#ffffff', [0, 3.2, -3.4], 0.4, true],
  ['torus', PALETTE.pink, [3.4, 0.6, -3.2], 0.4, false],
  ['box', PALETTE.peach, [-5.4, -3.0, -2.4], 0.38, false],
  ['capsule', PALETTE.lavender, [1.0, -3.3, -2.8], 0.38, false],
];

/* ---------- Service icons ---------- */
function iconPhone() {
  const g = new Group();
  g.add(new Mesh(new RoundedBoxGeometry(0.95, 1.7, 0.2, 6, 0.16), candy(PALETTE.lavender)));
  const screen = new Mesh(new RoundedBoxGeometry(0.78, 1.4, 0.04, 4, 0.1), candy('#ffffff', { roughness: 0.1 }));
  screen.position.z = 0.1;
  g.add(screen);
  const dot = new Mesh(new SphereGeometry(0.06, 16, 12), candy(PALETTE.lavender));
  dot.position.set(0, -0.6, 0.13);
  g.add(dot);
  return g;
}
function iconBrowser() {
  const g = new Group();
  g.add(new Mesh(new RoundedBoxGeometry(1.8, 1.25, 0.2, 6, 0.14), candy(PALETTE.sky)));
  const page = new Mesh(new RoundedBoxGeometry(1.6, 0.86, 0.04, 4, 0.08), candy('#ffffff', { roughness: 0.1 }));
  page.position.set(0, -0.12, 0.1);
  g.add(page);
  [PALETTE.pink, PALETTE.peach, PALETTE.lime].forEach((c, i) => {
    const dot = new Mesh(new SphereGeometry(0.06, 16, 12), candy(c));
    dot.position.set(-0.72 + i * 0.18, 0.46, 0.12);
    g.add(dot);
  });
  return g;
}
function iconSpark() {
  const star = new Shape();
  const r = 0.9;
  const pts = [[0, r], [r, 0], [0, -r], [-r, 0]];
  star.moveTo(...pts[0]);
  for (let i = 0; i < 4; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % 4];
    star.quadraticCurveTo((a[0] + b[0]) * 0.12, (a[1] + b[1]) * 0.12, b[0], b[1]);
  }
  const geometry = new ExtrudeGeometry(star, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.08, bevelSegments: 8, curveSegments: 32 });
  geometry.center();
  const g = new Group();
  g.add(new Mesh(geometry, candy(PALETTE.lime)));
  const small = new Mesh(geometry, candy(PALETTE.mint));
  small.scale.setScalar(0.35);
  small.position.set(0.75, 0.7, 0.1);
  g.add(small);
  return g;
}
function iconPencil() {
  const g = new Group();
  const body = new Mesh(new CylinderGeometry(0.2, 0.2, 1.5, 6, 1), candy(PALETTE.peach));
  const tip = new Mesh(new CylinderGeometry(0, 0.2, 0.42, 6, 1), candy('#ffe2c8'));
  tip.position.y = -0.96;
  tip.rotation.x = Math.PI;
  const end = new Mesh(new CapsuleGeometry(0.2, 0.16, 8, 16), candy(PALETTE.pink));
  end.position.y = 0.86;
  g.add(body, tip, end);
  g.rotation.z = -0.7;
  return g;
}

/* ---------- Phones ---------- */
function screenMask(ratio) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = Math.round(256 / ratio);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.roundRect(0, 0, c.width, c.height, 30);
  ctx.fill();
  return new CanvasTexture(c);
}
function phones(loader, shots, ratio, frameColor) {
  const g = new Group();
  const height = 1 / ratio;
  const mask = screenMask(ratio);
  const body = candy(frameColor, { roughness: 0.18 });
  const slots = [
    { x: -1.25, y: -0.15, z: -0.5, ry: 0.45, rz: 0.05 },
    { x: 0, y: 0.1, z: 0.3, ry: 0, rz: 0 },
    { x: 1.25, y: -0.15, z: -0.5, ry: -0.45, rz: -0.05 },
  ];
  shots.forEach((shot, i) => {
    const phone = new Group();
    phone.add(new Mesh(new RoundedBoxGeometry(1.1, height + 0.1, 0.12, 6, 0.14), body));
    const texture = loader.load(`./assets/shots/${shot}-720.webp`);
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 4;
    const screen = new Mesh(new PlaneGeometry(1, height), new MeshBasicMaterial({ map: texture, alphaMap: mask, transparent: true, toneMapped: false }));
    screen.position.z = 0.062;
    phone.add(screen);
    const s = slots[i];
    phone.position.set(s.x, s.y, s.z);
    phone.rotation.set(0, s.ry, s.rz);
    phone.userData.base = s;
    g.add(phone);
  });
  return g;
}

/* ---------- World ---------- */
export function mountWorld(canvas, { mode = 'home', onReady } = {}) {
  const page = mode === 'page';
  const small = window.matchMedia('(max-width: 760px)').matches;
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.6));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;
  if ('transmissionResolutionScale' in renderer) renderer.transmissionResolutionScale = small ? 0.5 : 0.75;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio(), 0.03).texture;
  pmrem.dispose();
  scene.add(new AmbientLight('#ffffff', 0.35));
  const sun = new DirectionalLight('#ffffff', 1.4);
  sun.position.set(3, 5, 6);
  scene.add(sun);

  const camera = new PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 11);
  scene.add(camera);

  const gradient = new ShaderMaterial({
    vertexShader: GRADIENT_VERT, fragmentShader: GRADIENT_FRAG, depthWrite: false,
    uniforms: {
      uTime: { value: 0 }, uAspect: { value: 1 }, uPointer: { value: new Vector2(0.6, 0.5) },
      uBase: { value: new Color(PALETTE.base) }, uC1: { value: new Color(PALETTE.lavender) }, uC2: { value: new Color(PALETTE.sky) },
      uC3: { value: new Color(PALETTE.peach) }, uC4: { value: new Color(PALETTE.pink) }, uC5: { value: new Color(ACCENTS[0]) },
    },
  });
  gradient.toneMapped = false;
  const backdrop = new Mesh(new PlaneGeometry(1, 1), gradient);
  backdrop.position.z = -19;
  camera.add(backdrop);

  const glass = crystal(small);
  const loader = new TextureLoader();

  /* Station 0: mark + candy shapes */
  const station0 = new Group();
  const markRig = new Group();
  const mark = makeMark(glass);
  markRig.add(mark);
  station0.add(markRig);
  scene.add(station0);
  const heroShapes = (small ? HERO_SHAPES.slice(0, 6) : page ? HERO_SHAPES.slice(0, 7) : HERO_SHAPES).map(([kind, color, pos, scale, isGlass], i) => {
    const mesh = new Mesh(shapeGeometry(kind), isGlass ? crystal(small) : candy(color));
    mesh.scale.setScalar(scale);
    mesh.rotation.set(i * 0.7, i * 1.3, 0);
    mesh.userData = {
      home: new Vector3(...pos), offset: new Vector3(), velocity: new Vector3(),
      spin: new Vector3(((i % 3) - 1) * 0.25 + 0.1, ((i % 4) - 1.5) * 0.2, 0), phase: i * 1.37,
    };
    scene.add(mesh);
    return mesh;
  });

  /* Stations 1..5 (home only) */
  const stations = [station0];
  const icons = [];
  let crystals = [];
  let closingMark = null;
  if (!page) {
    const s1 = new Group();
    [iconPhone(), iconBrowser(), iconSpark(), iconPencil()].forEach((icon, i) => {
      const holder = new Group();
      holder.add(icon);
      holder.position.set(i % 2 === 0 ? -1.3 : 1.3, i < 2 ? 1.25 : -1.25, 0);
      holder.userData = { boost: 0, phase: i * 1.1 };
      icons.push(holder);
      s1.add(holder);
    });
    const s2 = phones(loader, ['arise-skills', 'arise-welcome', 'arise-ari'], 1177 / 2560, '#c9bfff');
    const lightA = new PointLight('#7b6cff', 18, 10, 2);
    lightA.position.set(0, 1.5, 3);
    s2.add(lightA);
    const s3 = phones(loader, ['idrok-reader', 'idrok-library', 'idrok-alif'], 900 / 2030, '#bff2dc');
    const lightB = new PointLight('#2fbf71', 14, 10, 2);
    lightB.position.set(0, 1.5, 3);
    s3.add(lightB);
    const s4 = new Group();
    crystals = [0, 1, 2, 3].map((i) => {
      const tint = ['#9d86ff', '#6cc4ff', '#ff9f7a', '#a6f04a'][i];
      const block = new Mesh(new RoundedBoxGeometry(1, 1.25, 1, 6, 0.12), crystal(small, {
        attenuationColor: new Color(tint), attenuationDistance: 0.9, emissive: new Color(tint), emissiveIntensity: 0,
      }));
      block.position.set(-1.8 + i * 1.2, -1.1 + i * 0.6, -i * 0.15);
      block.rotation.set(0.15, -0.4 + i * 0.05, 0);
      block.userData = { glow: 0, phase: i * 0.9 };
      s4.add(block);
      return block;
    });
    const glowLight = new PointLight('#c6ff3d', 0, 6, 2);
    s4.add(glowLight);
    s4.userData.glowLight = glowLight;
    const s5 = new Group();
    closingMark = makeMark(crystal(small));
    s5.add(closingMark);
    [['torus', PALETTE.pink], ['sphere', PALETTE.lime], ['capsule', PALETTE.sky], ['box', PALETTE.peach]].forEach(([kind, color], i) => {
      const orbiter = new Mesh(shapeGeometry(kind), candy(color));
      orbiter.scale.setScalar(0.32);
      orbiter.userData = { angle: (i / 4) * Math.PI * 2, radius: 2.3 + (i % 2) * 0.5 };
      s5.add(orbiter);
    });
    [s1, s2, s3, s4, s5].forEach((s) => { scene.add(s); stations.push(s); });
  }

  /* ---------- State ---------- */
  const pointer = { ndc: new Vector2(10, 10), world: new Vector3(99, 99, 0), active: false, x: 0, y: 0 };
  const ray = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const state = { station: 0, smooth: 0, processProgress: 0, spread: 1, sideX: 0, upY: 0, narrow: false, frontH: 1, visible: true, ready: false };
  const sections = page ? [] : [...document.querySelectorAll('[data-station]')].sort((a, b) => a.dataset.station - b.dataset.station);
  const accents = ACCENTS.map((c) => new Color(c));

  function layout() {
    const width = canvas.clientWidth || 1;
    const height = canvas.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const viewH = 2 * (camera.position.z - backdrop.position.z) * Math.tan((camera.fov * Math.PI) / 360);
    backdrop.scale.set(viewH * camera.aspect * 1.2, viewH * 1.2, 1);
    gradient.uniforms.uAspect.value = camera.aspect;
    state.narrow = width < 760;
    state.frontH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const frontW = state.frontH * camera.aspect;
    state.spread = state.narrow ? 0.62 : Math.min(1.15, frontW / 9);
    state.sideX = state.narrow ? 0 : frontW * (page ? 0.27 : 0.21);
    state.upY = state.narrow ? state.frontH * (page ? 0.25 : 0.24) : 0;
    const fit = state.narrow ? Math.min(0.62, frontW / 4.6) : Math.min(1.1, frontW / 9, state.frontH / 4.8);
    const markScale = state.narrow ? Math.min(0.52, frontW / 5.4) : Math.min(1.15, frontW / 8.5, state.frontH / 4.6);
    markRig.scale.setScalar((page ? 0.72 : 1) * markScale);
    stations.forEach((s, i) => {
      if (i === 0) {
        s.position.set(state.sideX, state.upY, 0);
      } else {
        s.position.set(state.sideX, -i * SPACING + state.upY, 0);
        s.scale.setScalar(state.narrow ? fit * 0.8 : fit);
      }
    });
  }

  // Continuous station index from where each station section sits on screen.
  function measure() {
    if (!sections.length) return;
    const mid = window.innerHeight * 0.5;
    const centers = sections.map((el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2; });
    let f = 0;
    if (mid <= centers[0]) f = 0;
    else if (mid >= centers[centers.length - 1]) f = centers.length - 1;
    else {
      for (let i = 0; i < centers.length - 1; i += 1) {
        if (mid >= centers[i] && mid < centers[i + 1]) {
          const t = (mid - centers[i]) / (centers[i + 1] - centers[i]);
          // Hold at each station a little, travel in between.
          const eased = clamp((t - 0.2) / 0.6);
          f = i + eased * eased * (3 - 2 * eased);
          break;
        }
      }
    }
    state.station = f;
    const process = sections.find((el) => el.dataset.station === '4');
    if (process) {
      const r = process.getBoundingClientRect();
      state.processProgress = clamp((window.innerHeight * 0.75 - r.top) / Math.max(1, r.height));
    }
  }

  window.addEventListener('pointermove', (event) => {
    pointer.ndc.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    pointer.active = true;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { pointer.active = false; });
  window.addEventListener('scroll', measure, { passive: true });
  window.addEventListener('resize', measure);
  // Hovering a service row spins its icon.
  window.addEventListener('nexora:icon', (event) => {
    const icon = icons[event.detail];
    if (icon) icon.userData.boost = 1;
  });
  const host = page ? (canvas.closest('section') || canvas.parentElement) : canvas;
  if (page) new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }).observe(host);
  new ResizeObserver(() => { layout(); measure(); }).observe(canvas);
  layout();
  measure();

  let last = performance.now();
  let elapsed = 0;
  function step(now) {
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
    last = now;
    elapsed += dt;
    const k = 1 - Math.exp(-dt * 3);
    state.smooth += (state.station - state.smooth) * (1 - Math.exp(-dt * 5));

    // Camera rides down to the current station.
    camera.position.y = -state.smooth * SPACING;
    camera.position.x = Math.sin(state.smooth * Math.PI) * (state.narrow ? 0 : 0.6);
    pointer.x += ((pointer.active ? pointer.ndc.x : 0) - pointer.x) * k;
    pointer.y += ((pointer.active ? pointer.ndc.y : 0) - pointer.y) * k;
    camera.rotation.y = -pointer.x * 0.03;
    camera.rotation.x = pointer.y * 0.02;
    ray.setFromCamera(pointer.ndc, camera);
    ray.ray.intersectPlane(plane, pointer.world);

    gradient.uniforms.uTime.value = elapsed;
    gradient.uniforms.uPointer.value.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5);
    const a = Math.floor(state.smooth);
    const b = Math.min(accents.length - 1, a + 1);
    gradient.uniforms.uC5.value.copy(accents[Math.min(a, accents.length - 1)]).lerp(accents[b], state.smooth - a);

    // Station 0
    mark.rotation.y = Math.sin(elapsed * 0.35) * 0.55 + pointer.x * 0.45;
    mark.rotation.x = Math.sin(elapsed * 0.5) * 0.1 - pointer.y * 0.25;
    mark.position.y = Math.sin(elapsed * 0.8) * 0.1;
    markRig.rotation.y = Math.min(1, state.smooth) * 1.2;
    heroShapes.forEach((mesh) => {
      const d = mesh.userData;
      const home = d.home.clone().multiplyScalar(state.spread);
      home.y += Math.sin(elapsed * 0.7 + d.phase) * 0.18 + state.upY;
      home.z -= Math.min(1, state.smooth) * 3;
      const current = home.clone().add(d.offset);
      const away = current.clone().sub(pointer.world);
      away.z = 0;
      const dist = away.length();
      if (pointer.active && dist < 2.2) d.velocity.add(away.normalize().multiplyScalar((2.2 - dist) * 9 * dt));
      d.velocity.add(d.offset.clone().multiplyScalar(-6 * dt));
      d.velocity.multiplyScalar(Math.exp(-dt * 3.2));
      d.offset.add(d.velocity.clone().multiplyScalar(dt * 4));
      mesh.position.copy(home).add(d.offset);
      mesh.rotation.x += d.spin.x * dt + d.velocity.y * 0.02;
      mesh.rotation.y += d.spin.y * dt + d.velocity.x * 0.02;
    });

    if (!page) {
      // Station 1: icons float; a hovered service spins its icon.
      icons.forEach((holder) => {
        const d = holder.userData;
        d.boost *= Math.exp(-dt * 1.6);
        holder.children[0].rotation.y += dt * (0.4 + d.boost * 6);
        holder.children[0].position.y = Math.sin(elapsed * 0.9 + d.phase) * 0.12;
        holder.scale.setScalar(1 + d.boost * 0.18);
      });
      // Stations 2 and 3: phones breathe and follow the pointer a little.
      [stations[2], stations[3]].forEach((group, gi) => {
        const near = 1 - clamp(Math.abs(state.smooth - (gi + 2)));
        group.rotation.y = pointer.x * 0.25 + (1 - near) * 0.6 * (gi ? -1 : 1);
        group.rotation.x = -pointer.y * 0.08;
        group.children.forEach((phone, i) => {
          const base = phone.userData.base;
          if (!base) return;
          const fan = 0.55 + near * 0.45;
          phone.position.set(base.x * fan, base.y + Math.sin(elapsed * 0.9 + i * 1.7) * 0.06, base.z);
          phone.rotation.y = base.ry * fan;
        });
      });
      // Station 4: crystals light up in turn with the process steps.
      const active = state.processProgress * 4;
      crystals.forEach((block, i) => {
        const on = clamp(active - i);
        block.userData.glow += (on - block.userData.glow) * k;
        block.material.emissiveIntensity = block.userData.glow * 0.55;
        block.scale.setScalar(0.9 + block.userData.glow * 0.18);
        block.rotation.y = -0.4 + i * 0.05 + Math.sin(elapsed * 0.4 + block.userData.phase) * 0.15 + block.userData.glow * 0.6;
        block.position.y = -1.1 + i * 0.6 + Math.sin(elapsed * 0.8 + block.userData.phase) * 0.06;
      });
      const idx = Math.min(3, Math.floor(active));
      const light = stations[4].userData.glowLight;
      light.intensity = 22 * clamp(active);
      light.position.copy(crystals[idx].position).add(new Vector3(0, 0.6, 1.4));
      // Station 5: closing mark with shapes in orbit.
      closingMark.rotation.y = elapsed * 0.4 + pointer.x * 0.4;
      closingMark.rotation.x = -pointer.y * 0.2;
      stations[5].children.forEach((child) => {
        if (!child.userData.radius) return;
        const d = child.userData;
        const angle = d.angle + elapsed * 0.35;
        child.position.set(Math.cos(angle) * d.radius, Math.sin(angle * 1.3) * 0.8, Math.sin(angle) * d.radius * 0.6);
        child.rotation.x += dt * 0.6;
        child.rotation.y += dt * 0.4;
      });
    }

    renderer.render(scene, camera);
    if (!state.ready) {
      state.ready = true;
      onReady?.();
    }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (!state.visible || document.hidden) { last = now; return; }
    step(now);
  }
  requestAnimationFrame(frame);

  // Test hook (only with ?fx): jump to a station and draw at once, for a tab that cannot animate.
  if (new URLSearchParams(location.search).has('fx')) {
    window.nxWorld = (station = null, seconds = 4) => {
      measure();
      if (station !== null) state.station = station;
      state.smooth = state.station;
      elapsed = seconds;
      for (let i = 0; i < 30; i += 1) step(performance.now() - (29 - i) * 16);
      return state.station;
    };
  }
}
