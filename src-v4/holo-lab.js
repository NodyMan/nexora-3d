/* --------------------------------------------------------------------------
   Nexora Studio — 3D Holographic Device & Architecture Inspector
   Apple Pro / Amo caliber interactive 3D exploded hardware visualizer.
   Allows users to rotate a 3D mobile chassis, explode its internal architectural
   layers (UI Gesture Layer, Neural RAG Core, Offline SQLite Storage, Titanium Frame),
   and inspect live production telemetry.
   -------------------------------------------------------------------------- */

import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, Group, BoxGeometry,
  PlaneGeometry, MeshPhysicalMaterial, MeshStandardMaterial, DirectionalLight,
  PointLight, AmbientLight, Color, Vector2, Vector3, CanvasTexture,
  SRGBColorSpace, ACESFilmicToneMapping,
} from 'three';

export function initHoloLab() {
  const canvas = document.getElementById('holo-canvas');
  if (!canvas) return;

  const container = canvas.parentElement;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  const scene = new Scene();
  const camera = new PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  // Lighting
  const ambLight = new AmbientLight(0xffffff, 0.8);
  scene.add(ambLight);

  const voltLight = new PointLight(0xc6ff3d, 2.8, 15);
  voltLight.position.set(3, 4, 4);
  scene.add(voltLight);

  const blueLight = new PointLight(0x4655ff, 2.2, 15);
  blueLight.position.set(-3, -3, 3);
  scene.add(blueLight);

  // Device Hierarchy
  const deviceGroup = new Group();
  scene.add(deviceGroup);

  // Materials for Light Studio Mode
  const titaniumMaterial = new MeshPhysicalMaterial({
    color: 0xe2e6ee,
    metalness: 0.85,
    roughness: 0.18,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
  });

  const glassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.85,
    opacity: 1,
    transparent: true,
    roughness: 0.04,
    ior: 1.5,
    metalness: 0.05,
  });

  const chipMaterial = new MeshStandardMaterial({
    color: 0x1e2430,
    roughness: 0.3,
    metalness: 0.85,
    emissive: 0x0e131d,
    emissiveIntensity: 0.3,
  });

  const neuralMaterial = new MeshStandardMaterial({
    color: 0x203015,
    emissive: 0x7ab800,
    emissiveIntensity: 0.8,
    wireframe: true,
  });

  // Layer 1: Titanium Back Chassis
  const backGeo = new BoxGeometry(2.4, 4.8, 0.08);
  const backMesh = new Mesh(backGeo, titaniumMaterial);
  backMesh.userData = { targetZ: -0.4, currentZ: 0, label: 'Titanium Chassis (7.05 MB Target)' };

  // Layer 2: SQLite Storage Engine Core
  const storageGeo = new BoxGeometry(2.0, 4.2, 0.04);
  const storageMesh = new Mesh(storageGeo, chipMaterial);
  storageMesh.userData = { targetZ: -0.15, currentZ: 0, label: 'Offline SQLite Sync Engine (713 Volumes)' };

  // Layer 3: RAG Neural Core / Contextual Vector Engine
  const neuralGeo = new BoxGeometry(1.8, 3.6, 0.03);
  const neuralMesh = new Mesh(neuralGeo, neuralMaterial);
  neuralMesh.userData = { targetZ: 0.15, currentZ: 0, label: 'Ari Neural RAG Engine (Zero Hallucination Guardrails)' };

  // Layer 4: Screen / UI Gesture Glass
  const screenGeo = new BoxGeometry(2.3, 4.6, 0.05);
  const screenMesh = new Mesh(screenGeo, glassMaterial);
  screenMesh.userData = { targetZ: 0.45, currentZ: 0, label: '60fps Gesture UI & Fluid Micro-Interactions' };

  const layers = [backMesh, storageMesh, neuralMesh, screenMesh];
  layers.forEach((l) => deviceGroup.add(l));

  // States
  let exploded = false;
  let targetRotX = 0.2;
  let targetRotY = -0.4;
  let curRotX = targetRotX;
  let curRotY = targetRotY;

  // Drag interaction
  let isDragging = false;
  let prevPointer = { x: 0, y: 0 };

  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    prevPointer.x = e.clientX;
    prevPointer.y = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  window.addEventListener('pointerup', (e) => {
    if (isDragging) {
      isDragging = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevPointer.x;
    const dy = e.clientY - prevPointer.y;
    targetRotY += dx * 0.01;
    targetRotX += dy * 0.01;
    prevPointer.x = e.clientX;
    prevPointer.y = e.clientY;
  });

  // UI Buttons in Holo Lab
  const explodeBtn = document.getElementById('holo-explode-btn');
  const resetBtn = document.getElementById('holo-reset-btn');
  const infoLabel = document.getElementById('holo-active-label');
  const modeAriseBtn = document.getElementById('holo-mode-arise');
  const modeLibBtn = document.getElementById('holo-mode-digitallib');

  if (explodeBtn) {
    explodeBtn.addEventListener('click', () => {
      exploded = !exploded;
      explodeBtn.classList.toggle('is-active', exploded);
      explodeBtn.textContent = exploded ? 'Collapse Layers' : 'Explode Architecture';
      if (infoLabel) {
        infoLabel.textContent = exploded
          ? 'Exploded View: Inspecting Architectural Layers'
          : 'Unified Mobile Monolith (Assembled Runtime)';
      }
      window.dispatchEvent(new CustomEvent('nexora:celebrate'));
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      targetRotX = 0.2;
      targetRotY = -0.4;
    });
  }

  if (modeAriseBtn && modeLibBtn) {
    modeAriseBtn.addEventListener('click', () => {
      modeAriseBtn.classList.add('is-active');
      modeLibBtn.classList.remove('is-active');
      neuralMaterial.emissive.setHex(0xc6ff3d);
      voltLight.color.setHex(0xc6ff3d);
      if (infoLabel) infoLabel.textContent = 'Active Product: Arise (AI Admissions Platform)';
    });

    modeLibBtn.addEventListener('click', () => {
      modeLibBtn.classList.add('is-active');
      modeAriseBtn.classList.remove('is-active');
      neuralMaterial.emissive.setHex(0x33d6ff);
      voltLight.color.setHex(0x33d6ff);
      if (infoLabel) infoLabel.textContent = 'Active Product: DigitalLib (713-Book Offline Library)';
    });
  }

  function resize() {
    const w = container.clientWidth || 400;
    const h = container.clientHeight || 450;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // Render loop
  let last = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    // Smooth rotation lerp
    curRotX += (targetRotX - curRotX) * 0.1;
    curRotY += (targetRotY - curRotY) * 0.1;

    // Idle oscillation if not dragging
    if (!isDragging) {
      targetRotY += 0.002;
    }

    deviceGroup.rotation.x = curRotX;
    deviceGroup.rotation.y = curRotY;

    // Layer explosion lerp
    layers.forEach((layer) => {
      const destZ = exploded ? layer.userData.targetZ * 2.8 : 0;
      layer.userData.currentZ += (destZ - layer.userData.currentZ) * 0.12;
      layer.position.z = layer.userData.currentZ;
    });

    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

// Auto init if canvas present
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHoloLab);
} else {
  initHoloLab();
}
