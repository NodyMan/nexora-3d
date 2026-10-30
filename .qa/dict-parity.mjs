import { readFileSync } from 'node:fs';
const src = readFileSync('nexora-3d/src/i18n.js', 'utf8');
const ru = src.slice(src.indexOf('const RU = {'), src.indexOf('const UZ = {'));
const uz = src.slice(src.indexOf('const UZ = {'), src.indexOf('const DICT ='));
const keys = (s) => {
  const out = new Set();
  for (const line of s.split('\n')) {
    const m = line.match(/^\s{2}'(.+)':/);
    if (!m) continue;
    out.add(m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'));
  }
  return out;
};
const R = keys(ru);
const U = keys(uz);
console.log('RU only:', JSON.stringify([...R].filter((k) => !U.has(k)), null, 1));
console.log('UZ only:', JSON.stringify([...U].filter((k) => !R.has(k)), null, 1));
