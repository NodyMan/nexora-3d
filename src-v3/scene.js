/* --------------------------------------------------------------------------
   Nexora Studio — site v3 background scene
   One calm scene behind every page: a large silk-like surface in lime and
   lavender that slowly ripples, dusted with a fine grid of points, and the
   glossy Nexora star floating above it at the top of the page. Scrolling
   glides the camera over the surface; the pointer raises a soft swell.
   Bundled to site-v3/js/scene.js with:
     npx esbuild nexora-3d/src-v3/scene.js --bundle --format=esm --minify --target=es2020 --outfile=nexora-3d/site-v3/js/scene.js
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Points, PlaneGeometry, ShaderMaterial,
  MeshPhysicalMaterial, ExtrudeGeometry, Shape, DirectionalLight, HemisphereLight,
  PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace, Vector2, Vector3, Plane, Raycaster, DoubleSide,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const canvas = document.querySelector('canvas.webgl');
// With "reduce motion" on (Windows: Animation effects off) everything runs at a gentler pace.
const PACE = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.5 : 1;

/* Simplex noise (Ashima Arts / Stefan Gustavson, MIT), shared by the surface and its points. */
const NOISE = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

uniform float uTime;
uniform float uFlow;
uniform vec2 uPointer;
uniform float uPointerStrength;

// Height of the surface at a point of the flat plane: two slow layers of noise
// plus a soft swell under the pointer.
float surface(vec2 p) {
  float t = uTime * 0.08;
  float h = snoise(vec3(p.x * 0.11, p.y * 0.16 - uFlow, t)) * 1.9;
  h += snoise(vec3(p.x * 0.32 + 4.0, p.y * 0.36 - uFlow * 1.6, t * 1.6)) * 0.55;
  float d = distance(p, uPointer);
  h += uPointerStrength * 1.6 * exp(-d * d * 0.07);
  return h;
}
`;

function makeSurface(segX, segY) {
  const geometry = new PlaneGeometry(46, 30, segX, segY);
  const uniforms = {
    uTime: { value: 0 },
    uFlow: { value: 0 },
    uPointer: { value: new Vector2(99, 99) },
    uPointerStrength: { value: 0 },
    uVivid: { value: 0.92 },
  };
  const material = new ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    vertexShader: /* glsl */ `
      ${NOISE}
      varying float vH;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 p = position;
        float h = surface(p.xy);
        // Smooth normal from the slope of the surface (no faceting, no sparkle).
        float e = 0.12;
        vec3 n = normalize(vec3(h - surface(p.xy + vec2(e, 0.0)), h - surface(p.xy + vec2(0.0, e)), e));
        vNormal = normalize(mat3(modelMatrix) * n);
        p.z += h;
        vH = h;
        vUv = uv;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uVivid;
      varying float vH;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 view = normalize(cameraPosition - vWorld);
        if (dot(n, view) < 0.0) n = -n;
        vec3 light = normalize(vec3(-0.3, 0.9, 0.6));
        float diffuse = clamp(dot(n, light), 0.0, 1.0);
        float spec = pow(clamp(dot(reflect(-light, n), view), 0.0, 1.0), 18.0);
        float fresnel = pow(1.0 - clamp(dot(n, view), 0.0, 1.0), 3.0);

        vec3 paper = vec3(0.955, 0.96, 0.94);
        vec3 lime = vec3(0.74, 1.0, 0.16);
        vec3 lavender = vec3(0.56, 0.5, 1.0);
        vec3 deep = vec3(0.36, 0.3, 0.95);
        float k = smoothstep(-1.8, 2.0, vH);
        vec3 col = mix(deep, lavender, smoothstep(0.0, 0.45, k));
        col = mix(col, lime, smoothstep(0.45, 0.95, k));
        // A slow pearly shimmer across the folds.
        col += 0.1 * sin(vH * 4.0 + vUv.x * 9.0 + vUv.y * 5.0 + uTime * 0.15);
        col = col * (0.74 + 0.36 * diffuse) + spec * 0.22 + fresnel * vec3(0.9, 0.95, 1.0) * 0.25;
        // Full colour at the top of the page, softer behind the reading sections.
        col = mix(paper, col, uVivid);

        // Fade into the page at every edge.
        float edge = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x)
                   * smoothstep(0.0, 0.18, vUv.y) * smoothstep(0.95, 0.45, vUv.y);
        gl_FragColor = vec4(col, edge);
      }`,
  });
  return { mesh: new Mesh(geometry, material), uniforms };
}

function makeDots(segX, segY, uniforms, pixelRatio) {
  const geometry = new PlaneGeometry(46, 30, segX, segY);
  const material = new ShaderMaterial({
    uniforms: { ...uniforms, uPixel: { value: pixelRatio } },
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `
      ${NOISE}
      uniform float uPixel;
      varying vec2 vUv;
      void main() {
        vec3 p = position;
        p.z += surface(p.xy) + 0.03;
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = 2.8 * uPixel * (10.0 / -mv.z);
      }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float edge = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x)
                   * smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
        gl_FragColor = vec4(0.06, 0.07, 0.08, 0.4 * edge * (1.0 - smoothstep(0.3, 0.5, d)));
      }`,
  });
  return new Points(geometry, material);
}

function makeStar() {
  const shape = new Shape();
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 2;
    const r = i % 2 === 0 ? 1.2 : 0.3;
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();
  const geometry = new ExtrudeGeometry(shape, { depth: 0.36, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.07, bevelSegments: 8 });
  geometry.center();
  return new Mesh(geometry, new MeshPhysicalMaterial({
    color: 0xc6ff3d, roughness: 0.22, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08,
    iridescence: 0.4, iridescenceIOR: 1.35,
  }));
}

function init() {
  if (!canvas) return;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (error) {
    canvas.remove();
    return;
  }
  const mobile = window.innerWidth <= 860;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75);
  renderer.setPixelRatio(pixelRatio);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  scene.add(new HemisphereLight(0xffffff, 0xe4e7dc, 0.8));
  const sun = new DirectionalLight(0xffffff, 1.5);
  sun.position.set(4, 7, 6);
  scene.add(sun);

  const camera = new PerspectiveCamera(36, 1, 0.1, 100);

  // The surface lies like a landscape, tipped towards the viewer.
  const { mesh: silk, uniforms } = makeSurface(mobile ? 110 : 200, mobile ? 70 : 130);
  const dots = makeDots(mobile ? 70 : 120, mobile ? 46 : 78, uniforms, pixelRatio);
  [silk, dots].forEach((m) => {
    m.rotation.x = -1.12;
    m.position.set(0, -3.6, -5);
    m.frustumCulled = false;
    scene.add(m);
  });

  const star = makeStar();
  scene.add(star);

  /* ---------- Size and placement ---------- */
  const starHome = new Vector3();
  let starScale = 1;
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w <= 860;
    if (narrow) { starHome.set(0, 1.6, 0.5); starScale = 0.75; }
    else { starHome.set(3.2 * Math.min(camera.aspect / 1.6, 1.3), 0.3, 1); starScale = 1.3; }
  }
  window.addEventListener('resize', resize);
  resize();

  /* ---------- Pointer and scroll ---------- */
  const pointer = new Vector2(0, 0);
  const pointerOnSilk = new Vector2(99, 99);
  let pointerActive = false;
  let strength = 0;
  const ray = new Raycaster();
  const silkPlane = new Plane();
  const hit = new Vector3();
  window.addEventListener('pointermove', (event) => {
    pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    pointerActive = true;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { pointerActive = false; });

  let scrollT = window.scrollY / window.innerHeight;
  window.addEventListener('scroll', () => { scrollT = window.scrollY / window.innerHeight; }, { passive: true });
  let scrollEased = scrollT;

  /* ---------- Loop ---------- */
  let flow = 0;
  function step(dt, t) {
    scrollEased += (scrollT - scrollEased) * Math.min(1, dt * 2.5);

    // The surface drifts on its own and a little faster while you scroll.
    flow += dt * 0.03 + Math.abs(scrollT - scrollEased) * dt * 0.6;
    uniforms.uTime.value = t;
    uniforms.uFlow.value = flow + scrollEased * 0.18;
    uniforms.uVivid.value = 0.92 - Math.min(scrollEased / 1.1, 1) * 0.6;

    // Camera glides slowly forward and down over the surface as the page scrolls.
    const glide = Math.min(scrollEased, 12);
    const cx = pointer.x * 0.6;
    const cy = 1.4 - Math.sin(glide * 0.35) * 0.6 + pointer.y * 0.3;
    camera.position.x += (cx - camera.position.x) * Math.min(1, dt * 1.5);
    camera.position.y += (cy - camera.position.y) * Math.min(1, dt * 1.5);
    camera.position.z = 11;
    camera.lookAt(0, -0.6 - Math.sin(glide * 0.35) * 0.4, 0);
    silk.rotation.z = dots.rotation.z = Math.sin(glide * 0.12) * 0.12;

    // Pointer swell: find where the pointer meets the surface's plane.
    silk.updateMatrixWorld();
    silkPlane.setFromNormalAndCoplanarPoint(new Vector3(0, 0, 1).applyQuaternion(silk.quaternion), silk.position);
    ray.setFromCamera(pointer, camera);
    if (pointerActive && ray.ray.intersectPlane(silkPlane, hit)) {
      silk.worldToLocal(hit);
      pointerOnSilk.lerp(new Vector2(hit.x, hit.y), Math.min(1, dt * 4));
      strength += (1 - strength) * Math.min(1, dt * 2);
    } else {
      strength += (0 - strength) * Math.min(1, dt * 1.5);
    }
    uniforms.uPointer.value.copy(pointerOnSilk);
    uniforms.uPointerStrength.value = strength;

    // The star floats near the top of the page and rises away as you scroll down.
    const away = Math.min(scrollEased, 1.6);
    star.position.set(
      starHome.x,
      starHome.y + Math.sin(t * 0.6) * 0.18 + away * 5.5,
      starHome.z + Math.cos(t * 0.4) * 0.2,
    );
    star.scale.setScalar(starScale * Math.max(0.001, 1 - Math.min(away / 0.9, 1)));
    star.rotation.y = t * 0.35;
    star.rotation.x = Math.sin(t * 0.3) * 0.22 + pointer.y * 0.15;
    star.rotation.z = Math.sin(t * 0.25) * 0.08 - pointer.x * 0.1;
  }

  function render() {
    renderer.render(scene, camera);
  }

  let frame = 0;
  let last = performance.now();
  let clock = 0;
  function tick(now) {
    frame = 0;
    if (document.hidden) return;
    const dt = Math.min((now - last) / 1000, 1 / 20) * PACE;
    last = now;
    clock += dt;
    step(dt, clock);
    render();
    frame = requestAnimationFrame(tick);
  }
  function start() {
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });

  // Test hook (only with ?scenedebug): step the scene by hand when the tab cannot animate.
  if (new URLSearchParams(window.location.search).has('scenedebug')) {
    window.nxScene = {
      advance(seconds = 2) {
        for (let s = 0; s < seconds; s += 1 / 60) { clock += 1 / 60; step(1 / 60, clock); }
        render();
        return clock;
      },
      point(x, y) { pointer.set(x, y); pointerActive = true; },
    };
  }

  document.documentElement.classList.add('has-webgl');
  start();
}

init();
