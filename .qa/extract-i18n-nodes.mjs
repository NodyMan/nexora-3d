import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9341;
const pages = ['index.html', 'studio.html', 'work.html', 'team.html', 'contact.html'];
const out = {};

const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-i18n2',
  '--enable-unsafe-swiftshader', '--hide-scrollbars', '--mute-audio',
  '--no-first-run', '--no-default-browser-check', 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets = null;
for (let i = 0; i < 50; i += 1) {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    targets = await res.json();
    if (targets.length) break;
  } catch { /* retry */ }
  await sleep(200);
}
if (!targets) { chrome.kill(); process.exit(1); }

const page = targets.find((t) => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
let seq = 0;
ws.onmessage = (ev) => {
  const p = JSON.parse(ev.data);
  if (!p.id) return;
  const w = pending.get(p.id);
  if (w) { pending.delete(p.id); p.error ? w.reject(new Error(JSON.stringify(p.error))) : w.resolve(p.result); }
};
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
const send = (method, params = {}) => new Promise((res, rej) => {
  const id = ++seq; pending.set(id, { resolve: res, reject: rej });
  ws.send(JSON.stringify({ id, method, params }));
});
const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
};

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });

const collect = `(() => {
  const skipClosest = '[aria-hidden="true"], .sr-only, .loader, .cursor, .ticker, [data-clock], .scroll-progress, .site-footer__watermark, .brand, .dialog__bar, .case__stamp, .grid-frame, .record__value, script, style, canvas, svg, noscript, .lang-switch';
  const hasLetters = (s) => /[\\p{L}]/u.test(s);
  const list = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent) continue;
    if (parent.closest(skipClosest)) continue;
    if (parent.dataset && parent.dataset.noI18n !== undefined) continue;
    const raw = node.nodeValue;
    if (!hasLetters(raw)) continue;
    const key = raw.replace(/\\s+/g, ' ').trim();
    if (key.length < 2) continue;
    list.push(key);
  }
  return Array.from(new Set(list));
})()`;

for (const name of pages) {
  await send('Page.navigate', { url: `http://127.0.0.1:4173/${name}` });
  await sleep(3200);
  out[name] = await evaluate(collect);
  console.log(name, out[name].length);
}
const all = new Set();
for (const arr of Object.values(out)) for (const s of arr) all.add(s);
await writeFile('nexora-3d/.qa/i18n-nodes.json', JSON.stringify({ pages: out, unique: [...all] }, null, 2));
console.log('unique', all.size);
ws.close();
chrome.kill();
