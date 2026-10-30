import { readFileSync } from 'node:fs';

const src = readFileSync('nexora-3d/src/i18n.js', 'utf8');
const ru = src.slice(src.indexOf('const RU = {'), src.indexOf('const UZ = {'));
const uz = src.slice(src.indexOf('const UZ = {'), src.indexOf('const DICT ='));
const keys = (s) => {
  const out = new Set();
  for (const line of s.split('\n')) {
    const m = line.match(/^\s{2}'(.+)':/);
    if (!m) continue;
    let k = m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    out.add(k);
  }
  return out;
};
const R = keys(ru);
const U = keys(uz);
console.log('RU keys', R.size, 'UZ keys', U.size);
const data = JSON.parse(readFileSync('nexora-3d/.qa/i18n-nodes.json', 'utf8'));
const all = data.unique;
const missingRu = all.filter((k) => !R.has(k));
const missingUz = all.filter((k) => !U.has(k));
console.log('missing RU', missingRu.length, 'UZ', missingUz.length);
console.log(missingRu.join('\n'));
