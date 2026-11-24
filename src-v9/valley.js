/* --------------------------------------------------------------------------
   v9: a monolith in the Fergana Valley at dawn.
   - Terrain: a valley floor of fine dunes, ringed by ridged mountains with
     snow on the peaks (the Alay and Kuramin ranges around Fergana), fading
     into warm morning haze. Built from noise in code, coloured by height and
     slope.
   - Sky: a dawn gradient with the sun low behind the ridges.
   - Monolith: a tall slab of dark stone. Its faces carry an eight-fold girih
     pattern (the geometry of Samarkand and Bukhara tilework) that glows like
     a running machine: light travels up the lines like data.
   - Cinematic finish: soft shadows, bloom on the light lines, dust in the
     sun, film grain and a vignette.
   No model files, no stock imagery: every shape and texture is generated here.
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, PlaneGeometry, SphereGeometry, BackSide, ShaderMaterial,
  MeshStandardMaterial, Color, Vector2, Vector3, FogExp2, HemisphereLight, DirectionalLight, BufferGeometry,
  Float32BufferAttribute, Points, PointsMaterial, AdditiveBlending, CanvasTexture, RepeatWrapping, SRGBColorSpace,
  ACESFilmicToneMapping, PCFSoftShadowMap, Group,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

/* ---------- Noise ---------- */
export function makeNoise(seed = 1337) {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  let s = seed;
  for (let i = 0; i < 256; i += 1) p[i] = i;
  for (let i = 255; i > 0; i -= 1) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i += 1) perm[i] = p[i & 255];
  const grad = (h, x, y) => ((h & 1) ? -x : x) + ((h & 2) ? -y : y);
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  return (x, y) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const a = perm[X] + Y;
    const b = perm[X + 1] + Y;
    const l1 = grad(perm[a], xf, yf) + u * (grad(perm[b], xf - 1, yf) - grad(perm[a], xf, yf));
    const l2 = grad(perm[a + 1], xf, yf - 1) + u * (grad(perm[b + 1], xf - 1, yf - 1) - grad(perm[a + 1], xf, yf - 1));
    return l1 + v * (l2 - l1); // about -1..1
  };
}

/* ---------- Terrain ---------- */
export function terrain(small) {
  const noise = makeNoise(4242);
  const size = 520;
  const seg = small ? 170 : 300;
  const geo = new PlaneGeometry(size, size, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const dust = new Color('#a58c72');
  const dustDark = new Color('#6e5b49');
  const rock = new Color('#554c4e');
  const rockLight = new Color('#8c7d76');
  const snow = new Color('#eef0f3');
  const c = new Color();
  const fbm = (x, y, oct) => { let v = 0; let a = 0.5; let f = 1; for (let i = 0; i < oct; i += 1) { v += a * noise(x * f, y * f); f *= 2.03; a *= 0.5; } return v; };
  const ridged = (x, y) => { let v = 0; let a = 0.55; let f = 1; for (let i = 0; i < 6; i += 1) { const n = 1 - Math.abs(noise(x * f, y * f)); v += a * n * n; f *= 2.1; a *= 0.5; } return v; };
  const heights = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    // The valley: flat in the middle, mountains rising all round, highest behind.
    const ring = Math.hypot(x * 0.72, (z + 30) * 1.0);
    const rise = Math.min(1, Math.max(0, (ring - 55) / 110));
    const mountains = ridged(x * 0.011, z * 0.011) * 82 * rise * rise * (z < 0 ? 1 : 0.55);
    const dunes = fbm(x * 0.06, z * 0.06, 4) * 0.9 + fbm(x * 0.012, z * 0.012, 3) * 3.5;
    const h = mountains + dunes;
    pos.setY(i, h);
    heights[i] = h;
  }
  geo.computeVertexNormals();
  const normals = geo.attributes.normal;
  for (let i = 0; i < pos.count; i += 1) {
    const h = heights[i];
    const slope = 1 - normals.getY(i);
    const grain = noise(pos.getX(i) * 0.4, pos.getZ(i) * 0.4) * 0.5 + 0.5;
    if (h < 6) c.copy(dustDark).lerp(dust, grain * 0.8 + 0.1);
    else c.copy(rock).lerp(rockLight, grain);
    if (h > 6 && h < 12) c.lerp(dust, (12 - h) / 6 * 0.6);
    const snowAmount = Math.max(0, Math.min(1, (h - 33) / 9)) * (1 - Math.min(1, slope * 2.0));
    c.lerp(snow, snowAmount);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
  const mesh = new Mesh(geo, new MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }));
  mesh.receiveShadow = true;
  // Height lookup for placing things on the ground.
  mesh.userData.heightAt = (x, z) => {
    const ring = Math.hypot(x * 0.72, (z + 30) * 1.0);
    const rise = Math.min(1, Math.max(0, (ring - 55) / 110));
    return ridged(x * 0.011, z * 0.011) * 82 * rise * rise * (z < 0 ? 1 : 0.55)
      + fbm(x * 0.06, z * 0.06, 4) * 0.9 + fbm(x * 0.012, z * 0.012, 3) * 3.5;
  };
  return mesh;
}

/* ---------- Sky ---------- */
export const SKY_VERT = `varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
export const SKY_FRAG = `
precision highp float;
uniform vec3 uSun; uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uGlow;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.18, h));
  col = mix(col, uZenith, smoothstep(0.18, 0.75, h));
  float sun = max(dot(d, normalize(uSun)), 0.0);
  col += uGlow * (pow(sun, 8.0) * 0.55 + pow(sun, 64.0) * 0.9 + pow(sun, 900.0) * 6.0);
  gl_FragColor = vec4(col, 1.0);
}`;

/* ---------- Girih: eight-fold star pattern, drawn as light lines ---------- */
export function girihTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, S, S);
  const star = (cx, cy, r) => {
    // Star polygon {8/3}: join every third point of an octagon.
    const pts = Array.from({ length: 8 }, (_, i) => [cx + r * Math.cos((i * Math.PI) / 4 + Math.PI / 8), cy + r * Math.sin((i * Math.PI) / 4 + Math.PI / 8)]);
    g.beginPath();
    for (let i = 0; i <= 8; i += 1) {
      const [x, y] = pts[(i * 3) % 8];
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
    // Inner octagon ring.
    g.beginPath();
    for (let i = 0; i <= 8; i += 1) {
      const a = (i * Math.PI) / 4 + Math.PI / 8;
      const x = cx + r * 0.42 * Math.cos(a);
      const y = cy + r * 0.42 * Math.sin(a);
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  };
  const draw = (width, color, blur) => {
    g.lineWidth = width;
    g.strokeStyle = color;
    g.shadowColor = color;
    g.shadowBlur = blur;
    g.lineJoin = 'miter';
    const r = S * 0.36;
    [[S / 2, S / 2], [0, 0], [S, 0], [0, S], [S, S]].forEach(([x, y]) => star(x, y, r));
    // Kite links between neighbouring stars, so the pattern runs on without a seam.
    [[S / 2, 0], [S / 2, S], [0, S / 2], [S, S / 2]].forEach(([x, y]) => {
      g.beginPath();
      g.moveTo(x - S * 0.1, y);
      g.lineTo(x, y - S * 0.1);
      g.lineTo(x + S * 0.1, y);
      g.lineTo(x, y + S * 0.1);
      g.closePath();
      g.stroke();
    });
  };
  draw(12, '#1e2a2e', 0);
  draw(3.2, '#ffffff', 10);
  const tex = new CanvasTexture(c);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

export function stoneTexture() {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  const noise = makeNoise(99);
  for (let y = 0; y < S; y += 1) {
    for (let x = 0; x < S; x += 1) {
      let v = 0;
      let a = 0.5;
      let f = 0.03;
      for (let o = 0; o < 5; o += 1) { v += a * noise(x * f, y * f); f *= 2; a *= 0.5; }
      const k = 52 + v * 40;
      const i = (y * S + x) * 4;
      img.data[i] = k + 4;
      img.data[i + 1] = k + 2;
      img.data[i + 2] = k + 6;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new CanvasTexture(c);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/* ---------- Film grain, vignette and a gentle grade ---------- */
export const FinishShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVignette: { value: 1.1 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVignette; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      // Lift the shadows a touch towards blue, warm the highlights.
      float l = dot(col.rgb, vec3(0.299, 0.587, 0.114));
      col.rgb = mix(col.rgb * vec3(0.96, 0.98, 1.06), col.rgb * vec3(1.04, 1.0, 0.95), smoothstep(0.2, 0.8, l));
      float d = length(vUv - 0.5);
      col.rgb *= mix(1.0, 0.62, smoothstep(0.35, 0.95, d * uVignette));
      col.rgb += (hash(vUv * 900.0) - 0.5) * 0.035;
      gl_FragColor = col;
    }`,
};

export function mountValley(canvas, { onReady } = {}) {
  const small = window.matchMedia('(max-width: 760px)').matches;
  const renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = !small;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const scene = new Scene();
  const haze = new Color('#c2a594');
  scene.fog = new FogExp2(haze, 0.0047);

  const sunDir = new Vector3(-0.42, 0.1, -1).normalize();
  const sky = new Mesh(new SphereGeometry(400, 48, 24), new ShaderMaterial({
    vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: BackSide, depthWrite: false, fog: false,
    uniforms: {
      uSun: { value: sunDir }, uZenith: { value: new Color('#3d4c66') }, uMid: { value: new Color('#9aa3b3') },
      uHorizon: { value: new Color('#e8c3a4') }, uGlow: { value: new Color('#ffd2a0') },
    },
  }));
  scene.add(sky);

  scene.add(new HemisphereLight('#b9c4d6', '#5b4a3d', 0.75));
  const sun = new DirectionalLight('#ffcf9f', 2.4);
  sun.position.copy(sunDir).multiplyScalar(60);
  sun.castShadow = !small;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -14;
  sun.shadow.camera.right = 14;
  sun.shadow.camera.top = 14;
  sun.shadow.camera.bottom = -14;
  sun.shadow.camera.near = 20;
  sun.shadow.camera.far = 110;
  sun.shadow.bias = -0.0006;
  sun.shadow.radius = 4;
  scene.add(sun);
  scene.add(sun.target);

  const ground = terrain(small);
  scene.add(ground);

  /* Monolith */
  const girih = girihTexture();
  girih.repeat.set(1, 3.4);
  const stone = stoneTexture();
  stone.repeat.set(2, 6);
  const uniforms = { uTime: { value: 0 } };
  const monolithMat = new MeshStandardMaterial({
    color: '#3b3a40', map: stone, roughness: 0.72, metalness: 0.15,
    emissive: new Color('#7ff3ff'), emissiveMap: girih, emissiveIntensity: 2.6,
  });
  monolithMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.fragmentShader = `uniform float uTime;\n${shader.fragmentShader}`.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      #ifdef USE_EMISSIVEMAP
        // Light runs up the pattern in waves, like data through a machine.
        float wave = fract(vEmissiveMapUv.y * 0.3 - uTime * 0.09);
        float pulse = exp(-pow((wave - 0.5) * 7.0, 2.0));
        float cell = fract(sin(dot(floor(vEmissiveMapUv * 2.0), vec2(12.9, 78.2))) * 43758.5);
        float flicker = 0.75 + 0.25 * sin(uTime * (1.5 + cell * 2.0) + cell * 6.28);
        totalEmissiveRadiance *= 0.05 + pulse * 1.9 * flicker;
      #endif`,
    );
  };
  const monolith = new Mesh(new RoundedBoxGeometry(2.6, 9, 1.1, 4, 0.05), monolithMat);
  const baseX = 4;
  const baseZ = -2;
  const groundY = ground.userData.heightAt(baseX, baseZ);
  monolith.position.set(baseX, groundY + 4.3, baseZ);
  monolith.rotation.y = -0.38;
  monolith.castShadow = true;
  scene.add(monolith);
  sun.target.position.copy(monolith.position);

  /* Dust in the sun */
  const count = small ? 700 : 1800;
  const dustPos = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    dustPos[i * 3] = baseX + (Math.random() - 0.5) * 30;
    dustPos[i * 3 + 1] = groundY + Math.random() * 12;
    dustPos[i * 3 + 2] = baseZ + (Math.random() - 0.5) * 24;
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(dustPos, 3));
  const dust = new Points(dustGeo, new PointsMaterial({ color: '#ffe2c2', size: 0.045, transparent: true, opacity: 0.7, depthWrite: false, blending: AdditiveBlending }));
  scene.add(dust);

  /* Camera and finish */
  const camera = new PerspectiveCamera(34, 1, 0.1, 900);
  const rig = new Group();
  scene.add(rig);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(256, 256), 0.85, 0.55, 0.78);
  composer.addPass(bloom);
  const finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  composer.addPass(new OutputPass());

  const pointer = { tx: 0, ty: 0, x: 0, y: 0 };
  const state = { scroll: 0, visible: true, ready: false, narrow: false };

  function layout() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
    camera.aspect = w / h;
    camera.fov = w < 760 ? 46 : 34;
    camera.updateProjectionMatrix();
    state.narrow = w < 760;
  }

  window.addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  const host = canvas.closest('section') || canvas.parentElement;
  window.addEventListener('scroll', () => {
    const r = host.getBoundingClientRect();
    state.scroll = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
  }, { passive: true });
  new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; }).observe(host);
  new ResizeObserver(layout).observe(canvas);
  layout();

  const look = new Vector3();
  let last = performance.now();
  let t = 0;
  function step(now) {
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
    last = now;
    t += dt;
    const k = 1 - Math.exp(-dt * 2);
    pointer.x += (pointer.tx - pointer.x) * k;
    pointer.y += (pointer.ty - pointer.y) * k;
    uniforms.uTime.value = t;
    finish.uniforms.uTime.value = t % 10;

    // A slow drift towards the monolith; scrolling walks the camera in.
    const s = state.scroll;
    const drift = Math.sin(t * 0.05) * 0.6;
    const camX = (state.narrow ? baseX - 1.2 : -1.2) + pointer.x * 0.8 + drift + s * 2.5;
    const camY = groundY + 2.4 - pointer.y * 0.4 + s * 1.5;
    const camZ = (state.narrow ? 24 : 21) - s * 9;
    camera.position.set(camX, camY, camZ);
    look.set(state.narrow ? baseX : baseX - 1.6 + s * 1.2, groundY + 4.6 + s * 0.6, baseZ - 6);
    camera.lookAt(look);

    dust.rotation.y = t * 0.012;
    dust.position.y = Math.sin(t * 0.3) * 0.3;

    composer.render(dt);
    if (!state.ready) { state.ready = true; onReady?.(); }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (!state.visible || document.hidden) { last = now; return; }
    step(now);
  }
  requestAnimationFrame(frame);

  if (new URLSearchParams(location.search).has('fx')) {
    window.nxValley = (seconds = 4) => { t = seconds; for (let i = 0; i < 20; i += 1) step(performance.now() - (19 - i) * 16); };
  }
}
