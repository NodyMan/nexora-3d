import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/* --------------------------------------------------------------------------
   Nexora — kinetic object field
   A cluster of glossy bodies pulled toward an anchor, pushed apart by simple
   sphere collisions and by the pointer. Click to scatter them.

   Variants re-dress the cluster for a discipline (shape mix + colours).
   morphTo() choreographs the change: the bodies collapse to the centre,
   swap shape and colour while hidden, then burst back out.
   -------------------------------------------------------------------------- */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Ambient life: the cluster always swirls and drifts a little, so it moves
// even when nobody touches it. Reduced motion keeps it, at a gentler pace.
const AMBIENT = REDUCED ? 0.45 : 1;
const SWIRL = 0.32;
const DRIFT = 5.5;
const rand = (min, max) => min + Math.random() * (max - min);
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeIn = (k) => k * k * k;
const easeOutBack = (k) => {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2);
};

const PALETTES = {
  light: { accent: 0x2f44ff, base: 0xf3f3f6, dark: 0x101014, mint: 0x7cf2c9, violet: 0x8b6bff },
  dark: { accent: 0x3b52ff, base: 0xe9e9ef, dark: 0x1a1a22, mint: 0x7cf2c9, violet: 0x8b6bff },
  lime: { accent: 0xc6f53a, base: 0xeceee4, dark: 0x1c1f16, mint: 0x8fae2c, violet: 0x8b6bff },
};

// Colour tokens cycle across bodies; shape weights set the mix.
const VARIANTS = {
  all: { colors: ['accent', 'accent', 'base', 'base', 'dark', 'mint', 'glass'], shapes: { sphere: 6, capsule: 2, torus: 2, box: 2 } },
  mobile: { colors: ['accent', 'accent', 'accent', 'base', 'base', 'dark', 'glass'], shapes: { sphere: 3, capsule: 6, torus: 0, box: 3 } },
  web: { colors: ['dark', 'dark', 'base', 'base', 'base', 'accent', 'glass'], shapes: { sphere: 2, capsule: 0, torus: 1, box: 8 } },
  ai: { colors: ['mint', 'mint', 'violet', 'violet', 'base', 'glass', 'glass'], shapes: { sphere: 5, capsule: 0, torus: 5, box: 0 } },
};

// Morph timing, in seconds.
const IMPLODE = 0.5;
const HOLD = 0.3;
const EXPLODE = 0.9;

export function createField(canvas, options = {}) {
  const {
    count = 26,
    palette = 'light',
    variant: initialVariant = 'all',
    spread = 7,
    sizes = [0.5, 1.25],
    pull: basePull = 9,
    // Optional per-body homes, as [x, y] offsets from the anchor, so a layer
    // can frame the cluster instead of packing into it (the foreground layer).
    homes = null,
    // How far the camera leans toward the pointer.
    tilt = [0.8, 0.5],
    anchor = () => ({ x: 0, y: 0 }),
    scrollFactor = () => 0,
    // A fixed, full-viewport canvas sizes to the window instead of its parent.
    viewport = false,
  } = options;
  const colors = PALETTES[palette];

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    canvas.classList.add('is-failed');
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 26);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(6, 10, 8);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fb0ff, 1.4);
  rim.position.set(-8, -4, -6);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

  const physical = (color, extra = {}) =>
    new THREE.MeshPhysicalMaterial({ color, roughness: 0.22, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08, ...extra });

  const materialCache = new Map();
  function materialFor(token) {
    if (materialCache.has(token)) return materialCache.get(token);
    let material;
    if (token === 'glass') {
      material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.04,
        transmission: 1,
        thickness: 1.6,
        ior: 1.45,
        clearcoat: 1,
        attenuationColor: new THREE.Color(0xb8c2ff),
        attenuationDistance: 3,
      });
    } else if (token === 'base') {
      material = physical(colors.base, { roughness: 0.35 });
    } else if (token === 'dark') {
      material = physical(colors.dark, { roughness: 0.18, metalness: 0.4 });
    } else {
      material = physical(colors[token], { roughness: token === 'accent' ? 0.22 : 0.3 });
    }
    materialCache.set(token, material);
    return material;
  }

  // Collision radius is approximate for non-spheres; it reads fine in motion.
  const shapes = {
    sphere: { geo: new THREE.SphereGeometry(1, 64, 48), r: 1 },
    capsule: { geo: new THREE.CapsuleGeometry(0.55, 1.1, 12, 32), r: 1.05 },
    torus: { geo: new THREE.TorusGeometry(0.72, 0.3, 32, 72), r: 1.02 },
    box: { geo: new RoundedBoxGeometry(1.4, 1.4, 1.4, 6, 0.32), r: 1.05 },
  };
  function pickShape(weights) {
    const entries = Object.entries(weights).filter(([, w]) => w > 0);
    let roll = Math.random() * entries.reduce((sum, [, w]) => sum + w, 0);
    for (const [name, w] of entries) {
      roll -= w;
      if (roll <= 0) return shapes[name];
    }
    return shapes.sphere;
  }

  let current = VARIANTS[initialVariant] ? initialVariant : 'all';

  function dress(b, i, name) {
    const v = VARIANTS[name];
    // The default mix opens on a few spheres so the cluster reads as soft.
    const shape = name === 'all' && i < 4 && !homes ? shapes.sphere : pickShape(v.shapes);
    b.mesh.geometry = shape.geo;
    b.mesh.material = materialFor(v.colors[i % v.colors.length]);
    b.baseR = shape.r * b.size;
  }

  const bodies = [];
  for (let i = 0; i < count; i += 1) {
    const size = i === 0 && !homes ? 1.7 : rand(sizes[0], sizes[1]);
    const mesh = new THREE.Mesh();
    mesh.rotation.set(rand(0, 6), rand(0, 6), rand(0, 6));
    const dir = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
    mesh.position.copy(dir.multiplyScalar(rand(spread, spread * 2.2)));
    scene.add(mesh);
    const b = {
      mesh,
      size,
      s: 1,
      baseR: 1,
      r: 1,
      v: new THREE.Vector3(),
      spin: new THREE.Vector3(rand(0.15, 0.55) * Math.sign(rand(-1, 1)), rand(0.15, 0.55) * Math.sign(rand(-1, 1)), rand(-0.4, 0.4)),
      home: homes ? i : -1,
      phase: rand(0, Math.PI * 2),
    };
    dress(b, i, current);
    bodies.push(b);
  }

  function applyScale() {
    for (const b of bodies) {
      b.r = b.baseR * b.s;
      b.mesh.scale.setScalar(b.size * b.s);
    }
  }
  applyScale();

  const pointer = { x: 0, y: 0, world: new THREE.Vector3(0, 0, 100), active: false };
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const ndc = new THREE.Vector2();

  function onMove(event) {
    const rect = canvas.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    pointer.active = inside;
    if (!inside) return;
    ndc.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    raycaster.ray.intersectPlane(plane, pointer.world);
  }

  function burst() {
    for (const b of bodies) {
      const away = b.mesh.position.clone().sub(pointer.active ? pointer.world : new THREE.Vector3()).normalize();
      b.v.addScaledVector(away, rand(14, 26));
    }
  }

  function onDown(event) {
    if (event.button !== 0) return;
    const rect = canvas.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom) return;
    if (event.target.closest('a, button, input, textarea, select')) return;
    burst();
  }

  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onDown, { passive: true });

  const center = new THREE.Vector3();
  const target = new THREE.Vector3();
  const tmp = new THREE.Vector3();
  const pointerRadius = 2.1;
  let pullMul = 1;
  let spinMul = 1;
  let elapsed = 0;

  function step(dt) {
    const a = anchor(camera);
    const s = scrollFactor();
    center.set(a.x, a.y + s * 6, 0);
    const pull = basePull * pullMul * (1 - Math.min(s, 0.85));
    const spots = homes ? homes(camera) : null;

    for (const b of bodies) {
      target.copy(center);
      // Homes collapse to the centre during a morph, with a slow bob otherwise.
      const spot = spots && spots[b.home % spots.length];
      if (spot && pullMul === 1) {
        target.x += spot[0];
        target.y += spot[1] + Math.sin(elapsed * 0.6 + b.phase) * 0.5;
        target.z = 2.5;
      }
      tmp.copy(target).sub(b.mesh.position);
      b.v.addScaledVector(tmp, pull * dt);
      // Swirl around the anchor plus a slow per-body wander.
      tmp.copy(b.mesh.position).sub(center);
      const drift = DRIFT * AMBIENT;
      b.v.x += (-tmp.y * SWIRL * AMBIENT + Math.sin(elapsed * 0.7 + b.phase) * drift) * dt;
      b.v.y += (tmp.x * SWIRL * AMBIENT + Math.cos(elapsed * 0.55 + b.phase * 1.3) * drift) * dt;
      b.v.z += Math.sin(elapsed * 0.45 + b.phase * 0.7) * drift * 0.6 * dt;
      b.v.multiplyScalar(Math.exp(-2.6 * dt));
      b.mesh.position.addScaledVector(b.v, dt);
      b.mesh.rotation.x += b.spin.x * spinMul * dt;
      b.mesh.rotation.y += b.spin.y * spinMul * dt;
      b.mesh.rotation.z += b.spin.z * spinMul * 0.5 * dt;
    }

    for (let iter = 0; iter < 2; iter += 1) {
      for (let i = 0; i < bodies.length; i += 1) {
        const bi = bodies[i];
        for (let j = i + 1; j < bodies.length; j += 1) {
          const bj = bodies[j];
          tmp.subVectors(bj.mesh.position, bi.mesh.position);
          const dist = tmp.length() || 0.0001;
          const overlap = bi.r + bj.r - dist;
          if (overlap <= 0) continue;
          tmp.divideScalar(dist);
          bi.mesh.position.addScaledVector(tmp, -overlap * 0.5);
          bj.mesh.position.addScaledVector(tmp, overlap * 0.5);
          const rel = bj.v.dot(tmp) - bi.v.dot(tmp);
          if (rel < 0) {
            bi.v.addScaledVector(tmp, rel * 0.5);
            bj.v.addScaledVector(tmp, -rel * 0.5);
          }
        }
        if (pointer.active) {
          tmp.subVectors(bi.mesh.position, pointer.world);
          const dist = tmp.length() || 0.0001;
          const overlap = bi.r + pointerRadius - dist;
          if (overlap > 0) {
            tmp.divideScalar(dist);
            bi.mesh.position.addScaledVector(tmp, overlap);
            bi.v.addScaledVector(tmp, overlap * 18);
          }
        }
      }
    }
  }

  /* ---------- Morph: collapse, swap, burst ---------- */
  let morph = null;

  function swapAll(name) {
    bodies.forEach((b, i) => dress(b, i, name));
    current = name;
  }

  function finishMorph() {
    if (!morph) return;
    if (!morph.swapped) swapAll(morph.name);
    for (const b of bodies) b.s = 1;
    applyScale();
    pullMul = 1;
    spinMul = 1;
    const { resolve } = morph;
    morph = null;
    resolve();
  }

  function updateMorph(dt) {
    if (!morph) return;
    morph.t += dt;
    const t = morph.t;
    if (t < IMPLODE) {
      const k = easeIn(clamp01(t / IMPLODE));
      for (const b of bodies) b.s = 1 - 0.88 * k;
      pullMul = 1 + 5 * k;
      spinMul = 1 + 10 * k;
    } else if (t < IMPLODE + HOLD) {
      if (!morph.swapped) {
        swapAll(morph.name);
        morph.swapped = true;
      }
      for (const b of bodies) b.s = 0.12;
    } else {
      if (!morph.exploded) {
        morph.exploded = true;
        pullMul = 1;
        for (const b of bodies) {
          tmp.copy(b.mesh.position).sub(center);
          if (tmp.lengthSq() < 0.01) tmp.set(rand(-1, 1), rand(-1, 1), rand(-0.5, 0.5));
          b.v.addScaledVector(tmp.normalize(), rand(12, 22));
        }
      }
      const k = clamp01((t - IMPLODE - HOLD) / EXPLODE);
      for (const b of bodies) b.s = 0.12 + 0.88 * easeOutBack(k);
      spinMul = 1 + 10 * (1 - k);
      if (k >= 1) {
        finishMorph();
        return;
      }
    }
    applyScale();
  }

  function morphTo(name) {
    if (!VARIANTS[name] || name === current || morph) return Promise.resolve(false);
    if (REDUCED) {
      swapAll(name);
      applyScale();
      renderer.render(scene, camera);
      return Promise.resolve(true);
    }
    return new Promise((resolve) => {
      morph = { name, t: 0, swapped: false, exploded: false, resolve: () => resolve(true) };
    });
  }

  let width = 0;
  let height = 0;
  function resize() {
    const rect = viewport
      ? { width: window.innerWidth, height: window.innerHeight }
      : canvas.parentElement.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Keep the cluster a similar on-screen size on tall phones.
    camera.position.z = camera.aspect < 0.8 ? 26 / Math.max(camera.aspect, 0.48) * 0.62 : 26;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);
  if (viewport) window.addEventListener('resize', resize, { passive: true });
  resize();

  let visible = true;
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  io.observe(canvas);

  const clock = new THREE.Clock();
  let raf = 0;
  let ready = false;

  function frame() {
    raf = requestAnimationFrame(frame);
    if (!visible) {
      clock.getDelta();
      // Nobody can see a morph offscreen, so land it at once.
      if (morph) finishMorph();
      return;
    }
    const dt = Math.min(clock.getDelta(), 1 / 30);
    elapsed += dt;
    updateMorph(dt);
    // Sub-steps keep collisions stable at low frame rates.
    step(dt / 2);
    step(dt / 2);
    camera.position.x += (pointer.active ? ndc.x * tilt[0] - camera.position.x : -camera.position.x) * 0.04;
    camera.position.y += (pointer.active ? ndc.y * tilt[1] - camera.position.y : -camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    if (!ready) {
      ready = true;
      canvas.classList.add('is-ready');
      // After the caller's synchronous setup, so its listener is attached.
      queueMicrotask(() => canvas.dispatchEvent(new Event('field-ready')));
    }
  }

  // Reduced motion starts from a settled cluster instead of flying in.
  if (REDUCED) for (let i = 0; i < 600; i += 1) step(1 / 60);
  frame();

  return {
    burst,
    morphTo,
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      renderer.dispose();
    },
  };
}
