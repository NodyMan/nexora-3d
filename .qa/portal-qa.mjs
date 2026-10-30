import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('.qa');
const BASE = 'http://127.0.0.1:4173';
const PORT = 9339;

await mkdir(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-portal-qa',
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
  } catch { /* retry */ }
  await sleep(200);
}
if (!targets) { console.error('no chrome'); chrome.kill(); process.exit(1); }

const page = targets.find((item) => item.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
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
  }
};
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
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
async function viewport(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 700 });
}
async function shot(name, full = true) {
  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: full });
  await writeFile(path.join(OUT, `${name}.png`), Buffer.from(data, 'base64'));
  console.log('shot', name);
}

await send('Page.enable');
await send('Runtime.enable');

await viewport(1440, 1000);
await send('Page.navigate', { url: `${BASE}/portal.html` });
await sleep(1800);
await evaluate('localStorage.setItem("nexora.lang","en")');
await send('Page.navigate', { url: `${BASE}/portal.html` });
await sleep(1800);
await shot('portal-login-en');

const login = await evaluate(`fetch('/functions/v1/app/api/portal/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: 'dilnoza@arise.example', code: 'DEMO-2026' }) }).then(r => r.status)`);
console.log('portal login', login);
await send('Page.navigate', { url: `${BASE}/portal.html` });
await sleep(1800);
await shot('portal-dash-en');

await evaluate('document.querySelector("[data-lang=uz]").click()');
await sleep(600);
await shot('portal-dash-uz');

await viewport(390, 844);
await send('Page.navigate', { url: `${BASE}/portal.html` });
await sleep(1600);
await shot('portal-dash-mobile');

await viewport(1440, 1000);
await send('Page.navigate', { url: `${BASE}/admin.html` });
await sleep(1500);
const adminLogin = await evaluate(`fetch('/functions/v1/app/api/admin/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code: 'studio-master-2026' }) }).then(r => r.status)`);
console.log('admin login', adminLogin);
await send('Page.navigate', { url: `${BASE}/admin.html` });
await sleep(1800);
await shot('admin-inquiries');

await evaluate('document.querySelector("[data-tab=clients]").click()');
await sleep(300);
await shot('admin-clients');

await evaluate('document.querySelector("[data-tab=delivery]").click()');
await sleep(300);
await shot('admin-delivery');

await evaluate('document.querySelector("[data-tab=invoices]").click()');
await sleep(300);
await shot('admin-invoices');

await evaluate('document.querySelector("[data-tab=files]").click()');
await sleep(300);
await shot('admin-files');

await evaluate(`fetch('/functions/v1/app/api/admin/logout', { method: 'POST' })`);
await send('Page.navigate', { url: `${BASE}/admin.html` });
await sleep(1200);
await shot('admin-login');

ws.close();
chrome.kill();
