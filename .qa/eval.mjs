import { spawn } from 'node:child_process';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9335;
const expression = process.argv[2] || 'document.title';
const mobile = process.argv[3] === 'mobile';

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-eval',
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

function send(method, params = {}) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: mobile ? 390 : 1440,
  height: mobile ? 844 : 1000,
  deviceScaleFactor: 1,
  mobile,
});
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await send('Page.navigate', { url: 'http://127.0.0.1:4173/' });
await sleep(4500);

const result = await send('Runtime.evaluate', {
  expression: `(async () => (${expression}))()`,
  returnByValue: true,
  awaitPromise: true,
});
if (result.exceptionDetails) console.error(JSON.stringify(result.exceptionDetails, null, 2));
else console.log(JSON.stringify(result.result.value, null, 2));

ws.close();
chrome.kill();
