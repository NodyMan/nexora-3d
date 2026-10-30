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

const items = [['index.html', 'Home'], ['studio.html', 'Studio'], ['work.html', 'Work'], ['journal.html', 'Journal'], ['team.html', 'Team'], ['contact.html', 'Contact']];

for (const name of files) {
  const path = `nexora-3d/${name}`;
  let html = (await readFile(path, 'utf8')).replace(/\r\n/g, '\n');

  if (!html.includes('class="lang-switch"')) {
    html = html.replace(
      /(<div class="site-header__actions">\n)(\s*<span class="header-time")/,
      `$1${langSwitch}$2`
    );
    html = html.replace(
      /(<div class="mobile-menu__foot">\n[\s\S]*?<\/span>\n)(\s*<\/div>\n\s*<\/div>)/,
      `$1${mobileLang}$2`
    );
  }

  const active = html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/)[0].match(/href="\.\/([^"]+)" class="is-active"/)?.[1] || 'index.html';
  const footer = html.match(/(<span class="mono">Navigate<\/span>\n)([\s\S]*?)(\n\s*<\/div>)/);
  if (footer && !footer[2].includes('journal.html')) {
    const footerHtml = footer[1] + items.map(([href, label]) => `          <a href="./${href}">${label}</a>`).join('\n');
    html = html.replace(footer[0], footerHtml + footer[3]);
  }

  await writeFile(path, html);
  console.log(name, 'active:', active);
}
