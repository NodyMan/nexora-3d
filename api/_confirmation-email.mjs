// The "we have your brief" email sent to whoever submits the contact form,
// in the language they used on the site (en / ru / uz).

const COPY = {
  en: {
    subject: 'We have your brief — Nexora Studio',
    hello: (name) => `Hi ${name},`,
    intro: 'Thank you for writing to Nexora Studio. Your brief is with us, and one of the founders will read it and reply to you personally at this address.',
    sent: 'What you sent',
    company: 'Company',
    type: 'Project type',
    next: 'What happens next',
    steps: [
      'We read your brief.',
      'A founder replies with what we understood, any questions, and whether we are the right studio for the work.',
      'If we are, we set up a 30-minute call and a scoped plan: architecture, stages, timeline and cost.',
    ],
    reply: 'Want to add something? Just reply to this email.',
    portal: 'Your client portal',
    portalIntro: 'Follow your project there: status, updates from the team, invoices and files. Sign in with this email and the code below.',
    portalCode: 'Access code',
    portalButton: 'Open the client portal',
    portalNote: (date) => `The code works once and is valid until ${date}. After signing in you stay signed in for 30 days.`,
    sign: 'Nexora Studio · Fergana, Uzbekistan',
  },
  ru: {
    subject: 'Ваш бриф у нас — Nexora Studio',
    hello: (name) => `Здравствуйте, ${name}!`,
    intro: 'Спасибо, что написали в Nexora Studio. Ваш бриф у нас: один из основателей прочитает его и лично ответит вам на этот адрес.',
    sent: 'Что вы отправили',
    company: 'Компания',
    type: 'Тип проекта',
    next: 'Что будет дальше',
    steps: [
      'Мы читаем ваш бриф.',
      'Основатель отвечает: что мы поняли, какие есть вопросы и подходим ли мы для этой работы.',
      'Если подходим, назначаем 30-минутный звонок и готовим план: архитектура, этапы, сроки и стоимость.',
    ],
    reply: 'Хотите что-то добавить? Просто ответьте на это письмо.',
    portal: 'Ваш клиентский портал',
    portalIntro: 'Там видно всё о проекте: статус, обновления от команды, счета и файлы. Войдите с этим email и кодом ниже.',
    portalCode: 'Код доступа',
    portalButton: 'Открыть клиентский портал',
    portalNote: (date) => `Код одноразовый. После входа вы остаётесь в портале 30 дней. Код действует до ${date}`,
    sign: 'Nexora Studio · Фергана, Узбекистан',
  },
  uz: {
    subject: 'Brifingiz bizda — Nexora Studio',
    hello: (name) => `Assalomu alaykum, ${name}!`,
    intro: 'Nexora Studio’ga yozganingiz uchun rahmat. Brifingiz bizda: asoschilardan biri uni o‘qib, shu manzilga shaxsan javob yozadi.',
    sent: 'Siz yuborgan ma’lumot',
    company: 'Kompaniya',
    type: 'Loyiha turi',
    next: 'Keyin nima bo‘ladi',
    steps: [
      'Brifingizni o‘qiymiz.',
      'Asoschi javob yozadi: nimani tushunganimiz, savollarimiz va bu ish uchun mos jamoa ekanimiz.',
      'Agar mos bo‘lsak, 30 daqiqalik qo‘ng‘iroq va aniq reja tayyorlaymiz: arxitektura, bosqichlar, muddat va narx.',
    ],
    reply: 'Biror narsa qo‘shmoqchimisiz? Shu xatga javob yozing.',
    portal: 'Mijoz portalingiz',
    portalIntro: 'Loyihangizni shu yerda kuzating: holati, jamoadan yangiliklar, hisob-fakturalar va fayllar. Shu email va quyidagi kod bilan kiring.',
    portalCode: 'Kirish kodi',
    portalButton: 'Mijoz portalini ochish',
    portalNote: (date) => `Kod bir martalik va ${date} gacha amal qiladi. Kirganingizdan so‘ng 30 kun davomida tizimda qolasiz.`,
    sign: 'Nexora Studio · Farg‘ona, O‘zbekiston',
  },
};

const PORTAL_URL = 'https://www.nexorastudio.world/portal.html';

const escape = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// portal: { code, expiresAt } when a portal login was issued for this brief.
export function confirmationEmail(inquiry, portal = null) {
  const t = COPY[inquiry.locale] || COPY.en;
  const first = inquiry.name.split(/\s+/)[0];
  const facts = [
    inquiry.company ? [t.company, inquiry.company] : null,
    inquiry.project_type ? [t.type, inquiry.project_type] : null,
  ].filter(Boolean);

  const until = portal
    ? new Date(portal.expiresAt).toLocaleDateString({ ru: 'ru-RU', uz: 'uz-UZ' }[inquiry.locale] || 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Tashkent' })
    : '';

  const text = [
    t.hello(first),
    '',
    t.intro,
    '',
    `${t.sent}:`,
    ...facts.map(([k, v]) => `${k}: ${v}`),
    '',
    inquiry.message,
    '',
    `${t.next}:`,
    ...t.steps.map((step, i) => `${i + 1}. ${step}`),
    '',
    ...(portal
      ? [`${t.portal}:`, t.portalIntro, `${t.portalCode}: ${portal.code}`, PORTAL_URL, t.portalNote(until), '']
      : []),
    t.reply,
    '',
    `— ${t.sign}`,
    'https://nexorastudio.world',
  ].join('\n');

  const factRows = facts
    .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#80848c;font-size:13px;white-space:nowrap">${escape(k)}</td><td style="padding:4px 0;font-size:14px;color:#0d0e10">${escape(v)}</td></tr>`)
    .join('');
  const steps = t.steps
    .map((step, i) => `<tr><td style="padding:6px 12px 6px 0;vertical-align:top"><span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border-radius:12px;background:#c6ff3d;color:#0d0e10;font-size:12px;font-weight:700">${i + 1}</span></td><td style="padding:6px 0;font-size:15px;line-height:1.5;color:#4d5058">${escape(step)}</td></tr>`)
    .join('');

  const html = `<!doctype html>
<html lang="${escape(inquiry.locale || 'en')}">
<body style="margin:0;padding:0;background:#f3f4ef;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#0d0e10">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4ef;padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e6e7e1">
        <tr><td style="height:8px;background:linear-gradient(90deg,#c6ff3d,#6a5cf0);background-color:#c6ff3d"></td></tr>
        <tr><td style="padding:32px 32px 8px">
          <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Nexora <span style="color:#80848c;font-weight:400">Studio</span></div>
          <h1 style="margin:24px 0 12px;font-size:26px;line-height:1.2;font-weight:700">${escape(t.hello(first))}</h1>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4d5058">${escape(t.intro)}</p>
        </td></tr>
        <tr><td style="padding:0 32px">
          <div style="border-radius:14px;background:#f3f4ef;padding:18px 20px">
            <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#80848c;margin-bottom:8px">${escape(t.sent)}</div>
            ${factRows ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:10px">${factRows}</table>` : ''}
            <div style="font-size:15px;line-height:1.6;color:#0d0e10;white-space:pre-wrap;border-left:3px solid #c6ff3d;padding-left:12px">${escape(inquiry.message)}</div>
          </div>
        </td></tr>
        <tr><td style="padding:28px 32px 8px">
          <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#80848c;margin-bottom:6px">${escape(t.next)}</div>
          <table role="presentation" cellpadding="0" cellspacing="0">${steps}</table>
        </td></tr>
        ${portal ? `<tr><td style="padding:20px 32px 8px">
          <div style="border-radius:16px;background:#0d0e10;color:#f3f4ef;padding:24px">
            <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#c6ff3d;margin-bottom:8px">${escape(t.portal)}</div>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.55;color:#c9cbc4">${escape(t.portalIntro)}</p>
            <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#80848c;margin-bottom:6px">${escape(t.portalCode)}</div>
            <div style="display:inline-block;font-family:'SFMono-Regular',Consolas,'Courier New',monospace;font-size:26px;font-weight:700;letter-spacing:.12em;background:#c6ff3d;color:#0d0e10;border-radius:10px;padding:10px 16px;margin-bottom:18px">${escape(portal.code)}</div>
            <div><a href="${PORTAL_URL}" style="display:inline-block;background:#f3f4ef;color:#0d0e10;text-decoration:none;font-weight:700;font-size:15px;border-radius:999px;padding:12px 22px">${escape(t.portalButton)} &#8599;</a></div>
            <p style="margin:16px 0 0;font-size:13px;line-height:1.5;color:#80848c">${escape(t.portalNote(until))}</p>
          </div>
        </td></tr>` : ''}
        <tr><td style="padding:16px 32px 32px">
          <p style="margin:0 0 20px;font-size:15px;color:#0d0e10">${escape(t.reply)}</p>
          <p style="margin:0;font-size:13px;color:#80848c">${escape(t.sign)} · <a href="https://nexorastudio.world" style="color:#3d6b00">nexorastudio.world</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject: t.subject, text, html };
}
