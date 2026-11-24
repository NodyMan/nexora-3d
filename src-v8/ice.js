/* --------------------------------------------------------------------------
   v8 prototype: a cold, cinematic engineering scene.
   - Steel-blue fog and a fading measurement grid, like a lab at dawn.
   - A frosted ice block with the Nexora mark frozen inside it, wrapped in
     thin glowing circuit traces (the "system" inside).
   - Ice shards drift around it; fine data dust hangs in the air.
   No candy colours, no cartoon shapes: one material family (ice, steel,
   light) and one accent. Everything is generated in code.
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Shape, ExtrudeGeometry, Mesh, MeshPhysicalMaterial,
  PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace, Vector2, Vector3, Color, Fog, PlaneGeometry,
  MeshBasicMaterial, DoubleSide, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial,
  Points, PointsMaterial, AdditiveBlending, DirectionalLight, AmbientLight, IcosahedronGeometry, GridHelper,
  CanvasTexture, PointLight,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const SHARDS = [
  [[160, 15], [292, 148], [183, 193], [127, 96]],
  [[148, 125], [208, 240], [175, 322], [47, 185]],
];
function markShape(points) {
  const v = points.map(([x, y]) => new Vector2((x - 170) / 95, -(y - 170) / 95));
  const mid = v.reduce((acc, p) => acc.add(p), new Vector2()).multiplyScalar(1 / v.length);
  const shape = new Shape();
  shape.moveTo(v[0].x, v[0].y);
  for (let i = 0; i < v.length; i += 1) {
    const a = v[i];
    const b = v[(i + 1) % v.length];
    const c = a.clone().add(b).multiplyScalar(0.5).lerp(mid, 0.38);
    shape.quadraticCurveTo(c.x, c.y, b.x, b.y);
  }
  return shape;
}

// A cold studio for reflections: soft white overhead, steel walls.
function coldRoom() {
  const room = new Scene();
  room.background = new Color('#cfd8e0');
  const panel = (w, h, color, power, pos) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(power), side: DoubleSide }));
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    room.add(m);
  };
  panel(12, 3, '#ffffff', 3.2, [0, 7, 0]);
  panel(3, 8, '#eaf3ff', 1.8, [-7, 1, 2]);
  panel(3, 8, '#dfe9f3', 1.5, [7, 0, 1]);
  panel(10, 10, '#f4f7fa', 1.2, [0, 0, 9]);
  panel(10, 4, '#7d8b99', 0.8, [0, -6, 0]);
  return room;
}

// Circuit traces: right-angle paths on a few layers around the mark.
function circuit(seed = 7) {
  let s = seed;
  const rand = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  const pts = [];
  for (let n = 0; n < 34; n += 1) {
    let x = (rand() - 0.5) * 2.6;
    let y = (rand() - 0.5) * 2.6;
    const z = (rand() - 0.5) * 1.6;
    const steps = 2 + Math.floor(rand() * 4);
    for (let k = 0; k < steps; k += 1) {
      const horizontal = rand() > 0.5;
      const len = 0.2 + rand() * 0.7;
      const nx = horizontal ? x + (rand() > 0.5 ? len : -len) : x;
      const ny = horizontal ? y : y + (rand() > 0.5 ? len : -len);
      pts.push(x, y, z, nx, ny, z);
      x = nx;
      y = ny;
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pts, 3));
  return g;
}

export function mountIce(canvas, { onReady } = {}) {
  const small = window.matchMedia('(max-width: 760px)').matches;
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.6));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = SRGBColorSpace;
  if ('transmissionResolutionScale' in renderer) renderer.transmissionResolutionScale = small ? 0.5 : 0.8;

  // Sky: pale at the top, deep steel blue at the horizon line and below.
  const sky = document.createElement('canvas');
  sky.width = 4;
  sky.height = 256;
  const sg = sky.getContext('2d');
  const grad = sg.createLinearGradient(0, 0, 0, 256);
  [[0, '#e7edf2'], [0.45, '#c3cfda'], [0.75, '#8fa2b4'], [1, '#5f7488']].forEach(([o, c]) => grad.addColorStop(o, c));
  sg.fillStyle = grad;
  sg.fillRect(0, 0, 4, 256);
  const skyTex = new CanvasTexture(sky);
  skyTex.colorSpace = SRGBColorSpace;
  const fogColor = new Color('#b4c3d0');
  const scene = new Scene();
  scene.background = skyTex;
  scene.fog = new Fog(fogColor, 12, 30);
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(coldRoom(), 0.04).texture;
  pmrem.dispose();
  scene.add(new AmbientLight('#dfe8f0', 0.6));
  const key = new DirectionalLight('#ffffff', 1.6);
  key.position.set(-4, 6, 5);
  scene.add(key);

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0.2, 12);

  // Measurement grid fading into the fog.
  const grid = new GridHelper(60, 60, '#5d7084', '#7f92a5');
  grid.position.y = -3.2;
  grid.material.transparent = true;
  grid.material.opacity = 0.7;
  scene.add(grid);

  /* Circuit board on the floor: traces run out from under the ice block and
     pulses of light travel along them. */
  const floorY = -3.19;
  const board = [];
  {
    let seed = 11;
    const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let n = 0; n < 42; n += 1) {
      const angle = (n / 42) * Math.PI * 2 + rand() * 0.1;
      let x = Math.cos(angle) * 1.9;
      let z = Math.sin(angle) * 1.4;
      const path = [[x, z]];
      const legs = 3 + Math.floor(rand() * 3);
      for (let k = 0; k < legs; k += 1) {
        const len = 0.8 + rand() * 2.4;
        // Leave outwards, then turn at right angles like a real board.
        if (k % 2 === 0) x += Math.sign(Math.cos(angle) || 1) * len;
        else z += Math.sign(Math.sin(angle) || 1) * len * 0.8;
        path.push([x, z]);
      }
      board.push(path);
    }
  }
  const boardPts = [];
  board.forEach((path) => {
    for (let i = 0; i < path.length - 1; i += 1) boardPts.push(path[i][0], floorY, path[i][1], path[i + 1][0], floorY, path[i + 1][1]);
  });
  const boardGeo = new BufferGeometry();
  boardGeo.setAttribute('position', new Float32BufferAttribute(boardPts, 3));
  const boardLines = new LineSegments(boardGeo, new LineBasicMaterial({ color: '#2f4a5f', transparent: true, opacity: 0.85 }));
  const boardGroup = new Group();
  boardGroup.add(boardLines);
  scene.add(boardGroup);
  const pulseCount = small ? 24 : 48;
  const pulsePos = new Float32Array(pulseCount * 3);
  const pulseGeo = new BufferGeometry();
  pulseGeo.setAttribute('position', new Float32BufferAttribute(pulsePos, 3));
  const pulses = new Points(pulseGeo, new PointsMaterial({ color: '#d8ff7a', size: 0.11, transparent: true, opacity: 1, depthWrite: false, blending: AdditiveBlending, toneMapped: false }));
  boardGroup.add(pulses);
  const pulseState = Array.from({ length: pulseCount }, (_, i) => ({ path: board[i % board.length], t: (i * 0.137) % 1, speed: 0.08 + (i % 5) * 0.03 }));
  function pathPoint(path, u) {
    const lens = [];
    let total = 0;
    for (let i = 0; i < path.length - 1; i += 1) { const l = Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]); lens.push(l); total += l; }
    let d = u * total;
    for (let i = 0; i < lens.length; i += 1) {
      if (d <= lens[i]) { const f = d / lens[i]; return [path[i][0] + (path[i + 1][0] - path[i][0]) * f, path[i][1] + (path[i + 1][1] - path[i][1]) * f]; }
      d -= lens[i];
    }
    return path[path.length - 1];
  }

  /* The ice block with the mark and circuit inside */
  const core = new Group();
  scene.add(core);
  const markMat = new MeshPhysicalMaterial({ color: '#1b2430', metalness: 1, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 });
  const mark = new Group();
  SHARDS.forEach((pts) => {
    const g = new ExtrudeGeometry(markShape(pts), { depth: 0.14, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 6, curveSegments: 40 });
    g.translate(0, 0, -0.07);
    mark.add(new Mesh(g, markMat));
  });
  mark.scale.setScalar(0.62);
  core.add(mark);
  const traces = new LineSegments(circuit(), new LineBasicMaterial({ color: '#d4ff6a', transparent: true, opacity: 1, blending: AdditiveBlending, toneMapped: false }));
  traces.scale.setScalar(0.9);
  core.add(traces);
  const ice = new MeshPhysicalMaterial({
    color: '#ffffff', metalness: 0, roughness: 0.2, transmission: 1, thickness: 1.6, ior: 1.31,
    attenuationColor: new Color('#a9d4ef'), attenuationDistance: 2.6, clearcoat: 1, clearcoatRoughness: 0.15,
    specularIntensity: 1, envMapIntensity: 1.2,
  });
  const block = new Mesh(new RoundedBoxGeometry(3.2, 3.2, 2.2, 6, 0.16), ice);
  core.add(block);
  // Light from inside the ice, so the block glows like Igloo's.
  const inner = new PointLight('#e9fbff', 14, 6, 2);
  inner.position.set(0, -0.4, 0.2);
  core.add(inner);
  const rim = new PointLight('#b9f25a', 6, 5, 2);
  rim.position.set(0.8, 1, -0.6);
  core.add(rim);

  /* Shards: broken ice around the block */
  const shardMat = new MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.22, transmission: 1, thickness: 0.8, ior: 1.31, attenuationColor: new Color('#d6ebf7'), attenuationDistance: 2.5, clearcoat: 1 });
  const shardSpots = [
    [-4.2, 1.6, -2.5, 0.55], [4.6, 2.2, -3.5, 0.7], [-3.4, -1.9, 0.8, 0.45], [3.6, -1.6, 0.4, 0.5],
    [-6.2, 0.2, -5, 0.8], [6.8, -0.6, -6, 0.9], [1.6, 3.1, -1.5, 0.35], [-1.8, 3.0, -3, 0.4],
  ];
  const shards = (small ? shardSpots.slice(0, 5) : shardSpots).map(([x, y, z, s], i) => {
    const geo = new IcosahedronGeometry(1, 0);
    const pos = geo.attributes.position;
    for (let k = 0; k < pos.count; k += 1) pos.setXYZ(k, pos.getX(k) * (0.6 + (k % 3) * 0.25), pos.getY(k) * (1.1 + (k % 2) * 0.4), pos.getZ(k) * 0.55);
    geo.computeVertexNormals();
    const m = new Mesh(geo, shardMat);
    m.position.set(x, y, z);
    m.scale.setScalar(s);
    m.rotation.set(i, i * 0.7, i * 0.3);
    m.userData = { base: new Vector3(x, y, z), phase: i * 1.3, spin: 0.05 + (i % 3) * 0.03 };
    scene.add(m);
    return m;
  });

  /* Data dust */
  const count = small ? 600 : 1400;
  const dust = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    dust[i * 3] = (Math.random() - 0.5) * 30;
    dust[i * 3 + 1] = (Math.random() - 0.5) * 14;
    dust[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(dust, 3));
  const dustPts = new Points(dustGeo, new PointsMaterial({ color: '#ffffff', size: 0.028, transparent: true, opacity: 0.8, depthWrite: false, blending: AdditiveBlending }));
  scene.add(dustPts);

  const pointer = { tx: 0, ty: 0, x: 0, y: 0 };
  const state = { scroll: 0, ready: false, visible: true };

  function layout() {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w < 760;
    const frontH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const frontW = frontH * camera.aspect;
    core.position.set(narrow ? 0 : frontW * 0.2, narrow ? frontH * 0.2 : 0.2, 0);
    core.scale.setScalar(narrow ? Math.min(0.62, frontW / 5.4) : Math.min(1, frontW / 11));
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

  let last = performance.now();
  let t = 0;
  function step(now) {
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
    last = now;
    t += dt;
    const k = 1 - Math.exp(-dt * 2.5);
    pointer.x += (pointer.tx - pointer.x) * k;
    pointer.y += (pointer.ty - pointer.y) * k;

    camera.position.x = pointer.x * 0.5;
    camera.position.y = 0.2 - pointer.y * 0.3 - state.scroll * 1.5;
    camera.position.z = 12 + state.scroll * 3;
    camera.lookAt(core.position.x * 0.35, 0.2 - state.scroll * 1.5, 0);

    core.rotation.y = Math.sin(t * 0.18) * 0.35 + 0.35;
    core.rotation.x = Math.sin(t * 0.13) * 0.06;
    core.position.y += (Math.sin(t * 0.6) * 0.004);
    traces.material.opacity = 0.75 + Math.sin(t * 1.4) * 0.25;
    inner.intensity = 12 + Math.sin(t * 0.9) * 3;
    mark.rotation.y = Math.sin(t * 0.3) * 0.2;

    shards.forEach((m) => {
      const d = m.userData;
      m.position.y = d.base.y + Math.sin(t * 0.5 + d.phase) * 0.15;
      m.rotation.y += d.spin * dt;
      m.rotation.x += d.spin * 0.5 * dt;
    });
    pulseState.forEach((p, i) => {
      p.t = (p.t + p.speed * dt) % 1;
      const [x, z] = pathPoint(p.path, p.t);
      pulsePos[i * 3] = x;
      pulsePos[i * 3 + 1] = floorY + 0.01;
      pulsePos[i * 3 + 2] = z;
    });
    pulseGeo.attributes.position.needsUpdate = true;
    boardGroup.position.x = core.position.x;
    dustPts.rotation.y = t * 0.01;
    dustPts.position.y = Math.sin(t * 0.2) * 0.2;

    renderer.render(scene, camera);
    if (!state.ready) { state.ready = true; onReady?.(); }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (!state.visible || document.hidden) { last = now; return; }
    step(now);
  }
  requestAnimationFrame(frame);

  if (new URLSearchParams(location.search).has('fx')) {
    window.nxIce = (seconds = 3) => { t = seconds; for (let i = 0; i < 30; i += 1) step(performance.now() - (29 - i) * 16); };
  }
}
