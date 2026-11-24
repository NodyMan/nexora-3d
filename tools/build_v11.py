"""Builds every page of nexorastudio.world (v11 design) into site/.

Run from the nexora-3d folder:  python tools/build_v11.py

Pages: index, services, work, team, journal, arise, idrok, skyblink, contact, estimate,
privacy and 404. Old addresses (about, classic, world, v11-*) redirect in
vercel.json. Shared styles and motion: site/css/v11.css, site/js/v11.js.
Forms (brief, call booking, estimator): site/js/v11-forms.js.
Cookie notice and chat assistant: site/js/v11-widgets.js (+ api/chat.mjs).
The client portal and admin (portal.html, admin.html) are separate apps.
"""

import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from v11_content import ARTICLES  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'site')
ORIGIN = 'https://nexorastudio.world'
EMAIL = 'support@nexorastudio.world'
TELEGRAM = 'nexorastudio_admin'
TG_URL = f'https://t.me/{TELEGRAM}'

PAGES = {
    'home': ('index.html', 'Home'),
    'services': ('services.html', 'Services'),
    'work': ('work.html', 'Work'),
    'team': ('team.html', 'Team'),
    'journal': ('journal.html', 'Journal'),
    'contact': ('contact.html', 'Contact'),
    'arise': ('arise.html', 'Arise'),
    'idrok': ('idrok.html', 'IDrok'),
    'skyblink': ('skyblink.html', 'SkyBlink'),
    'estimate': ('estimate.html', 'Estimate'),
    'privacy': ('privacy.html', 'Privacy'),
    '404': ('404.html', 'Not found'),
}
NAV = ['services', 'work', 'team', 'journal']
# Where the big "next page" link at the bottom of each page goes.
NEXT = {
    'home': 'services', 'services': 'work', 'work': 'team', 'team': 'journal', 'journal': 'contact',
    'contact': 'home', 'arise': 'idrok', 'idrok': 'skyblink', 'skyblink': 'arise', 'estimate': 'contact', 'privacy': 'home', '404': 'home',
}


def href(key):
    return './' + PAGES[key][0]


def a(key, label=None, cls=''):
    name = PAGES[key][1]
    c = f' class="{cls}"' if cls else ''
    return f'<a{c} href="{href(key)}" data-name="{name}">{label or name}</a>'


# ---------------------------------------------------------------- Layout

def header(active):
    cur = ' aria-current="page"'
    links = ''.join(
        f'<a href="{href(k)}" data-name="{PAGES[k][1]}"{cur if k == active else ""}>{PAGES[k][1]}</a>' for k in NAV
    )
    drawer = ''.join(a(k) for k in ['home'] + NAV + ['contact'])
    return f'''  <header class="top">
    <a class="top__brand" href="{href('home')}" data-name="Nexora" aria-label="Nexora Studio — home"><img src="./assets/logo-mark.png" alt="" width="26" height="26" />NEXORA</a>
    <nav class="top__nav" aria-label="Main">{links}</nav>
    <a class="btn btn--accent" href="{href('contact')}" data-name="Contact">Let's talk</a>
    <button class="top__menu" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
  </header>
  <nav class="drawer" aria-label="Menu">{drawer}</nav>'''


def next_link(key):
    target = NEXT[key]
    label = 'Back to the start' if target == 'home' else ('Next case study' if key in ('arise', 'idrok', 'skyblink') else 'Next page')
    name = 'Home' if target == 'home' else PAGES[target][1]
    return f'''    <a class="next" href="{href(target)}" data-name="{name}">
      <span class="next__fill" aria-hidden="true"></span>
      <div class="wrap">
        <span class="next__label">{label}</span>
        <span class="next__title"><span>{name}</span><span aria-hidden="true">→</span></span>
      </div>
    </a>'''


def hero(kicker, title, text, actions='', extra_class=''):
    return f'''    <section class="hero {extra_class}">
      <div class="wrap">
        <span class="label hero__kicker">{kicker}</span>
        <h1 class="hero__title">{title}</h1>
        <div class="hero__foot">
          <p class="serif">{text}</p>
          {f'<div class="actions">{actions}</div>' if actions else ''}
        </div>
      </div>
      <span class="hero__hint" aria-hidden="true">Scroll</span>
    </section>'''


WIDGETS = f'''  <aside class="cookie" data-cookie hidden aria-label="Cookies">
    <p><b>Cookies & storage.</b> We use only what the site needs to work. With your OK, the chat assistant also remembers your conversation on this device. No ads, no tracking.</p>
    <div class="cookie__actions">
      <button class="btn btn--accent" type="button" data-consent="all">Accept</button>
      <button class="btn btn--ghost" type="button" data-consent="essential">Only essential</button>
      <a class="link" href="./privacy.html" data-name="Privacy">Details</a>
    </div>
  </aside>

  <div class="chat" data-chat>
    <button class="chat__launch" type="button" aria-expanded="false" aria-controls="chat-panel" data-chat-toggle>
      <span class="chat__dot" aria-hidden="true"></span><span class="chat__launch-text">Ask Nexora</span>
      <svg class="chat__close-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
    </button>
    <section class="chat__panel" id="chat-panel" role="dialog" aria-label="Chat with the Nexora assistant" hidden data-lenis-prevent>
      <header class="chat__head">
        <span class="chat__avatar" aria-hidden="true">N</span>
        <div><b>Nexora assistant</b><small data-chat-status>Answers about our services, process and products</small></div>
      </header>
      <div class="chat__log" data-chat-log aria-live="polite"></div>
      <div class="chat__quick" data-chat-quick></div>
      <form class="chat__form" data-chat-form>
        <label class="sr-only" for="chat-input">Your message</label>
        <textarea id="chat-input" rows="1" maxlength="800" placeholder="Ask about services, prices, timelines…" data-chat-input></textarea>
        <button class="chat__send" type="submit" aria-label="Send">→</button>
      </form>
      <p class="chat__note">AI assistant — it can make mistakes. For anything binding, <a href="{href('contact')}" data-name="Contact">write to the team</a>.</p>
    </section>
  </div>'''


def page(key, title, desc, body, forms=False, absolute=False):
    fname, name = PAGES[key]
    url = ORIGIN + ('/' if fname == 'index.html' else '/' + fname)
    forms_js = '\n  <script type="module" src="./js/v11-forms.js"></script>' if forms else ''
    robots = '\n  <meta name="robots" content="noindex" />' if key == '404' else ''
    html = f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>{title}</title>
  <meta name="description" content="{desc}" />{robots}
  <meta name="theme-color" content="#0c100f" />
  <link rel="canonical" href="{url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Nexora Studio" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:image" content="{ORIGIN}/assets/og.png" />
  <meta property="og:url" content="{url}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="./assets/logo-chip.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="./assets/logo-mark.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Doto:wght@700;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Onest:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="./css/v11.css" />
  <link rel="stylesheet" href="./css/v11-pages.css" />
  <script>document.documentElement.classList.add('js');</script>
  <script defer src="./js/vendor/gsap.min.js"></script>
  <script defer src="./js/vendor/ScrollTrigger.min.js"></script>
  <script defer src="./js/vendor/lenis.min.js"></script>
  <script defer src="./js/v11.js"></script>
  <script defer src="./js/v11-widgets.js"></script>{forms_js}
  <script type="speculationrules">{{"prefetch":[{{"where":{{"href_matches":"/*"}},"eagerness":"moderate"}}]}}</script>
</head>
<body data-page="{name}">
  <a class="skip" href="#main">Skip to content</a>
  <canvas class="bg" aria-hidden="true"></canvas>
  <div class="bg-glow" aria-hidden="true"></div>
  <div class="curtain" aria-hidden="true"><b></b></div>
{header(key)}
  <main id="main">
{body}
{next_link(key)}
  </main>
  <footer class="foot">
    <div class="wrap foot__grid">
      <span>© 2026 Nexora Studio · Fergana, Uzbekistan</span>
      <nav aria-label="Footer">{a('journal')}{a('estimate', 'Estimate a timeline')}<a href="mailto:{EMAIL}">{EMAIL}</a><a href="{TG_URL}" target="_blank" rel="noopener">Telegram</a><a href="./portal.html">Client portal</a>{a('privacy', 'Privacy & cookies')}</nav>
    </div>
  </footer>
{WIDGETS}
</body>
</html>
'''
    if absolute:
        # Served for any missing path, so every local link must be absolute.
        html = html.replace('href="./', 'href="/').replace('src="./', 'src="/')
    return html


# ---------------------------------------------------------------- Pieces

SHOTS = {
    'arise-paths': ('Arise career matches: Software Engineering 92%, Data Science & AI 87%, with the reasons why', 910),
    'arise-home': ('Arise home screen with a 12-day streak, the Mobile Developer goal and the next step', 910),
    'arise-universities': ('Arise university list for Uzbekistan and abroad, with match scores and scholarships', 910),
    'arise-chances': ('Arise chances calculator: 68% readiness and what to improve next', 910),
    'arise-skills': ('Arise skill tree for a future mobile developer', 910),
    'arise-ari': ('Chat with Ari, the AI mentor in Arise, about getting into Inha University', 910),
    'idrok-library': ('IDrok library screen with books in progress', 947),
    'idrok-alif': ('Chat with Alif, the AI librarian in IDrok', 947),
    'idrok-reader': ('IDrok reader settings with themes and text-to-speech', 947),
}

# Web screenshots (16:10), taken from the live app; files are -1280 and -720 wide.
WEB_SHOTS = {
    'skyblink-home': 'SkyBlink start page: search for a star or coordinates and five challenge objects',
    'skyblink-blink': 'SkyBlink blink view of the brown dwarf Epsilon Indi B in real SPHEREx images',
    'skyblink-diff': 'SkyBlink difference view of Epsilon Indi B: a black-and-white pair and a measured shift of 6.0 ± 1.1 arcseconds',
}


def img(shot, cls=''):
    c = f' class="{cls}"' if cls else ''
    if shot in WEB_SHOTS:
        return (f'<img{c} src="./assets/shots/{shot}-1280.webp" srcset="./assets/shots/{shot}-720.webp 720w, ./assets/shots/{shot}-1280.webp 1280w" '
                f'sizes="(max-width: 760px) 92vw, 50vw" alt="{WEB_SHOTS[shot]}" width="1280" height="800" loading="lazy" />')
    alt, h = SHOTS[shot]
    return f'<img{c} src="./assets/shots/{shot}-720.webp" alt="{alt}" width="420" height="{h}" loading="lazy" />'


def checks(items):
    return '<ul class="checks">' + ''.join(f'<li>{x}</li>' for x in items) + '</ul>'


def tags(items):
    return '<div class="tags">' + ''.join(f'<i>{x}</i>' for x in items) + '</div>'


# ---------------------------------------------------------------- Home

def home():
    doing = [
        ('Design', 'Research, user flows and interfaces. You see clickable screens before any code is written.'),
        ('Mobile', 'iOS and Android apps that stay fast on mid-range phones and keep working on a weak connection.'),
        ('Web', 'Websites, dashboards, client portals and SaaS products. Fast to load, easy to update.'),
        ('AI', 'Assistants, smart search and recommendations that answer from your own data — and never make things up.'),
    ]
    items = ''.join(f'<li class="doing__item"><small>0{i + 1}</small>{t}</li>' for i, (t, _) in enumerate(doing))
    copies = ''.join(f'<p class="serif">{d}</p>' for _, d in doing)
    story = [
        ('01', 'It started with a problem', 'Students were choosing universities without guidance. Readers were collecting books from scattered Telegram channels.', 'Why', ''),
        ('02', 'Arise', 'Our first product: a mobile guide to career, university and grants, with Ari, an AI mentor.', 'A', ''),
        ('03', 'IDrok', 'Our second product: a personal digital library for Uzbek readers, with Alif, an AI librarian.', 'I', ''),
        ('04', 'Nexora Studio', 'We opened the studio to do the same work for other companies: design, engineering and AI in one team.', '2026', 'panel--accent'),
        ('05', 'Today', 'We build for clients and still run Arise and IDrok ourselves — every decision tested on real users.', 'Now', 'panel--paper'),
    ]
    panels = ''.join(
        f'<article class="panel {c}"><span class="panel__num">{n} — Our story</span><h3>{t}</h3><p>{d}</p><span class="panel__year">{y}</span></article>'
        for n, t, d, y, c in story
    )
    body = f'''{hero('Nexora Studio — product studio',
                'We make<br />products <em>better.</em>',
                'We design and build new products, improve the ones you already have, and stay with them after launch.',
                f'<a class="btn btn--accent" href="{href("contact")}" data-name="Contact">Start a project →</a><a class="btn btn--ghost" href="#what">What we do</a>')}

    <section class="sec">
      <div class="wrap">
        <span class="label">Who we are</span>
        <p class="statement__text" data-words>Nexora is a small team of engineers and designers from Fergana. We started with our own products, and now we build for other companies too.</p>
      </div>
    </section>

    <div class="marquee" aria-hidden="true"><div class="marquee__row"><span>Design</span><span class="o">Mobile</span><span>Web</span><span class="o">AI</span><span>Design</span><span class="o">Mobile</span><span>Web</span><span class="o">AI</span></div></div>

    <section class="doing" id="what">
      <div class="wrap doing__inner">
        <div>
          <span class="label">What we do</span>
          <ol class="doing__list">{items}</ol>
        </div>
        <div class="doing__copy">{copies}</div>
      </div>
      <div class="doing__bar" aria-hidden="true"><i></i></div>
    </section>

    <section class="track">
      <div class="wrap track__head">
        <span class="label">History</span>
        <h2 class="cond" style="font-size:clamp(64px,9vw,150px)" data-split>How we started.</h2>
      </div>
      <div class="track__rail">{panels}</div>
    </section>'''
    return page('home', 'Nexora Studio — Mobile apps, web platforms and AI products',
                'Nexora Studio is a product studio in Fergana, Uzbekistan. We design and build mobile apps, web platforms and AI features.', body)


# ---------------------------------------------------------------- Services

SERVICES = [
    ('Mobile apps', 'iOS and Android apps built with React Native and Expo. They stay fast on mid-range phones and keep working on a weak connection.',
     ['New apps from scratch', 'Offline mode and sync', 'App Store & Google Play'], ['React Native', 'Expo', 'Swift'], ''),
    ('Web platforms', 'Websites, dashboards, client portals and SaaS products. Fast to load, easy to update, built on React and Supabase.',
     ['Company websites', 'Client portals with sign-in', 'Staging link every week'], ['React', 'Supabase', 'Node.js'], ''),
    ('AI features', 'Assistants, smart search and recommendations that answer from your own data. We set clear limits so the AI does not make things up.',
     ['AI assistants and chat', 'Search over your documents', 'Tested on real questions'], ['LLMs', 'RAG', 'Python'], 'panel--accent'),
    ('Product design', 'Research, user flows, interfaces and design systems. You see clickable screens before any code is written.',
     ['User research', 'Clickable prototypes', 'Screens ready for developers'], ['Figma', 'Design systems', 'Prototypes'], 'panel--paper'),
]

STEPS = [
    ('Week 0', 'Intro call', 'We talk about your goals, users and deadline. You get a written plan with scope, timeline and cost.'),
    ('Weeks 1–2', 'Design', 'Clickable screens and a technical plan. The riskiest parts are tested first.'),
    ('Week 3 →', 'Build', 'Every week you get a version you can install or open, plus a list of what changed.'),
    ('After launch', 'Launch', 'We publish to the App Store, Google Play or the web, then monitor and improve.'),
]


def services():
    panels = ''.join(
        f'<article class="panel {c}"><span class="panel__num">0{i + 1} — Service</span><h3>{t}</h3><p>{d}</p>'
        f'{checks(ch)}{tags(tg)}</article>'
        for i, (t, d, ch, tg, c) in enumerate(SERVICES)
    )
    cards = ''.join(
        f'<article class="stack__card"><span class="stack__time">{t}</span><span class="stack__n">0{i + 1}</span><h3>{h}</h3><p>{p}</p></article>'
        for i, (t, h, p) in enumerate(STEPS)
    )
    body = f'''{hero('Services', 'What we<br /><em>offer.</em>',
                'Everything a product needs, from the first idea to launch. One team handles design, engineering and AI, so nothing gets lost between agencies.',
                f'<a class="btn btn--accent" href="{href("estimate")}" data-name="Estimate">Estimate a timeline →</a>')}

    <section class="track">
      <div class="wrap track__head">
        <span class="label">Four disciplines</span>
        <h2 class="cond" style="font-size:clamp(64px,9vw,150px)" data-split>One team.</h2>
      </div>
      <div class="track__rail">{panels}</div>
    </section>

    <section class="stack">
      <div class="wrap" style="padding-top:clamp(40px,6vw,100px);padding-bottom:48px">
        <span class="label">How we work</span>
        <h2 class="cond" style="font-size:clamp(56px,8vw,130px)" data-split>Something to see<br />every week.</h2>
      </div>
      {cards}
    </section>'''
    return page('services', 'Services — Nexora Studio',
                'Mobile apps, web platforms, AI features and product design from one team in Fergana.', body)


# ---------------------------------------------------------------- Work

def case(name, meta, lede, text, figs, shots, glow, links, flip=False):
    imgs = ''.join(img(s) for s in shots)
    web = ' case__media--web' if shots[0] in WEB_SHOTS else ''
    fig = ''.join(
        f'<div><dt>{k}</dt><dd data-count="{v}"{f" data-decimals={chr(34)}{d}{chr(34)}" if d else ""}>{shown}</dd></div>'
        for k, v, d, shown in figs
    )
    return f'''    <section class="case{' case--flip' if flip else ''}">
      <div class="wrap case__grid">
        <div class="case__media{web}" data-clip style="--glow:{glow}">{imgs}</div>
        <div class="case__copy">
          <div class="case__meta" data-fade>{''.join(f'<span>{m}</span>' for m in meta)}</div>
          <h2 class="cond case__name" data-split>{name}</h2>
          <p class="serif" data-fade>{lede}</p>
          <p data-fade>{text}</p>
          <dl class="figs" data-fade>{fig}</dl>
          <div class="actions" data-fade>{links}</div>
        </div>
      </div>
    </section>'''


ARISE_FIGS = [('Languages', 3, 0, '3'), ('Platforms', 2, 0, '2'), ('Sign-in options', 3, 0, '3')]
IDROK_FIGS = [('Books', 713, 0, '713'), ('Quiz questions', 1256, 0, '1,256'), ('App size, MB', 7.05, 2, '7.05')]
# Only numbers measured on real SPHEREx data (Epsilon Indi B, Difference view).
SKYBLINK_FIGS = [('Measured shift, ″', 6.0, 1, '6.0'), ('Error, ± ″', 1.1, 1, '1.1'), ('Catalogue, ″', 6.5, 1, '6.5')]
SKYBLINK_APP = 'https://frontend-three-xi-80.vercel.app'
SKYBLINK_CODE = 'https://github.com/NodyMan/Wally-Vision'
SKYBLINK_VIDEO = 'https://github.com/NodyMan/Wally-Vision/blob/main/video/SkyBlink_demo.mp4'


def work():
    arise_ = case('Arise', ['EdTech', 'AI', 'iOS · Android'],
                  'Finds the right career, university and grant for each student.',
                  'Students tell Arise what they want to become. Ari, the built-in AI mentor, turns that goal into a plan: which skills to learn, which courses to take and what to do this week.',
                  ARISE_FIGS, ['arise-home', 'arise-ari', 'arise-skills'],
                  '#3b5bff', a('arise', 'Read the case study →', 'link'))
    idrok_ = case('IDrok', ['Library', 'AI', 'Android · Web'],
                  'A personal digital library that works on any phone.',
                  'IDrok brings books and academic papers into one app with a comfortable reader. Alif, its AI librarian, finds pages, explains ideas and suggests what to read next.',
                  IDROK_FIGS, ['idrok-library', 'idrok-alif', 'idrok-reader'],
                  '#ff6a2b', a('idrok', 'Read the case study →', 'link') + '<a class="link" href="https://idroklib.uz" target="_blank" rel="noopener">idroklib.uz ↗</a>', flip=True)
    skyblink_ = case('SkyBlink', ['NASA Space Apps 2026', 'Science', 'Web'],
                     'A free web tool that shows how the sky changes in NASA SPHEREx data.',
                     'Type a star name or coordinates. SkyBlink fetches real SPHEREx images from NASA/IPAC IRSA, aligns visits taken months apart and blinks them, the technique that found Pluto in 1930. For the brown dwarf Epsilon Indi B it measured a shift of 6.0 ± 1.1″; the catalogue predicts 6.5″.',
                     SKYBLINK_FIGS, ['skyblink-home', 'skyblink-diff'],
                     '#2fbf71', a('skyblink', 'Read the case study →', 'link')
                     + f'<a class="link" href="{SKYBLINK_APP}" target="_blank" rel="noopener">Open the app ↗</a>'
                     + f'<a class="link" href="{SKYBLINK_CODE}" target="_blank" rel="noopener">GitHub ↗</a>'
                     + f'<a class="link" href="{SKYBLINK_VIDEO}" target="_blank" rel="noopener">Demo video ↗</a>')
    body = f'''{hero('Work', 'Products we<br /><em>built.</em>',
                'We started with our own products, tested every decision on real users, and we still run them today. SkyBlink is our NASA Space Apps 2026 project.')}

    <div class="marquee" aria-hidden="true"><div class="marquee__row"><span>Arise</span><span class="o">IDrok</span><span>SkyBlink</span><span class="o">Arise</span><span>IDrok</span><span class="o">SkyBlink</span></div></div>

{arise_}
{idrok_}
{skyblink_}'''
    return page('work', 'Work — Nexora Studio', 'Arise, IDrok and SkyBlink: the products Nexora Studio built.', body)


# ---------------------------------------------------------------- Case studies

def chapter(n, label, title, inner, anchor=''):
    aid = f' id="{anchor}"' if anchor else ''
    return f'''      <section class="chapter"{aid}>
        <div class="chapter__label"><span class="label">{n} — {label}</span></div>
        <div class="chapter__body">
          <h2 class="cond chapter__title" data-split>{title}</h2>
{inner}
        </div>
      </section>
'''


def prose(*paras):
    return '          <div class="prose" data-fade>' + ''.join(f'<p>{p}</p>' for p in paras) + '</div>'


def features(items):
    return '          <div class="features">' + ''.join(
        f'<div class="feature" data-fade><span class="feature__n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>' for i, (t, d) in enumerate(items)
    ) + '</div>'


def shots(items):
    return '          <div class="shots">' + ''.join(
        f'<figure class="shot" data-fade>{img(s)}<figcaption><b>{t}</b>{c}</figcaption></figure>' for s, t, c in items
    ) + '</div>'


def case_page(key, name, kicker_meta, title, lede, facts, banner, glow, figs, chapters, extra_links=''):
    facts_html = ''.join(f'<div><dt>{k}</dt><dd>{v}</dd></div>' for k, v in facts)
    fig = ''.join(
        f'<div><dt>{k}</dt><dd data-count="{v}"{f" data-decimals={chr(34)}{d}{chr(34)}" if d else ""}>{shown}</dd></div>'
        for k, v, d, shown in figs
    )
    body = f'''{hero(f'Case study · {kicker_meta}', title, lede, a('work', '← All work', 'btn btn--ghost') + extra_links)}

    <section class="sec" style="padding-top:0">
      <div class="wrap">
        <div class="case__media case__media--wide{' case__media--web' if banner[0] in WEB_SHOTS else ''}" data-clip style="--glow:{glow}">{''.join(img(s) for s in banner)}</div>
        <dl class="facts" data-fade>{facts_html}</dl>
        <dl class="figs figs--wide" data-fade>{fig}</dl>
      </div>
    </section>

    <div class="wrap chapters">
{chapters}    </div>'''
    return body


def arise():
    ch = chapter('01', 'The problem', 'Students were choosing their future alone.', prose(
        'Most school students in Uzbekistan choose a profession and a university with little guidance. Information about programmes, requirements and grants is spread across websites and Telegram channels, and it is often out of date.',
        'We wanted to give every student a clear plan, not one more list of links.'))
    ch += chapter('02', 'What we built', 'A plan for each student, and a mentor to follow it.', features([
        ('Personal plan', 'The student picks a goal, for example UX designer. Arise builds a path of skills, courses and next steps around it.'),
        ('Skill tree', 'Progress is shown as a tree. Finished skills are ticked, the current one is highlighted and the next ones unlock along the way.'),
        ('Ari, the AI mentor', 'Ari answers questions, explains skills and makes plans, such as a two-week study plan for a future UX designer.'),
        ('Easy start', 'Sign in with Google or Apple, or try the app as a guest. Light and dark themes are built in.'),
    ]) + '\n' + shots([
        ('arise-paths', 'Career paths', 'Ari matches the student\'s interests to real careers and explains why each one fits.'),
        ('arise-home', 'Today', 'A daily plan, a streak and one clear next step towards the goal.'),
        ('arise-universities', 'Universities', 'Universities in Uzbekistan and abroad, with match scores and scholarships.'),
        ('arise-chances', 'Chances', 'How ready the student is for a university, and exactly what to improve next.'),
        ('arise-skills', 'Skill tree', 'Short steps with XP and badges; the next skills unlock along the way.'),
        ('arise-ari', 'Ari', 'The AI mentor already knows the plan and answers in the student\'s language.'),
    ]))
    ch += chapter('03', 'How Ari works', 'An AI mentor that does not make things up.', prose(
        'Students ask direct questions: which university, which subject, which deadline. A fluent answer that invents a scholarship is worse than no answer at all. So Ari is built around retrieval first and generation second. University facts, deadlines and requirements come from a verified catalogue; the model composes the route, not the facts.')
        + '\n          ' + checks(['Every answer has a next step, a reason and a source', 'When the catalogue has no answer, Ari says so and suggests the closest verified option', 'The rules for refusals were written before the first prompt'])
        + '\n          <blockquote class="quote" data-fade><p>A mentor that admits the gap is more useful than one that fills it with noise.</p><span>— Nurahmadov Xayrullo, machine learning</span></blockquote>', 'ari')
    ch += chapter('04', 'Languages', 'Three languages from the first day.', prose(
        'Multilingual support is not a translation layer on top. English, Russian and Uzbek prompts share the same structured contract, and the mentor answers in the language the student used — including the mixed language students actually type.'), 'languages')
    ch += chapter('05', 'Technology', 'One codebase for iOS and Android.', prose(
        'The app is built once and runs on both platforms. The AI layer looks up facts in a verified catalogue before the model writes an answer.') + '\n          ' + tags(['React Native', 'Expo', 'TypeScript', 'LLM', 'RAG']))
    body = case_page('arise', 'Arise', 'EdTech · AI', 'Arise<em>.</em>',
                     'A personal guide to career, university and grants for school students in Uzbekistan. We designed it, built it and run it.',
                     [('Product', 'Mobile app'), ('Platforms', 'iOS and Android'), ('Languages', 'Uzbek, Russian, English'),
                      ('Our role', 'Product, design, engineering, AI'), ('Year', '2026'), ('Status', 'Live · coming to the stores')],
                     ['arise-skills', 'arise-home', 'arise-ari'], '#3b5bff', ARISE_FIGS, ch)
    return page('arise', 'Arise case study — Nexora Studio',
                'How we designed and built Arise, a mobile guide to career, university and grants with an AI mentor, Ari.', body)


def idrok():
    ch = chapter('01', 'The problem', 'Books were scattered across Telegram channels.', prose(
        'Readers in Uzbekistan looked for books in dozens of Telegram channels and on old websites that were never made for a phone. Files were hard to find, hard to read and easy to lose.',
        'We set out to put them in one place that is pleasant to read in and light enough for any phone.'))
    ch += chapter('02', 'What we built', 'One library, a good reader and an AI librarian.', features([
        ('My Library', 'Continue reading where you stopped, keep your own books and PDFs, and browse the collection.'),
        ('Comfortable reader', 'Three display modes, day, sepia, dark and night themes, adjustable fonts, text-to-speech with speed control, bookmarks and notes.'),
        ('Alif, the AI librarian', 'Alif finds pages, quotes books from the library, explains key ideas and makes a personal reading plan.'),
        ('Arena', 'Quizzes on book chapters with XP and reader ranks, so reading turns into a habit.'),
    ]) + '\n' + shots([
        ('idrok-library', 'My Library', 'Books in progress, your own uploads and the full collection.'),
        ('idrok-alif', 'Alif AI', 'Chat, book picks and a reading plan in one place.'),
        ('idrok-reader', 'Reader settings', 'Themes, fonts, text-to-speech, search, bookmarks and notes.'),
    ]))
    ch += chapter('03', 'Engineering', 'Light, not stripped down.', prose(
        'The Android app weighs 7.05 MB. That is not a limit we set for every product: it is what this one needed, because many readers use older phones and limited mobile data.')
        + '\n          ' + checks(['Chapters load as you read instead of downloading the whole catalogue', 'Only the pages you have opened are saved on the phone', 'Covers are prepared in light image formats for every screen size', 'No third-party SDK slows down the start of the app'])
        + '\n' + prose('The result is an app a student can download on mobile data without thinking about it, with nothing cut to get there. Each product gets the size its job needs; what carries over is the habit of making every kilobyte earn its place.')
        + f'\n          <p data-fade><a class="link" href="./journal.html#seven-mb" data-name="Journal">Read the full note in our journal →</a></p>', 'engineering')
    ch += chapter('04', 'Technology', 'Android, web and AI.', prose(
        'IDrok works as an Android app and on the web at idroklib.uz. Before the rename it was called DigitalLib.') + '\n          ' + tags(['Android', 'Web', 'WebView reader', 'LLM', 'Text-to-speech']))
    body = case_page('idrok', 'IDrok', 'Library · AI', 'IDrok<em>.</em>',
                     'A digital library that fits on any phone: Uzbek books and academic papers in one app, with a comfortable reader and an AI librarian.',
                     [('Product', 'Mobile app and website'), ('Platforms', 'Android and web'),
                      ('Website', '<a href="https://idroklib.uz" target="_blank" rel="noopener">idroklib.uz ↗</a>'),
                      ('Our role', 'Product, design, engineering, AI'), ('Year', '2026'), ('Status', 'Live')],
                     ['idrok-alif', 'idrok-library', 'idrok-reader'], '#ff6a2b', IDROK_FIGS, ch,
                     '<a class="btn btn--accent" href="https://idroklib.uz" target="_blank" rel="noopener">Visit idroklib.uz ↗</a>')
    return page('idrok', 'IDrok case study — Nexora Studio',
                'How we designed and built IDrok, a light digital library for Uzbek readers with an AI librarian, Alif.', body)


def skyblink():
    ch = chapter('01', 'The challenge', 'Find what moves in a new map of the sky.', prose(
        'NASA\'s SPHEREx telescope maps the whole sky in infrared and comes back to the same patch months later. The NASA Space Apps 2026 challenge “Planet X and SPHEREx” asked for ways to look for moving and changing objects in that data.',
        'The images are free, but comparing them takes astronomy software and a lot of patience. We wanted anyone to see the change in a browser.'))
    ch += chapter('02', 'What we built', 'A blink comparator in the browser.', features([
        ('Blink', 'SkyBlink downloads real SPHEREx images of one patch of sky, aligns visits taken months apart and plays them as an animation. Moving objects jump.'),
        ('Difference', 'Subtracting one visit from another turns a moving object into a black-and-white pair: where it was, and where it is now.'),
        ('Measured shift', 'SkyBlink measures the shift in arcseconds with an error, checks the alignment against fixed stars and compares the result with the catalogue.'),
        ('For everyone', 'Search by star name or coordinates, five ready objects to start with, a Simple mode, and the interface in English, Russian and Uzbek.'),
    ]) + '\n' + shots([
        ('skyblink-home', 'Start', 'Type a star name or coordinates, or pick one of five challenge objects.'),
        ('skyblink-blink', 'Blink', 'The brown dwarf Epsilon Indi B across four visits, aligned on one grid.'),
        ('skyblink-diff', 'Difference', 'The black-and-white pair and the measured shift next to the catalogue value.'),
    ]))
    ch += chapter('03', 'Honest numbers', 'We only claim what we measured.', prose(
        'Every number in SkyBlink comes from real SPHEREx images, and every shift comes with its error. When the data cannot answer, the app says so.')
        + '\n          ' + checks([
            'Epsilon Indi B: 6.0 ± 1.1″, the catalogue predicts 6.5″',
            'Barnard\'s Star: 11.9 ± 1.3″ against 10.4″ in the catalogue; its core is saturated, so the value is indicative',
            'WISE 0855, the coldest known brown dwarf, is too faint in this data to measure a shift, and the app does not claim one',
            'A moving source with no Gaia match is shown as a candidate to check, not as a discovery',
        ])
        + '\n' + prose('The spectrum and light-curve tabs are labelled as previews.'), 'numbers')
    ch += chapter('04', 'Technology', 'Real data from NASA/IPAC IRSA.', prose(
        'The backend is Django with Astropy and reproject: it downloads SPHEREx image cutouts from NASA/IPAC IRSA, puts every visit on one pixel grid and measures the shift. The frontend is Next.js with an Aladin Lite sky map.',
        'SkyBlink is an independent team project, not an official NASA product. The code is open source under the MIT licence.')
        + '\n          ' + tags(['Python', 'Django', 'Astropy', 'reproject', 'Next.js', 'React', 'Aladin Lite']))
    body = case_page('skyblink', 'SkyBlink', 'Science · NASA Space Apps 2026', 'SkyBlink<em>.</em>',
                     'A free web tool that blinks real infrared images from NASA\'s SPHEREx mission, so moving stars and brown dwarfs stand out, and measures how far they moved.',
                     [('Product', 'Web app'), ('Event', 'NASA Space Apps 2026, Tashkent'), ('Data', 'NASA SPHEREx via IRSA'),
                      ('Team', 'Makhmud, Xayrullo, Nizomiddin, Intizor'), ('Year', '2026'),
                      ('Links', f'<a href="{SKYBLINK_CODE}" target="_blank" rel="noopener">GitHub ↗</a> · <a href="{SKYBLINK_VIDEO}" target="_blank" rel="noopener">Video ↗</a>')],
                     ['skyblink-home', 'skyblink-diff'], '#2fbf71', SKYBLINK_FIGS, ch,
                     f'<a class="btn btn--accent" href="{SKYBLINK_APP}" target="_blank" rel="noopener">Open SkyBlink ↗</a>'
                     f'<a class="btn btn--ghost" href="{SKYBLINK_VIDEO}" target="_blank" rel="noopener">Watch the demo ↗</a>')
    return page('skyblink', 'SkyBlink case study — Nexora Studio',
                'How we built SkyBlink for NASA Space Apps 2026: a web tool that blinks real SPHEREx images and measures how far stars moved.', body)


# ---------------------------------------------------------------- Team

TEAM = [
    ('MN', 'Makhmud Nasriddinov', 'Co-founder · CTO', 'Leads architecture and mobile development. Built the Arise platform.'),
    ('NX', 'Nurahmadov Xayrullo', 'Co-founder · CAIO', 'Leads AI work. Designed Ari, the mentor inside Arise.'),
    ('AN', 'Abduraximov Nizomiddin', 'Co-founder · Design', 'Leads product design and the visual identity of every product.'),
]

# The wider team, shown under the founders.
MEMBERS = [
    ('MA', 'Muhammadali Abdurahmanov', 'Investor · Developer', 'Investor and developer. Has built and backed several startups, including Celamur.'),
    ('BT', 'Bahodir Toshtemirov', 'AI-native developer', 'Our resident vibe-coder. Builds features end to end with AI tools.'),
]

# Profile popup for each founder. Fill in the links; an empty link is not shown.
PROFILES = {
    'MN': {
        'about': 'Makhmud (Tim) is a software engineer and Nexora\'s CTO. He leads architecture and mobile development, and built the Arise platform. He is a student at Registan Private School and is heading into AI and computer engineering.',
        'focus': ['Architecture', 'React Native & Expo', 'Flutter', 'Three.js / WebGL', 'Supabase'],
        'built': ['Arise — platform and mobile app', 'Neo — voice-first personal AI agent', 'Nexora Studio site and client portal', 'SkyBlink — core viewer (NASA Space Apps 2026)'],
        'note': ('Light, not stripped down', './journal.html#seven-mb'),
        'links': {
            'Portfolio': 'https://tim-nasriddinov.vercel.app',
            'LinkedIn': 'https://www.linkedin.com/in/mahmud-nasriddinov-b02b09436/',
            'GitHub': 'https://github.com/NodyMan',
            'X': '', 'Telegram': '',
            'Email': 'mailto:bynasriddinov@gmail.com',
        },
    },
    'NX': {
        'about': 'Xayrullo leads AI work at Nexora. He designed Ari, the mentor inside Arise, around one rule: facts come from a verified catalogue, the model only builds the plan.',
        'focus': ['Applied AI', 'LLMs', 'Retrieval', 'Python'],
        'built': ['Ari — AI mentor in Arise', 'Alif — AI librarian in IDrok', 'SkyBlink — science layers (NASA Space Apps 2026)'],
        'note': ('Guardrails before magic', './journal.html#guardrails'),
        'links': {'LinkedIn': '', 'GitHub': '', 'X': '', 'Telegram': ''},
    },
    'AN': {
        'about': 'Nizomiddin leads product design at Nexora: research, user flows, interfaces and the visual identity of every product we ship.',
        'focus': ['Product design', 'Design systems', 'Brand', 'Figma'],
        'built': ['Arise — interface and identity', 'IDrok — reader and library design', 'SkyBlink — platform (NASA Space Apps 2026)'],
        'note': ('Two engagements per quarter', './journal.html#capacity'),
        'links': {'LinkedIn': '', 'GitHub': '', 'X': '', 'Telegram': ''},
    },
    'MA': {
        'about': 'Muhammadali is an investor and developer at Nexora. He has built and backed several startups, among them Celamur: personalised digital gifts with a named envelope, your own words, photos and a finale, all shared through one link. He brings product and business experience to the studio.',
        'focus': ['Startups', 'Investment', 'Product strategy', 'Development'],
        'built': ['Celamur — personalised digital gifts', 'Several startups as founder, developer and investor'],
        'links': {'Celamur': 'https://celamur.com'},
    },
    'BT': {
        'about': 'Bahodir is Nexora\'s resident vibe-coder. He builds features end to end with AI-assisted development tools, going from an idea to a working product fast. He studied at iTeach.',
        'focus': ['Vibe-coding', 'AI tools', 'Rapid prototyping'],
        'built': ['Features and prototypes across Nexora projects'],
        'links': {},
    },
}


def profile_dialog(ini, name, role):
    p = PROFILES[ini]
    new_tab = ' target="_blank" rel="noopener"'
    links = ''.join(
        f'<a class="profile__link" href="{u}"{"" if u.startswith("mailto:") else new_tab}>{k} <span aria-hidden="true">↗</span></a>'
        for k, u in p['links'].items() if u
    )
    if not p['links'].get('Email'):
        # No personal email yet: write to the studio, addressed to this founder.
        to = name.replace(' ', '%20')
        links += f'<a class="profile__link" href="mailto:{EMAIL}?subject=For%20{to}">Email <span aria-hidden="true">↗</span></a>'
    focus = ''.join(f'<i>{f}</i>' for f in p['focus'])
    built = ''.join(f'<li>{b}</li>' for b in p['built'])
    note = ''
    if p.get('note'):
        t, h = p['note']
        note = f'<a class="profile__note" href="{h}" data-name="Journal"><span class="profile__h">From the journal</span>{t} →</a>'
    pid = 'p-' + ini.lower()
    # Very long surnames get a smaller heading so they stay inside the dialog.
    long = ' profile__name--long' if max(len(w) for w in name.split()) > 11 else ''
    return f'''<dialog class="profile" data-lenis-prevent id="{pid}" aria-labelledby="{pid}-name">
      <div class="profile__inner">
        <button class="profile__close" type="button" data-close aria-label="Close">×</button>
        <span class="profile__ini" aria-hidden="true">{ini}</span>
        <div class="profile__body">
          <span class="label">{role}</span>
          <h2 class="profile__name{long}" id="{pid}-name">{name}</h2>
          <p class="serif">{p['about']}</p>
          <div class="profile__cols">
            <div><span class="profile__h">Focus</span><div class="tags">{focus}</div></div>
            <div><span class="profile__h">Built</span><ul class="profile__built">{built}</ul></div>
          </div>
          {note}
          <div class="profile__links">{links}</div>
        </div>
      </div>
    </dialog>'''


VALUES = [
    ('You talk to the team.', 'You work directly with the designers and engineers on your project. No layers of managers between you and the work.'),
    ('Small by design.', 'We take on a few projects at a time, so each one gets real attention.'),
    ('Honest about limits.', "If something can't be done well, or we are not the right team, we say so on the first call."),
    ('We stay after launch.', 'Releases, monitoring and iteration are part of the job. We run our own products the same way.'),
]


def person_cards(group):
    return ''.join(
        f'<li class="person" data-fade><button class="person__open" type="button" data-profile="p-{i.lower()}" aria-haspopup="dialog">'
        f'<span class="person__ini">{i}</span><span class="person__role">{r}</span><h3>{n}</h3><p>{b}</p>'
        f'<span class="person__more">Open profile <span aria-hidden="true">+</span></span></button></li>'
        for i, n, r, b in group
    )


def team():
    people = person_cards(TEAM)
    members = person_cards(MEMBERS)
    dialogs = ''.join(profile_dialog(i, n, r) for i, n, r, _ in TEAM + MEMBERS)
    values = ''.join(f'<li data-fade><h3>{t}</h3><p>{d}</p></li>' for t, d in VALUES)
    body = f'''{hero('Team', 'The<br /><em>people.</em>',
                'A small team: you talk directly to the people who design and build your product.')}

    <section class="sec" style="padding-top:0">
      <div class="wrap">
        <span class="label">Founders</span>
        <ul class="people">{people}</ul>
        <span class="label" style="display:block;margin-top:56px">Team</span>
        <ul class="people">{members}</ul>
        {dialogs}
        <div class="hiring" data-fade>
          <div><h3>We're hiring.</h3><p>We look for engineers and designers who care about details. Send us your work.</p></div>
          <a class="btn btn--ink" href="mailto:{EMAIL}?subject=Application%20%E2%80%94%20Nexora%20Studio">Apply →</a>
        </div>
      </div>
    </section>

    <section class="sec" style="padding-top:0">
      <div class="wrap">
        <span class="label">How we work</span>
        <h2 class="cond" style="font-size:clamp(56px,8vw,130px);margin-bottom:56px" data-split>What you can<br />expect from us.</h2>
        <ul class="values">{values}</ul>
      </div>
    </section>'''
    return page('team', 'Team — Nexora Studio', 'The people behind Nexora Studio, Arise and IDrok.', body)


# ---------------------------------------------------------------- Journal

def journal():
    index = ''.join(
        f'''<a class="post" href="#{aid}" data-fade><span class="post__meta">{kind}<br />{date.split(' · ')[0]}</span>
          <span class="post__body"><b>{title}</b><span>{lede}</span></span><span class="post__arrow" aria-hidden="true">↓</span></a>'''
        for aid, kind, date, title, lede, _, _ in ARTICLES
    )
    articles = ''.join(
        f'''      <article class="article" id="{aid}">
        <div class="article__meta"><span class="label">{kind}</span><span>{date}</span></div>
        <div class="article__body">
          <h2 class="cond article__title" data-split>{title}</h2>
          <p class="serif article__lede" data-fade>{lede}</p>
          <div class="prose" data-fade>{text}</div>
          <p class="article__sign">{sign}</p>
        </div>
      </article>
'''
        for aid, kind, date, title, lede, text, sign in ARTICLES
    )
    body = f'''{hero('Journal', 'Notes from<br />the <em>team.</em>',
                'Performance, AI and how we run a small studio. No growth hacks, no predictions — only what we measured.')}

    <section class="sec" style="padding-top:0">
      <div class="wrap"><div class="posts">{index}</div></div>
    </section>

    <div class="wrap">
{articles}    </div>'''
    return page('journal', 'Journal — Nexora Studio',
                'Notes from the Nexora Studio team: performance, AI and how we run a small studio.', body)


# ---------------------------------------------------------------- Contact

FAQ = [
    ('How much does a project cost?', 'It depends on the scope. After the first call we send a written estimate with a fixed scope and timeline, so you know the cost before work starts.'),
    ('How long does it take?', 'Most first versions take from several weeks to a few months, depending on the features. You see working builds every week, so there are no surprises at the end.'),
    ('Who will actually work on my product?', 'Our own team: the same designers and engineers you meet on the first call. We do not outsource the work.'),
    ('Can you take over an existing product?', 'Yes. We start with a short review of the code and design, then tell you honestly what to keep, what to fix and what to rebuild.'),
    ('Do you work with clients outside Uzbekistan?', 'Yes. We are based in Fergana (UTC+5) and ship worldwide. We work in English, Russian and Uzbek.'),
]

HP = '<div class="form__hp" aria-hidden="true"><label>Leave empty <input type="text" name="nx_trap" tabindex="-1" autocomplete="new-password" data-lpignore="true" data-1p-ignore /></label></div>'


def contact():
    faq = ''.join(f'<details><summary>{q}</summary><p>{x}</p></details>' for q, x in FAQ)
    body = f'''{hero('Contact', "Let's<br />talk.",
                'Tell us what you are building and when you need it. We reply within one working day.',
                '<a class="btn btn--ink" href="#brief">Send a brief ↓</a><a class="btn btn--line" href="#call">Book a call ↓</a>', extra_class='contact')}

    <section class="sec" id="brief">
      <div class="wrap brief">
        <div class="brief__side" data-fade>
          <span class="label">01 — Brief</span>
          <h2 class="cond brief__title">Tell us about<br />your project.</h2>
          <p class="muted">What you're building, who it's for and when it needs to exist. A short brief is enough.</p>
          <dl class="facts facts--stack">
            <div><dt>Response</dt><dd>Within one working day</dd></div>
            <div><dt>Based in</dt><dd>Fergana, Uzbekistan · UTC+5</dd></div>
            <div><dt>Languages</dt><dd>English, Russian, Uzbek</dd></div>
          </dl>
          <div class="email-row"><a href="mailto:{EMAIL}">{EMAIL}</a><button class="copy" type="button" data-copy="{EMAIL}">Copy</button></div>
          <p class="muted">Prefer to chat? <a class="link" href="{TG_URL}" target="_blank" rel="noopener">Telegram @{TELEGRAM}</a> · Already a client? <a class="link" href="./portal.html">Client portal</a></p>
        </div>

        <div class="brief__main">
          <form class="form" id="contact-form" novalidate data-fade>
            <div class="form__grid">
              <label class="field"><span>Name *</span><input type="text" name="name" required minlength="2" maxlength="120" autocomplete="name" placeholder="Your name" /></label>
              <label class="field"><span>Email *</span><input type="email" name="email" required maxlength="254" autocomplete="email" inputmode="email" placeholder="you@company.com" /></label>
              <label class="field field--full"><span>Company</span><input type="text" name="company" maxlength="160" autocomplete="organization" placeholder="Where you work" /></label>
              <fieldset class="field field--full"><legend>Project type</legend>
                <div class="pills">
                  <label><input type="radio" name="projectType" value="Mobile app" /><span>Mobile app</span></label>
                  <label><input type="radio" name="projectType" value="Web platform" /><span>Web platform</span></label>
                  <label><input type="radio" name="projectType" value="AI product" /><span>AI product</span></label>
                  <label><input type="radio" name="projectType" value="Brand &amp; site" /><span>Brand &amp; site</span></label>
                  <label><input type="radio" name="projectType" value="Something else" /><span>Something else</span></label>
                </div>
              </fieldset>
              <label class="field field--full"><span>Project *</span><textarea name="message" rows="6" required minlength="10" maxlength="4000" placeholder="What are we building? Scope, users, timeline."></textarea><span class="field__hint"><span>A sentence or two is enough.</span> <b data-count>0/10</b></span></label>
            </div>
            {HP}
            <div class="form__foot">
              <button class="btn btn--accent" type="submit"><span data-submit-label>Send brief</span> →</button>
              <p class="form__note">No newsletters. Your details are used only to reply. <a class="link" href="./privacy.html" data-name="Privacy">Privacy</a></p>
            </div>
            <p class="form__status" data-status role="status" aria-live="polite"></p>
          </form>

          <div class="thanks" id="thanks" tabindex="-1" hidden>
            <span class="label">Brief received</span>
            <h3 class="cond thanks__title">Thank you, <span data-thanks-name></span>.</h3>
            <p class="serif">Your brief is with us. We will reply to <b data-thanks-email></b> within one working day.</p>
            <p class="muted thanks__portal" hidden>We also emailed you an access code for the client portal, where you can follow your project.</p>
            <div class="actions"><a class="btn btn--ghost" href="./portal.html">Open the client portal</a><button class="btn btn--ghost" type="button" data-thanks-again>Send another brief</button></div>
          </div>
        </div>
      </div>
    </section>

    <section class="sec" id="call" style="padding-top:0">
      <div class="wrap">
        <span class="label">02 — Intro call</span>
        <div class="split-head">
          <h2 class="cond" style="font-size:clamp(56px,8vw,130px)" data-split>Book a<br />20-minute call.</h2>
          <p class="serif muted">Every day from 19:00 to 24:00 Fergana time (UTC+5). Pick a time; we send the call link by email.</p>
        </div>
        <div class="booking" data-booking>
          <div class="booking__pick">
            <span class="booking__step">1 · Day</span>
            <div class="booking__days" data-booking-days></div>
            <span class="booking__step">2 · Time <small>Fergana time</small></span>
            <div class="booking__slots" data-booking-slots><p class="muted">Loading free times…</p></div>
          </div>
          <form class="booking__form form" data-booking-form hidden novalidate>
            <span class="booking__step">3 · Your details</span>
            <p class="booking__picked" data-booking-picked></p>
            <label class="field"><span>Name *</span><input type="text" name="name" required minlength="2" maxlength="120" autocomplete="name" /></label>
            <label class="field"><span>Email *</span><input type="email" name="email" required maxlength="254" autocomplete="email" inputmode="email" /></label>
            <label class="field"><span>What would you like to discuss?</span><textarea name="topic" rows="3" maxlength="1000"></textarea></label>
            {HP}
            <button class="btn btn--accent" type="submit">Book this call →</button>
          </form>
          <p class="form__status" data-booking-status role="status" aria-live="polite"></p>
          <div class="booking__done" data-booking-done tabindex="-1" hidden>
            <h3 class="cond">Your call is booked.</h3>
            <p><b data-booking-when></b> Fergana time. We sent the details to <b data-booking-email></b>.</p>
          </div>
          <noscript><p>Email us at {EMAIL} and we will find a time.</p></noscript>
        </div>
      </div>
    </section>

    <section class="sec" style="padding-top:0">
      <div class="wrap">
        <span class="label">03 — Questions we often get</span>
        <div class="faq" data-fade>{faq}</div>
        <p class="muted" style="margin-top:32px">Want a rough timeline first? {a('estimate', 'Estimate it in four questions →', 'link')}</p>
      </div>
    </section>'''
    return page('contact', 'Contact — Nexora Studio',
                "Start a project with Nexora Studio: send a brief or book a 20-minute call. We reply within one working day.", body, forms=True)


# ---------------------------------------------------------------- Estimate

def estimate():
    def opts(kind, name, items):
        return ''.join(
            f'<label class="opt"><input type="{kind}" name="{name}" value="{v}" /><span class="opt__box"><b data-label>{label}</b>'
            + (f'<small>{hint}</small>' if hint else '') + '</span></label>'
            for v, label, hint in items
        )
    body = f'''{hero('Estimate', 'How long<br />will it <em>take?</em>',
                'Answer four questions and get a rough timeline. We confirm scope, timeline and cost after a short call.')}

    <section class="sec" style="padding-top:0">
      <div class="wrap">
        <form class="estimator" data-estimator novalidate>
          <div class="estimator__steps">
            <fieldset class="est-step" data-fade>
              <legend><span>01</span> What are you building?</legend>
              <div class="opts opts--2">{opts('radio', 'type', [
                  ('mobile', 'Mobile app', 'iOS and Android'),
                  ('web', 'Web platform', 'A site with accounts, a dashboard or a store'),
                  ('ai', 'AI feature', 'An assistant, search or automation in an existing product'),
                  ('design', 'Design only', 'Product design and a clickable prototype'),
              ])}</div>
            </fieldset>
            <fieldset class="est-step" data-fade>
              <legend><span>02</span> Where should it work?</legend>
              <div class="opts opts--4">{opts('checkbox', 'platform', [
                  ('ios', 'iOS', ''), ('android', 'Android', ''), ('web', 'Web', ''), ('admin', 'Admin panel', ''),
              ])}</div>
            </fieldset>
            <fieldset class="est-step" data-fade>
              <legend><span>03</span> What should it do?</legend>
              <div class="opts opts--4">{opts('checkbox', 'feature', [
                  ('auth', 'Sign-in and profiles', ''), ('payments', 'Payments', ''), ('ai', 'AI assistant or chat', ''),
                  ('offline', 'Works offline', ''), ('languages', 'Several languages', ''), ('notifications', 'Notifications', ''),
                  ('integrations', 'Integrations', ''), ('maps', 'Maps and location', ''),
              ])}</div>
            </fieldset>
            <fieldset class="est-step" data-fade>
              <legend><span>04</span> Where are you now?</legend>
              <div class="opts opts--3">{opts('radio', 'stage', [
                  ('idea', 'Just an idea', ''), ('designs', 'Designs are ready', ''), ('existing', 'Improving an existing product', ''),
              ])}</div>
            </fieldset>
          </div>
          <aside class="est-result" aria-live="polite">
            <span class="label">Rough timeline</span>
            <p class="est-result__empty">Pick what you are building to see a timeline.</p>
            <p class="est-result__total"><b data-est-total>—</b> <span>weeks</span></p>
            <ul class="est-result__parts">
              <li><span>Discovery and design</span><b data-est-design></b></li>
              <li><span>Build</span><b data-est-build></b></li>
              <li><span>Testing and launch</span><b data-est-launch></b></li>
            </ul>
            <p class="est-result__note">A rough estimate based on typical projects of this size. We confirm the scope, timeline and cost after a 20-minute call.</p>
            <div class="actions">
              <button class="btn btn--accent" type="submit">Send as a brief →</button>
              <a class="btn btn--ghost" href="./contact.html#call" data-name="Contact">Book a call</a>
            </div>
          </aside>
        </form>
      </div>
    </section>'''
    return page('estimate', 'Estimate a timeline — Nexora Studio',
                'Answer four questions about your app, web platform or AI feature and get a rough timeline in weeks.', body, forms=True)


# ---------------------------------------------------------------- Privacy

def privacy():
    sections = [
        ('What this site stores', [
            'The site does not use advertising or tracking cookies, and it does not run analytics.',
            'To work, it keeps a few small values in your browser: whether you answered the cookie notice, short-lived page-transition state, and answers you carry from the timeline estimator to the brief form. These stay on your device.',
            'If you choose <b>Accept</b>, the chat assistant also keeps your current conversation on this device so it is still there after you change pages. With <b>Only essential</b>, the conversation is forgotten when you close the tab. You can change your choice at any time below.',
        ]),
        ('The chat assistant', [
            'Messages you type in the chat are sent to our server and to Anthropic, the company that provides the AI model, to write a reply. Do not share passwords, payment details or other sensitive information in the chat.',
            'The assistant can make mistakes. Prices, timelines and commitments are confirmed only by our team in writing.',
        ]),
        ('Briefs and call bookings', [
            'When you send a brief or book a call, we store your name, email, company and message so we can reply and run the project. We email you a confirmation through our email provider.',
            'We do not sell your data or send newsletters. To see, correct or delete what we hold about you, write to ' + f'<a href="mailto:{EMAIL}">{EMAIL}</a>.',
        ]),
    ]
    html = ''.join(
        f'<section class="chapter"><div class="chapter__label"><span class="label">0{i + 1}</span></div><div class="chapter__body"><h2 class="cond chapter__title">{t}</h2><div class="prose">'
        + ''.join(f'<p>{p}</p>' for p in ps) + '</div></div></section>'
        for i, (t, ps) in enumerate(sections)
    )
    body = f'''{hero('Privacy & cookies', 'Your data,<br /><em>briefly.</em>',
                'What the site stores, what the chat assistant sends, and what we do with briefs. Last updated November 2026.')}

    <div class="wrap chapters">
      {html}
      <section class="chapter"><div class="chapter__label"><span class="label">04</span></div><div class="chapter__body"><h2 class="cond chapter__title">Your choice</h2>
        <p class="muted" data-consent-current>Cookie choice: not set.</p>
        <div class="actions"><button class="btn btn--accent" type="button" data-consent="all">Accept</button><button class="btn btn--ghost" type="button" data-consent="essential">Only essential</button></div>
      </div></section>
    </div>'''
    return page('privacy', 'Privacy & cookies — Nexora Studio', 'What nexorastudio.world stores, what the chat assistant sends and how we handle briefs.', body)


# ---------------------------------------------------------------- 404

def not_found():
    body = hero('Error 404', 'Lost in<br />the <em>valley.</em>',
                'This page does not exist. The link may be old or mistyped.',
                f'<a class="btn btn--accent" href="{href("home")}" data-name="Home">Go home →</a>{a("work", "See our work", "btn btn--ghost")}')
    return page('404', 'Page not found — Nexora Studio', 'This page does not exist.', body, absolute=True)


BUILD = {
    'home': home, 'services': services, 'work': work, 'team': team, 'journal': journal, 'contact': contact,
    'arise': arise, 'idrok': idrok, 'skyblink': skyblink, 'estimate': estimate, 'privacy': privacy, '404': not_found,
}

if __name__ == '__main__':
    for key, build in BUILD.items():
        path = os.path.join(ROOT, PAGES[key][0])
        with io.open(path, 'w', encoding='utf-8', newline='\n') as f:
            f.write(build())
        print('wrote', PAGES[key][0])
