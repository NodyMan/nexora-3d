import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('nexora-3d/.qa');
const PORT = 9336;
const VIEW = process.argv[2] === 'mobile'
  ? { width: 390, height: 844, mobile: true }
  : { width: 1440, height: 1000, mobile: false };

await mkdir(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-interactions',
  '--enable-unsafe-swiftshader',
  '--hide-scrollbars',
  '--mute-audio',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let targets = null;
for (let i = 0; i < 50; i += 1) {
  try {
    const response = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    targets = await response.json();
    if (targets.length) break;
  } catch {
    /* retry */
  }
  await sleep(200);
}
if (!targets) {
  console.error('Chrome did not start.');
  chrome.kill();
  process.exit(1);
}

const page = targets.find((item) => item.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
const events = [];
let seq = 0;

ws.onmessage = (event) => {
  const payload = JSON.parse(event.data);
  if (payload.id) {
    const waiter = pending.get(payload.id);
    if (waiter) {
      pending.delete(payload.id);
      if (payload.error) waiter.reject(new Error(JSON.stringify(payload.error)));
      else waiter.resolve(payload.result);
    }
    return;
  }
  if (['Runtime.exceptionThrown', 'Runtime.consoleAPICalled', 'Log.entryAdded'].includes(payload.method)) {
    events.push(payload);
  }
};

await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

function send(method, params = {}) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}

async function shot(name) {
  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(OUT, `${name}.png`), Buffer.from(data, 'base64'));
}

async function click(selector) {
  await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); if (el) el.scrollIntoView({block:'center'}); })()`);
  await sleep(600);
  const box = await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height }; })()`);
  if (!box) throw new Error(`Missing ${selector}`);
  await sleep(120);
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: box.x, y: box.y });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: box.x, y: box.y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: box.x, y: box.y, button: 'left', clickCount: 1 });
  return box;
}

await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: VIEW.width,
  height: VIEW.height,
  deviceScaleFactor: 1,
  mobile: VIEW.mobile,
});
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
if (VIEW.mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
await sleep(4500);

const report = {};

if (VIEW.mobile) {
  await click('#menu-toggle');
  await sleep(1100);
  report.menuOpen = await evaluate(`({
    expanded: document.querySelector('#menu-toggle').getAttribute('aria-expanded'),
    hidden: document.querySelector('#mobile-menu').getAttribute('aria-hidden'),
    bodyClass: document.body.className,
    focused: document.activeElement?.textContent?.trim().slice(0, 30),
    overflow: getComputedStyle(document.body).overflow,
    menuRect: document.querySelector('#mobile-menu').getBoundingClientRect().toJSON(),
  })`);
  await shot('10-menu');
  await evaluate(`document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));`);
  await sleep(450);
  report.menuClosed = await evaluate(`({
    expanded: document.querySelector('#menu-toggle').getAttribute('aria-expanded'),
    hidden: document.querySelector('#mobile-menu').getAttribute('aria-hidden'),
    bodyClass: document.body.className,
    focused: document.activeElement?.id,
  })`);
}

// Case dialog
await evaluate(`document.getElementById('work').scrollIntoView({block:'start'});`);
await sleep(700);
await click('[data-dialog="case-arise"]');
await sleep(800);
report.dialogOpen = await evaluate(`(() => { const d = document.querySelector('#case-arise'); return {
  open: d.open,
  bodyClass: document.body.className,
  rect: d.getBoundingClientRect().toJSON(),
  focusInside: d.contains(document.activeElement),
  closeVisible: !!d.querySelector('[data-close-dialog]')?.offsetParent,
}; })()`);
await shot('11-dialog');
await click('#case-arise [data-close-dialog]');
await sleep(500);
report.dialogClosed = await evaluate(`({ open: document.querySelector('#case-arise').open, bodyClass: document.body.className })`);

// Counters and active nav
await evaluate(`document.getElementById('record').scrollIntoView({block:'start'});`);
await sleep(2600);
report.record = await evaluate(`({
  values: Array.from(document.querySelectorAll('.record__value')).map(el => el.textContent.trim()),
  activeNav: Array.from(document.querySelectorAll('[data-nav]')).filter(el => el.classList.contains('is-active')).map(el => el.textContent.trim()),
})`);

// Copy email
await evaluate(`document.getElementById('contact').scrollIntoView({block:'start'});`);
await sleep(700);
await click('#copy-email');
await sleep(700);
report.copy = await evaluate(`({
  label: document.querySelector('#copy-email .copy-btn__label')?.textContent.trim(),
  copied: document.querySelector('#copy-email').classList.contains('is-copied'),
  live: document.querySelector('#live-region')?.textContent.trim(),
})`);
await shot('12-copy');

report.console = events.map((event) => ({
  method: event.method,
  text: event.params?.entry?.text || event.params?.exceptionDetails?.text || event.params?.args?.map((a) => a.value || a.description).join(' ') || '',
}));

console.log(JSON.stringify(report, null, 2));

ws.close();
chrome.kill();
