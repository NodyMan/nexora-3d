import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9340;
const pages = ['index.html', 'studio.html', 'work.html', 'team.html', 'contact.html'];
const out = {};

const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`,
  '--user-data-dir=C:/Users/max11/AppData/Local/Temp/nexora-cdp-i18n',
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
  const block = 'ADDRESS,ARTICLE,ASIDE,BLOCKQUOTE,DIV,DL,DT,DD,FIELDSET,FIGCAPTION,FIGURE,FOOTER,FORM,H1,H2,H3,H4,H5,H6,HEADER,HR,LI,MAIN,NAV,OL,P,PRE,SECTION,TABLE,UL';
  const skipClosest = '[aria-hidden="true"], .sr-only, .loader, .cursor, .ticker, [data-clock], .scroll-progress, .site-footer__watermark, .brand, .dialog__bar, .menu-toggle, .pill__icon, .case__stamp, .grid-frame, script, style, canvas, svg, noscript';
  const inline = new Set(['EM','B','I','STRONG','SMALL','BR','SUP','SUB','SPAN']);
  const hasLetters = (s) => /[\\p{L}]/u.test(s);
  const list = [];
  const nodes = document.querySelectorAll('h1,h2,h3,h4,p,li,a,button,span,div.eyebrow,figcaption,blockquote,label,option,td,th');
  for (const el of nodes) {
    if (el.closest(skipClosest)) continue;
    if (el.dataset && el.dataset.noI18n !== undefined) continue;
    if (el.tagName === 'SPAN' && el.closest('.record__value')) continue;
    const html = el.innerHTML.replace(/\\s+/g, ' ').trim();
    if (!hasLetters(html.replace(/<[^>]*>/g, ''))) continue;
    let ok = true;
    for (const child of el.children) {
      if (!inline.has(child.tagName)) { ok = false; break; }
      if (child.closest('[data-clock]')) { ok = false; break; }
      if (hasLetters(child.textContent)) { ok = false; break; }
    }
    if (!ok) continue;
    list.push(html);
  }
  return Array.from(new Set(list));
})()`;

for (const name of pages) {
  await send('Page.navigate', { url: `http://127.0.0.1:4173/${name}` });
  await sleep(3500);
  out[name] = await evaluate(collect);
  console.log(name, out[name].length);
}
await writeFile('nexora-3d/.qa/i18n-strings.json', JSON.stringify(out, null, 2));
console.log('total', Object.values(out).reduce((n, arr) => n + arr.length, 0));
ws.close();
chrome.kill();
