/* --------------------------------------------------------------------------
   2.5D work cards. Each card is drawn twice on a 2D canvas, once in colour
   and once as a depth map (near = white); a WebGL shader shifts pixels by
   depth as the pointer moves, so flat screenshots read as layered space.
   The HTML phones inside the card stay as the fallback without WebGL.
   -------------------------------------------------------------------------- */

const CARDS = {
  arise: {
    ratio: 1177 / 2560,
    colors: { base: '#1d1a6e', glowA: '#6f63ff', glowB: '#c6ff3d' },
    shots: [
      { src: './assets/shots/arise-skills-720.webp', x: 0.27, y: 0.6, w: 0.22, rot: -8, depth: 0.5 },
      { src: './assets/shots/arise-ari-720.webp', x: 0.73, y: 0.6, w: 0.22, rot: 8, depth: 0.62 },
      { src: './assets/shots/arise-welcome-720.webp', x: 0.5, y: 0.53, w: 0.26, rot: 0, depth: 0.95 },
    ],
  },
  idrok: {
    ratio: 900 / 2030,
    colors: { base: '#0c3a2e', glowA: '#2f9a74', glowB: '#e38b1f' },
    shots: [
      { src: './assets/shots/idrok-reader-720.webp', x: 0.27, y: 0.6, w: 0.22, rot: -8, depth: 0.5 },
      { src: './assets/shots/idrok-alif-720.webp', x: 0.73, y: 0.6, w: 0.22, rot: 8, depth: 0.62 },
      { src: './assets/shots/idrok-library-720.webp', x: 0.5, y: 0.53, w: 0.26, rot: 0, depth: 0.95 },
    ],
  },
};

const W = 1600;
const H = 1100;

const loadImage = (src) => new Promise((resolve) => {
  const image = new Image();
  image.decoding = 'async';
  image.onload = () => resolve(image);
  image.onerror = () => resolve(null);
  image.src = src;
});

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function compose(spec, images) {
  const color = document.createElement('canvas');
  const depth = document.createElement('canvas');
  color.width = depth.width = W;
  color.height = depth.height = H;
  const c = color.getContext('2d');
  const d = depth.getContext('2d');

  c.fillStyle = spec.colors.base;
  c.fillRect(0, 0, W, H);
  for (const [x, y, r, col, a] of [[0.2, 0.05, 0.8, spec.colors.glowA, 0.85], [0.9, 1, 0.55, spec.colors.glowB, 0.35]]) {
    const g = c.createRadialGradient(x * W, y * H, 0, x * W, y * H, r * W);
    g.addColorStop(0, col);
    g.addColorStop(1, 'transparent');
    c.globalAlpha = a;
    c.fillStyle = g;
    c.fillRect(0, 0, W, H);
  }
  c.globalAlpha = 0.07;
  c.strokeStyle = '#ffffff';
  for (let x = 0; x <= W; x += 80) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
  for (let y = 0; y <= H; y += 80) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  c.globalAlpha = 1;

  const dg = d.createLinearGradient(0, 0, 0, H);
  dg.addColorStop(0, '#0a0a0a');
  dg.addColorStop(1, '#2a2a2a');
  d.fillStyle = dg;
  d.fillRect(0, 0, W, H);
  d.filter = 'blur(10px)';

  spec.shots.forEach((shot, i) => {
    const image = images[i];
    const pw = shot.w * W;
    const ph = pw / spec.ratio;
    const radius = pw * 0.13;
    const bezel = pw * 0.035;
    for (const [ctx, isDepth] of [[c, false], [d, true]]) {
      ctx.save();
      ctx.translate(shot.x * W, shot.y * H);
      ctx.rotate((shot.rot * Math.PI) / 180);
      if (isDepth) {
        const v = Math.round(shot.depth * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        roundRect(ctx, -pw / 2, -ph / 2, pw, ph, radius);
        ctx.fill();
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 70;
        ctx.shadowOffsetY = 40;
        ctx.fillStyle = '#0b0b0e';
        roundRect(ctx, -pw / 2, -ph / 2, pw, ph, radius);
        ctx.fill();
        ctx.shadowColor = 'transparent';
        roundRect(ctx, -pw / 2 + bezel, -ph / 2 + bezel, pw - bezel * 2, ph - bezel * 2, radius - bezel);
        ctx.clip();
        if (image) ctx.drawImage(image, -pw / 2 + bezel, -ph / 2 + bezel, pw - bezel * 2, ph - bezel * 2);
        const sheen = ctx.createLinearGradient(-pw / 2, -ph / 2, pw / 2, ph / 2);
        sheen.addColorStop(0, 'rgba(255,255,255,0.16)');
        sheen.addColorStop(0.35, 'rgba(255,255,255,0)');
        ctx.fillStyle = sheen;
        ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
      }
      ctx.restore();
    }
  });
  return { color, depth };
}

const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform vec2 uMouse;
uniform float uHover;
uniform vec2 uCover;
varying vec2 vUv;
void main() {
  vec2 uv = (vUv - 0.5) * uCover / (1.0 + 0.04 * uHover) + 0.5;
  vec2 m = uMouse * (0.018 + 0.014 * uHover);
  float d = texture2D(uDepth, uv).r;
  d = texture2D(uDepth, uv - m * (d - 0.35)).r;
  vec2 duv = uv - m * (d - 0.35);
  float split = 0.0015 * uHover;
  vec3 col = vec3(
    texture2D(uColor, duv + vec2(split, 0.0)).r,
    texture2D(uColor, duv).g,
    texture2D(uColor, duv - vec2(split, 0.0)).b
  );
  float vignette = smoothstep(1.15, 0.3, length(vUv - 0.5));
  gl_FragColor = vec4(col * mix(0.8, 1.0, vignette), 1.0);
}`;

function makeView(canvas, layers) {
  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
  if (!gl) return null;
  const shader = (type, source) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  };
  const program = gl.createProgram();
  gl.attachShader(program, shader(gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, shader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const texture = (unit, source) => {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };
  texture(0, layers.color);
  texture(1, layers.depth);
  gl.uniform1i(gl.getUniformLocation(program, 'uColor'), 0);
  gl.uniform1i(gl.getUniformLocation(program, 'uDepth'), 1);
  const uMouse = gl.getUniformLocation(program, 'uMouse');
  const uHover = gl.getUniformLocation(program, 'uHover');
  const uCover = gl.getUniformLocation(program, 'uCover');
  const state = { mouse: [0, 0], target: [0, 0], hover: 0, hovering: false, visible: false };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    const ar = rect.width / Math.max(1, rect.height);
    const src = W / H;
    gl.uniform2f(uCover, ar > src ? 1 : ar / src, ar > src ? src / ar : 1);
  }

  function draw(time) {
    if (!state.hovering) state.target = [Math.sin(time * 0.0006) * 0.35, Math.cos(time * 0.0005) * 0.25];
    state.mouse[0] += (state.target[0] - state.mouse[0]) * 0.08;
    state.mouse[1] += (state.target[1] - state.mouse[1]) * 0.08;
    state.hover += ((state.hovering ? 1 : 0) - state.hover) * 0.08;
    gl.uniform2f(uMouse, state.mouse[0], state.mouse[1]);
    gl.uniform1f(uHover, state.hover);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  return { state, resize, draw };
}

export async function mountCards(nodes) {
  const live = [];
  await Promise.all(nodes.map(async (media) => {
    const spec = CARDS[media.dataset.depthCard];
    if (!spec) return;
    const images = await Promise.all(spec.shots.map((shot) => loadImage(shot.src)));
    const canvas = document.createElement('canvas');
    canvas.className = 'depth__canvas';
    canvas.setAttribute('aria-hidden', 'true');
    media.appendChild(canvas);
    const view = makeView(canvas, compose(spec, images));
    if (!view) { canvas.remove(); return; }
    view.resize();
    new ResizeObserver(() => view.resize()).observe(canvas);
    const hit = media.closest('a') || media;
    hit.addEventListener('pointermove', (event) => {
      const rect = media.getBoundingClientRect();
      view.state.target = [((event.clientX - rect.left) / rect.width) * 2 - 1, -(((event.clientY - rect.top) / rect.height) * 2 - 1)];
      view.state.hovering = true;
    });
    hit.addEventListener('pointerleave', () => { view.state.hovering = false; });
    new IntersectionObserver(([entry]) => { view.state.visible = entry.isIntersecting; }).observe(canvas);
    view.draw(0);
    media.classList.add('is-3d');
    live.push(view);
  }));

  const tick = (time) => {
    if (!document.hidden) live.forEach((view) => view.state.visible && view.draw(time));
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
