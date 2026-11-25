"""Builds the product sites served on their own subdomains:

  arise.nexorastudio.world     -> site/apps/arise/     (landing, privacy, terms, delete-account)
  skyblink.nexorastudio.world  -> site/apps/skyblink/  (landing)

middleware.js (repo root) maps each subdomain to its folder, so these pages use
root-relative links ("/privacy/") as if they were the whole site.
Images and fonts in site/apps/*/assets/ are static files; this script writes only HTML and CSS.

Run from the nexora-3d folder:  python tools/build_apps.py
"""
import html
import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from arise_legal import DELETE, PRIVACY, TERMS  # noqa: E402

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'site', 'apps')
EMAIL = 'support@nexorastudio.world'
STUDIO = 'https://www.nexorastudio.world'
YEAR = 2026


def write(rel, text):
    path = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with io.open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)
    print('wrote', 'apps/' + rel.replace(os.sep, '/'))


def esc(s):
    return html.escape(s, quote=True)


# ====================================================================== Arise

ARISE_URL = 'https://arise.nexorastudio.world'
OWNER = 'Makhmud Nasriddinov'
CITY = 'Tashkent, Uzbekistan'
UPDATED = '25 November 2026'

ARISE_SHOTS = {
    'paths': 'Arise career matches: Software Engineering 92% and Data Science & AI 87%, with the reasons why',
    'home': 'Arise home screen with a 12-day streak, the Mobile Developer goal and the next step',
    'universities': 'Arise university list for Uzbekistan and abroad, with match scores and scholarships',
    'chances': 'Arise chances calculator: 68% readiness and what to improve next',
    'skills': 'Arise skill tree for a future mobile developer',
    'ari': 'Chat with Ari, the AI mentor, about getting into Inha University',
}

ARISE_FEATURES = [
    ('paths', 'Find your path', 'Pick what you love or describe yourself in your own words. Ari matches you with real careers and explains why each one fits.'),
    ('home', 'One step a day', 'A daily plan with one clear next step, three actions for the week and a streak that keeps you going.'),
    ('universities', 'Pick your dream university', 'Universities in Uzbekistan and abroad that fit your direction, with match scores and scholarships.'),
    ('chances', 'See your real chances', 'How ready you are for the university you want, and exactly what to improve first.'),
    ('skills', 'Level up with a skill tree', 'Your goal becomes short steps with XP and badges. New skills unlock as you go.'),
    ('ari', 'Ask Ari anything', 'Your AI mentor already knows your plan. Ask about a skill, a university or your motivation letter.'),
]

ARISE_FAQ = [
    ('Who is Arise for?', 'School students who are choosing a profession and a university. Arise is for people aged 13 and older; if you are 13 to 15, a parent or guardian needs to agree when you sign up.'),
    ('How much does it cost?', 'Arise is free to start. If we add paid features later, the price will be shown clearly in the app before you pay.'),
    ('When can I download it?', 'Arise is in testing now and is coming to Google Play soon. Write to us if you want to try it early.'),
    ('Which languages does the app speak?', 'O‘zbekcha, Русский and English. Ari answers in the language you write in.'),
    ('Are the admission chances a guarantee?', 'No. Match scores, chances and salaries are estimates. Always check requirements and deadlines on the university’s official website.'),
    ('What happens to my data?', 'We collect only what Arise needs to help you, we never sell it and there are no ads. You can delete your account and all your data at any time.'),
]

ARISE_CSS = r"""
@font-face{font-family:Manrope;font-weight:500;font-display:swap;src:url(/assets/manrope-500.woff2) format('woff2')}
@font-face{font-family:Manrope;font-weight:700;font-display:swap;src:url(/assets/manrope-700.woff2) format('woff2')}
@font-face{font-family:Manrope;font-weight:800;font-display:swap;src:url(/assets/manrope-800.woff2) format('woff2')}
:root{
  --bg:#FFF6F1;--surface:#fff;--raised:#FFF0E8;--border:#F6E3D9;--border-2:#E9D3C7;
  --text:#2A1B2E;--text-2:#6E5A65;--primary:#6A4FE0;--primary-d:#5236C9;--primary-l:#4B33C4;--primary-soft:#F0EBFF;
  --peach:#F28C6B;--match:#0B7A6B;--match-soft:#E0F5F1;--gold:#B23C0A;--gold-soft:#FFE7D9;
  --hero:linear-gradient(135deg,#5B3FD6 0%,#8A4FD0 52%,#E07A5F 100%);
  --accent:linear-gradient(90deg,#6A4FE0 0%,#9A57C8 55%,#D9714F 100%);
  --night:#17111C;--radius:28px;--wrap:1160px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{margin:0;background:var(--bg);color:var(--text);font:500 17px/1.6 Manrope,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
img{max-width:100%;height:auto;display:block}
a{color:var(--primary-l);text-underline-offset:3px}
h1,h2,h3{font-weight:800;line-height:1.08;letter-spacing:-.025em;margin:0}
p{margin:0}
.wrap{width:min(var(--wrap),100% - 40px);margin-inline:auto}
.skip{position:absolute;left:-999px;top:8px;background:var(--text);color:#fff;padding:8px 14px;border-radius:10px;z-index:99}
.skip:focus{left:12px}
:focus-visible{outline:3px solid var(--primary);outline-offset:3px;border-radius:8px}

/* header */
.top{position:sticky;top:0;z-index:20;background:rgba(255,246,241,.86);backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid transparent;transition:border-color .2s}
.top.scrolled{border-bottom-color:var(--border)}
.top .wrap{display:flex;align-items:center;gap:24px;height:68px}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:21px;color:var(--text);text-decoration:none;letter-spacing:-.02em}
.brand img{width:36px;height:36px;border-radius:50%}
.nav{display:flex;gap:4px;margin-left:auto}
.nav a{color:var(--text-2);text-decoration:none;font-weight:700;font-size:15px;padding:8px 12px;border-radius:12px}
.nav a:hover,.nav a[aria-current]{color:var(--text);background:var(--raised)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 22px;border-radius:16px;border:0;font:800 16px/1 Manrope,sans-serif;text-decoration:none;cursor:pointer;transition:transform .15s,box-shadow .15s}
.btn:hover{transform:translateY(-1px)}
.btn--accent{background:var(--accent);color:#fff;box-shadow:0 10px 24px -10px rgba(106,79,224,.7)}
.btn--ghost{background:var(--surface);color:var(--text);border:1px solid var(--border-2)}
.btn--light{background:#fff;color:var(--primary-d)}
.btn--sm{min-height:40px;padding:0 16px;border-radius:13px;font-size:14px}
.top .btn{margin-left:8px}

/* hero */
.hero{padding:56px 0 40px;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--primary-l);background:var(--primary-soft);padding:7px 12px;border-radius:999px}
.hero h1{font-size:clamp(44px,6.2vw,80px);margin:22px 0 22px}
.grad{background:var(--accent);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{font-size:clamp(18px,1.6vw,21px);color:var(--text-2);max-width:34ch}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.soon{display:inline-flex;align-items:center;gap:12px;min-height:56px;padding:8px 20px 8px 14px;border-radius:16px;background:var(--night);color:#fff;text-decoration:none}
.soon svg{flex:none}
.soon small{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;opacity:.7}
.soon b{display:block;font-size:18px;font-weight:800;line-height:1.1}
.facts{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:28px;padding:0;list-style:none;color:var(--text-2);font-size:15px;font-weight:700}
.facts li{display:flex;align-items:center;gap:8px}
.facts li::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--peach)}
.stage{position:relative;aspect-ratio:1/1.02;border-radius:40px;background:var(--hero);isolation:isolate}
.stage::before{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(60% 50% at 80% 10%,rgba(255,194,156,.55),transparent 70%),radial-gradient(50% 40% at 10% 90%,rgba(91,63,214,.6),transparent 70%);z-index:-1}
.phone{position:absolute;border-radius:34px;background:#16101C;padding:7px;box-shadow:0 40px 80px -30px rgba(42,27,46,.65),0 0 0 1px rgba(255,255,255,.06) inset}
.phone img{border-radius:28px;width:100%}
.stage .phone--front{width:47%;left:42%;top:9%;transform:rotate(3deg);z-index:2}
.stage .phone--back{width:41%;left:9%;top:17%;transform:rotate(-6deg);opacity:.97}
.bubble{position:absolute;z-index:3;background:#fff;border-radius:18px;padding:12px 14px;box-shadow:0 18px 40px -18px rgba(42,27,46,.5);font-size:13px;font-weight:700;line-height:1.35;max-width:210px}
.bubble b{display:block;font-size:22px;font-weight:800;color:var(--match)}
.bubble--a{left:-4%;bottom:12%}
.bubble--b{right:-3%;bottom:6%;background:var(--night);color:#fff}
.bubble--b b{color:#FFC29C}

/* sections */
section{padding:88px 0}
.sec-head{max-width:720px;margin-bottom:44px}
.kicker{font-size:13px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
.sec-head h2{font-size:clamp(34px,4.4vw,56px);margin-top:12px}
.sec-head p{margin-top:16px;color:var(--text-2);font-size:19px}

/* feature tabs */
.tour{display:grid;grid-template-columns:1fr minmax(280px,380px);gap:56px;align-items:center}
.tabs{display:grid;gap:10px;margin:0;padding:0;list-style:none}
.tab{width:100%;display:grid;grid-template-columns:44px 1fr;gap:4px 16px;text-align:left;padding:18px 20px;border-radius:22px;border:1px solid var(--border);background:var(--surface);color:var(--text);font:inherit;cursor:pointer;transition:border-color .2s,box-shadow .2s,background .2s}
.tab:hover{border-color:var(--border-2)}
.tab .n{grid-row:span 2;width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:var(--raised);color:var(--gold);font-weight:800}
.tab h3{font-size:20px;letter-spacing:-.015em;align-self:center}
.tab p{color:var(--text-2);font-size:15.5px;display:none}
.tab[aria-selected=true]{border-color:transparent;box-shadow:0 0 0 2px var(--primary),0 24px 40px -26px rgba(106,79,224,.6)}
.tab[aria-selected=true] .n{background:var(--accent);color:#fff}
.tab[aria-selected=true] p{display:block}
.viewer{position:relative;padding:28px;border-radius:40px;background:var(--hero)}
.viewer .phone{position:relative;inset:auto;width:100%}
.viewer img{transition:opacity .25s}
.no-js .tab p{display:block}

/* screens rail */
.rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(220px,1fr);gap:20px;overflow-x:auto;padding:6px 4px 26px;scroll-snap-type:x mandatory;scrollbar-width:thin}
.rail figure{margin:0;scroll-snap-align:start}
.rail .phone{position:relative;padding:6px;border-radius:30px}
.rail .phone img{border-radius:25px}
.rail figcaption{margin-top:14px;font-weight:800;font-size:16px}
.rail figcaption span{display:block;font-weight:500;font-size:14px;color:var(--text-2)}

/* Ari */
.dark{background:var(--night);color:#F7EEF2;border-radius:48px;margin-inline:12px}
.dark .kicker{color:#FFC29C}
.dark .sec-head p{color:#C9B8C2}
.trio{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.card{border-radius:var(--radius);padding:28px;background:var(--surface);border:1px solid var(--border)}
.dark .card{background:#221A29;border-color:#3A2E42}
.card .ico{width:48px;height:48px;border-radius:16px;display:grid;place-items:center;background:var(--accent);color:#fff;margin-bottom:20px}
.card h3{font-size:21px;margin-bottom:10px;letter-spacing:-.015em}
.card p{color:var(--text-2);font-size:16px}
.dark .card p{color:#C9B8C2}
.quote{margin-top:40px;padding:28px 32px;border-radius:var(--radius);background:linear-gradient(135deg,rgba(106,79,224,.28),rgba(224,122,95,.22));font-size:clamp(20px,2.2vw,26px);font-weight:700;line-height:1.35}
.quote span{display:block;margin-top:12px;font-size:14px;font-weight:700;color:#C9B8C2}

/* languages */
.langs{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.lang{border-radius:var(--radius);padding:28px;background:var(--surface);border:1px solid var(--border)}
.lang b{display:block;font-size:30px;font-weight:800;letter-spacing:-.02em}
.lang span{color:var(--text-2);font-size:15px}

/* faq */
.faq{display:grid;gap:12px;max-width:860px}
.faq details{border-radius:22px;background:var(--surface);border:1px solid var(--border);padding:0 24px}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:22px 0;font-weight:800;font-size:18px}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";flex:none;width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:var(--raised);color:var(--gold);font-size:20px;transition:transform .2s}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details p{padding:0 0 22px;color:var(--text-2)}

/* band + footer */
.band{border-radius:40px;background:var(--hero);color:#fff;padding:56px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;position:relative;overflow:hidden}
.band h2{font-size:clamp(32px,4vw,52px)}
.band p{margin-top:12px;font-size:18px;opacity:.9}
.band .mascot{position:absolute;right:-30px;bottom:-40px;width:200px;opacity:.16;pointer-events:none}
.band .cta{margin:0;position:relative}
footer{padding:56px 0 40px;color:var(--text-2);font-size:15px}
footer .wrap{display:flex;flex-wrap:wrap;gap:16px 32px;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:28px}
footer nav{display:flex;flex-wrap:wrap;gap:8px 22px}
footer a{color:var(--text-2);text-decoration:none;font-weight:700}
footer a:hover{color:var(--text)}

/* legal */
.doc{padding:48px 0 24px}
.doc .wrap{max-width:780px}
.doc h1{font-size:clamp(38px,5vw,58px)}
.doc .meta{margin-top:12px;color:var(--text-2);font-weight:700}
.doc .intro{margin-top:28px;font-size:19px}
.doc .intro p+p{margin-top:12px}
.toc{margin:32px 0 8px;padding:22px 26px;border-radius:22px;background:var(--surface);border:1px solid var(--border)}
.toc ol{margin:0;padding-left:20px;columns:2;column-gap:32px;font-weight:700;font-size:15px}
.toc li{margin:4px 0;break-inside:avoid}
.toc a{text-decoration:none}
.doc h2{font-size:24px;letter-spacing:-.015em;margin:44px 0 12px;scroll-margin-top:90px}
.doc p,.doc li{color:#3E2D42}
.doc p+p{margin-top:12px}
.doc ul,.doc ol{padding-left:22px}
.doc li{margin:6px 0}
.back{display:inline-flex;margin-bottom:24px;font-weight:800;text-decoration:none}

@media (max-width:960px){
  .hero .wrap,.tour{grid-template-columns:1fr}
  .stage{max-width:560px;width:100%;margin-inline:auto}
  .viewer{max-width:320px;width:100%;margin-inline:auto;padding:20px;border-radius:32px;order:-1}
  .trio,.langs{grid-template-columns:1fr}
  .band{grid-template-columns:1fr;padding:40px 28px}
  .nav{display:none}
  .top .btn{margin-left:auto}
}
@media (max-width:560px){
  section{padding:64px 0}
  .dark{border-radius:32px;margin-inline:6px}
  .toc ol{columns:1}
  .bubble{display:none}
}
"""

ARISE_JS = r"""
document.documentElement.classList.remove('no-js');
const top = document.querySelector('.top');
const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, {passive: true}); onScroll();
const tabs = [...document.querySelectorAll('.tab')];
const img = document.getElementById('viewer-img');
if (tabs.length && img) {
  const pick = (t, focus) => {
    tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
    if (focus) t.focus();
    img.style.opacity = 0;
    setTimeout(() => { img.src = t.dataset.src; img.alt = t.dataset.alt; img.style.opacity = 1; }, 140);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', e => {
      const d = {ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1}[e.key];
      if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  // Preload the other screens so switching is instant.
  tabs.forEach(t => { const i = new Image(); i.src = t.dataset.src; });
}
"""

PLAY_ICON = '<svg width="26" height="28" viewBox="0 0 26 28" aria-hidden="true"><path d="M2 1.5 L24 14 L2 26.5 Z" fill="none" stroke="#FFC29C" stroke-width="2.6" stroke-linejoin="round"/></svg>'
ICONS = {
    'book': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 8h6"/></svg>',
    'flag': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    'chat': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
}


def arise_head(title, desc, path):
    url = ARISE_URL + path
    return f'''<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(desc)}" />
  <link rel="canonical" href="{url}" />
  <meta name="theme-color" content="#FFF6F1" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Arise" />
  <meta property="og:title" content="{esc(title)}" />
  <meta property="og:description" content="{esc(desc)}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:image" content="{ARISE_URL}/assets/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/assets/favicon.png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="preload" href="/assets/manrope-800.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/assets/arise.css" />
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
'''


def arise_header(home=True, current=''):
    pre = '' if home else '/'
    links = [('#features', 'Features'), ('#screens', 'Screens'), ('#ari', 'Ari'), ('#faq', 'FAQ')]
    nav = ''.join(f'<a href="{pre}{h}">{t}</a>' for h, t in links)
    return f'''<header class="top"><div class="wrap">
  <a class="brand" href="/"><img src="/assets/logo.png" alt="" width="36" height="36" />Arise</a>
  <nav class="nav" aria-label="Main">{nav}</nav>
  <a class="btn btn--accent btn--sm" href="{pre}#get">Get Arise</a>
</div></header>
'''


def arise_footer():
    return f'''<footer><div class="wrap">
  <span>© {YEAR} Arise by <a href="{STUDIO}">Nexora Studio</a></span>
  <nav aria-label="Footer"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/delete-account/">Delete account</a><a href="mailto:{EMAIL}">{EMAIL}</a></nav>
</div></footer>
<script src="/assets/arise.js" defer></script>
</body>
</html>
'''


def shot(name, w=420, cls='', eager=False):
    h = round(w * 2796 / 1290)
    load = '' if eager else ' loading="lazy"'
    c = f' class="{cls}"' if cls else ''
    return f'<img{c} src="/assets/{name}.webp" alt="{esc(ARISE_SHOTS[name])}" width="{w}" height="{h}"{load} decoding="async" />'


def arise_home():
    tabs = ''.join(
        f'<li><button class="tab" type="button" role="tab" aria-selected="{"true" if i == 0 else "false"}" tabindex="{0 if i == 0 else -1}" '
        f'data-src="/assets/{k}.webp" data-alt="{esc(ARISE_SHOTS[k])}" aria-controls="viewer">'
        f'<span class="n">0{i + 1}</span><h3>{esc(t)}</h3><p>{esc(d)}</p></button></li>'
        for i, (k, t, d) in enumerate(ARISE_FEATURES))
    rail = ''.join(
        f'<figure><div class="phone">{shot(k, 360)}</div><figcaption>{esc(t)}<span>{esc(d.split(". ")[0].rstrip("."))}.</span></figcaption></figure>'
        for k, t, d in ARISE_FEATURES)
    faq = ''.join(f'<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q, a in ARISE_FAQ)
    first = ARISE_FEATURES[0][0]
    body = f'''<main id="main">
<section class="hero"><div class="wrap">
  <div>
    <span class="eyebrow">For school students · Android</span>
    <h1>Find the career that fits you, <span class="grad">and the way to get there.</span></h1>
    <p class="lead">Arise turns what you love into a plan: the right career, the right university and one clear step every day. Ari, your AI mentor, is with you the whole way.</p>
    <div class="cta" id="get">
      <a class="soon" href="mailto:{EMAIL}?subject=I%20want%20to%20try%20Arise">{PLAY_ICON}<span><small>Coming soon</small><b>Google Play</b></span></a>
      <a class="btn btn--ghost" href="#features">See how it works</a>
    </div>
    <ul class="facts"><li>Free to start</li><li>O‘zbekcha · Русский · English</li><li>No ads</li></ul>
  </div>
  <div class="stage" aria-hidden="false">
    <div class="phone phone--back">{shot('paths', 380, eager=True)}</div>
    <div class="phone phone--front">{shot('home', 420, eager=True)}</div>
    <div class="bubble bubble--a"><b>92% match</b>Software Engineering</div>
    <div class="bubble bubble--b"><b>12-day streak</b>One step a day keeps it going</div>
  </div>
</div></section>

<section id="features"><div class="wrap">
  <div class="sec-head"><span class="kicker">What Arise does</span><h2>From “I don’t know” to a plan you can follow.</h2>
  <p>Six things Arise does for you, from the first question to your application.</p></div>
  <div class="tour">
    <ul class="tabs" role="tablist" aria-label="Arise features" aria-orientation="vertical">{tabs}</ul>
    <div class="viewer" id="viewer" role="tabpanel" aria-live="polite"><div class="phone"><img id="viewer-img" src="/assets/{first}.webp" alt="{esc(ARISE_SHOTS[first])}" width="420" height="910" decoding="async" /></div></div>
  </div>
</div></section>

<section id="screens" style="padding-top:24px"><div class="wrap">
  <div class="sec-head"><span class="kicker">Inside the app</span><h2>Take a look around.</h2></div>
  <div class="rail" tabindex="0" aria-label="App screens, scroll sideways">{rail}</div>
</div></section>

<section id="ari" class="dark"><div class="wrap">
  <div class="sec-head"><span class="kicker">Meet Ari</span><h2>An AI mentor that doesn’t make things up.</h2>
  <p>A confident answer that invents a scholarship is worse than no answer. So Ari is built to be honest first.</p></div>
  <div class="trio">
    <article class="card"><div class="ico">{ICONS['book']}</div><h3>Facts from a catalogue</h3><p>University facts, deadlines and requirements come from a verified list. Ari builds your plan around them, not the other way round.</p></article>
    <article class="card"><div class="ico">{ICONS['flag']}</div><h3>Says when it doesn’t know</h3><p>When the catalogue has no answer, Ari tells you and suggests the closest option it can stand behind.</p></article>
    <article class="card"><div class="ico">{ICONS['chat']}</div><h3>Speaks your language</h3><p>Write in Uzbek, Russian or English, or mix them like students do. Ari answers in the language you used.</p></article>
  </div>
  <p class="quote">A mentor that admits the gap is more useful than one that fills it with noise.<span>Nurahmadov Xayrullo, machine learning, Nexora Studio</span></p>
</div></section>

<section><div class="wrap">
  <div class="sec-head"><span class="kicker">Made in Uzbekistan</span><h2>Three languages from day one.</h2>
  <p>Built for students here first: universities in Uzbekistan and abroad, local scholarships, and the app in your language.</p></div>
  <div class="langs">
    <div class="lang"><b>O‘zbekcha</b><span>Every screen, and Ari too</span></div>
    <div class="lang"><b>Русский</b><span>Every screen, and Ari too</span></div>
    <div class="lang"><b>English</b><span>Every screen, and Ari too</span></div>
  </div>
</div></section>

<section id="faq" style="padding-top:8px"><div class="wrap">
  <div class="sec-head"><span class="kicker">Questions</span><h2>Good to know.</h2></div>
  <div class="faq">{faq}</div>
</div></section>

<section style="padding-top:8px"><div class="wrap">
  <div class="band">
    <img class="mascot" src="/assets/logo.png" alt="" width="200" height="200" />
    <div><h2>Arise is coming to Google Play.</h2><p>Want to try it before everyone else? Write to us and we’ll add you to the test.</p></div>
    <div class="cta"><a class="btn btn--light" href="mailto:{EMAIL}?subject=I%20want%20to%20try%20Arise">Join the test</a></div>
  </div>
</div></section>
</main>
'''
    return (arise_head('Arise: find the career that fits you',
                       'Arise is an app for school students: find the career that fits you, pick your dream university and follow a plan with Ari, your AI mentor.', '/')
            + arise_header() + body + arise_footer())


def fill(text):
    return text.format(owner=esc(OWNER), email=EMAIL, city=CITY, privacy_url='/privacy/', delete_url='/delete-account/')


def arise_legal(slug, doc):
    toc = ''
    if len(doc['sections']) > 6:
        toc = '<nav class="toc" aria-label="Contents"><ol>' + ''.join(
            f'<li><a href="#s{i}">{esc(h.split(". ", 1)[-1])}</a></li>' for i, (h, _) in enumerate(doc['sections'], 1)) + '</ol></nav>'
    sections = ''.join(f'<h2 id="s{i}">{esc(h)}</h2>{fill(b)}' for i, (h, b) in enumerate(doc['sections'], 1))
    body = f'''<main id="main" class="doc"><div class="wrap">
<a class="back" href="/">← Arise</a>
<h1>{esc(doc["title"])}</h1>
<p class="meta">Last updated: {UPDATED}</p>
<div class="intro">{fill(doc["intro"])}</div>
{toc}
{sections}
</div></main>
'''
    return (arise_head(f'{doc["title"]} · Arise', doc['description'], f'/{slug}/')
            + arise_header(home=False) + body + arise_footer())


def arise_404():
    body = '''<main id="main" class="doc"><div class="wrap">
<h1>Page not found</h1>
<p class="meta">This page doesn’t exist. The link may be old or mistyped.</p>
<p style="margin-top:28px"><a class="btn btn--accent" href="/">Go to Arise</a></p>
</div></main>
'''
    return arise_head('Page not found · Arise', 'This page does not exist.', '/404.html').replace(
        '<link rel="canonical"', '<meta name="robots" content="noindex" />\n  <link rel="canonical"') + arise_header(home=False) + body + arise_footer()


# ====================================================================== SkyBlink

SKY_URL = 'https://skyblink.nexorastudio.world'
SKY_APP = 'https://frontend-three-xi-80.vercel.app'
SKY_CODE = 'https://github.com/NodyMan/Wally-Vision'
SKY_VIDEO = 'https://github.com/NodyMan/Wally-Vision/blob/main/video/SkyBlink_demo.mp4'

SKY_CSS = r"""
@font-face{font-family:Mono;font-weight:400;font-display:swap;src:url(/assets/jbmono-regular.woff2) format('woff2')}
@font-face{font-family:Mono;font-weight:700;font-display:swap;src:url(/assets/jbmono-bold.woff2) format('woff2')}
:root{
  --paper:#F3F4EE;--card:#fff;--line:#E1E4D9;--ink:#141712;--ink-2:#5C6357;--green:#2F8F3A;--green-2:#46B04F;--green-soft:#E3F2E1;
  --yellow:#F6D24A;--night:#070B10;--night-2:#0E151D;--night-line:rgba(160,200,170,.14);
  --sans:"Inter Tight","Inter",system-ui,-apple-system,"Segoe UI",sans-serif;--mono:Mono,ui-monospace,SFMono-Regular,Consolas,monospace;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{margin:0;background:var(--paper);color:var(--ink);font:400 17px/1.6 var(--sans);-webkit-font-smoothing:antialiased}
img{max-width:100%;height:auto;display:block}
a{color:var(--green)}
h1,h2,h3{margin:0;font-weight:600;letter-spacing:-.035em;line-height:1.02}
p{margin:0}
.wrap{width:min(1180px,100% - 40px);margin-inline:auto}
.skip{position:absolute;left:-999px;top:8px;background:#fff;color:#000;padding:8px 14px;border-radius:8px;z-index:99}
.skip:focus{left:12px}
:focus-visible{outline:2px solid var(--yellow);outline-offset:3px}
.mono{font-family:var(--mono);font-size:13px;letter-spacing:.02em;text-transform:uppercase}

/* header */
.top{position:absolute;inset:0 0 auto;z-index:10;color:#E8EFE6}
.top .wrap{display:flex;align-items:center;gap:20px;height:72px}
.brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-weight:600;font-size:20px;letter-spacing:-.02em}
.nav{display:flex;gap:4px;margin-left:auto}
.nav a{color:#B7C4B9;text-decoration:none;font-size:15px;padding:8px 12px;border-radius:10px}
.nav a:hover{color:#fff;background:rgba(255,255,255,.06)}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:46px;padding:0 20px;border-radius:12px;font:600 15px/1 var(--sans);text-decoration:none;border:1px solid transparent;transition:transform .15s}
.btn:hover{transform:translateY(-1px)}
.btn--yellow{background:var(--yellow);color:#1B1A0E}
.btn--green{background:var(--green);color:#fff}
.btn--line{border-color:rgba(255,255,255,.22);color:#fff}
.btn--line-dark{border-color:var(--line);background:var(--card);color:var(--ink)}
.btn--sm{min-height:38px;padding:0 14px;font-size:14px}

/* hero */
.hero{position:relative;background:radial-gradient(70% 60% at 75% 30%,#13241B 0%,transparent 70%),var(--night);color:#E8EFE6;padding:140px 0 96px;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;background-image:linear-gradient(var(--night-line) 1px,transparent 1px),linear-gradient(90deg,var(--night-line) 1px,transparent 1px);background-size:56px 56px;mask-image:linear-gradient(#000 30%,transparent 95%);-webkit-mask-image:linear-gradient(#000 30%,transparent 95%)}
.stars{position:absolute;inset:0;background-image:radial-gradient(1px 1px at 12% 22%,#fff8,transparent),radial-gradient(1px 1px at 32% 68%,#fff6,transparent),radial-gradient(1.5px 1.5px at 58% 14%,#fffa,transparent),radial-gradient(1px 1px at 84% 74%,#fff7,transparent),radial-gradient(1px 1px at 92% 36%,#fff5,transparent),radial-gradient(1.5px 1.5px at 6% 82%,#fff8,transparent),radial-gradient(1px 1px at 46% 90%,#fff5,transparent)}
.hero .wrap{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
.tag{display:inline-flex;gap:10px;align-items:center;color:#9FD3A4;border:1px solid rgba(159,211,164,.3);border-radius:999px;padding:7px 14px}
.tag i{width:7px;height:7px;border-radius:50%;background:var(--green-2);box-shadow:0 0 0 4px rgba(70,176,79,.25)}
.hero h1{font-size:clamp(56px,8vw,112px);margin:26px 0 24px;color:#fff}
.hero h1 em{font-style:normal;color:var(--yellow)}
.hero .lead{font-size:clamp(18px,1.6vw,21px);color:#B7C4B9;max-width:36ch}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}

/* blink widget */
.blink{position:relative;border-radius:20px;background:#0B1118;border:1px solid var(--night-line);padding:16px;box-shadow:0 40px 80px -40px #000}
.blink-bar{display:flex;justify-content:space-between;align-items:center;color:#8FA294;margin-bottom:12px}
.blink-bar b{color:#fff;font-weight:400}
.field{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:#151C22}
.field svg{position:absolute;inset:0;width:100%;height:100%}
.frame-b{opacity:0}
.field.b .frame-b{opacity:1}
.field.b .frame-a{opacity:0}
.field .label{position:absolute;left:10px;top:10px;padding:4px 8px;border-radius:6px;background:rgba(0,0,0,.6);color:#fff}
.field .label span{display:inline-block;min-width:9ch}
.readout{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.readout div{border-radius:10px;background:#111920;padding:10px 12px}
.readout small{display:block;color:#7E8F83}
.readout b{color:#fff;font:600 20px/1.2 var(--sans)}

/* strip */
.strip{border-bottom:1px solid var(--line);background:var(--card)}
.strip ul{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px 32px;margin:0;padding:20px 0;list-style:none;color:var(--ink-2)}
.strip b{color:var(--ink);font-weight:600}

/* sections */
section{padding:96px 0}
.grid-bg{background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:48px 48px;background-position:-1px -1px}
.head{max-width:760px;margin-bottom:48px}
.head .mono{color:var(--green)}
.head h2{font-size:clamp(40px,5vw,68px);margin-top:14px}
.head p{margin-top:18px;color:var(--ink-2);font-size:19px}
.steps{display:grid;gap:28px}
.step{display:grid;grid-template-columns:.8fr 1.2fr;gap:40px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:24px;padding:28px}
.step .n{display:inline-grid;place-items:center;width:40px;height:40px;border-radius:12px;background:var(--green-soft);color:var(--green);font-family:var(--mono);font-weight:700}
.step h3{font-size:clamp(28px,3vw,40px);margin:18px 0 12px}
.step p{color:var(--ink-2)}
.step img{border-radius:14px;border:1px solid var(--line)}

/* results */
.results{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.results th,.results td{text-align:left;padding:18px 22px;border-bottom:1px solid var(--line);vertical-align:top}
.results th{font-family:var(--mono);font-size:12px;font-weight:400;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-2);background:#FAFBF7}
.results tr:last-child td{border-bottom:0}
.results td b{font-weight:600;font-size:18px}
.num{font-family:var(--mono);white-space:nowrap}
.pill{display:inline-block;padding:4px 10px;border-radius:999px;font-family:var(--mono);font-size:12px;text-transform:uppercase}
.pill--ok{background:var(--green-soft);color:#1F6E29}
.pill--warn{background:#FFF4CC;color:#7A5A00}
.pill--no{background:#EEF0EA;color:var(--ink-2)}
.note{margin-top:18px;color:var(--ink-2);font-size:15px}

/* tech + team */
.two{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.box{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:32px}
.box h3{font-size:28px;margin-bottom:14px}
.box p{color:var(--ink-2)}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.tags span{font-family:var(--mono);font-size:13px;padding:7px 12px;border-radius:10px;background:var(--paper);border:1px solid var(--line)}
.team{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:20px}
.team div{display:flex;align-items:center;gap:12px;padding:12px;border-radius:14px;background:var(--paper)}
.team i{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:var(--green);color:#fff;font-style:normal;font-weight:600}

/* closing */
.closing{background:var(--night);color:#E8EFE6;border-radius:32px;padding:64px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.closing h2{font-size:clamp(36px,4.6vw,60px);color:#fff}
.closing p{margin-top:14px;color:#B7C4B9}
footer{padding:48px 0;color:var(--ink-2);font-size:15px}
footer .wrap{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px 24px;border-top:1px solid var(--line);padding-top:24px}
footer a{color:var(--ink-2);text-decoration:none}
footer a:hover{color:var(--ink)}
footer nav{display:flex;flex-wrap:wrap;gap:8px 20px}

@media (max-width:960px){
  .hero .wrap,.step,.two,.closing{grid-template-columns:1fr}
  .hero{padding-top:110px}
  .blink{max-width:460px}
  .nav{display:none}
  .top .btn{margin-left:auto}
  .closing{padding:40px 28px}
  .results th:nth-child(3),.results td:nth-child(3){display:none}
}
@media (max-width:560px){section{padding:64px 0}.team{grid-template-columns:1fr}.results th,.results td{padding:14px}}
"""

# A small pixel field: fixed stars plus one object that moves between two "visits".
def sky_field():
    import random
    rnd = random.Random(7)
    cells = []
    n = 24
    for y in range(n):
        for x in range(n):
            v = rnd.randint(20, 48)
            cells.append(f'<rect x="{x}" y="{y}" width="1" height="1" fill="rgb({v},{v + 4},{v + 8})"/>')
    stars = [(4, 5), (17, 3), (20, 15), (7, 19), (12, 9), (2, 13)]
    star = ''.join(f'<rect x="{x}" y="{y}" width="1" height="1" fill="#E9EEF2"/><rect x="{x - 1}" y="{y}" width="1" height="1" fill="#6F7A80"/><rect x="{x + 1}" y="{y}" width="1" height="1" fill="#6F7A80"/>' for x, y in stars)
    a = '<g class="frame-a"><rect x="13" y="15" width="2" height="2" fill="#F6D24A"/></g>'
    b = '<g class="frame-b"><rect x="15" y="13" width="2" height="2" fill="#F6D24A"/></g>'
    ring = '<circle cx="15" cy="15" r="3.4" fill="none" stroke="#46B04F" stroke-width=".25" stroke-dasharray=".8 .5"/>'
    return f'<svg viewBox="0 0 24 24" shape-rendering="crispEdges" role="img" aria-label="Animated blink of two sky images: fixed stars stay still while one object jumps between visits">{"".join(cells)}{star}<rect width="24" height="24" fill="#0000"/>{a}{b}{ring}</svg>'


SKY_JS = r"""
// Blink between two visits: fixed stars stay, the brown dwarf jumps.
const field = document.querySelector('.field');
const label = document.querySelector('[data-visit]');
if (field && label && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    const b = field.classList.toggle('b');
    label.textContent = b ? '2026-09-22' : '2025-04-29';
  }, 800);
}
"""


def sky_page():
    field = sky_field()
    results = [
        ('Epsilon Indi B', 'Brown dwarf', '6.0 ± 1.1″', '6.5″', ('ok', 'Measured')),
        ('Barnard’s Star', 'Red dwarf; the core is saturated', '11.9 ± 1.3″', '10.4″', ('warn', 'Indicative')),
        ('WISE 0855', 'Coldest known brown dwarf', 'Too faint', '—', ('no', 'No claim')),
        ('Moving source, no Gaia match', 'Shown as a candidate', 'Check', '—', ('no', 'Candidate')),
    ]
    rows = ''.join(
        f'<tr><td><b>{esc(n)}</b><br><span style="color:var(--ink-2);font-size:15px">{esc(d)}</span></td><td class="num">{m}</td><td class="num">{c}</td>'
        f'<td><span class="pill pill--{k}">{t}</span></td></tr>' for n, d, m, c, (k, t) in results)
    team = ''.join(f'<div><i>{n[0]}</i>{n}</div>' for n in ('Makhmud', 'Xayrullo', 'Nizomiddin', 'Intizor'))
    tags = ''.join(f'<span>{t}</span>' for t in ('Python', 'Django', 'Astropy', 'reproject', 'Next.js', 'React', 'Aladin Lite'))
    desc = 'SkyBlink is a free web tool that blinks real infrared images from NASA’s SPHEREx mission, so moving stars and brown dwarfs stand out, and measures how far they moved.'
    return f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>SkyBlink: see the sky move</title>
  <meta name="description" content="{esc(desc)}" />
  <link rel="canonical" href="{SKY_URL}/" />
  <meta name="theme-color" content="#070B10" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SkyBlink" />
  <meta property="og:title" content="SkyBlink: see the sky move" />
  <meta property="og:description" content="{esc(desc)}" />
  <meta property="og:url" content="{SKY_URL}/" />
  <meta property="og:image" content="{SKY_URL}/assets/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="/assets/skyblink.css" />
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap">
  <a class="brand" href="/"><img src="/assets/favicon.svg" alt="" width="28" height="28" />SkyBlink</a>
  <nav class="nav" aria-label="Main"><a href="#how">How it works</a><a href="#results">Results</a><a href="#about">About</a></nav>
  <a class="btn btn--yellow btn--sm" href="{SKY_APP}" target="_blank" rel="noopener">Open the app ↗</a>
</div></header>
<main id="main">
<section class="hero"><div class="stars" aria-hidden="true"></div><div class="wrap">
  <div>
    <span class="tag mono"><i></i>NASA Space Apps 2026 · Tashkent</span>
    <h1>See the sky <em>move.</em></h1>
    <p class="lead">SkyBlink takes real infrared images from NASA’s SPHEREx telescope, lines up visits taken months apart and blinks them. Stars stay still. What moves, jumps, and SkyBlink measures by how much.</p>
    <div class="cta">
      <a class="btn btn--yellow" href="{SKY_APP}" target="_blank" rel="noopener">Open SkyBlink ↗</a>
      <a class="btn btn--line" href="{SKY_VIDEO}" target="_blank" rel="noopener">Watch the demo</a>
      <a class="btn btn--line" href="{SKY_CODE}" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
  <figure class="blink" style="margin:0">
    <div class="blink-bar mono"><span>SPHEREx · Blink</span><b>Epsilon Indi B</b></div>
    <div class="field">{field}<div class="label mono">Visit <span data-visit>2025-04-29</span></div></div>
    <div class="readout mono"><div><small>Visits</small><b>4</b></div><div><small>Shift</small><b>6.0″</b></div><div><small>Catalogue</small><b>6.5″</b></div></div>
  </figure>
</div></section>

<div class="strip"><div class="wrap"><ul>
  <li><b>Data:</b> NASA SPHEREx via NASA/IPAC IRSA</li>
  <li><b>Price:</b> free, in the browser</li>
  <li><b>Code:</b> open source, MIT licence</li>
  <li><b>Languages:</b> English, Russian, Uzbek</li>
</ul></div></div>

<section id="how" class="grid-bg"><div class="wrap">
  <div class="head"><span class="mono">How it works</span><h2>The trick that found Pluto, in your browser.</h2>
  <p>In 1930 astronomers flipped between two photos of the same sky to spot what moved. SkyBlink does the same with today’s telescope data, and does the maths for you.</p></div>
  <div class="steps">
    <article class="step"><div><span class="n">01</span><h3>Pick a target</h3><p>Type a star name or coordinates, or start with one of five objects from the challenge. A Simple mode keeps it easy for first-timers.</p></div>
      <img src="/assets/skyblink-home.webp" alt="SkyBlink start page with a search box and five challenge objects" width="1280" height="800" loading="lazy" /></article>
    <article class="step"><div><span class="n">02</span><h3>Blink the visits</h3><p>SkyBlink downloads SPHEREx image cutouts, puts every visit on one pixel grid and plays them as an animation. Moving objects jump; fixed stars stay put.</p></div>
      <img src="/assets/skyblink-blink.webp" alt="Blink view of the brown dwarf Epsilon Indi B across four visits" width="1280" height="800" loading="lazy" /></article>
    <article class="step"><div><span class="n">03</span><h3>Measure the shift</h3><p>Subtracting one visit from another leaves a black-and-white pair: where it was and where it is now. SkyBlink measures the shift with an error bar and checks it against the catalogue.</p></div>
      <img src="/assets/skyblink-diff.webp" alt="Difference view of Epsilon Indi B with a measured shift of 6.0 ± 1.1 arcseconds" width="1280" height="800" loading="lazy" /></article>
  </div>
</div></section>

<section id="results"><div class="wrap">
  <div class="head"><span class="mono">Honest numbers</span><h2>We only claim what we measured.</h2>
  <p>Every number comes from real SPHEREx images, and every shift comes with its error. When the data can’t answer, the app says so.</p></div>
  <table class="results">
    <thead><tr><th scope="col">Object</th><th scope="col">SkyBlink measured</th><th scope="col">Catalogue</th><th scope="col">Status</th></tr></thead>
    <tbody>{rows}</tbody>
  </table>
  <p class="note">Shifts are in arcseconds (″). The spectrum and light-curve tabs in the app are labelled as previews.</p>
</div></section>

<section id="about" style="padding-top:0"><div class="wrap two">
  <div class="box"><h3>Built with</h3><p>A Django backend with Astropy and reproject fetches the images from NASA/IPAC IRSA and measures the motion. The front end is Next.js with an Aladin Lite sky map.</p><div class="tags">{tags}</div></div>
  <div class="box"><h3>The team</h3><p>Built at NASA Space Apps 2026 in Tashkent. Part of the work of <a href="https://www.nexorastudio.world">Nexora Studio</a>.</p><div class="team">{team}</div></div>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <div class="closing"><div><h2>Try it on a real brown dwarf.</h2><p>Open SkyBlink, pick Epsilon Indi B and watch it move between visits more than a year apart.</p></div>
  <div class="cta" style="margin:0"><a class="btn btn--yellow" href="{SKY_APP}" target="_blank" rel="noopener">Open SkyBlink ↗</a></div></div>
</div></section>
</main>
<footer><div class="wrap">
  <span>SkyBlink is an independent team project, not an official NASA product. © {YEAR} <a href="{STUDIO}">Nexora Studio</a></span>
  <nav aria-label="Footer"><a href="{SKY_CODE}" target="_blank" rel="noopener">GitHub</a><a href="{SKY_VIDEO}" target="_blank" rel="noopener">Demo video</a><a href="{STUDIO}/skyblink.html">Case study</a><a href="mailto:{EMAIL}">{EMAIL}</a></nav>
</div></footer>
<script src="/assets/skyblink.js" defer></script>
</body>
</html>
'''


def sky_404():
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Page not found · SkyBlink</title><meta name="robots" content="noindex" />
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="/assets/skyblink.css" /></head>
<body><main class="hero" style="min-height:100vh"><div class="wrap" style="display:block"><h1>Nothing <em>moved</em> here.</h1>
<p class="lead">This page doesn’t exist.</p><div class="cta"><a class="btn btn--yellow" href="/">Go to SkyBlink</a></div></div></main></body></html>
'''


BUILD = {
    os.path.join('arise', 'index.html'): arise_home,
    os.path.join('arise', 'privacy', 'index.html'): lambda: arise_legal('privacy', PRIVACY),
    os.path.join('arise', 'terms', 'index.html'): lambda: arise_legal('terms', TERMS),
    os.path.join('arise', 'delete-account', 'index.html'): lambda: arise_legal('delete-account', DELETE),
    os.path.join('arise', '404.html'): arise_404,
    os.path.join('arise', 'assets', 'arise.css'): lambda: ARISE_CSS.lstrip(),
    os.path.join('arise', 'assets', 'arise.js'): lambda: ARISE_JS.lstrip(),
    os.path.join('skyblink', 'index.html'): sky_page,
    os.path.join('skyblink', '404.html'): sky_404,
    os.path.join('skyblink', 'assets', 'skyblink.css'): lambda: SKY_CSS.lstrip(),
    os.path.join('skyblink', 'assets', 'skyblink.js'): lambda: SKY_JS.lstrip(),
}

if __name__ == '__main__':
    for rel, build in BUILD.items():
        write(rel, build())
