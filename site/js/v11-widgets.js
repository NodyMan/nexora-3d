// Cookie notice and the "Ask Nexora" chat assistant, on every page.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------------------------------------------------------- Consent */
  const KEY = 'nx-consent';
  const readConsent = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  let consent = readConsent();

  const banner = $('[data-cookie]');
  function showConsent() {
    $$('[data-consent-current]').forEach((el) => {
      el.textContent = consent === 'all' ? 'Your choice: Accept (the chat remembers your conversation on this device).'
        : consent === 'essential' ? 'Your choice: Only essential.' : 'You have not chosen yet.';
    });
  }
  function setConsent(value) {
    consent = value;
    try { localStorage.setItem(KEY, value); } catch { /* private mode */ }
    if (value !== 'all') { try { localStorage.removeItem('nx-chat'); } catch { /* noop */ } }
    if (banner) { banner.classList.remove('is-on'); setTimeout(() => { banner.hidden = true; }, 400); }
    showConsent();
    persist();
  }
  $$('[data-consent]').forEach((b) => b.addEventListener('click', () => setConsent(b.dataset.consent)));
  showConsent();
  if (banner && !consent) {
    setTimeout(() => { banner.hidden = false; requestAnimationFrame(() => banner.classList.add('is-on')); }, 1400);
  }

  /* ---------------------------------------------------------------- Chat */
  const root = $('[data-chat]');
  if (!root) return;
  const toggle = $('[data-chat-toggle]', root);
  const panel = $('.chat__panel', root);
  const log = $('[data-chat-log]', root);
  const quick = $('[data-chat-quick]', root);
  const form = $('[data-chat-form]', root);
  const input = $('[data-chat-input]', root);
  const status = $('[data-chat-status]', root);

  const GREETING = "Hi! I'm the Nexora assistant. Ask me about our services, how we work, timelines or our products — or tell me about your project.";
  const QUICK = ['What do you build?', 'How much does it cost?', 'How long does it take?', 'Book a call', 'Talk to a human'];
  const store = () => (consent === 'all' ? localStorage : sessionStorage);
  let history = [];
  try { history = JSON.parse(store().getItem('nx-chat') || '[]').slice(-30); } catch { history = []; }
  let busy = false;

  function persist() {
    try {
      const keep = JSON.stringify(history.slice(-30));
      if (consent === 'all') { localStorage.setItem('nx-chat', keep); sessionStorage.removeItem('nx-chat'); }
      else sessionStorage.setItem('nx-chat', keep);
    } catch { /* storage blocked */ }
  }

  // Plain text in, safe HTML out: escape, then link site paths, URLs and emails.
  function format(text) {
    const esc = text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
    return esc
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/https?:\/\/[^\s<)]+/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\//, '')}</a>`)
      .replace(/(^|[\s(])(\/[a-z0-9-]+\.html(?:#[a-z0-9-]+)?)/gi, '$1<a href="$2">$2</a>')
      .replace(/\b(idroklib\.uz)\b(?![^<]*<\/a>)/g, '<a href="https://idroklib.uz" target="_blank" rel="noopener">$1</a>')
      .replace(/([\w.+-]+@[\w-]+\.[\w.]+)/g, '<a href="mailto:$1">$1</a>')
      .replace(/(^|\s)@(nexorastudio_admin)\b/g, '$1<a href="https://t.me/$2" target="_blank" rel="noopener">@$2</a>')
      .replace(/\n/g, '<br />');
  }

  function bubble(role, text) {
    const el = document.createElement('div');
    el.className = `chat__msg chat__msg--${role}`;
    el.innerHTML = format(text);
    log.append(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }
  function render() {
    log.textContent = '';
    bubble('assistant', GREETING);
    history.forEach((m) => bubble(m.role, m.content));
    quick.hidden = history.length > 0;
  }
  quick.replaceChildren(...QUICK.map((q) => {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = q;
    b.addEventListener('click', () => send(q));
    return b;
  }));

  /* Built-in answers, used when the AI is not available. */
  const KB = [
    [/how long|how much time|timeline|deadline|time|week|month|срок|долго|сколько врем|недел|месяц|muddat|qancha vaqt/i,
      'Most first versions take from several weeks to a few months, depending on the features. Get a rough timeline in four questions at /estimate.html — and you see a working build every week.'],
    [/price|cost|budget|how much|rate|стоит|стоимост|цен|бюджет|сколько|narx|qancha/i,
      "It depends on the scope, so we don't have a price list. After a short intro call we send a written estimate with a fixed scope, timeline and cost — before any work starts. Book a call at /contact.html#call or send a brief at /contact.html#brief."],
    [/mobile|ios|android|app\b|приложени|ilova/i,
      'We build iOS and Android apps with React Native and Expo (and Swift when needed): offline mode, sign-in, payments, notifications and publishing to the App Store and Google Play. More at /services.html.'],
    [/web|site|dashboard|portal|saas|сайт|портал|veb/i,
      'We build company websites, dashboards, client portals and SaaS products on React and Supabase — fast to load and easy for your team to update. More at /services.html.'],
    [/\bai\b|chatbot|bot|llm|gpt|assistant|ии|нейро|бот|sun.iy/i,
      'We add AI that works inside your product: assistants and chat, search over your documents and recommendations, answering from your own data with clear limits so it does not make things up. See how we did it in Arise: /arise.html'],
    [/design|figma|ui|ux|prototype|дизайн|макет|dizayn/i,
      'Product design is part of every project: research, user flows, interfaces and design systems. You see clickable screens before any code is written.'],
    [/build|offer|service|do you do|what do you|услуг|что вы|делаете|xizmat/i,
      'We design and build mobile apps, web platforms and AI features, and improve products that already exist — one team for design, engineering and AI. See /services.html.'],
    [/call|meet|book|zoom|звон|встреч|созвон|qo.ng.iroq/i,
      'You can book a free 20-minute intro call any day from 19:00 to 24:00 Fergana time (UTC+5): /contact.html#call'],
    [/human|person|manager|contact|email|telegram|write|связ|человек|менеджер|почт|написать|aloqa/i,
      'Write to the team at support@nexorastudio.world or on Telegram @nexorastudio_admin, or send a brief at /contact.html#brief. We reply within one working day.'],
    [/arise/i, 'Arise is our mobile guide to career, university and grants for students in Uzbekistan, with Ari, an AI mentor. The full story: /arise.html'],
    [/idrok|library|book|библиот|книг|kutub/i, 'IDrok is our digital library for Uzbek readers: 713 books, a comfortable reader and Alif, an AI librarian — in a 7.05 MB Android app. The full story: /idrok.html'],
    [/team|founder|who are|кто вы|команд|основател|jamoa/i, "We're a small team from Fergana, Uzbekistan. You work directly with the founders and the people who build your product: /team.html"],
    [/process|how do you work|steps|этап|процесс|как вы работ/i,
      'Week 0: an intro call and a written plan. Weeks 1–2: design and architecture. From week 3: a new build every week. After launch: publishing, monitoring and improvements. Details at /services.html.'],
    [/existing|take over|legacy|rewrite|готов|существ|переделать/i,
      'Yes, we can take over an existing product. We start with a short review of the code and design, then tell you honestly what to keep, fix or rebuild.'],
    [/country|abroad|outside|language|english|russian|uzbek|стран|язык|chet/i,
      'We work with clients worldwide from Fergana (UTC+5), in English, Russian and Uzbek.'],
    [/hiring|job|career|vacan|ваканс|работ[ау] у вас|ish/i, 'We are hiring engineers and designers who care about details. Send your work to support@nexorastudio.world.'],
    [/^(hi|hello|hey|привет|здравств|salom|assalom)/i, 'Hello! What are you building? I can tell you about our services, timelines and how to start.'],
  ];
  const local = (q) => (KB.find(([re]) => re.test(q)) || [null,
    "I'm not sure about that one. The team can answer anything about your project: write to support@nexorastudio.world, or book a call at /contact.html#call."])[1];

  let aiOff = false;
  async function answer() {
    if (!aiOff) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 30000);
        const response = await fetch('/api/chat', {
          method: 'POST', headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ messages: history.slice(-12) }), signal: controller.signal,
        });
        clearTimeout(timer);
        if (response.ok) {
          const data = await response.json();
          if (data.reply) return data.reply;
        }
        if (response.status === 429) return 'Too many messages in a short time — please wait a minute, or write to support@nexorastudio.world.';
        if (response.status === 503 || response.status === 404) aiOff = true;
      } catch { /* network: fall through to the built-in answers */ }
    }
    return local(history[history.length - 1].content);
  }

  async function send(text) {
    const q = text.trim().slice(0, 800);
    if (!q || busy) return;
    busy = true;
    quick.hidden = true;
    history.push({ role: 'user', content: q });
    bubble('user', q);
    input.value = '';
    fit();
    const typing = bubble('assistant', '');
    typing.classList.add('is-typing');
    typing.innerHTML = '<i></i><i></i><i></i>';
    status.textContent = 'Typing…';
    const reply = await answer();
    typing.remove();
    history.push({ role: 'assistant', content: reply });
    bubble('assistant', reply);
    status.textContent = 'Answers about our services, process and products';
    persist();
    busy = false;
    input.focus();
  }

  function fit() { input.style.height = 'auto'; input.style.height = Math.min(120, input.scrollHeight) + 'px'; }
  input.addEventListener('input', fit);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); } });
  form.addEventListener('submit', (e) => { e.preventDefault(); send(input.value); });

  function open(state) {
    root.classList.toggle('is-open', state);
    toggle.setAttribute('aria-expanded', String(state));
    if (state) {
      panel.hidden = false;
      if (!log.childElementCount) render();
      requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; input.focus(); });
    } else {
      setTimeout(() => { if (!root.classList.contains('is-open')) panel.hidden = true; }, 350);
    }
  }
  toggle.addEventListener('click', () => open(!root.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains('is-open')) { open(false); toggle.focus(); } });
  // Links inside answers go through the normal page transition.
  log.addEventListener('click', (e) => { if (e.target.closest('a[href^="/"]')) open(false); });
})();
