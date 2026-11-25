/* --------------------------------------------------------------------------
   Nexora Studio — Light Mode 3D Studio Engine
   Crafted following the 3D Web Experience standard:
   - Purposeful, compact, high-performance (60fps)
   - Studio lighting: warm key, sky ambient, soft specular rim
   - Architectural ceramic & titanium floating Nexora monolith
   - Subtle undulating translucent caustic plane beneath
   - Interactive pointer drag & spring damping
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Group, Points,
  PlaneGeometry, ShaderMaterial, MeshPhysicalMaterial, ExtrudeGeometry,
  Shape, DirectionalLight, HemisphereLight, AmbientLight,
  PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace,
  Vector2, Vector3, Plane, Raycaster,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const canvas = document.querySelector('canvas.webgl-v4');
const PACE = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.5 : 1;

/* --------------------------------------------------------------------------
   Simplex Noise Core
   -------------------------------------------------------------------------- */
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

float surface(vec2 p) {
  float swell = 0.0;
  float d = distance(p, uPointer);
  swell += smoothstep(4.0, 0.0, d) * 1.5 * uPointerStrength;
  swell += sin(max(0.0, d * 4.0 - uTime * 3.0)) * smoothstep(5.0, 0.0, d) * 0.35 * uPointerStrength;

  float n = 0.0;
  vec2 q = p * 0.14 + vec2(0.0, uFlow * 0.28);
  n += snoise(vec3(q, uTime * 0.05)) * 1.2;
  n += snoise(vec3(q * 2.0 + vec2(uFlow * 0.2, 0.0), uTime * 0.08)) * 0.5;
  return n + swell;
}
`;

/* Light Ceramic Ground Plane */
function makeLightSurface(segX, segY) {
  const geometry = new PlaneGeometry(46, 30, segX, segY);
  const uniforms = {
    uTime: { value: 0 },
    uFlow: { value: 0 },
    uPointer: { value: new Vector2(99, 99) },
    uPointerStrength: { value: 0 },
  };

  const material = new ShaderMaterial({
    uniforms,
    transparent: true,
    vertexShader: /* glsl */ `
      ${NOISE}
      varying float vH;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 p = position;
        float h = surface(p.xy);
        float e = 0.14;
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
      varying float vH;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vNormal;

      void main() {
        vec3 n = normalize(vNormal);
        vec3 view = normalize(cameraPosition - vWorld);
        if (dot(n, view) < 0.0) n = -n;

        vec3 light = normalize(vec3(-0.3, 0.9, 0.8));
        float diffuse = clamp(dot(n, light), 0.0, 1.0);
        float spec = pow(clamp(dot(reflect(-light, n), view), 0.0, 1.0), 28.0);
        float fresnel = pow(1.0 - clamp(dot(n, view), 0.0, 1.0), 3.0);

        // Light Studio Palette: Warm Porcelain & Crisp Light Slate
        vec3 porcelain = vec3(0.965, 0.972, 0.980);
        vec3 alabaster = vec3(0.920, 0.932, 0.948);
        vec3 subtleVolt = vec3(0.85, 0.98, 0.35);

        float k = smoothstep(-1.6, 2.0, vH);
        vec3 col = mix(porcelain, alabaster, k);
        col = mix(col, subtleVolt, smoothstep(0.7, 1.0, k) * 0.35);

        col = col * (0.85 + 0.15 * diffuse) + spec * 0.25 + fresnel * 0.18;

        // Smooth edge alpha
        float edge = smoothstep(0.0, 0.22, vUv.x) * smoothstep(1.0, 0.78, vUv.x)
                   * smoothstep(0.0, 0.2, vUv.y) * smoothstep(0.95, 0.4, vUv.y);
        gl_FragColor = vec4(col, edge * 0.65);
      }`,
  });
  return { mesh: new Mesh(geometry, material), uniforms };
}

/* Light Studio Particles */
function makeLightDots(segX, segY, uniforms, pixelRatio) {
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
        p.z += surface(p.xy) + 0.04;
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = 2.2 * uPixel * (10.0 / -mv.z);
      }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float edge = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x)
                   * smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
        // Clean graphite dot with soft opacity
        gl_FragColor = vec4(0.12, 0.14, 0.18, 0.22 * edge * (1.0 - smoothstep(0.2, 0.5, d)));
      }`,
  });
  return new Points(geometry, material);
}

/* 3D Nexora Sculpture: Brushed Platinum & Ceramic Finish */
const LOGO_PIECES = [
  [[160, 15], [292, 148], [185, 210], [128, 97]],
  [[47, 185], [150, 128], [208, 240], [175, 322]],
];

function logoShape(tips) {
  const pts = tips.map(([x, y]) => [(x - 170) / 130, -(y - 168) / 130]);
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  const shape = new Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 0; i < pts.length; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    const pull = 0.62;
    shape.quadraticCurveTo(mx + (cx - mx) * pull, my + (cy - my) * pull, b[0], b[1]);
  }
  return shape;
}

function makeSculpture() {
  const platinumMaterial = new MeshPhysicalMaterial({
    color: 0x1a1e28, // Deep graphite contrast
    emissive: 0x0a0c10,
    metalness: 0.90,
    roughness: 0.16,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 2.2,
  });
  const sculpture = new Group();
  const apart = [[0.045, 0.045], [-0.045, -0.045]];
  LOGO_PIECES.forEach((tips, k) => {
    const geometry = new ExtrudeGeometry(logoShape(tips), {
      depth: 0.26, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.04, bevelSegments: 8, curveSegments: 36,
    });
    geometry.translate(apart[k][0], apart[k][1], -0.13);
    sculpture.add(new Mesh(geometry, platinumMaterial));
  });
  return sculpture;
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

  // Studio Lighting
  const skyFill = new HemisphereLight(0xffffff, 0xe2e6ee, 1.2);
  scene.add(skyFill);

  const keySun = new DirectionalLight(0xffffff, 2.4);
  keySun.position.set(5, 8, 6);
  scene.add(keySun);

  const softRim = new DirectionalLight(0xc6ff3d, 0.8);
  softRim.position.set(-6, -4, 4);
  scene.add(softRim);

  const camera = new PerspectiveCamera(36, 1, 0.1, 100);

  const { mesh: silk, uniforms } = makeLightSurface(mobile ? 100 : 180, mobile ? 60 : 110);
  const dots = makeLightDots(mobile ? 60 : 100, mobile ? 40 : 70, uniforms, pixelRatio);

  [silk, dots].forEach((m) => {
    m.rotation.x = -1.14;
    m.position.set(0, -3.4, -5);
    m.frustumCulled = false;
    scene.add(m);
  });

  const star = makeSculpture();
  scene.add(star);

  const starHome = new Vector3();
  let starScale = 1;
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w <= 860;
    if (narrow) {
      starHome.set(0, 1.15, 0.5);
      starScale = 0.88;
    } else {
      starHome.set(3.0 * Math.min(camera.aspect / 1.6, 1.3), -0.05, 1);
      starScale = 1.45;
    }
  }
  window.addEventListener('resize', resize);
  resize();

  const pointer = new Vector2(0, 0);
  const pointerOnSilk = new Vector2(99, 99);
  let pointerActive = false;
  let strength = 0;
  const ray = new Raycaster();
  const silkPlane = new Plane();
  const hit = new Vector3();

  // Tactile Drag Physics
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let dragRot = { x: 0, y: 0 };
  let targetDragRot = { x: 0, y: 0 };

  window.addEventListener('pointerdown', (e) => {
    isDragging = true;
    dragStart.x = e.clientX;
    dragStart.y = e.clientY;
  });

  window.addEventListener('pointerup', () => {
    isDragging = false;
    targetDragRot.x = 0;
    targetDragRot.y = 0;
  });

  window.addEventListener('pointermove', (event) => {
    pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    pointerActive = true;

    if (isDragging) {
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      targetDragRot.y = dx * 0.012;
      targetDragRot.x = dy * 0.012;
    }
  }, { passive: true });

  document.addEventListener('pointerleave', () => {
    pointerActive = false;
    isDragging = false;
    targetDragRot.x = 0;
    targetDragRot.y = 0;
  });

  let scrollT = window.scrollY / window.innerHeight;
  window.addEventListener('scroll', () => { scrollT = window.scrollY / window.innerHeight; }, { passive: true });
  let scrollEased = scrollT;

  let flow = 0;
  let cheer = 0;
  let cheerSpin = 0;

  window.addEventListener('nexora:celebrate', () => { cheer = 1; });

  function step(dt, t) {
    scrollEased += (scrollT - scrollEased) * Math.min(1, dt * 2.5);
    cheer = Math.max(0, cheer - dt / 3.0);

    flow += dt * 0.025 + Math.abs(scrollT - scrollEased) * dt * 0.5 + cheer * dt * 0.4;
    uniforms.uTime.value = t;
    uniforms.uFlow.value = flow + scrollEased * 0.16;

    // Smooth camera drift
    const glide = Math.min(scrollEased, 12);
    const cx = pointer.x * 0.55;
    const cy = 1.3 - Math.sin(glide * 0.35) * 0.5 + pointer.y * 0.3;
    camera.position.x += (cx - camera.position.x) * Math.min(1, dt * 1.5);
    camera.position.y += (cy - camera.position.y) * Math.min(1, dt * 1.5);
    camera.position.z = 11;
    camera.lookAt(0, -0.6 - Math.sin(glide * 0.35) * 0.4, 0);

    silk.rotation.z = dots.rotation.z = Math.sin(glide * 0.1) * 0.1;

    silk.updateMatrixWorld();
    silkPlane.setFromNormalAndCoplanarPoint(new Vector3(0, 0, 1).applyQuaternion(silk.quaternion), silk.position);
    ray.setFromCamera(pointer, camera);
    if (pointerActive && ray.ray.intersectPlane(silkPlane, hit)) {
      silk.worldToLocal(hit);
      pointerOnSilk.lerp(new Vector2(hit.x, hit.y), Math.min(1, dt * 4));
      strength += (1 - strength) * Math.min(1, dt * 2.5);
    } else {
      strength += (0 - strength) * Math.min(1, dt * 1.5);
    }
    uniforms.uPointer.value.copy(pointerOnSilk);
    uniforms.uPointerStrength.value = strength;

    // Drag damping
    dragRot.x += (targetDragRot.x - dragRot.x) * 0.16;
    dragRot.y += (targetDragRot.y - dragRot.y) * 0.16;

    const lift = Math.sin(Math.min(cheer, 1) * Math.PI);
    const comeBack = window.innerWidth > 860 ? Math.min(1, cheer * 2.5) : 0;
    const away = Math.min(scrollEased, 1.6) * (1 - comeBack);
    star.position.set(
      starHome.x,
      starHome.y + Math.sin(t * 0.55) * 0.15 + away * 5.2,
      starHome.z + Math.cos(t * 0.35) * 0.18,
    );
    star.scale.setScalar(starScale * Math.max(0.001, 1 - Math.min(away / 0.9, 1)) * (1 + lift * 0.18));

    cheerSpin = cheer > 0 ? (1 - cheer) * Math.PI * 4 : 0;
    star.rotation.y = Math.sin(t * 0.4) * 0.5 + pointer.x * 0.25 + cheerSpin * Math.min(1, cheer * 4) + dragRot.y;
    star.rotation.x = Math.sin(t * 0.28) * 0.2 + pointer.y * 0.16 + dragRot.x;
    star.rotation.z = Math.sin(t * 0.22) * 0.08 - pointer.x * 0.1;
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
  document.documentElement.classList.add('has-webgl-v4');
  start();
}

init();
