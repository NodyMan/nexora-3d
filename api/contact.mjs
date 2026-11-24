// Vercel Function for the brief form. Saves the brief in Supabase through the
// "app" Edge Function (which also rate-limits by email), then emails the brief
// to the studio and a "we have your brief" note to the client through Resend.
//
// Env: SUPABASE_URL, RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.

import { confirmationEmail } from './_confirmation-email.mjs';

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

async function sendEmail(message, label) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.CONTACT_FROM_EMAIL || 'Nexora Studio <onboarding@resend.dev>';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from, ...message }),
      signal: controller.signal,
    });
    if (!response.ok) {
      // Resend says why it refused (bad key, unverified sender, recipient not allowed); keep it in the logs.
      const reason = await response.json().catch(() => ({}));
      console.error(`${label}: resend refused`, response.status, reason.name || '', reason.message || '');
    }
    return response.ok;
  } catch {
    console.error(`${label}: resend unreachable`);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

// Saves the brief in Supabase so it shows in the studio console.
// status: 201 saved, 429 too soon, or 0 if unreachable. When the Edge Function has its
// own mail key (mailer) it also emails the studio and sends the client their portal code.
async function store(payload, request) {
  const base = process.env.SUPABASE_URL;
  if (!base) return { status: 0 };
  try {
    const response = await fetch(`${base}/functions/v1/app/api/contact`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': request.headers.get('x-forwarded-for') || '',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    return { status: response.status, ...result };
  } catch {
    console.error('contact: could not reach the brief store');
    return { status: 0 };
  }
}

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
  if (typeof data.website === 'string' && data.website.trim()) {
    console.warn('contact: spam trap filled, brief dropped');
    return json({ ok: true }, 201);
  }

  const name = text(data.name, 120, { min: 2 });
  const email = isEmail(data.email) ? data.email.trim().toLowerCase() : null;
  const company = text(data.company, 160, { required: false });
  const projectType = text(data.projectType, 60, { required: false });
  const budget = text(data.budget, 60, { required: false });
  const message = text(data.message, 4000, { min: 10 });
  const locale = ['en', 'ru', 'uz'].includes(data.locale) ? data.locale : 'en';
  if (!name || !email || company === null || projectType === null || budget === null || !message) {
    // Name the fields so the form can point at them.
    const fields = Object.entries({ name, email, company: company !== null, projectType: projectType !== null, message })
      .filter(([, ok]) => !ok)
      .map(([field]) => field);
    return json({ error: 'invalid_input', fields }, 400);
  }

  const payload = { name, email, company, projectType, budget, message, locale, website: '' };
  const stored = await store(payload, request);
  if (stored.status === 429) return json({ error: 'rate_limited' }, 429);
  if (stored.status === 201 && stored.mailer) {
    return json({ ok: true, notified: Boolean(stored.notified), confirmed: Boolean(stored.confirmed) }, 201);
  }

  // Fallback: the Edge Function could not send mail, so send from here (no portal code).
  const inquiry = { name, email, company, project_type: projectType, budget, message, locale };
  const studio = process.env.CONTACT_TO_EMAIL;
  const { subject, text: plain, html } = confirmationEmail(inquiry);
  const [notified, confirmed] = await Promise.all([
    studio
      ? sendEmail({
          to: [studio],
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
        }, 'contact')
      : false,
    sendEmail({ to: [email], ...(studio ? { reply_to: studio } : {}), subject, text: plain, html }, 'confirmation'),
  ]);

  // The brief counts as received if it was saved or reached the studio inbox.
  if (stored.status !== 201 && !notified) return json({ error: 'delivery_failed' }, 502);
  return json({ ok: true, notified, confirmed }, 201);
}
