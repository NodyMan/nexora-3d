import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('nexora-3d/.qa');
const PORT = 9338;
const name = process.argv[2] || 'shot';
const width = Number(process.argv[3] || 1440);
const height = Number(process.argv[4] || 1000);
const scrollSelector = process.argv[5] || '';
const pos = process.argv[6] || 'start';
const reduce = process.argv[7] === 'reduce';
const pagePath = process.env.PAGE || '';
const dpr = Number(process.env.DPR || 1);

await mkdir(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-shot',
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
  if (['Runtime.exceptionThrown', 'Runtime.consoleAPICalled', 'Log.entryAdded'].includes(payload.method)) events.push(payload);
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

await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: dpr, mobile: width < 700 });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: reduce ? 'reduce' : 'no-preference' }] });
await send('Page.navigate', { url: `${process.env.BASE || 'http://127.0.0.1:4173'}/${pagePath}` });
await sleep(5000);

if (scrollSelector) {
  await evaluate(`(() => {
    const el = document.querySelector(${JSON.stringify(scrollSelector)});
    if (!el) return 'missing';
    el.scrollIntoView({ block: ${JSON.stringify(pos)} });
    window.scrollBy(0, -110);
    return 'ok';
  })()`);
  await sleep(1100);
}

const clickSelector = process.env.CLICK || '';
if (clickSelector) {
  await evaluate(`(() => {
    const el = document.querySelector(${JSON.stringify(clickSelector)});
    if (!el) return 'missing';
    el.click();
    return 'ok';
  })()`);
  await sleep(900);
}

const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
await writeFile(path.join(OUT, `${name}.png`), Buffer.from(data, 'base64'));

if (process.env.EVAL) {
  const out = await evaluate(process.env.EVAL);
  console.log('EVAL', JSON.stringify(out, null, 2));
}

const info = await evaluate(`(() => ({
  webgl: document.documentElement.classList.contains('scene-ready'),
  scrollY: Math.round(window.scrollY),
  scrollHeight: document.documentElement.scrollHeight,
  active: Array.from(document.querySelectorAll('.site-nav a[aria-current="page"], .site-nav a.is-active')).map(el => el.getAttribute('href')),
  overflowX: document.documentElement.scrollWidth - window.innerWidth,
  monoLoaded: document.fonts.check('12px "JetBrains Mono"'),
  monoFamily: getComputedStyle(document.querySelector('.mono') || document.body).fontFamily
}))()`);
console.log(JSON.stringify(info));
console.log('EVENTS', JSON.stringify(events.map((event) => event.params?.entry?.text || event.params?.exceptionDetails?.text || event.params?.args?.map(a => a.value || a.description).join(' ') || '')));

ws.close();
chrome.kill();
