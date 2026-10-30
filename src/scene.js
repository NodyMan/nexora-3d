import * as THREE from 'three';

/* --------------------------------------------------------------------------
   Nexora Studio — WebGL summit
   A procedural alpine massif with contour shading, survey beacons and a
   camera that travels with the page. All geometry is generated at runtime.
   -------------------------------------------------------------------------- */

const TAU = Math.PI * 2;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(edge0, edge1, value) {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function noise2(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
}

function fbm(x, y, octaves = 4) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let i = 0; i < octaves; i += 1) {
    value += amplitude * noise2(x * frequency, y * frequency);
    frequency *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

function terrainHeight(x, z) {
  // Primary massif, off-centre for an asymmetric hero composition.
  const peaks = [
    [8, -30, 26, 9.5],
    [-28, -52, 17, 15],
    [42, -62, 21, 17],
    [-6, -96, 14, 30],
    [62, -100, 17, 26],
    [-72, -88, 12, 28],
  ];

  let height = -2.4;
  for (let i = 0; i < peaks.length; i += 1) {
    const [px, pz, ph, ps] = peaks[i];
    const dx = x - px;
    const dz = z - pz;
    height += ph * Math.exp(-(dx * dx + dz * dz) / (2 * ps * ps));
  }

  const base = fbm(x * 0.035 + 3.1, z * 0.035 - 1.7, 4);
  const ridge = 1 - Math.abs(base * 2 - 1);
  const envelope = Math.exp(-(x * x + (z + 55) * (z + 55)) / 5200);
  height += (ridge - 0.55) * 5.6 * envelope;
  height += (fbm(x * 0.12, z * 0.12, 3) - 0.5) * 0.85;

  // A valley opens toward the viewer so the camera has a flight line.
  const valley = Math.exp(-(x * x) / 280) * smoothstep(-14, 46, z);
  height -= valley * 5.8;

  // Settle the edges of the tile into the fog.
  const edge = smoothstep(132, 72, Math.abs(x)) * smoothstep(158, 74, Math.abs(z + 45));
  height = height * edge - 2.8 * (1 - edge);

  return height;
}

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.18, 'rgba(255,255,255,0.7)');
  gradient.addColorStop(0.45, 'rgba(255,255,255,0.18)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const SKY_VERTEX = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uLine;
  uniform vec3 uAccent;
  varying vec3 vDir;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 d = normalize(vDir);
    float y = d.y;

    // Daylight: warm paper horizon rising into a pale alpine blue.
    vec3 low = vec3(0.975, 0.958, 0.922);
    vec3 high = vec3(0.734, 0.808, 0.862);
    vec3 col = mix(low, high, smoothstep(-0.04, 0.9, y));

    // A slow veil of high cloud.
    vec2 q = vec2(d.x * 2.2 + uTime * 0.006, d.z * 2.8 - uTime * 0.003);
    float n = fbm(q);
    float cloud = smoothstep(0.46, 0.78, n) * smoothstep(-0.02, 0.4, y) * (1.0 - smoothstep(0.55, 0.95, y));
    col = mix(col, vec3(0.995, 0.99, 0.972), cloud * 0.48);

    // Faint atmospheric ribbon, low and slow.
    float ribbon = smoothstep(0.24, 0.6, fbm(vec2(d.x * 1.6 - uTime * 0.006, d.z * 1.2))) * smoothstep(0.3, 0.02, abs(y - 0.06));
    col += uLine * ribbon * 0.03;

    // Warm horizon wash and a soft sun behind the massif.
    float horizon = exp(-pow(max(y, 0.0) * 9.0, 1.5));
    col += uAccent * horizon * 0.05;

    float glow = pow(max(dot(d, normalize(vec3(0.42, 0.16, -0.9))), 0.0), 22.0);
    col += uAccent * glow * 0.14;
    col += uLine * pow(max(dot(d, normalize(vec3(-0.4, 0.2, -0.8))), 0.0), 50.0) * 0.05;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const TERRAIN_VERTEX = /* glsl */ `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vHeight;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vHeight = world.y;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const TERRAIN_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uLine;
  uniform vec3 uAccent;
  uniform vec3 uFog;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying float vHeight;

  float contour(float v, float scale, float width) {
    float f = fract(v * scale);
    float d = min(f, 1.0 - f);
    float aa = fwidth(v * scale) * width;
    return 1.0 - smoothstep(0.0, aa, d);
  }

  void main() {
    vec3 N = normalize(vNormalW);
    vec3 V = normalize(cameraPosition - vWorld);

    vec3 key = normalize(vec3(-0.4, 0.8, 0.36));
    float diff = clamp(dot(N, key), 0.0, 1.0);
    float fill = clamp(dot(N, normalize(vec3(0.62, 0.3, -0.4))), 0.0, 1.0);
    float rim = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.4);
    float heightT = smoothstep(-2.0, 27.0, vHeight);

    vec3 base = mix(vec3(0.415, 0.448, 0.418), vec3(0.812, 0.824, 0.784), heightT);
    base *= 0.62 + 0.5 * diff;
    base += fill * vec3(0.045, 0.055, 0.05);
    base = mix(base, vec3(0.982, 0.979, 0.952), smoothstep(0.55, 1.0, heightT) * 0.24);

    float lines = contour(vHeight + uTime * 0.012, 0.42, 1.6);
    float crossX = contour(vWorld.x, 0.075, 1.0);
    float crossZ = contour(vWorld.z, 0.075, 1.0);

    vec3 col = base;
    col = mix(col, uLine, lines * (0.16 + heightT * 0.2));
    col = mix(col, uAccent, rim * (0.06 + heightT * 0.12));
    col = mix(col, uLine, (crossX + crossZ) * (0.045 + heightT * 0.07));

    // Snow near the highest ridgelines.
    float snow = smoothstep(21.0, 27.0, vHeight) * smoothstep(0.2, 0.7, diff);
    col = mix(col, vec3(0.988, 0.988, 0.968), snow * 0.55);
    col += uAccent * smoothstep(23.0, 28.0, vHeight) * 0.02;

    float dist = length(cameraPosition - vWorld);
    float fogFactor = 1.0 - exp(-pow(dist * 0.0056, 2.0));
    col = mix(col, uFog, clamp(fogFactor, 0.0, 1.0));

    gl_FragColor = vec4(col, 1.0);
  }
`;

const MOODS = [
  { line: '#1d5f52', accent: '#c1764a', fog: '#edeee6' },
  { line: '#2b5d70', accent: '#c68a5c', fog: '#eceee9' },
  { line: '#1f6a57', accent: '#c07a4c', fog: '#eef0e6' },
  { line: '#75503a', accent: '#b96038', fog: '#f1e9df' },
  { line: '#3a5b63', accent: '#a8613d', fog: '#eeece5' },
];

function createScene(canvas, options = {}) {
  const onLabels = options.onLabels || (() => {});
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
    alpha: false,
  });
  renderer.setClearColor(0xedeee6, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xedeee6, 0.0056);

  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 420);
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let width = 1;
  let height = 1;
  let dpr = 1;

  const mood = {
    line: new THREE.Color(MOODS[0].line),
    accent: new THREE.Color(MOODS[0].accent),
    fog: new THREE.Color(MOODS[0].fog),
  };
  const moodTarget = {
    line: new THREE.Color(MOODS[0].line),
    accent: new THREE.Color(MOODS[0].accent),
    fog: new THREE.Color(MOODS[0].fog),
  };

  /* Sky ------------------------------------------------------------------ */
  const skyUniforms = {
    uTime: { value: 0 },
    uLine: { value: mood.line.clone() },
    uAccent: { value: mood.accent.clone() },
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(260, 40, 24),
    new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    })
  );
  sky.renderOrder = -100;
  scene.add(sky);

  /* Terrain -------------------------------------------------------------- */
  const geometry = new THREE.PlaneGeometry(280, 320, 190, 210);
  geometry.rotateX(-Math.PI / 2);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const z = positions.getZ(i) - 45;
    positions.setZ(i, z);
    positions.setY(i, terrainHeight(x, z));
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();

  const terrainUniforms = {
    uTime: { value: 0 },
    uLine: { value: mood.line.clone() },
    uAccent: { value: mood.accent.clone() },
    uFog: { value: mood.fog.clone() },
  };
  const terrain = new THREE.Mesh(
    geometry,
    new THREE.ShaderMaterial({
      uniforms: terrainUniforms,
      vertexShader: TERRAIN_VERTEX,
      fragmentShader: TERRAIN_FRAGMENT,
      side: THREE.FrontSide,
    })
  );
  scene.add(terrain);

  // A faint wireframe skin reads as a survey drawing over the daylight stone.
  const wire = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({
      color: 0x2f6a5c,
      wireframe: true,
      transparent: true,
      opacity: 0.055,
      depthWrite: false,
    })
  );
  wire.position.y = 0.04;
  scene.add(wire);

  /* Beacons -------------------------------------------------------------- */
  const anchorPoints = [
    new THREE.Vector3(8, 26, -30),
    new THREE.Vector3(-28, 17, -52),
    new THREE.Vector3(42, 21, -62),
  ];
  const labelPositions = anchorPoints.map((point) => point.clone());
  const glowTexture = makeGlowTexture();
  const beacons = [];

  anchorPoints.forEach((point, index) => {
    const base = new THREE.Vector3(point.x, terrainHeight(point.x, point.z) + 0.15, point.z);
    const top = base.clone();
    top.y += 16 + index * 2.5;

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([base, top]);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: mood.line.clone(),
      transparent: true,
      opacity: 0.40,
      depthWrite: false,
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    const spriteMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      color: mood.line.clone(),
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.copy(top);
    sprite.scale.set(5.5, 5.5, 1);
    scene.add(sprite);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.9, 1.05, 48),
      new THREE.MeshBasicMaterial({
        color: mood.line.clone(),
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(base);
    ring.position.y += 0.15;
    scene.add(ring);

    const halo = new THREE.Mesh(
      new THREE.RingGeometry(1.7, 1.78, 64),
      new THREE.MeshBasicMaterial({
        color: mood.line.clone(),
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    halo.rotation.x = -Math.PI / 2;
    halo.position.copy(base);
    halo.position.y += 0.16;
    scene.add(halo);

    beacons.push({ line, lineMaterial, sprite, spriteMaterial, ring, halo, base, top, phase: index * 1.7 });
    labelPositions[index].set(point.x, top.y - 5.5, point.z);
  });

  /* Dust ------------------------------------------------------------------ */
  const dustCount = 720;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 220;
    dustPositions[i * 3 + 1] = Math.random() * 60 - 2;
    dustPositions[i * 3 + 2] = -150 + Math.random() * 210;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dustMaterial = new THREE.PointsMaterial({
    map: glowTexture,
    color: 0x4f7b6f,
    size: 0.22,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);

  /* Camera path ----------------------------------------------------------- */
  const cameraCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(17, 15, 58),
      new THREE.Vector3(4, 19, 44),
      new THREE.Vector3(-16, 13, 35),
      new THREE.Vector3(-10, 28, 23),
      new THREE.Vector3(18, 10, 29),
      new THREE.Vector3(1, 14, 17),
    ],
    false,
    'catmullrom',
    0.35
  );
  const targetCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(6, 10, -26),
      new THREE.Vector3(2, 9, -34),
      new THREE.Vector3(-4, 8, -41),
      new THREE.Vector3(0, 7, -37),
      new THREE.Vector3(5, 7, -45),
      new THREE.Vector3(0, 6, -31),
    ],
    false,
    'catmullrom',
    0.35
  );

  const cameraTarget = new THREE.Vector3();
  const desiredPosition = new THREE.Vector3();
  const desiredTarget = new THREE.Vector3();
  const sceneDepth = clamp(Number(document.body.dataset.sceneDepth || 1), 0.1, 1);
  let scrollProgress = 0;
  let scrollTarget = 0;
  let sceneProgress = 0;
  let time = 0;
  let raf = 0;
  let running = true;
  let visible = true;

  function readScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    scrollTarget = max > 0 ? clamp(window.scrollY / max, 0, 1) * sceneDepth : 0;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, width < 760 ? 1.4 : 1.7);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (REDUCED) renderFrame(0);
  }

  function setMood(index) {
    const item = MOODS[clamp(index, 0, MOODS.length - 1)];
    moodTarget.line.set(item.line);
    moodTarget.accent.set(item.accent);
    moodTarget.fog.set(item.fog);
    if (REDUCED) {
      mood.line.copy(moodTarget.line);
      mood.accent.copy(moodTarget.accent);
      mood.fog.copy(moodTarget.fog);
      applyMood();
      renderFrame(0);
    }
  }

  function applyMood() {
    skyUniforms.uLine.value.copy(mood.line);
    skyUniforms.uAccent.value.copy(mood.accent);
    terrainUniforms.uLine.value.copy(mood.line);
    terrainUniforms.uAccent.value.copy(mood.accent);
    terrainUniforms.uFog.value.copy(mood.fog);
    scene.fog.color.copy(mood.fog);
    renderer.setClearColor(mood.fog, 1);
    beacons.forEach((beacon) => {
      beacon.lineMaterial.color.copy(mood.line);
      beacon.spriteMaterial.color.copy(mood.line);
      beacon.ring.material.color.copy(mood.line);
      beacon.halo.material.color.copy(mood.line);
    });
    dustMaterial.color.copy(mood.line).lerp(new THREE.Color('#ffffff'), 0.35);
  }

  function updateCamera(delta) {
    scrollProgress += (scrollTarget - scrollProgress) * (1 - Math.pow(0.001, delta));
    const p = clamp(scrollProgress * 0.98 + 0.01, 0, 1);

    pointer.lerp(pointerTarget, 1 - Math.pow(0.002, delta));

    const position = cameraCurve.getPointAt(p, desiredPosition);
    const target = targetCurve.getPointAt(p, desiredTarget);

    const drift = Math.sin(time * 0.09) * 0.55 + Math.cos(time * 0.055) * 0.3;
    position.x += drift + pointer.x * 2.4;
    position.y += Math.sin(time * 0.07) * 0.22 + pointer.y * 1.1;
    target.x += pointer.x * 1.3;
    target.y += pointer.y * 0.9 - 0.1;

    camera.position.copy(position);
    cameraTarget.copy(target);
    camera.lookAt(cameraTarget);
    camera.fov = 48 + Math.sin(p * Math.PI) * 3.5;
    camera.updateProjectionMatrix();
    sceneProgress = p;
  }

  function updateBeacons(delta) {
    beacons.forEach((beacon, index) => {
      const phase = time * 0.9 + beacon.phase;
      const local = 0.85 + Math.sin(phase) * 0.15;
      beacon.spriteMaterial.opacity = 0.30 * local;
      beacon.sprite.scale.setScalar((5.2 + Math.sin(phase) * 0.6) * (index === 0 ? 1.15 : 1));
      beacon.ring.rotation.z += delta * 0.12;
      beacon.halo.rotation.z -= delta * 0.06;
      beacon.lineMaterial.opacity = 0.26 + local * 0.16;
    });
    dust.rotation.y = Math.sin(time * 0.02) * 0.08;
    dust.position.y = Math.sin(time * 0.05) * 0.6;
    dustMaterial.opacity = 0.14 + Math.sin(time * 0.4) * 0.03;
  }

  function projectLabels() {
    if (!labelPositions.length) return;
    const result = [];
    for (let i = 0; i < labelPositions.length; i += 1) {
      const projected = labelPositions[i].clone().project(camera);
      const behind = projected.z > 1 || projected.z < -1;
      const x = (projected.x * 0.5 + 0.5) * width;
      const y = (-projected.y * 0.5 + 0.5) * height;
      const fade = 1 - smoothstep(0.22, 0.68, window.scrollY / Math.max(1, height));
      result.push({ x, y, visible: !behind && fade > 0.01, opacity: fade });
    }
    onLabels(result);
  }

  function renderFrame(delta) {
    if (!REDUCED) {
      time += delta;
      updateCamera(delta);
      updateBeacons(delta);
      terrainUniforms.uTime.value = time;
      skyUniforms.uTime.value = time;
      mood.line.lerp(moodTarget.line, 1 - Math.pow(0.004, delta));
      mood.accent.lerp(moodTarget.accent, 1 - Math.pow(0.004, delta));
      mood.fog.lerp(moodTarget.fog, 1 - Math.pow(0.004, delta));
      applyMood();
    }
    renderer.render(scene, camera);
    projectLabels();
  }

  function loop(now) {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    if (!visible) return;
    const delta = Math.min(0.05, lastTime ? (now - lastTime) / 1000 : 0.016);
    lastTime = now;
    renderFrame(delta);
  }
  let lastTime = 0;

  function onResize() {
    resize();
    if (REDUCED) renderFrame(0);
  }

  function onScroll() {
    readScroll();
    if (REDUCED) renderFrame(0);
  }

  function onPointerMove(event) {
    pointerTarget.x = (event.clientX / width) * 2 - 1;
    pointerTarget.y = -((event.clientY / height) * 2 - 1);
  }

  function onPointerLeave() {
    pointerTarget.set(0, 0);
  }

  function onVisibility() {
    visible = !document.hidden;
    if (visible && !REDUCED && !running) {
      running = true;
      lastTime = 0;
      raf = requestAnimationFrame(loop);
    }
  }

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerleave', onPointerLeave, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);

  resize();
  readScroll();
  scrollProgress = scrollTarget;
  applyMood();

  if (REDUCED) {
    camera.position.copy(cameraCurve.getPointAt(0.04));
    cameraTarget.copy(targetCurve.getPointAt(0.04));
    camera.lookAt(cameraTarget);
    renderFrame(0);
  } else {
    raf = requestAnimationFrame(loop);
  }

  return {
    setMood,
    invalidate: () => renderFrame(0),
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      geometry.dispose();
      terrain.material.dispose();
      wire.material.dispose();
      sky.geometry.dispose();
      sky.material.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      glowTexture.dispose();
      renderer.dispose();
    },
  };
}

export { createScene };
