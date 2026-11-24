/* --------------------------------------------------------------------------
   Nexora Studio — v10, the whole site as one 3D world.

   The visitor travels through the Fergana Valley. Every page is a place;
   inside a place the camera moves through "stops" (chapters). Wheel, swipe,
   arrow keys and the menu all move along one continuous journey.

   Layers, drawn in this order on one canvas:
     1. the valley (terrain, sky, monolith, steles) through bloom + grade
     2. world text: 3D type floating in panels in front of each stop
     3. the HUD: brand, menu, language, progress — screen-space 3D type
   Text is drawn after the bloom pass so it stays sharp.

   Quality adapts to the device: phones start on "low", desktops on "high",
   and the first seconds of frame times can step the tier down. If even
   "low" is too slow, the visitor is sent to the classic site.
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera, Mesh, SphereGeometry, BackSide, ShaderMaterial,
  MeshStandardMaterial, MeshBasicMaterial, PlaneGeometry, Color, Vector2, Vector3, Quaternion, Matrix4, FogExp2,
  HemisphereLight, DirectionalLight, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, AdditiveBlending,
  SRGBColorSpace, ACESFilmicToneMapping, PCFSoftShadowMap, TextureLoader, Group, Raycaster,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { TorusGeometry, CylinderGeometry, PointLight } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Text } from 'troika-three-text';
import { terrain, stoneTexture, SKY_VERT, SKY_FRAG, FinishShader } from '../src-v9/valley.js';
import { SKY_KEYS, ferganaHour, SCREEN_GAIN, SERVICE_COLORS, girihMaterial } from '../src-v9/world.js';
import { PLACES, NAV, ESTIMATE, estimateWeeks } from './content.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);
const FONT = { 400: './assets/fonts/onest-400.woff', 600: './assets/fonts/onest-600.woff' };
const ACCENT = new Color('#7ff3ff');
const INK = new Color('#f4f1ec');
const MUTED = new Color('#b8b3ac');

// Darkens the side of the screen where the text sits, only while text is shown.
const ShadeShader = {
  uniforms: { tDiffuse: { value: null }, uAmount: { value: 0 }, uNarrow: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uAmount; uniform float uNarrow; varying vec2 vUv;
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      float wide = pow(1.0 - smoothstep(0.0, 0.7, vUv.x), 1.6);
      float narrow = pow(1.0 - smoothstep(0.0, 0.66, vUv.y), 1.4);
      // Phone form chapters: text sits at the top, so shade the top instead.
      float narrowTop = pow(smoothstep(0.38, 1.0, vUv.y), 1.2);
      float nk = uNarrow > 1.5 ? narrowTop : narrow;
      float k = mix(wide, nk, min(uNarrow, 1.0)) * uAmount;
      col.rgb = mix(col.rgb, col.rgb * 0.5 + vec3(0.02, 0.022, 0.03), k * 0.6);
      // A soft band under the menu so it reads over a bright daytime sky.
      float top = smoothstep(0.84, 1.0, vUv.y);
      col.rgb = mix(col.rgb, col.rgb * 0.55, top * 0.55);
      gl_FragColor = col;
    }`,
};

export async function mountSite(canvas, { lang, t, onReady, onFail, onPlace, onFrame }) {
  /* ---------- Device and quality ---------- */
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const smallScreen = window.matchMedia('(max-width: 760px)').matches;
  const phone = coarse || smallScreen;
  const forced = new URLSearchParams(location.search).get('q');
  const TIERS = ['low', 'mid', 'high'];
  let tier = TIERS.includes(forced) ? forced : phone ? 'low' : 'high';

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  } catch (error) {
    onFail?.('webgl');
    return null;
  }
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.autoClear = false;
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); onFail?.('lost'); });

  /* ---------- The valley ---------- */
  const scene = new Scene();
  scene.fog = new FogExp2(new Color('#c2a594'), 0.0047);
  const sunDir = new Vector3(-0.42, 0.1, -1).normalize();
  const skyU = {
    uSun: { value: sunDir }, uZenith: { value: new Color() }, uMid: { value: new Color() },
    uHorizon: { value: new Color() }, uGlow: { value: new Color() },
  };
  scene.add(new Mesh(new SphereGeometry(400, 48, 24), new ShaderMaterial({ vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: BackSide, depthWrite: false, fog: false, uniforms: skyU })));
  const hemi = new HemisphereLight('#b9c4d6', '#5b4a3d', 0.75);
  scene.add(hemi);
  const sun = new DirectionalLight('#ffcf9f', 2.4);
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 10, far: 140 });
  sun.shadow.bias = -0.0006;
  sun.shadow.radius = 4;
  scene.add(sun, sun.target);

  const starPos = new Float32Array((phone ? 500 : 1100) * 3);
  for (let i = 0; i < starPos.length; i += 3) {
    const u = Math.random() * Math.PI * 2;
    const v = 0.06 + Math.random() * 0.94;
    const r = Math.sqrt(1 - v * v);
    starPos.set([Math.cos(u) * r * 360, v * 360, Math.sin(u) * r * 360], i);
  }
  const starGeo = new BufferGeometry();
  starGeo.setAttribute('position', new Float32BufferAttribute(starPos, 3));
  const starMat = new PointsMaterial({ color: '#e6ecff', size: phone ? 1.6 : 1.3, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const stars = new Points(starGeo, starMat);
  scene.add(stars);

  const ground = terrain(phone);
  scene.add(ground);
  const H = ground.userData.heightAt;

  // Monolith (Home, Services).
  const girihU = { uTime: { value: 0 }, uFill: { value: 0 } };
  const monoMat = girihMaterial(girihU, [1, 3.4]);
  const M = new Vector3(4, 0, -2);
  M.y = H(M.x, M.z);
  const monolith = new Mesh(new RoundedBoxGeometry(2.6, 9, 1.1, 4, 0.05), monoMat);
  monolith.position.set(M.x, M.y + 4.3, M.z);
  monolith.rotation.y = -0.38;
  monolith.castShadow = true;
  scene.add(monolith);
  sun.target.position.copy(monolith.position);

  // Steles with the real app screens (Work).
  const loader = new TextureLoader();
  const steleMat = new MeshStandardMaterial({ color: '#3b3a40', map: stoneTexture(), roughness: 0.75, metalness: 0.12 });
  const steles = {};
  [
    ['arise', ['arise-welcome', 'arise-ari', 'arise-skills'], 720 / 1566, -9.5, -15, 0.5],
    ['idrok', ['idrok-library', 'idrok-alif', 'idrok-reader'], 720 / 1624, 12.5, -11, -0.6],
  ].forEach(([id, shots, ratio, x, z, ry]) => {
    const g = new Group();
    const sh = 3.6;
    const sw = sh * ratio;
    const lift = 0.55;
    const slab = new Mesh(new RoundedBoxGeometry(sw + 0.28, sh + 0.28, 0.42, 4, 0.05), steleMat);
    slab.position.y = lift + sh / 2;
    slab.castShadow = true;
    const plinth = new Mesh(new RoundedBoxGeometry(sw + 0.78, lift + 0.4, 0.9, 3, 0.05), steleMat);
    plinth.position.y = (lift + 0.4) / 2 - 0.4;
    plinth.castShadow = true;
    const frameMat = new MeshBasicMaterial({ color: ACCENT.clone(), toneMapped: false });
    const frame = new Mesh(new PlaneGeometry(sw + 0.05, sh + 0.05), frameMat);
    frame.position.set(0, slab.position.y, 0.212);
    const textures = shots.map((shot) => ({ shot, tex: null }));
    const load = (entry) => {
      if (!entry.tex) {
        entry.tex = loader.load(`./assets/shots/${entry.shot}-720.webp`);
        entry.tex.colorSpace = SRGBColorSpace;
        entry.tex.anisotropy = 4;
      }
      return entry.tex;
    };
    const screenMat = new MeshBasicMaterial({ map: load(textures[0]), toneMapped: false });
    const screen = new Mesh(new PlaneGeometry(sw, sh), screenMat);
    screen.position.set(0, slab.position.y, 0.214);
    screen.userData.action = { screen: id, step: 1 };
    g.add(slab, plinth, frame, screen);
    g.position.set(x, H(x, z) - 0.1, z);
    g.rotation.y = ry;
    scene.add(g);
    steles[id] = { group: g, screen, screenMat, frameMat, textures, load, index: 0, pending: null, fade: 0, on: 0 };
  });

  /* About: a stone gateway (a caravanserai arch) with warm lanterns. */
  const A = new Vector3(-26, 0, -32);
  A.y = H(A.x, A.z);
  const gate = new Group();
  const pillarGeo = new RoundedBoxGeometry(1.4, 7, 1.4, 3, 0.06);
  [-2.9, 2.9].forEach((x) => {
    const p = new Mesh(pillarGeo, steleMat);
    p.position.set(x, 3.5, 0);
    p.castShadow = true;
    gate.add(p);
  });
  const arch = new Mesh(new TorusGeometry(2.9, 0.7, 12, 40, Math.PI), steleMat);
  arch.position.y = 7;
  arch.castShadow = true;
  gate.add(arch);
  // A band of girih light inside the arch, like tilework catching the evening sun.
  const gateGlowU = { uTime: girihU.uTime, uFill: { value: 0 } };
  const gateBand = new Mesh(new TorusGeometry(2.9, 0.18, 8, 40, Math.PI), new MeshBasicMaterial({ color: new Color('#7ff3ff').multiplyScalar(0.9), toneMapped: false }));
  gateBand.position.set(0, 7, 0.55);
  gate.add(gateBand);
  const lanterns = [];
  [-1.6, 0, 1.6].forEach((x, i) => {
    const l = new Mesh(new SphereGeometry(0.16, 12, 8), new MeshBasicMaterial({ color: new Color('#ffb46a').multiplyScalar(2.2), toneMapped: false }));
    l.position.set(x, 5.6 - (i === 1 ? 0.5 : 0), 0.2);
    gate.add(l);
    lanterns.push(l);
  });
  const lampLight = new PointLight('#ffb46a', 14, 18, 2);
  lampLight.position.set(0, 4.6, 2);
  gate.add(lampLight);
  // Three low stones in front: the founders.
  ['MN', 'NX', 'AN'].forEach((initials, i) => {
    const x = (i - 1) * 2.2;
    const hgt = 1.6 + i * 0.25;
    const st = new Mesh(new RoundedBoxGeometry(1.1, hgt, 0.5, 3, 0.05), steleMat);
    st.position.set(x, 0.7, 4.2);
    st.rotation.y = (i - 1) * 0.18;
    st.castShadow = true;
    // Initials cut into the stone and lit like the girih.
    const mark = new Text();
    mark.text = initials;
    mark.font = FONT[600];
    mark.fontSize = 0.34;
    mark.anchorX = 'center';
    mark.anchorY = 'middle';
    mark.letterSpacing = 0.08;
    mark.color = new Color('#7ff3ff').multiplyScalar(1.4);
    mark.material = new MeshBasicMaterial({ toneMapped: false });
    mark.position.set(0, hgt / 2 - 0.45 - 0.7 + 0.7, 0.26);
    st.add(mark);
    mark.sync();
    gate.add(st);
  });
  gate.position.copy(A).add(new Vector3(0, -0.15, 0));
  gate.rotation.y = 0.55;
  scene.add(gate);

  /* Journal: three stone tablets on a low terrace. */
  const J = new Vector3(24, 0, -30);
  J.y = H(J.x, J.z);
  const tablets = [];
  [-4.2, 0, 4.2].forEach((x, i) => {
    const t = new Group();
    const slab = new Mesh(new RoundedBoxGeometry(2.4, 3.2, 0.34, 3, 0.05), steleMat);
    slab.position.y = 1.9;
    slab.rotation.x = -0.12;
    slab.castShadow = true;
    const edge = new Mesh(new PlaneGeometry(2.0, 0.06), new MeshBasicMaterial({ color: new Color('#7ff3ff').multiplyScalar(0.8), toneMapped: false }));
    edge.position.set(0, 3.1, 0.2);
    edge.rotation.x = -0.12;
    const base = new Mesh(new CylinderGeometry(1.5, 1.7, 0.5, 24), steleMat);
    base.position.y = 0.05;
    base.castShadow = true;
    t.add(slab, edge, base);
    // Engraved number and date, lit like the girih.
    const engrave = (str, size, y, color) => {
      const m = new Text();
      m.text = str;
      m.font = FONT[600];
      m.fontSize = size;
      m.anchorX = 'center';
      m.anchorY = 'middle';
      m.color = color;
      m.material = new MeshBasicMaterial({ toneMapped: false });
      m.position.set(0, y, 0.19);
      m.rotation.x = -0.12;
      m.sync();
      slab.add(m);
    };
    engrave(`0${i + 1}`, 0.9, 0.35, new Color('#7ff3ff').multiplyScalar(1.3));
    engrave(['OCT 2026', 'OCT 2026', 'SEP 2026'][i], 0.2, -0.55, new Color('#f4f1ec').multiplyScalar(0.8));
    t.position.set(J.x + x, H(J.x + x, J.z + Math.abs(x) * 0.4) - 0.1, J.z + Math.abs(x) * 0.4);
    t.rotation.y = -0.45 - x * 0.06;
    scene.add(t);
    tablets.push(t);
  });

  // Dust in the light.
  const dustCount = { low: 300, mid: 900, high: 1800 }[tier];
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) dustPos.set([M.x + (Math.random() - 0.5) * 44, M.y + Math.random() * 14, M.z + (Math.random() - 0.5) * 38], i * 3);
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(dustPos, 3));
  const dust = new Points(dustGeo, new PointsMaterial({ color: '#ffe2c2', size: 0.045, transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending }));
  scene.add(dust);

  /* ---------- Daylight follows Fergana time ---------- */
  const mixA = new Color();
  const mixB = new Color();
  let girihBoost = 1;
  function applyDaylight() {
    const h = ferganaHour();
    let i = 0;
    while (i < SKY_KEYS.length - 2 && h >= SKY_KEYS[i + 1].h) i += 1;
    const k0 = SKY_KEYS[i];
    const k1 = SKY_KEYS[i + 1];
    const f = smooth(clamp((h - k0.h) / Math.max(0.001, k1.h - k0.h)));
    const c = (target, key) => target.copy(mixA.set(k0[key])).lerp(mixB.set(k1[key]), f);
    const n = (key) => k0[key] + (k1[key] - k0[key]) * f;
    c(skyU.uZenith.value, 'zenith'); c(skyU.uMid.value, 'mid'); c(skyU.uHorizon.value, 'horizon'); c(skyU.uGlow.value, 'glow');
    c(scene.fog.color, 'fog');
    scene.fog.density = n('density');
    sunDir.set(...k0.dir).normalize().lerp(new Vector3(...k1.dir).normalize(), f).normalize();
    c(sun.color, 'sun');
    sun.intensity = n('sunI');
    sun.position.copy(sun.target.position).addScaledVector(sunDir, 60);
    c(hemi.color, 'hemiSky'); c(hemi.groundColor, 'hemiGround');
    hemi.intensity = n('hemiI');
    starMat.opacity = n('stars');
    stars.visible = starMat.opacity > 0.01;
    girihBoost = n('girih');
    renderer.toneMappingExposure = n('exposure');
    document.documentElement.dataset.daypart = h < 5 || h >= 20 ? 'night' : h < 8 ? 'dawn' : h < 17 ? 'day' : 'dusk';
  }
  applyDaylight();
  setInterval(applyDaylight, 30000);

  /* ---------- Cameras and passes ---------- */
  const camera = new PerspectiveCamera(34, 1, 0.1, 900);
  const hudCam = new OrthographicCamera(0, 1, 0, -1, -10, 10);
  const uiScene = new Scene();
  const hudScene = new Scene();
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(256, 256), 0.6, 0.5, 0.84);
  composer.addPass(bloom);
  const finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  const shade = new ShaderPass(ShadeShader);
  composer.addPass(shade);
  composer.addPass(new OutputPass());

  function applyTier() {
    const dpr = window.devicePixelRatio || 1;
    const ratio = Math.min(dpr, { low: 1, mid: 1.25, high: 1.6 }[tier]);
    renderer.setPixelRatio(ratio);
    composer.setPixelRatio(ratio);
    renderer.shadowMap.enabled = tier === 'high';
    sun.castShadow = tier === 'high';
    bloom.enabled = tier !== 'low';
    bloom.strength = tier === 'high' ? 0.6 : 0.45;
    scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; });
    layout();
  }

  /* ---------- Stops: where the camera stands, per screen shape ---------- */
  const at = (x, y, z) => new Vector3(x, y, z);
  // Shot of an object's face: the object sits in the right part of a wide screen.
  const front = (obj, ry, dist, height, lookY, narrow, side = 0.3) => {
    const nrm = new Vector3(Math.sin(ry), 0, Math.cos(ry));
    const right = new Vector3(Math.cos(ry), 0, -Math.sin(ry));
    const pos = obj.clone().add(nrm.clone().multiplyScalar(dist)).add(new Vector3(0, height, 0));
    // Never below the ground: hills between the camera and the object would hide it.
    const ground = H(pos.x, pos.z) + 1.6;
    if (pos.y < ground) pos.y = ground;
    const look = obj.clone().add(new Vector3(0, lookY, 0));
    if (!narrow) look.add(right.multiplyScalar(-dist * side));
    return [pos, look];
  };
  const SA = steles.arise.group.position;
  const SI = steles.idrok.group.position;
  const SHOTS = {
    'home-hero': { wide: [at(-1.2, M.y + 2.4, 21), at(M.x - 3.4, M.y + 4.6, M.z - 6)], narrow: [at(M.x - 1.2, M.y + 2.6, 26), at(M.x, M.y + 5.4, M.z - 6)] },
    'home-services': { wide: front(M, -0.38, 15, 3.2, 4.6), narrow: front(M, -0.38, 19, 3.4, 7.2, true) },
    'work-overview': { wide: [at(M.x - 4, M.y + 10, M.z + 26), at(M.x - 2, M.y + 1, M.z - 14)], narrow: [at(M.x - 2, M.y + 12, M.z + 30), at(M.x, M.y + 3, M.z - 14)] },
    'work-arise': { wide: front(SA, 0.5, 10.8, 2.6, 2.6), narrow: front(SA, 0.5, 13, 3.2, -0.6, true) },
    'work-idrok': { wide: front(SI, -0.6, 10.8, 2.6, 2.6), narrow: front(SI, -0.6, 13, 3.2, -0.6, true) },
    'arise-problem': { wide: front(SA, 1.25, 12, 3.6, 3.2), narrow: front(SA, 1.25, 14, 3.6, 0, true) },
    'arise-built': { wide: front(SA, -0.25, 8.5, 1.2, 2.6), narrow: front(SA, -0.25, 11, 2.4, -0.4, true) },
    'arise-ai': { wide: front(SA, 0.9, 16, 8, 1.8), narrow: front(SA, 0.9, 17, 8, -1, true) },
    'idrok-problem': { wide: front(SI, 0.25, 12, 3.6, 3.2), narrow: front(SI, 0.25, 14, 3.6, 0, true) },
    'idrok-built': { wide: front(SI, -1.35, 8.5, 1.2, 2.6), narrow: front(SI, -1.35, 11, 2.4, -0.4, true) },
    'idrok-engineering': { wide: front(SI, -0.2, 16, 8, 1.8), narrow: front(SI, -0.2, 17, 8, -1, true) },
    'about-gate': { wide: front(A, 0.55, 24, 4, 5, false, 0.16), narrow: front(A, 0.55, 28, 5, 3, true) },
    'about-story': { wide: front(A, 1.25, 14, 2.4, 4), narrow: front(A, 1.25, 17, 3, 2, true) },
    'about-principles': { wide: front(A, 0.05, 11, 1.4, 4.6), narrow: front(A, 0.05, 14, 2.4, 2.4, true) },
    'about-team': { wide: front(A.clone().add(new Vector3(Math.sin(0.55) * 4.2, 0, Math.cos(0.55) * 4.2)), 0.75, 7.5, 1.8, 0.8), narrow: front(A.clone().add(new Vector3(Math.sin(0.55) * 4.2, 0, Math.cos(0.55) * 4.2)), 0.75, 10, 2.6, -1.4, true) },
    'journal-overview': { wide: front(J, -0.45, 20, 6, 1.6), narrow: front(J, -0.45, 24, 7, -0.4, true) },
    'journal-1': { wide: front(tablets[0].position, -0.2, 7.5, 1.8, 1.8), narrow: front(tablets[0].position, -0.2, 9.5, 2.4, -0.4, true) },
    'journal-2': { wide: front(tablets[1].position, -0.45, 7.5, 1.8, 1.8), narrow: front(tablets[1].position, -0.45, 9.5, 2.4, -0.4, true) },
    'journal-3': { wide: front(tablets[2].position, -0.7, 7.5, 1.8, 1.8), narrow: front(tablets[2].position, -0.7, 9.5, 2.4, -0.4, true) },
    'estimate': { wide: front(M, 0.35, 17, 1.2, 6.5), narrow: front(M, 0.35, 21, 2, 19, false, 0.26) },
    'contact-brief': { wide: [at(M.x - 34, M.y + 16, M.z + 30), at(M.x + 14, M.y + 13, M.z - 70)], narrow: [at(M.x - 30, M.y + 16, M.z + 34), at(M.x + 10, M.y + 22, M.z - 70)] },
    'contact-call': { wide: [at(M.x + 26, M.y + 18, M.z + 34), at(M.x - 22, M.y + 12, M.z - 72)], narrow: [at(M.x + 22, M.y + 18, M.z + 38), at(M.x - 18, M.y + 22, M.z - 72)] },
    'work-end': { wide: [at(M.x - 20, M.y + 22, M.z + 42), at(M.x + 6, M.y + 9, M.z - 40)], narrow: [at(M.x - 5, M.y + 13, M.z + 30), at(M.x, M.y + 9, M.z - 30)] },
  };
  const STOPS = PLACES.flatMap((place) => place.stops.map((stop) => ({ ...stop, place: place.id })));
  const placeStart = Object.fromEntries(PLACES.map((p) => [p.id, STOPS.findIndex((s) => s.place === p.id)]));
  const stopIndex = (id) => STOPS.findIndex((st) => st.id === id);

  /* ---------- 3D type ---------- */
  const textMat = () => new MeshBasicMaterial({ toneMapped: false, transparent: true, depthTest: false, depthWrite: false });
  const allTexts = [];
  function makeText({ key, raw, size, weight = 400, color = INK, max = 0, anchorX = 'left', anchorY = 'top', lineHeight = 1.15, letterSpacing = 0 }) {
    const txt = new Text();
    txt.material = textMat();
    txt.font = FONT[weight] || FONT[400];
    txt.fontSize = size;
    txt.anchorX = anchorX;
    txt.anchorY = anchorY;
    txt.lineHeight = lineHeight;
    txt.letterSpacing = letterSpacing;
    txt.maxWidth = max || Infinity;
    txt.color = color.clone();
    txt.userData.key = key;
    txt.userData.raw = raw;
    txt.userData.base = color.clone();
    txt.text = raw ?? t(key);
    // Layout reacts to 'synccomplete' (troika drops callbacks of a sync already under way).
    txt.addEventListener('synccomplete', () => txt.userData.onSync?.());
    // Start layout now: an unsynced text has no bounds, so it would be culled and never sync.
    txt.sync();
    allTexts.push(txt);
    return txt;
  }
  function retranslate() {
    allTexts.forEach((txt) => {
      if (txt.userData.key) { txt.text = t(txt.userData.key); txt.sync(() => txt.userData.onSync?.()); }
    });
  }

  // A button: text with a thin outline box sized to the text once it is laid out.
  function makeButton(def, unit) {
    const g = new Group();
    const label = makeText({ key: def.raw ? undefined : def.label, raw: def.raw ? def.label : undefined, size: 1.7 * unit, weight: 600, color: def.primary ? new Color('#062a2e') : INK, anchorY: 'middle' });
    const boxMat = new MeshBasicMaterial({ color: def.primary ? ACCENT.clone() : new Color('#f4f1ec'), transparent: true, opacity: def.primary ? 1 : 0.0, toneMapped: false, depthTest: false, depthWrite: false });
    const lineMat = new MeshBasicMaterial({ color: new Color('#f4f1ec'), transparent: true, opacity: def.primary ? 0 : 0.6, toneMapped: false, depthTest: false, depthWrite: false, wireframe: false });
    const box = new Mesh(new PlaneGeometry(1, 1), boxMat);
    const edge = new Group();
    const bars = [0, 1, 2, 3].map(() => new Mesh(new PlaneGeometry(1, 1), lineMat));
    edge.add(...bars);
    box.renderOrder = 1;
    bars.forEach((b) => { b.renderOrder = 1; });
    label.renderOrder = 2;
    g.add(box, edge, label);
    const padX = 1.6 * unit;
    const h = 4.6 * unit;
    const fit = () => {
      const bb = label.textRenderInfo?.blockBounds;
      if (!bb) return;
      const w = bb[2] - bb[0] + padX * 2;
      label.position.x = padX;
      box.scale.set(w, h, 1);
      box.position.set(w / 2, 0, -0.001);
      const th = Math.max(unit * 0.12, 0.002);
      bars[0].scale.set(w, th, 1); bars[0].position.set(w / 2, h / 2, 0);
      bars[1].scale.set(w, th, 1); bars[1].position.set(w / 2, -h / 2, 0);
      bars[2].scale.set(th, h, 1); bars[2].position.set(0, 0, 0);
      bars[3].scale.set(th, h, 1); bars[3].position.set(w, 0, 0);
      g.userData.width = w;
    };
    label.userData.onSync = () => { fit(); g.userData.onResize?.(); };
    // Clicks land on the box (a plane) as well as the letters.
    box.userData.action = def.action;
    label.userData.action = def.action;
    let selected = false;
    const paint = (on) => {
      if (def.primary || selected) {
        boxMat.color.copy(on ? new Color('#a6f7ff') : ACCENT);
        boxMat.opacity = 1;
        boxMat.userData.base = 1;
        label.color = new Color('#062a2e');
        lineMat.opacity = 0;
        lineMat.userData.base = 0;
      } else {
        boxMat.color.set('#f4f1ec');
        boxMat.opacity = on ? 0.12 : 0;
        boxMat.userData.base = boxMat.opacity;
        label.color = INK.clone();
        lineMat.opacity = on ? 1 : 0.6;
        lineMat.userData.base = lineMat.opacity;
      }
    };
    g.userData.hover = paint;
    g.userData.setSelected = (on) => { selected = on; paint(false); };
    box.userData.owner = g;
    label.userData.owner = g;
    g.userData.height = h;
    g.userData.mats = [boxMat, lineMat];
    g.userData.label = label;
    return g;
  }

  /* ---------- Panels: the text of each stop, floating in front of its camera ---------- */
  const PANEL_DIST = 10;
  const panels = [];
  let narrow = false;
  let aspect = 1;

  function stopPose(stop) {
    const shot = SHOTS[stop.shot][narrow ? 'narrow' : 'wide'];
    const m = new Matrix4().lookAt(shot[0], shot[1], new Vector3(0, 1, 0));
    const q = new Quaternion().setFromRotationMatrix(m);
    return { pos: shot[0], look: shot[1], q };
  }

  function buildPanel(stop, index) {
    const g = new Group();
    g.userData.items = [];
    g.userData.index = index;
    uiScene.add(g);
    panels.push(g);
    return g;
  }

  // Lays out a stop's content in "view units": the screen is 100 units tall.
  const disposeTree = (root) => root.traverse((o) => { if (o.dispose && o !== root) o.dispose(); else o.geometry?.dispose?.(); });

  /* ---------- Timeline estimator, built from 3D buttons ---------- */
  const est = { type: [], platform: [], feature: [], stage: [] };
  const estChips = [];
  let estResult = null;
  function estimateText() {
    const r = estimateWeeks(est);
    return r ? `${r[0]}–${r[1]} ${t('weeks')}` : t('Pick what you are building to see a timeline.');
  }
  function refreshEstimator() {
    estChips.forEach((chip) => chip.userData.setSelected(est[chip.userData.q].includes(chip.userData.v)));
    if (estResult) { estResult.text = estimateText(); estResult.fontSize = estResult.userData[estimateWeeks(est) ? 'bigSize' : 'smallSize']; estResult.sync(); }
  }
  function sendBrief() {
    const r = estimateWeeks(est);
    const label = (q, v) => t(ESTIMATE.questions.find((x) => x.id === q).options.find((o) => o[0] === v)[1]);
    const lines = [
      est.type[0] ? `${t('Project')}: ${label('type', est.type[0])}` : '',
      est.platform.length ? `${t('Platforms')}: ${est.platform.map((v) => label('platform', v)).join(', ')}` : '',
      est.feature.length ? `${t('Features')}: ${est.feature.map((v) => label('feature', v)).join(', ')}` : '',
      est.stage[0] ? `${t('Where we are')}: ${label('stage', est.stage[0])}` : '',
      r ? `${t('Rough timeline from the estimator')}: ${r[0]}–${r[1]} ${t('weeks')}` : '',
    ].filter(Boolean);
    const types = { mobile: 'Mobile app', web: 'Web platform', ai: 'AI product', design: 'Brand & site' };
    try { sessionStorage.setItem('nx-brief', JSON.stringify({ projectType: types[est.type[0]] || '', message: lines.join(String.fromCharCode(10)) })); } catch (error) { /* private mode */ }
    window.dispatchEvent(new CustomEvent('nexora:brief', { detail: { projectType: types[est.type[0]] || '', message: lines.join(String.fromCharCode(10)) } }));
    jump(stopIndex('contact-brief'));
  }
  function buildEstimator(u, width) {
    const box = new Group();
    box.userData.topAnchored = true;
    estChips.length = 0;
    const blocks = [];
    ESTIMATE.questions.forEach((q) => {
      const head = makeText({ key: q.label, size: 1.25 * u, color: MUTED, letterSpacing: 0.12 });
      const chips = q.options.map(([v, labelKey]) => {
        const b = makeButton({ label: labelKey, action: { est: { q: q.id, v, single: q.single } } }, u * 0.82);
        b.userData.q = q.id;
        b.userData.v = v;
        estChips.push(b);
        return b;
      });
      blocks.push({ head, chips });
      box.add(head, ...chips);
    });
    const result = makeText({ raw: estimateText(), size: 3.6 * u, weight: 600, color: ACCENT });
    result.userData.bigSize = 3.6 * u;
    result.userData.smallSize = 1.6 * u;
    estResult = result;
    const note = makeText({ key: 'A rough estimate based on typical projects of this size. We confirm the scope, timeline and cost after a 20-minute call.', size: 1.2 * u, color: MUTED, max: width, lineHeight: 1.4 });
    const actions = [makeButton({ label: 'Send as a brief', primary: true, action: { brief: true } }, u), makeButton({ label: 'Book a call', action: { href: './contact.html#call' } }, u)];
    box.add(result, note, ...actions);
    const relayout = () => {
      let y = 0;
      blocks.forEach(({ head, chips }) => {
        head.position.set(0, y, 0);
        y -= 2.4 * u;
        let x = 0;
        const h = 4.6 * u * 0.82;
        chips.forEach((c) => {
          const w = c.userData.width || 14 * u;
          if (x > 0 && x + w > width) { x = 0; y -= h + 0.9 * u; }
          c.position.set(x, y - h / 2, 0);
          x += w + 0.9 * u;
        });
        y -= h + 2.4 * u;
      });
      result.position.set(0, y, 0);
      const rb = result.textRenderInfo?.blockBounds;
      y -= (rb ? rb[3] - rb[1] : 4 * u) + 1 * u;
      note.position.set(0, y, 0);
      const nb = note.textRenderInfo?.blockBounds;
      y -= (nb ? nb[3] - nb[1] : 3 * u) + 3.2 * u;
      let x = 0;
      actions.forEach((a) => { a.position.set(x, y, 0); x += (a.userData.width || 20 * u) + 1.4 * u; });
      y -= 3.4 * u;
      box.userData.rowHeight = -y;
      box.userData.onChange?.();
    };
    estChips.forEach((c) => { c.userData.onResize = relayout; });
    actions.forEach((a) => { a.userData.onResize = relayout; });
    blocks.forEach(({ head }) => { head.userData.onSync = relayout; });
    result.userData.onSync = relayout;
    note.userData.onSync = relayout;
    relayout();
    setTimeout(refreshEstimator, 0);
    return box;
  }

  function layoutPanel(g, stop) {
    disposeTree(g);
    g.clear();
    const pose = stopPose(stop);
    const fov = camera.fov;
    const viewH = 2 * PANEL_DIST * Math.tan((fov * Math.PI) / 360);
    const u = viewH / 100;
    const halfW = 50 * aspect;
    const dir = new Vector3(0, 0, -1).applyQuaternion(pose.q);
    g.position.copy(pose.pos).addScaledVector(dir, PANEL_DIST);
    g.quaternion.copy(pose.q);
    const c = stop.content || {};
    const left = (-halfW + (narrow ? 5 : 8)) * u;
    const maxW = (narrow ? (2 * halfW - 10) : Math.min(halfW * 0.95, 64)) * u;
    // Everything sits in an inner group so a long chapter can be scaled to fit the screen.
    const inner = new Group();
    g.add(inner);
    const T = (key, opts) => makeText({ key, ...opts });
    const lineMat = () => new MeshBasicMaterial({ color: '#f4f1ec', transparent: true, opacity: 0.16, toneMapped: false, depthTest: false, depthWrite: false });
    // A vertical stack of texts whose height is known only after they are laid out.
    const stack = (items, gap) => {
      const s = new Group();
      s.userData.topAnchored = true;
      s.userData.rowHeight = 4 * u;
      items.forEach((it) => s.add(it));
      s.userData.restack = () => {
        let yy = 0;
        items.forEach((it) => {
          it.position.y = yy;
          const bb = it.textRenderInfo?.blockBounds;
          const hh = it.userData.rowHeight || (bb ? bb[3] - bb[1] : (it.fontSize || u) * 1.2);
          yy -= hh + gap;
        });
        s.userData.rowHeight = -yy - gap;
      };
      items.forEach((it) => { if (it.sync) it.userData.onSync = () => { s.userData.restack(); s.userData.onChange?.(); }; });
      s.userData.restack();
      return s;
    };
    const queue = [];
    const textW = Math.min(maxW, 50 * u);
    if (c.eyebrow) queue.push(() => T(c.eyebrow, { size: (narrow ? 1.6 : 1.35) * u, color: MUTED, letterSpacing: 0.18 }));
    if (c.title) queue.push(() => T(c.title, { size: (narrow ? (c.big ? 5.4 : 4.4) : (c.big ? 8.6 : 6.2)) * u, weight: 600, max: maxW, lineHeight: 1.0, letterSpacing: -0.03 }));
    if (c.lede) queue.push(() => T(c.lede, { size: (narrow ? 1.8 : 1.8) * u, color: MUTED, max: textW, lineHeight: 1.45 }));
    if (c.list) c.list.forEach((item, i) => queue.push(() => {
      const row = new Group();
      const num = makeText({ raw: `0${i + 1}`, size: 1.3 * u, color: ACCENT, anchorY: 'middle' });
      const label = T(item.label, { size: (narrow ? 2.6 : 2.4) * u, weight: 600, anchorY: 'middle' });
      label.position.set(4.2 * u, 0, 0);
      const w = Math.min(maxW, 46 * u);
      const line = new Mesh(new PlaneGeometry(1, 1), lineMat());
      line.scale.set(w, Math.max(u * 0.1, 0.002), 1);
      line.position.set(w / 2, -2.6 * u, 0);
      const hit = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ visible: false }));
      hit.scale.set(w, 5 * u, 1);
      hit.position.set(w / 2, 0, 0);
      row.add(num, label, line, hit);
      row.userData.rowHeight = 5.6 * u;
      [label, hit].forEach((m) => { m.userData.action = item.action; m.userData.owner = row; });
      row.userData.hover = (on) => { label.color = on ? ACCENT.clone() : INK.clone(); label.position.x = (on ? 5.2 : 4.2) * u; if (item.service !== undefined) window.dispatchEvent(new CustomEvent(on ? 'nexora:service' : 'nexora:service-leave', { detail: item.service })); };
      return row;
    }));
    // Rows: a short title (or a name), an optional role line, and a sentence.
    if (c.rows) c.rows.forEach((r) => queue.push(() => {
      const parts = [];
      const title = r.titleRaw ? makeText({ raw: r.titleRaw, size: 2.0 * u, weight: 600 }) : T(r.title, { size: 2.0 * u, weight: 600, max: textW });
      parts.push(title);
      if (r.sub) parts.push(T(r.sub, { size: 1.2 * u, color: ACCENT, letterSpacing: 0.14 }));
      parts.push(T(r.text, { size: 1.55 * u, color: MUTED, max: textW, lineHeight: 1.4 }));
      return stack(parts, 0.7 * u);
    }));
    if (c.points) c.points.forEach((p) => queue.push(() => {
      const txt = c.rawPoints ? makeText({ raw: p, size: 1.7 * u, color: INK, max: textW }) : T(p, { size: (narrow ? 1.75 : 1.65) * u, color: MUTED, max: textW, lineHeight: 1.4 });
      return txt;
    }));
    if (c.quote) queue.push(() => {
      const bar = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: ACCENT.clone(), transparent: true, toneMapped: false, depthTest: false, depthWrite: false }));
      const q = T(c.quote, { size: (narrow ? 2.1 : 2.2) * u, weight: 600, max: textW - 3 * u, lineHeight: 1.25 });
      q.position.x = 2.4 * u;
      const parts = [q];
      if (c.author) { const a = makeText({ key: c.author, size: 1.3 * u, color: MUTED }); a.position.x = 2.4 * u; parts.push(a); }
      const s = stack(parts, 1.2 * u);
      s.add(bar);
      const fitBar = () => { const hgt = s.userData.rowHeight; bar.scale.set(Math.max(u * 0.3, 0.004), hgt, 1); bar.position.set(0, -hgt / 2, 0); };
      const prev = s.userData.restack;
      s.userData.restack = () => { prev(); fitBar(); };
      fitBar();
      return s;
    });
    if (c.screens) queue.push(() => {
      const row = new Group();
      const prev = makeButton({ label: '←', raw: true, action: { screen: c.screens, step: -1 } }, u);
      const next = makeButton({ label: '→', raw: true, action: { screen: c.screens, step: 1 } }, u);
      next.position.x = 7.5 * u;
      const hint = T('Swipe the screen', { size: 1.25 * u, color: MUTED, anchorY: 'middle', letterSpacing: 0.12 });
      hint.position.x = 16 * u;
      row.add(prev, next, hint);
      row.userData.rowHeight = 6 * u;
      return row;
    });
    // Store badges: the apps are not in the stores yet.
    if (c.stores) queue.push(() => {
      const row = new Group();
      let x = 0;
      c.stores.forEach((name) => {
        const small = T('Coming soon to', { size: 0.95 * u, color: MUTED, letterSpacing: 0.1, anchorY: 'bottom' });
        const big = makeText({ raw: name, size: 1.6 * u, weight: 600, anchorY: 'top' });
        small.position.set(x + 1.2 * u, 0.2 * u, 0);
        big.position.set(x + 1.2 * u, 0.1 * u, 0);
        const box = new Mesh(new PlaneGeometry(1, 1), lineMat());
        box.material.opacity = 0.08;
        box.scale.set(15 * u, 5.4 * u, 1);
        box.position.set(x + 7.5 * u, -0.4 * u, -0.001);
        row.add(box, small, big);
        x += 16.2 * u;
      });
      row.userData.rowHeight = 6 * u;
      return row;
    });
    if (c.estimator) queue.push(() => buildEstimator(u, textW));
    if (c.buttons) queue.push(() => {
      const row = new Group();
      const btns = c.buttons.map((b) => makeButton(b, u));
      // Buttons wrap onto a second line when they do not fit.
      const place = () => {
        let x = 0;
        let line = 0;
        btns.forEach((b) => {
          const w = b.userData.width || 20 * u;
          if (x > 0 && x + w > maxW) { x = 0; line += 1; }
          b.position.set(x, -line * 6 * u, 0);
          x += w + 1.4 * u;
        });
        const h = (line + 1) * 6 * u + 0.4 * u;
        if (row.userData.rowHeight !== h) { row.userData.rowHeight = h; row.userData.onChange?.(); }
      };
      btns.forEach((b) => { row.add(b); b.userData.onResize = place; });
      row.userData.rowHeight = 6.4 * u;
      row.userData.firstHalf = 3.2 * u;
      return row;
    });

    // Place items once all texts know their size.
    const objs = queue.map((make) => make());
    const heightOf = (o) => {
      if (o.userData.rowHeight) return o.userData.rowHeight;
      const bb = o.textRenderInfo?.blockBounds;
      return bb ? bb[3] - bb[1] : (o.fontSize || u) * 1.2;
    };
    const topY = (narrow ? (c.narrowTop ?? -6) : (c.top ?? 22)) * u;
    const flow = () => {
      let y = 0;
      objs.forEach((o, i) => {
        // Middle-anchored rows (buttons, lists) are placed by their first line's centre.
        const half = o.userData.topAnchored ? 0 : (o.userData.firstHalf ?? (o.userData.rowHeight ? o.userData.rowHeight / 2 : 0));
        o.position.set(0, y - half, 0);
        if (!o.parent) inner.add(o);
        const gap = i < objs.length - 1 ? (o.userData.rowHeight && !o.userData.topAnchored ? 0.8 : 2.2) * u : 0;
        y -= heightOf(o) + gap;
      });
      const total = -y;
      // Fit: long chapters shrink so nothing leaves the screen.
      const avail = narrow ? 56 * u : (topY / u + 40) * u;
      const k = total > avail ? avail / total : 1;
      inner.scale.setScalar(k);
      if (narrow && c.compact) {
        // Phones, form chapters: the text goes to the top; the form panel fills the bottom.
        inner.scale.setScalar(Math.min(k, 22 * u / total));
        inner.position.set(left, 40 * u, 0);
      } else if (narrow) {
        // Phones: the block sits on the bottom of the screen, above the progress line.
        inner.position.set(left, -44 * u + total * k, 0);
      } else {
        inner.position.set(left, topY, 0);
      }
    };
    objs.forEach((o) => {
      if (o.isMesh && o.sync) o.userData.onSync = flow;
      else o.userData.onChange = flow;
    });
    flow();
    g.userData.reflow = flow;
    g.userData.objs = objs;
  }

  function layoutPanels() {
    allTexts.length = 0;
    panels.forEach((g, i) => layoutPanel(g, STOPS[i]));
    layoutHud();
  }

  STOPS.forEach((stop, i) => buildPanel(stop, i));

  /* ---------- HUD: brand, menu, language, progress ---------- */
  const hud = { items: [] };
  let menuOpen = false;
  function layoutHud() {
    disposeTree(hudScene);
    hudScene.clear();
    hud.items = [];
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const pad = narrow ? 18 : 32;
    const top = -(narrow ? 30 : 36);
    const brand = makeText({ raw: 'Nexora', size: narrow ? 17 : 18, weight: 600, anchorY: 'middle' });
    const brand2 = makeText({ raw: 'Studio', size: narrow ? 17 : 18, color: MUTED, anchorY: 'middle' });
    brand.position.set(pad, top, 0);
    brand2.position.set(pad + 70, top, 0);
    brand.userData.onSync = () => { const bb = brand.textRenderInfo.blockBounds; brand2.position.set(pad + (bb[2] - bb[0]) + 6, top, 0); };
    brand.userData.action = { go: 0 };
    brand.userData.owner = brand;
    hudScene.add(brand, brand2);

    const langs = ['en', 'ru', 'uz'].map((code) => {
      const txt = makeText({ raw: code.toUpperCase(), size: 12, weight: 600, color: code === lang() ? ACCENT : MUTED, anchorX: 'center', anchorY: 'middle', letterSpacing: 0.1 });
      txt.userData.action = { lang: code };
      txt.userData.owner = txt;
      return txt;
    });

    // The full menu needs room; smaller windows use the Menu button like phones.
    const roomy = !narrow && w >= 1120;
    if (roomy) {
      // Desktop: menu across the top, language and call to action on the right.
      let x = w * 0.5 - 250;
      NAV.forEach((item) => {
        const txt = makeText({ key: item.label, size: 12, color: MUTED, anchorY: 'middle', letterSpacing: 0.16 });
        txt.text = `${t(item.label).toUpperCase()}${item.action.href ? ' →' : ''}`;
        txt.userData.key = null;
        txt.position.set(x, top, 0);
        txt.userData.action = item.action;
        txt.userData.owner = txt;
        txt.userData.nav = item;
        x += 30 + t(item.label).length * 10.2;
        hudScene.add(txt);
        hud.items.push(txt);
      });
      langs.forEach((txt, i) => { txt.position.set(w - pad - 200 + i * 30, top, 0); hudScene.add(txt); });
      const cta = makeButton({ label: 'Start a project', primary: true, action: { stop: 'contact-brief' } }, 9);
      cta.position.set(w - pad - 104, top, 0);
      cta.scale.setScalar(1);
      hudScene.add(cta);
    } else {
      const menu = makeText({ key: menuOpen ? 'Close' : 'Menu', size: 13, weight: 600, anchorX: 'right', anchorY: 'middle', letterSpacing: 0.14 });
      menu.text = t(menuOpen ? 'Close' : 'Menu').toUpperCase();
      menu.userData.key = null;
      menu.position.set(w - pad, top, 0);
      menu.userData.action = { menu: true };
      menu.userData.owner = menu;
      hudScene.add(menu);
      if (menuOpen) {
        const veil = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: '#17161b', transparent: true, opacity: 0.94, toneMapped: false, depthTest: false }));
        veil.position.set(w / 2, -h / 2, -1);
        veil.renderOrder = -1;
        hudScene.add(veil);
        let y = -h * 0.2;
        [{ label: 'Home', action: { go: 0 } }, ...NAV].forEach((item) => {
          const txt = makeText({ key: item.label, size: 34, weight: 600, anchorY: 'middle' });
          txt.position.set(pad, y, 0);
          txt.userData.action = { ...item.action, closeMenu: true };
          txt.userData.owner = txt;
          hudScene.add(txt);
          y -= 54;
        });
        langs.forEach((txt, i) => { txt.position.set(pad + 10 + i * 40, y - 20, 0); txt.fontSize = 16; hudScene.add(txt); });
      }
    }

    // Progress: chapter number and the place's name, bottom right.
    const prog = makeText({ raw: '', size: 11, color: MUTED, anchorX: 'right', anchorY: 'bottom', letterSpacing: 0.16 });
    prog.position.set(w - pad, -h + pad, 0);
    hudScene.add(prog);
    hud.progress = prog;
    const hint = makeText({ key: 'Scroll to explore', size: 11, color: MUTED, anchorY: 'bottom', letterSpacing: 0.16 });
    hint.text = `${t('Scroll to explore').toUpperCase()} ↓`;
    hint.userData.key = null;
    hint.position.set(pad, -h + pad, 0);
    hudScene.add(hint);
    hud.hint = hint;
  }

  /* ---------- Resize ---------- */
  let lastShape = '';
  function layout() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w / (tier === 'high' ? 2 : 3), h / (tier === 'high' ? 2 : 3));
    aspect = w / h;
    const wasNarrow = narrow;
    narrow = w < 760 || aspect < 0.85;
    camera.aspect = aspect;
    camera.fov = narrow ? 46 : 34;
    camera.updateProjectionMatrix();
    hudCam.left = 0; hudCam.right = w; hudCam.top = 0; hudCam.bottom = -h;
    hudCam.updateProjectionMatrix();
    shade.uniforms.uNarrow.value = narrow ? 1 : 0;
    // Rebuild the text only when the window's shape changed, not on pixel-density changes.
    const shapeKey = `${w}x${h}`;
    if (shapeKey !== lastShape) { lastShape = shapeKey; layoutPanels(); }
    if (wasNarrow !== narrow) menuOpen = false;
  }

  /* ---------- The journey: one number, 0 … stops-1 ---------- */
  const max = STOPS.length - 1;
  const params = new URLSearchParams(location.search);
  const startPlace = params.get('p');
  let target = startPlace && placeStart[startPlace] >= 0 ? placeStart[startPlace] : 0;
  let s = target;
  let lastInput = 0;
  let flying = null; // a menu jump: animate s from a to b

  const push = (delta) => { target = clamp(target + delta, 0, max); lastInput = performance.now(); flying = null; };
  const inPane = (e) => e.target instanceof Element && e.target.closest('.pane');
  window.addEventListener('wheel', (e) => {
    if (menuOpen || inPane(e)) return;
    const dy = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
    push(clamp(dy, -160, 160) / 900);
  }, { passive: true });
  let touchY = null;
  window.addEventListener('touchstart', (e) => { touchY = inPane(e) ? null : e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (touchY === null || menuOpen) return;
    const y = e.touches[0].clientY;
    push((touchY - y) / (innerHeight * 0.55));
    touchY = y;
  }, { passive: true });
  window.addEventListener('touchend', () => { touchY = null; }, { passive: true });
  window.addEventListener('keydown', (e) => {
    if (inPane(e) || (e.target instanceof Element && e.target.closest('input, textarea, select, button, a'))) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { jump(Math.min(max, Math.round(target) + 1)); e.preventDefault(); }
    if (['ArrowUp', 'PageUp'].includes(e.key)) { jump(Math.max(0, Math.round(target) - 1)); e.preventDefault(); }
    if (e.key === 'Home') jump(0);
    if (e.key === 'End') jump(max);
  });
  function jump(index) {
    flying = { from: s, to: clamp(index, 0, max), t: 0, dur: 1.2 + Math.min(3, Math.abs(index - s)) * 0.35 };
    target = flying.to;
  }

  /* ---------- Pointer: hover and click on 3D text ---------- */
  const ray = new Raycaster();
  const ndc = new Vector2();
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, px: -1, py: -1 };
  let hovered = null;
  function pick(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    // HUD first (screen space), then world text, then the steles' screens.
    ndc.set((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, hudCam);
    let hit = ray.intersectObjects(hudScene.children, true).find((h) => h.object.userData.action);
    if (hit) return hit.object;
    ray.setFromCamera(ndc, camera);
    const near = panels.filter((p) => p.visible);
    hit = ray.intersectObjects(near, true).find((h) => h.object.userData.action);
    if (hit) return hit.object;
    hit = ray.intersectObjects(Object.values(steles).map((st) => st.screen), false)[0];
    return hit ? hit.object : null;
  }
  canvas.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / innerHeight) * 2 - 1;
    if (e.pointerType !== 'mouse') return;
    const obj = pick(e.clientX, e.clientY);
    const owner = obj ? (obj.userData.owner || obj) : null;
    if (owner !== hovered) {
      hovered?.userData.hover?.(false);
      if (hovered && hovered.isMesh && hovered.userData.base && !hovered.userData.hover) hovered.color = hovered.userData.base.clone();
      hovered = owner;
      if (owner?.userData.hover) owner.userData.hover(true);
      else if (owner?.isMesh && owner.userData.base) owner.color = ACCENT.clone();
      canvas.style.cursor = owner ? 'pointer' : '';
      if (owner) window.dispatchEvent(new CustomEvent('nexora:hover'));
    }
  });
  let down = null;
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, at: performance.now() }; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down) return;
    const dx = e.clientX - down.x;
    const dy = e.clientY - down.y;
    const quick = performance.now() - down.at < 600;
    down = null;
    // A sideways swipe over a product switches its screen.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      const stop = STOPS[Math.round(s)];
      if (stop.content?.screens) switchScreen(stop.content.screens, dx < 0 ? 1 : -1);
      return;
    }
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8 || !quick) return;
    const obj = pick(e.clientX, e.clientY);
    if (obj) act(obj.userData.action);
  });

  function act(a) {
    if (!a) return;
    window.dispatchEvent(new CustomEvent('nexora:click'));
    if (a.closeMenu) { menuOpen = false; layoutHud(); }
    if (a.go !== undefined) jump(a.go);
    if (a.place) jump(placeStart[a.place]);
    if (a.stop) jump(stopIndex(a.stop));
    if (a.href) { window.location.href = a.href; }
    if (a.screen) switchScreen(a.screen, a.step);
    if (a.est) {
      const list = est[a.est.q];
      const i = list.indexOf(a.est.v);
      if (a.est.single) est[a.est.q] = i >= 0 ? [] : [a.est.v];
      else if (i >= 0) list.splice(i, 1);
      else list.push(a.est.v);
      refreshEstimator();
    }
    if (a.brief) sendBrief();
    if (a.lang) { window.dispatchEvent(new CustomEvent('nexora:lang', { detail: a.lang })); }
    if (a.menu) { menuOpen = !menuOpen; layoutHud(); }
  }

  function switchScreen(id, step) {
    const st = steles[id];
    if (!st) return;
    const from = st.pending ?? st.index;
    st.pending = (from + step + st.textures.length) % st.textures.length;
    st.load(st.textures[st.pending]);
  }

  /* ---------- Frame ---------- */
  const pos = new Vector3();
  const look = new Vector3();
  const drift = new Vector3();
  const posA = new Vector3();
  const lookA = new Vector3();
  let last = performance.now();
  let time = 0;
  let ready = false;
  let shownPlace = null;
  // Frame timing for the quality tiers.
  const perf = { frames: 0, sum: 0, checks: 0 };

  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    // Low tier on phones: about 30 frames a second is enough and saves battery.
    if (tier === 'low' && (now - last) < 30 && ready) return;
    step(now);
  }

  // The window moved to another screen (or zoom changed): resize the buffers.
  let lastDpr = window.devicePixelRatio || 1;
  function step(now) {
    const dpr = window.devicePixelRatio || 1;
    if (dpr !== lastDpr) { lastDpr = dpr; applyTier(); }
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
    last = now;
    time += dt;

    // Journey: menu jumps fly with easing; scrolling eases, then settles on the nearest stop.
    if (flying) {
      flying.t = Math.min(1, flying.t + dt / flying.dur);
      const e = flying.t < 0.5 ? 4 * flying.t ** 3 : 1 - (-2 * flying.t + 2) ** 3 / 2;
      s = flying.from + (flying.to - flying.from) * e;
      if (flying.t >= 1) flying = null;
    } else {
      if (now - lastInput > 380) target += (Math.round(target) - target) * (1 - Math.exp(-dt * 6));
      s += (target - s) * (1 - Math.exp(-dt * 3.2));
    }

    const key = narrow ? 'narrow' : 'wide';
    const i0 = Math.floor(clamp(s, 0, max));
    const i1 = Math.min(max, i0 + 1);
    const f = smooth(clamp(s - i0));
    const a0 = SHOTS[STOPS[i0].shot][key];
    const a1 = SHOTS[STOPS[i1].shot][key];
    posA.copy(a0[0]).lerp(a1[0], f);
    lookA.copy(a0[1]).lerp(a1[1], f);
    // A gentle arc between stops so long moves feel like flight, not a slide.
    const arc = Math.sin(f * Math.PI) * Math.min(6, a0[0].distanceTo(a1[0]) * 0.12);
    pos.copy(posA).add(new Vector3(0, arc, 0));
    look.copy(lookA);
    pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 2));
    pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 2));
    drift.set(Math.sin(time * 0.05) * 0.5 + pointer.x * 0.7, -pointer.y * 0.35, 0);
    camera.position.copy(pos).add(drift);
    camera.lookAt(look.clone().addScaledVector(drift, 0.3));

    // Text panels fade in near their stop.
    let shadeAmount = 0;
    panels.forEach((g, i) => {
      const a = clamp(1 - Math.abs(s - i) * 2.4);
      g.visible = a > 0.01;
      if (!g.visible) return;
      shadeAmount = Math.max(shadeAmount, a);
      g.traverse((o) => {
        if (o.isMesh && o.material) {
          if (o.material.userData.base === undefined) o.material.userData.base = o.material.opacity ?? 1;
          o.material.opacity = o.material.userData.base * a;
          if ('fillOpacity' in o) o.fillOpacity = a;
        }
      });
      g.position.y += 0; // panels stay put; the camera's drift gives the parallax
    });
    shade.uniforms.uAmount.value = shadeAmount;
    shade.uniforms.uNarrow.value = narrow ? (STOPS[Math.round(clamp(s, 0, max))].content?.compact ? 2 : 1) : 0;

    // Monolith: girih light; the service colour follows hover.
    girihU.uTime.value = time;
    girihColor.lerp(serviceColor, 1 - Math.exp(-dt * 4));
    monoMat.emissive.copy(girihColor).multiplyScalar(girihBoost);

    // Steles: screens switch on when the camera arrives; screen changes dim, swap, brighten.
    Object.entries(steles).forEach(([id, st]) => {
      // Lit on every chapter of its product, dark elsewhere.
      const first = placeStart[id];
      const last = first + PLACES.find((p) => p.id === id).stops.length - 1;
      const dist = s < first ? first - s : s > last ? s - last : 0;
      const want = clamp(1.6 - dist * 1.4);
      st.on += (want - st.on) * (1 - Math.exp(-dt * 5));
      if (st.pending !== null) {
        st.fade = Math.min(1, st.fade + dt * 7);
        const next = st.textures[st.pending];
        if (st.fade >= 1 && next.tex?.image) {
          st.index = st.pending;
          st.pending = null;
          st.screenMat.map = next.tex;
          st.screenMat.needsUpdate = true;
          window.dispatchEvent(new CustomEvent('nexora:screen-shown'));
        }
      } else st.fade = Math.max(0, st.fade - dt * 5);
      const gain = SCREEN_GAIN[st.textures[st.index].shot] ?? 0.8;
      st.screenMat.color.setScalar((0.04 + st.on * (gain - 0.04)) * (1 - st.fade * 0.92));
      st.frameMat.color.copy(ACCENT).multiplyScalar(0.06 + st.on * 0.85);
    });

    dust.rotation.y = time * 0.012;
    lampLight.intensity = 12 + Math.sin(time * 7.3) * 0.8 + Math.sin(time * 3.1) * 1.2;
    finish.uniforms.uTime.value = time % 10;

    // HUD: chapter counter, hint fades after the first move, active menu item.
    const idx = Math.round(clamp(s, 0, max));
    const stop = STOPS[idx];
    if (hud.progress) {
      const label = `${String(idx + 1).padStart(2, '0')} / ${String(max + 1).padStart(2, '0')} — ${(() => { const pl = PLACES.find((p) => p.id === stop.place); return (pl.raw ? pl.label : t(pl.label)).toUpperCase(); })()}`;
      if (hud.progress.text !== label) { hud.progress.text = label; hud.progress.sync(); }
    }
    if (hud.hint) hud.hint.fillOpacity = clamp(1 - s * 2);
    if (stop.place !== shownPlace) {
      shownPlace = stop.place;
      onPlace?.(stop.place);
      const navPlace = { arise: 'work', idrok: 'work', estimate: 'contact' }[stop.place] || stop.place;
      hud.items.forEach((txt) => { txt.color = (txt.userData.nav.action.place === navPlace ? INK : MUTED).clone(); txt.userData.base = txt.color.clone(); });
    }

    onFrame?.(s, STOPS);

    // Draw: valley through the post chain, then crisp text on top.
    renderer.clear();
    composer.render(dt);
    renderer.clearDepth();
    renderer.render(uiScene, camera);
    renderer.clearDepth();
    renderer.render(hudScene, hudCam);

    // Quality: average the first frames and step down if the device struggles.
    if (perf.checks < 3) {
      perf.frames += 1;
      perf.sum += dt;
      if (perf.frames === 90) {
        const avg = perf.sum / perf.frames;
        perf.frames = 0;
        perf.sum = 0;
        perf.checks += 1;
        const budget = tier === 'low' ? 0.045 : 0.024;
        if (avg > budget) {
          const i = TIERS.indexOf(tier);
          if (i > 0) { tier = TIERS[i - 1]; applyTier(); }
          else if (!forced) onFail?.('slow');
        }
      }
    }

    if (!ready) { ready = true; onReady?.({ tier }); }
  }

  // Service hover tints the monolith's girih (tilework colours).
  const serviceColor = new Color(SERVICE_COLORS[0]);
  const girihColor = new Color(SERVICE_COLORS[0]);
  window.addEventListener('nexora:service', (e) => serviceColor.set(SERVICE_COLORS[e.detail] ?? SERVICE_COLORS[0]));
  window.addEventListener('nexora:service-leave', () => serviceColor.set(SERVICE_COLORS[0]));

  new ResizeObserver(() => layout()).observe(canvas);
  applyTier();
  requestAnimationFrame(frame);

  return {
    retranslate: () => { layoutPanels(); },
    goPlace: (id) => jump(placeStart[id] ?? 0),
    get tier() { return tier; },
    debug: (index, seconds = 2) => {
      target = s = clamp(index, 0, max);
      flying = null;
      for (let i = 0; i < 30; i += 1) step(last + 34);
    },
  };
}
