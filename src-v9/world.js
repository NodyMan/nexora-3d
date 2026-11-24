/* --------------------------------------------------------------------------
   v9 world: the Fergana Valley at dawn, behind the whole site.
   Home ('home'): the camera travels through stations as the page scrolls —
     0 hero      wide shot, the monolith in the valley
     1 services  close to the monolith; hovering a service recolours its girih
     2 Arise     a stone stele with the Arise app inlaid
     3 IDrok     a stele with IDrok
     4 process   low angle; light fills the monolith stage by stage
     5 contact   high above the valley
   Inner pages ('page'): one fixed, slowly drifting shot per page.
   Everything is generated in code (see valley.js for terrain, sky, girih).
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, SphereGeometry, BackSide, ShaderMaterial, MeshStandardMaterial,
  MeshBasicMaterial, PlaneGeometry, Color, Vector2, Vector3, FogExp2, HemisphereLight, DirectionalLight,
  BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, AdditiveBlending, SRGBColorSpace,
  ACESFilmicToneMapping, PCFSoftShadowMap, TextureLoader, Group,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { terrain, girihTexture, stoneTexture, SKY_VERT, SKY_FRAG, FinishShader } from './valley.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);

// The valley's light follows the real time in Fergana (UTC+5). Key moments of
// the day; everything in between is blended. dir = sun (or moon) direction.
export const SKY_KEYS = [
  { h: 0, zenith: '#0c1631', mid: '#22305a', horizon: '#46557e', glow: '#7084b8', fog: '#2a3352', density: 0.0049, dir: [0.35, 0.5, -1], sun: '#b3c3ff', sunI: 1.0, hemiSky: '#6577a6', hemiGround: '#2c2733', hemiI: 0.7, stars: 1, girih: 0.95, exposure: 1.18 },
  { h: 4.6, zenith: '#0c1631', mid: '#22305a', horizon: '#46557e', glow: '#7084b8', fog: '#2a3352', density: 0.0049, dir: [0.35, 0.5, -1], sun: '#b3c3ff', sunI: 1.0, hemiSky: '#6577a6', hemiGround: '#2c2733', hemiI: 0.7, stars: 1, girih: 0.95, exposure: 1.18 },
  { h: 6.6, zenith: '#3d4c66', mid: '#9aa3b3', horizon: '#e8c3a4', glow: '#ffd2a0', fog: '#c2a594', density: 0.0047, dir: [-0.42, 0.1, -1], sun: '#ffcf9f', sunI: 2.4, hemiSky: '#b9c4d6', hemiGround: '#5b4a3d', hemiI: 0.75, stars: 0, girih: 1, exposure: 1 },
  { h: 9.5, zenith: '#4f6f9f', mid: '#9db1c9', horizon: '#dcd3c6', glow: '#fff0d2', fog: '#b7bcc2', density: 0.0034, dir: [-0.2, 0.55, -1], sun: '#fff1df', sunI: 2.7, hemiSky: '#c6d4ea', hemiGround: '#6b5a48', hemiI: 0.85, stars: 0, girih: 0.85, exposure: 0.95 },
  { h: 15.5, zenith: '#4f6f9f', mid: '#9db1c9', horizon: '#dcd3c6', glow: '#fff0d2', fog: '#b7bcc2', density: 0.0034, dir: [0.25, 0.5, -1], sun: '#fff1df', sunI: 2.7, hemiSky: '#c6d4ea', hemiGround: '#6b5a48', hemiI: 0.85, stars: 0, girih: 0.85, exposure: 0.95 },
  { h: 18.4, zenith: '#2b3152', mid: '#86708a', horizon: '#ef9f6e', glow: '#ff9858', fog: '#a77f6d', density: 0.0049, dir: [0.5, 0.08, -1], sun: '#ff9c66', sunI: 2.1, hemiSky: '#9a8fae', hemiGround: '#4d3a33', hemiI: 0.6, stars: 0.1, girih: 1.1, exposure: 1 },
  { h: 20.6, zenith: '#0c1631', mid: '#22305a', horizon: '#46557e', glow: '#7084b8', fog: '#2a3352', density: 0.0049, dir: [0.35, 0.5, -1], sun: '#b3c3ff', sunI: 1.0, hemiSky: '#6577a6', hemiGround: '#2c2733', hemiI: 0.7, stars: 1, girih: 0.95, exposure: 1.18 },
  { h: 24, zenith: '#0c1631', mid: '#22305a', horizon: '#46557e', glow: '#7084b8', fog: '#2a3352', density: 0.0049, dir: [0.35, 0.5, -1], sun: '#b3c3ff', sunI: 1.0, hemiSky: '#6577a6', hemiGround: '#2c2733', hemiI: 0.7, stars: 1, girih: 0.95, exposure: 1.18 },
];

// Hours since midnight in Fergana; ?hour=21 overrides it (for checking the look).
export function ferganaHour() {
  const forced = Number(new URLSearchParams(location.search).get('hour'));
  if (Number.isFinite(forced) && new URLSearchParams(location.search).has('hour')) return ((forced % 24) + 24) % 24;
  const now = new Date();
  return ((now.getUTCHours() + 5 + now.getUTCMinutes() / 60) % 24 + 24) % 24;
}

// Screen brightness per screenshot: light app screens are dimmed so the bloom
// pass does not turn them into a white glare.
export const SCREEN_GAIN = { 'arise-welcome': 0.92, 'idrok-library': 0.8, 'arise-ari': 0.68, 'arise-skills': 0.68, 'idrok-alif': 0.68, 'idrok-reader': 0.7 };

// Girih light colour per service: turquoise, lapis, gold, white (tilework colours).
export const SERVICE_COLORS = ['#7ff3ff', '#7f9cff', '#ffc86a', '#f4f1ec'];

export function girihMaterial(uniforms, repeat) {
  const girih = girihTexture();
  girih.repeat.set(...repeat);
  const stone = stoneTexture();
  stone.repeat.set(repeat[0] * 2, repeat[1] * 1.8);
  const mat = new MeshStandardMaterial({
    color: '#3b3a40', map: stone, roughness: 0.72, metalness: 0.15,
    emissive: new Color(SERVICE_COLORS[0]), emissiveMap: girih, emissiveIntensity: 2.6,
  });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uFill = uniforms.uFill;
    shader.uniforms.uSpan = { value: repeat[1] };
    shader.fragmentShader = `uniform float uTime;\nuniform float uFill;\nuniform float uSpan;\n${shader.fragmentShader}`.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      #ifdef USE_EMISSIVEMAP
        // Light runs up the pattern in waves, like data through a machine.
        float wave = fract(vEmissiveMapUv.y * 0.3 - uTime * 0.09);
        float pulse = exp(-pow((wave - 0.5) * 7.0, 2.0));
        float cell = fract(sin(dot(floor(vEmissiveMapUv * 2.0), vec2(12.9, 78.2))) * 43758.5);
        float flicker = 0.75 + 0.25 * sin(uTime * (1.5 + cell * 2.0) + cell * 6.28);
        float level = 0.05 + pulse * 1.9 * flicker;
        // Process station: everything below the fill line glows steadily.
        float filled = step(vEmissiveMapUv.y / uSpan, uFill);
        level = max(level, filled * 1.1);
        totalEmissiveRadiance *= level;
      #endif`,
    );
  };
  return mat;
}

// still: the visitor asked for reduced motion — the scene is shown, but nothing
// moves on its own and the camera follows the scroll without easing.
// onFail: the GPU could not draw the scene (lost context or a black frame).
export function mountWorld(canvas, { mode = 'home', view = 0, still = false, onReady, onFail } = {}) {
  const page = mode === 'page';
  const small = window.matchMedia('(max-width: 760px)').matches;
  const renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = !small;
  renderer.shadowMap.type = PCFSoftShadowMap;
  let failed = false;
  const fail = () => { if (failed) return; failed = true; onFail?.(); };
  canvas.addEventListener('webglcontextlost', fail);

  const scene = new Scene();
  scene.fog = new FogExp2(new Color('#c2a594'), 0.0047);
  const sunDir = new Vector3(-0.42, 0.1, -1).normalize();
  const skyUniforms = {
    uSun: { value: sunDir }, uZenith: { value: new Color('#3d4c66') }, uMid: { value: new Color('#9aa3b3') },
    uHorizon: { value: new Color('#e8c3a4') }, uGlow: { value: new Color('#ffd2a0') },
  };
  scene.add(new Mesh(new SphereGeometry(400, 48, 24), new ShaderMaterial({
    vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: BackSide, depthWrite: false, fog: false, uniforms: skyUniforms,
  })));
  const hemi = new HemisphereLight('#b9c4d6', '#5b4a3d', 0.75);
  scene.add(hemi);
  // Stars for the night sky (faded out by day).
  const starCount = small ? 500 : 1100;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i += 1) {
    const u = Math.random() * Math.PI * 2;
    const v = 0.06 + Math.random() * 0.94;
    const r = Math.sqrt(1 - v * v);
    starPos[i * 3] = Math.cos(u) * r * 360;
    starPos[i * 3 + 1] = v * 360;
    starPos[i * 3 + 2] = Math.sin(u) * r * 360;
  }
  const starGeo = new BufferGeometry();
  starGeo.setAttribute('position', new Float32BufferAttribute(starPos, 3));
  const starMat = new PointsMaterial({ color: '#e6ecff', size: small ? 1.6 : 1.3, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const stars = new Points(starGeo, starMat);
  scene.add(stars);
  const sun = new DirectionalLight('#ffcf9f', 2.4);
  sun.position.copy(sunDir).multiplyScalar(60);
  sun.castShadow = !small;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 20, far: 120 });
  sun.shadow.bias = -0.0006;
  sun.shadow.radius = 4;
  scene.add(sun, sun.target);

  const mix = { a: new Color(), b: new Color() };
  let girihBoost = 1;
  function applyDaylight() {
    const h = ferganaHour();
    let i = 0;
    while (i < SKY_KEYS.length - 2 && h >= SKY_KEYS[i + 1].h) i += 1;
    const k0 = SKY_KEYS[i];
    const k1 = SKY_KEYS[i + 1];
    const f = smooth(clamp((h - k0.h) / Math.max(0.001, k1.h - k0.h)));
    const lerpC = (target, key) => target.copy(mix.a.set(k0[key])).lerp(mix.b.set(k1[key]), f);
    const lerpN = (key) => k0[key] + (k1[key] - k0[key]) * f;
    lerpC(skyUniforms.uZenith.value, 'zenith');
    lerpC(skyUniforms.uMid.value, 'mid');
    lerpC(skyUniforms.uHorizon.value, 'horizon');
    lerpC(skyUniforms.uGlow.value, 'glow');
    lerpC(scene.fog.color, 'fog');
    scene.fog.density = lerpN('density');
    sunDir.set(...k0.dir).normalize().lerp(new Vector3(...k1.dir).normalize(), f).normalize();
    lerpC(sun.color, 'sun');
    sun.intensity = lerpN('sunI');
    sun.position.copy(sun.target.position).addScaledVector(sunDir, 60);
    lerpC(hemi.color, 'hemiSky');
    lerpC(hemi.groundColor, 'hemiGround');
    hemi.intensity = lerpN('hemiI');
    starMat.opacity = lerpN('stars');
    stars.visible = starMat.opacity > 0.01;
    girihBoost = lerpN('girih');
    renderer.toneMappingExposure = lerpN('exposure');
    document.documentElement.dataset.daypart = h < 5 || h >= 20 ? 'night' : h < 8 ? 'dawn' : h < 17 ? 'day' : 'dusk';
  }

  const ground = terrain(small);
  scene.add(ground);
  const H = ground.userData.heightAt;

  /* Monolith */
  const uniforms = { uTime: { value: 0 }, uFill: { value: 0 } };
  const monolithMat = girihMaterial(uniforms, [1, 3.4]);
  const M = new Vector3(4, 0, -2);
  M.y = H(M.x, M.z);
  const monolith = new Mesh(new RoundedBoxGeometry(2.6, 9, 1.1, 4, 0.05), monolithMat);
  monolith.position.set(M.x, M.y + 4.3, M.z);
  monolith.rotation.y = -0.38;
  monolith.castShadow = true;
  scene.add(monolith);
  sun.target.position.copy(monolith.position);
  applyDaylight();
  const daylightTimer = setInterval(applyDaylight, 30000);
  canvas.addEventListener('webglcontextlost', () => clearInterval(daylightTimer));

  /* Steles with the products inlaid (home only).
     Each slab is cut to the screenshot's own proportions with an even stone
     border, so the app fills its frame. The screen stays dark until the
     camera reaches that product, then switches on. */
  const steles = [];
  const screens = [];
  if (!page) {
    const loader = new TextureLoader();
    const steleMat = new MeshStandardMaterial({ color: '#3b3a40', map: stoneTexture(), roughness: 0.75, metalness: 0.12 });
    [[['arise-welcome', 'arise-ari', 'arise-skills'], 720 / 1566, -9.5, -15, 0.5, 2], [['idrok-library', 'idrok-alif', 'idrok-reader'], 720 / 1624, 12.5, -11, -0.6, 3]].forEach(([shots, ratio, x, z, ry, station]) => {
      const g = new Group();
      const y = H(x, z);
      const sh = 3.6;
      const sw = sh * ratio;
      const border = 0.14;
      const lift = 0.55;
      const slab = new Mesh(new RoundedBoxGeometry(sw + border * 2, sh + border * 2, 0.42, 4, 0.05), steleMat);
      slab.position.y = lift + sh / 2;
      slab.castShadow = true;
      g.add(slab);
      // A low plinth so the slab stands in the ground rather than floating on it.
      const plinth = new Mesh(new RoundedBoxGeometry(sw + border * 2 + 0.5, lift + 0.4, 0.9, 3, 0.05), steleMat);
      plinth.position.y = (lift + 0.4) / 2 - 0.4;
      plinth.castShadow = true;
      g.add(plinth);
      // A thin line of girih light hugging the screen edge.
      const frameMat = new MeshBasicMaterial({ color: new Color('#7ff3ff'), toneMapped: false });
      const frame = new Mesh(new PlaneGeometry(sw + 0.05, sh + 0.05), frameMat);
      frame.position.set(0, slab.position.y, 0.212);
      g.add(frame);
      const textures = shots.map((shot, i) => {
        const tex = i === 0 ? loader.load(`./assets/shots/${shot}-720.webp`) : null;
        if (tex) { tex.colorSpace = SRGBColorSpace; tex.anisotropy = 4; }
        return { shot, tex };
      });
      const screenMat = new MeshBasicMaterial({ map: textures[0].tex, toneMapped: false });
      const screen = new Mesh(new PlaneGeometry(sw, sh), screenMat);
      screen.position.set(0, slab.position.y, 0.214);
      g.add(screen);
      g.position.set(x, y - 0.1, z);
      g.rotation.y = ry;
      scene.add(g);
      steles.push(g);
      screens.push({ station, screenMat, frameMat, on: 0, textures, index: 0, pending: null, fade: 0 });
    });
  }

  /* Dust in the sun */
  const count = small ? 700 : 1800;
  const dustPos = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    dustPos[i * 3] = M.x + (Math.random() - 0.5) * 40;
    dustPos[i * 3 + 1] = M.y + Math.random() * 14;
    dustPos[i * 3 + 2] = M.z + (Math.random() - 0.5) * 34;
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(dustPos, 3));
  const dust = new Points(dustGeo, new PointsMaterial({ color: '#ffe2c2', size: 0.045, transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending }));
  scene.add(dust);

  /* Camera stations: [position, look target] — 'wide' screens and 'narrow' (phones). */
  const at = (x, y, z) => new Vector3(x, y, z);
  // A shot of an object from in front of its face: the object sits in the
  // right third on wide screens (copy goes on the left), centred-high on phones.
  const front = (obj, ry, dist, height, lookY, narrow = false) => {
    const n = new Vector3(Math.sin(ry), 0, Math.cos(ry));
    const right = new Vector3(Math.cos(ry), 0, -Math.sin(ry));
    const pos = obj.clone().add(n.multiplyScalar(dist)).add(new Vector3(0, height, 0));
    const look = obj.clone().add(new Vector3(0, lookY, 0));
    if (!narrow) look.add(right.multiplyScalar(-dist * 0.3));
    return [pos, look];
  };
  const S0 = steles[0];
  const S1 = steles[1];
  const STATIONS = page
    ? [
      { wide: [at(-1.2, M.y + 2.4, 21), at(M.x - 4.8, M.y + 4.6, M.z - 6)], narrow: [at(M.x - 1.2, M.y + 2.6, 26), at(M.x, M.y + 4.8, M.z - 6)] },
      { wide: front(M, 0.55, 19, 3, 5.2), narrow: [at(M.x + 6, M.y + 3, M.z + 20), at(M.x, M.y + 5, M.z)] },
      { wide: front(M, -1.05, 21, 5, 5), narrow: [at(M.x - 8, M.y + 4, M.z + 24), at(M.x, M.y + 5, M.z)] },
    ]
    : [
      { wide: [at(-1.2, M.y + 2.4, 21), at(M.x - 3.4, M.y + 4.6, M.z - 6)], narrow: [at(M.x - 1.2, M.y + 2.6, 26), at(M.x, M.y + 4.8, M.z - 6)] },
      { wide: front(M, -0.38, 15, 3.2, 4.6), narrow: front(M, -0.38, 19, 3.4, 6.6, true) },
      { wide: front(S0.position, S0.rotation.y, 10.8, 2.6, 2.6), narrow: front(S0.position, S0.rotation.y, 12, 3.2, 0.4, true) },
      { wide: front(S1.position, S1.rotation.y, 10.8, 2.6, 2.6), narrow: front(S1.position, S1.rotation.y, 12, 3.2, 0.4, true) },
      { wide: front(M, -0.38, 13, 0.9, 5.6), narrow: front(M, -0.38, 17, 1, 7.4, true) },
      { wide: [at(M.x - 20, M.y + 22, M.z + 42), at(M.x + 6, M.y + 9, M.z - 40)], narrow: [at(M.x - 5, M.y + 13, M.z + 30), at(M.x, M.y + 9, M.z - 30)] },
    ];

  const camera = new PerspectiveCamera(34, 1, 0.1, 900);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(256, 256), 0.85, 0.55, 0.78);
  composer.addPass(bloom);
  const finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  composer.addPass(new OutputPass());

  const sections = page ? [] : [...document.querySelectorAll('[data-station]')].sort((a, b) => a.dataset.station - b.dataset.station);
  const pointer = { tx: 0, ty: 0, x: 0, y: 0 };
  const state = { station: page ? view : 0, smooth: page ? view : 0, narrow: false, visible: true, ready: false, process: 0, color: new Color(SERVICE_COLORS[0]), target: new Color(SERVICE_COLORS[0]) };

  function layout() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
    camera.aspect = w / h;
    state.narrow = w < 760;
    camera.fov = state.narrow ? 46 : 34;
    camera.updateProjectionMatrix();
  }

  function measure() {
    if (!sections.length) return;
    const mid = window.innerHeight * 0.5;
    const centers = sections.map((el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2; });
    let f = 0;
    if (mid >= centers[centers.length - 1]) f = centers.length - 1;
    else if (mid > centers[0]) {
      for (let i = 0; i < centers.length - 1; i += 1) {
        if (mid >= centers[i] && mid < centers[i + 1]) {
          f = i + smooth(clamp(((mid - centers[i]) / (centers[i + 1] - centers[i]) - 0.15) / 0.7));
          break;
        }
      }
    }
    state.station = f;
    const proc = sections.find((el) => el.dataset.station === '4');
    if (proc) {
      const r = proc.getBoundingClientRect();
      state.process = clamp((window.innerHeight * 0.8 - r.top) / Math.max(1, r.height * 0.9));
    }
  }

  window.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  window.addEventListener('scroll', measure, { passive: true });
  window.addEventListener('nexora:service', (e) => { state.target.set(SERVICE_COLORS[e.detail] ?? SERVICE_COLORS[0]); });
  window.addEventListener('nexora:screen', (e) => {
    const sc = screens.find((item) => item.station === e.detail?.station);
    if (!sc) return;
    const from = sc.pending ?? sc.index;
    const to = (from + (e.detail.step || 1) + sc.textures.length) % sc.textures.length;
    const entry = sc.textures[to];
    if (!entry.tex) {
      entry.tex = new TextureLoader().load(`./assets/shots/${entry.shot}-720.webp`);
      entry.tex.colorSpace = SRGBColorSpace;
      entry.tex.anisotropy = 4;
    }
    sc.pending = to;
  });
  window.addEventListener('nexora:service-leave', () => { state.target.set(SERVICE_COLORS[0]); });
  if (page) new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }).observe(canvas);
  new ResizeObserver(() => { layout(); measure(); }).observe(canvas);
  layout();
  measure();

  const pos = new Vector3();
  const look = new Vector3();
  const a = new Vector3();
  const b = new Vector3();
  let last = performance.now();
  let t = 0;
  function step(now) {
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
    last = now;
    t += dt;
    const k = 1 - Math.exp(-dt * 2);
    pointer.x += (pointer.tx - pointer.x) * k;
    pointer.y += (pointer.ty - pointer.y) * k;
    if (still) { t = 3; pointer.x = 0; pointer.y = 0; state.smooth = state.station; }
    else state.smooth += (state.station - state.smooth) * (1 - Math.exp(-dt * 3));
    uniforms.uTime.value = t;
    finish.uniforms.uTime.value = t % 10;

    // Camera between the two nearest stations.
    const key = state.narrow ? 'narrow' : 'wide';
    const i0 = Math.floor(clamp(state.smooth, 0, STATIONS.length - 1));
    const i1 = Math.min(STATIONS.length - 1, i0 + 1);
    const f = smooth(clamp(state.smooth - i0));
    pos.copy(STATIONS[i0][key][0]).lerp(STATIONS[i1][key][0], f);
    look.copy(STATIONS[i0][key][1]).lerp(STATIONS[i1][key][1], f);
    // A slow drift and a little pointer parallax.
    a.set(Math.sin(t * 0.05) * 0.6 + pointer.x * 0.8, -pointer.y * 0.4, 0);
    camera.position.copy(pos).add(a);
    b.copy(look).add(a.multiplyScalar(0.3));
    camera.lookAt(b);

    // Girih colour follows the hovered service; process fills the monolith.
    state.color.lerp(state.target, 1 - Math.exp(-dt * 4));
    monolithMat.emissive.copy(state.color).multiplyScalar(girihBoost);
    const nearProcess = 1 - clamp(Math.abs(state.smooth - 4));
    uniforms.uFill.value = page ? 0 : state.process * nearProcess;

    // Product screens switch on as the camera arrives at them (dark glass otherwise).
    screens.forEach((sc) => {
      const target = clamp(1.6 - Math.abs(state.smooth - sc.station) * 1.6);
      sc.on = still ? target : sc.on + (target - sc.on) * (1 - Math.exp(-dt * 5));
      // Switching screens: dim, swap the picture, brighten again.
      if (sc.pending !== null) {
        sc.fade = still ? 1 : Math.min(1, sc.fade + dt * 7);
        const next = sc.textures[sc.pending];
        if (sc.fade >= 1 && next.tex && next.tex.image) {
          sc.index = sc.pending;
          sc.pending = null;
          sc.screenMat.map = next.tex;
          sc.screenMat.needsUpdate = true;
          window.dispatchEvent(new CustomEvent('nexora:screen-shown', { detail: { station: sc.station, index: sc.index } }));
        }
      } else {
        sc.fade = still ? 0 : Math.max(0, sc.fade - dt * 5);
      }
      const gain = SCREEN_GAIN[sc.textures[sc.index].shot] ?? 0.8;
      const v = (0.04 + sc.on * (gain - 0.04)) * (1 - sc.fade * 0.92);
      sc.screenMat.color.setScalar(v);
      sc.frameMat.color.set('#7ff3ff').multiplyScalar(0.06 + sc.on * 0.85);
    });
    dust.rotation.y = t * 0.012;
    dust.position.y = Math.sin(t * 0.3) * 0.3;
    composer.render(dt);
    if (!state.ready) {
      state.ready = true;
      if (blankFrame()) fail();
      else onReady?.();
    }
  }
  // Some GPUs/drivers draw nothing (black) without throwing; check the first frame.
  function blankFrame() {
    try {
      const gl = renderer.getContext();
      const w = gl.drawingBufferWidth;
      const h = gl.drawingBufferHeight;
      const px = new Uint8Array(4);
      let sum = 0;
      for (let i = 1; i <= 5; i += 1) {
        for (let j = 1; j <= 5; j += 1) {
          gl.readPixels(Math.floor((w * i) / 6), Math.floor((h * j) / 6), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
          sum += px[0] + px[1] + px[2];
        }
      }
      return sum / 25 < 12;
    } catch (error) {
      return false;
    }
  }
  function frame(now) {
    if (failed) return;
    requestAnimationFrame(frame);
    if (!state.visible || document.hidden) { last = now; return; }
    step(now);
  }
  requestAnimationFrame(frame);

  if (new URLSearchParams(location.search).has('fx')) {
    window.nxWorld = (station = null, seconds = 6) => {
      measure();
      if (station !== null) state.station = station;
      state.smooth = state.station;
      t = seconds;
      for (let i = 0; i < 20; i += 1) step(performance.now() - (19 - i) * 16);
      return state.station;
    };
  }
}
