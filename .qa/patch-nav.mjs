import { readFile, writeFile } from 'node:fs/promises';

const files = ['index.html', 'studio.html', 'work.html', 'team.html', 'contact.html'];

const langSwitch = `        <div class="lang-switch" data-lang-group role="group" aria-label="Language">
          <button type="button" data-lang="en">EN</button><span aria-hidden="true">/</span><button type="button" data-lang="ru">RU</button><span aria-hidden="true">/</span><button type="button" data-lang="uz">UZ</button>
        </div>
`;

const mobileLang = `      <div class="lang-switch lang-switch--menu" data-lang-group role="group" aria-label="Language">
        <button type="button" data-lang="en">EN</button><span aria-hidden="true">/</span><button type="button" data-lang="ru">RU</button><span aria-hidden="true">/</span><button type="button" data-lang="uz">UZ</button>
      </div>
`;

const pages = [
  ['index.html', 'index.html'],
  ['studio.html', 'studio.html'],
  ['work.html', 'work.html'],
  ['team.html', 'team.html'],
  ['contact.html', 'contact.html'],
];

for (const [name, active] of pages) {
  const path = `nexora-3d/${name}`;
  let html = await readFile(path, 'utf8');

  html = html.replace(
    /(<div class="site-header__actions">\n)(\s*<span class="header-time")/,
    `$1${langSwitch}$2`
  );

  html = html.replace(
    /(<div class="mobile-menu__foot">\n[\s\S]*?<\/span>\n)(\s*<\/div>\n\s*<\/div>)/,
    `$1${mobileLang}$2`
  );

  // Desktop navigation
  const desktop = html.match(/<nav class="site-nav" aria-label="Primary">[\s\S]*?<\/nav>/)[0];
  const items = [['index.html', 'Home'], ['studio.html', 'Studio'], ['work.html', 'Work'], ['journal.html', 'Journal'], ['team.html', 'Team'], ['contact.html', 'Contact']];
  const desktopHtml = `<nav class="site-nav" aria-label="Primary">
${items.map(([href, label]) => `        <a href="./${href}"${href === active ? ' class="is-active" aria-current="page"' : ''}>${label}</a>`).join('\n')}
      </nav>`;
  html = html.replace(desktop, desktopHtml);

  // Mobile navigation
  const mobile = html.match(/<nav class="mobile-menu__nav" aria-label="Mobile">[\s\S]*?<\/nav>/)[0];
  const mobileHtml = `<nav class="mobile-menu__nav" aria-label="Mobile">
${items.map(([href, label], index) => `      <a href="./${href}"${href === active ? ' aria-current="page"' : ''}><span>0${index + 1}</span>${label}</a>`).join('\n')}
    </nav>`;
  html = html.replace(mobile, mobileHtml);

  // Footer navigation
  const footer = html.match(/(<span class="mono">Navigate<\/span>\n)([\s\S]*?)(\s*<\/div>)/);
  if (footer) {
    const footerHtml = footer[1] + items.map(([href, label]) => `          <a href="./${href}">${label}</a>`).join('\n');
    html = html.replace(footer[0], footerHtml + footer[3]);
  }

  await writeFile(path, html);
}
console.log('patched');
