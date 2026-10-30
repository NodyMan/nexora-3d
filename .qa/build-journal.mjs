import { readFile, writeFile } from 'node:fs/promises';

const base = await readFile('nexora-3d/studio.html', 'utf8');
const journalMain = await readFile('nexora-3d/.qa/journal-main.html', 'utf8');

const start = base.indexOf('  <main id="main">');
const end = base.indexOf('  </main>') + '  </main>'.length;
let head = base.slice(0, start);
const tail = base.slice(end);

head = head
  .replace('<title>Studio — Nexora Studio</title>', '<title>Journal — Nexora Studio</title>')
  .replace(
    /<meta name="description" content="[^"]*" \/>/,
    '<meta name="description" content="Engineering notes from the Nexora Studio founders: performance, applied AI and how the studio operates." />'
  )
  .replace('https://nexorastudio.world/studio.html', 'https://nexorastudio.world/journal.html')
  .replace('<meta property="og:title" content="Studio — Nexora Studio" />', '<meta property="og:title" content="Journal — Nexora Studio" />')
  .replace(/<meta property="og:description" content="[^"]*" \/>/, '<meta property="og:description" content="Field notes on performance, applied AI and keeping a studio small enough to stay accountable." />')
  .replace('<meta name="twitter:title" content="Studio — Nexora Studio" />', '<meta name="twitter:title" content="Journal — Nexora Studio" />')
  .replace(/<meta name="twitter:description" content="[^"]*" \/>/, '<meta name="twitter:description" content="Field notes on performance, applied AI and keeping a studio small enough to stay accountable." />');

head = head
  .replace('<a href="./studio.html" class="is-active" aria-current="page">Studio</a>', '<a href="./studio.html">Studio</a>')
  .replace('<a href="./studio.html" aria-current="page">', '<a href="./studio.html">')
  .replace('<a href="./journal.html">Journal</a>', '<a href="./journal.html" class="is-active" aria-current="page">Journal</a>')
  .replace('<a href="./studio.html" aria-current="page">', '<a href="./studio.html">')
  .replace('<a href="./journal.html"><span>04</span>Journal</a>', '<a href="./journal.html" aria-current="page"><span>04</span>Journal</a>');

const html = head + journalMain + tail;
await writeFile('nexora-3d/journal.html', html);
console.log('written', html.length);
