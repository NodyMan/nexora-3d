import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9337;
const OUT = path.resolve('nexora-3d/assets/og.png');

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-og',
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
let seq = 0;
ws.onmessage = (event) => {
  const payload = JSON.parse(event.data);
  if (!payload.id) return;
  const waiter = pending.get(payload.id);
  if (waiter) {
    pending.delete(payload.id);
    if (payload.error) waiter.reject(new Error(JSON.stringify(payload.error)));
    else waiter.resolve(payload.result);
  }
};
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++seq;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 756, deviceScaleFactor: 1, mobile: false });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
await sleep(6000);
await send('Runtime.evaluate', { expression: `document.querySelector('.cursor')?.style.setProperty('display', 'none', 'important'); window.scrollTo(0, 0);` });
await sleep(600);
const { data } = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: false,
  clip: { x: 0, y: 0, width: 1440, height: 756, scale: 1200 / 1440 },
});
await writeFile(OUT, Buffer.from(data, 'base64'));
console.log(`Saved ${OUT}`);
ws.close();
chrome.kill();
