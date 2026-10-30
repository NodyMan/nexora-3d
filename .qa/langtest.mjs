import { spawn } from 'node:child_process';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9342;
const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-lang',
  '--enable-unsafe-swiftshader', '--hide-scrollbars', '--mute-audio',
  '--no-first-run', '--no-default-browser-check', 'about:blank',
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets = null;
for (let i = 0; i < 50; i += 1) {
  try { const res = await fetch(`http://127.0.0.1:${PORT}/json/list`); targets = await res.json(); if (targets.length) break; } catch {}
  await sleep(200);
}
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
await send('Page.navigate', { url: 'http://127.0.0.1:4173/index.html' });
await sleep(2500);
await evaluate('localStorage.clear(); location.href="http://127.0.0.1:4173/index.html?lang=ru";');
await sleep(3500);
const snap = `(() => ({
  stored: localStorage.getItem('nexora.lang'),
  lang: document.documentElement.lang,
  title: document.title,
  h1: document.querySelector('.hero__title').innerText,
  lede: document.querySelector('.hero__lede').textContent.trim(),
  eyebrow: document.querySelector('.hero__eyebrow').innerText.replace(/\\s+/g,' '),
  cta: document.querySelector('.header-cta')?.textContent.trim(),
  facts: document.querySelector('.hero__facts').innerText.replace(/\\s+/g,' '),
  nav: [...document.querySelectorAll('.site-nav a')].map(a => a.textContent),
  activeUz: document.querySelector('.lang-switch [data-lang="uz"]').getAttribute('aria-pressed')
}))()`;
console.log('BEFORE', await evaluate(snap));
await evaluate('document.querySelector(".lang-switch [data-lang=\\"uz\\"]").click()');
await sleep(400);
console.log('AFTER UZ', await evaluate(snap));
await evaluate('document.querySelector(".lang-switch [data-lang=\\"en\\"]").click()');
await sleep(400);
console.log('AFTER EN', await evaluate(snap));
await evaluate('document.querySelector(".lang-switch [data-lang=\\"uz\\"]").click()');
await sleep(400);
console.log('AFTER UZ2', await evaluate(snap));
ws.close();
chrome.kill();
