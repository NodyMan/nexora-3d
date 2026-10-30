// Vercel Function for the contact form. The Qoder deployment stores inquiries
// in Postgres (functions/routes.mjs); on Vercel there is no database, so the
// brief is validated here and delivered by email through Resend.
//
// Env: RESEND_API_KEY, CONTACT_TO_EMAIL, optional CONTACT_FROM_EMAIL.

const MAX_BODY = 24 * 1024;

const text = (value, max, { required = true, min = 0 } = {}) => {
  if (typeof value !== 'string') return required ? null : '';
  const trimmed = value.trim();
  if (required && trimmed.length < Math.max(1, min)) return null;
  if (trimmed.length > max) return null;
  return trimmed;
};

const isEmail = (value) => typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

// Best-effort, per-instance throttle: one brief per email every two minutes.
const recent = new Map();

export async function POST(request) {
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'invalid_input' }, 400);
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: 'payload_too_large' }, 413);

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ error: 'invalid_input' }, 400);
  }

  // Honeypot: bots fill the hidden "website" field; pretend it worked.
  if (typeof data.website === 'string' && data.website.trim()) return json({ ok: true }, 201);

  const name = text(data.name, 120, { min: 2 });
  const email = isEmail(data.email) ? data.email.trim().toLowerCase() : null;
  const company = text(data.company, 160, { required: false });
  const projectType = text(data.projectType, 60, { required: false });
  const budget = text(data.budget, 60, { required: false });
  const message = text(data.message, 4000, { min: 10 });
  const locale = ['en', 'ru', 'uz'].includes(data.locale) ? data.locale : 'en';
  if (!name || !email || company === null || projectType === null || budget === null || !message) {
    return json({ error: 'invalid_input' }, 400);
  }

  const last = recent.get(email);
  if (last && Date.now() - last < 2 * 60 * 1000) return json({ error: 'rate_limited' }, 429);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return json({ error: 'not_configured' }, 503);
  const from = process.env.CONTACT_FROM_EMAIL || 'Nexora Studio <onboarding@resend.dev>';

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Project inquiry — ${company || name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || '—'}`,
          `Project: ${projectType || '—'}`,
          `Budget: ${budget || '—'}`,
          `Locale: ${locale}`,
          '',
          message,
        ].join('\n'),
      }),
      signal: controller.signal,
    });
    if (!response.ok) return json({ error: 'delivery_failed' }, 502);
  } catch {
    return json({ error: 'delivery_failed' }, 502);
  } finally {
    clearTimeout(timer);
  }

  recent.set(email, Date.now());
  return json({ ok: true }, 201);
}
