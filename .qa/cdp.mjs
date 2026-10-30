import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('nexora-3d/.qa');
const PORT = 9333;
const VIEW = process.argv[2] === 'mobile'
  ? { width: 390, height: 844, mobile: true }
  : { width: 1440, height: 1000, mobile: false };

await mkdir(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp',
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
  if (['Runtime.exceptionThrown', 'Runtime.consoleAPICalled', 'Log.entryAdded', 'Page.javascriptDialogOpening'].includes(payload.method)) {
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
await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
await sleep(5200);

const info = await evaluate(`(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  innerHeight: window.innerHeight,
  webgl: document.documentElement.classList.contains('scene-ready'),
  noWebgl: document.documentElement.classList.contains('no-webgl'),
  ready: document.body.classList.contains('is-ready'),
  labels: Array.from(document.querySelectorAll('.anchor-label')).map(el => ({ text: el.textContent.trim(), style: el.getAttribute('style'), rect: el.getBoundingClientRect().toJSON() })),
  heroTitle: document.querySelector('.hero__title')?.getBoundingClientRect().toJSON(),
  fonts: document.fonts.status,
  appSize: performance.getEntriesByType('resource').filter(r => r.name.endsWith('app.js')).map(r => r.decodedBodySize),
}))()`);
console.log('INFO', JSON.stringify(info, null, 2));

const sections = ['studio', 'capabilities', 'work', 'record', 'process', 'team', 'contact'];
await shot('01-hero');
for (const id of sections) {
  await evaluate(`document.getElementById('${id}').scrollIntoView({block:'start'});`);
  await sleep(900);
  await shot(`${sections.indexOf(id) + 2}-${id}`);
}
const extras = [['.studio__figure', '13-figure'], ['.quote-band', '14-quote'], ['.case--reverse', '15-case-lib'], ['.contact__grid', '16-contact-grid']];
for (const [selector, name] of extras) {
  await evaluate(`document.querySelector('${selector}').scrollIntoView({block:'center'});`);
  await sleep(900);
  await shot(name);
}
await evaluate(`window.scrollTo(0, document.documentElement.scrollHeight)`);
await sleep(900);
await shot('09-footer');

const labelInfo = await evaluate(`(() => ({
  labels: Array.from(document.querySelectorAll('.anchor-label')).map(el => ({ text: el.textContent.trim(), style: el.getAttribute('style'), rect: el.getBoundingClientRect().toJSON() })),
  errors: window.__errors || null,
}))()`);
console.log('LABELS', JSON.stringify(labelInfo, null, 2));

console.log('EVENTS', JSON.stringify(events.map((event) => ({
  method: event.method,
  text: event.params?.entry?.text || event.params?.exceptionDetails?.text || event.params?.args?.map(a => a.value || a.description).join(' ') || '',
})), null, 2));

ws.close();
chrome.kill();
