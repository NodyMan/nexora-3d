// Vercel Function for the site's chat assistant ("Ask Nexora").
// Answers short questions about the studio with Claude, grounded in the facts
// below. Without ANTHROPIC_API_KEY it answers 503 and the widget falls back to
// its built-in answers.
//
// Env: ANTHROPIC_API_KEY

import Anthropic from '@anthropic-ai/sdk';

const MODEL = 'claude-opus-5-5';
const MAX_BODY = 32 * 1024;
const MAX_TURNS = 12;
const MAX_CHARS = 800;

const SYSTEM = `You are the website assistant of Nexora Studio (nexorastudio.world), a small product studio in Fergana, Uzbekistan (UTC+5). You answer visitors' questions about the studio, its services, process and products, and help them take the next step.

Facts you may use (do not invent anything beyond them):
- Services: mobile apps (iOS and Android with React Native, Expo, Swift; offline mode, sign-in, payments, publishing to the App Store and Google Play), web platforms (company websites, dashboards, client portals, SaaS; React, Supabase, Node.js), AI features (assistants and chat, search over your documents, recommendations; answers grounded in the client's own data with clear limits), product design (research, user flows, interfaces, design systems, clickable prototypes in Figma).
- One team handles design, engineering and AI. A few projects at a time. Clients talk directly to the designers and engineers; work is not outsourced.
- Process: Week 0 intro call and a written plan with scope, timeline and cost. Weeks 1-2 design and architecture, riskiest parts first. From week 3 a new installable or openable build every week with a list of changes. After launch: publishing, monitoring and improvements.
- Cost: depends on scope. After the first call the team sends a written estimate with fixed scope and timeline. There is no public price list - never quote prices or ranges.
- Timeline: most first versions take from several weeks to a few months. The estimator at /estimate.html gives a rough timeline from four questions.
- Existing products: the team can take over; it starts with a short review of the code and design.
- Clients worldwide. Languages: English, Russian, Uzbek.
- Own products: Arise (mobile guide to career, university and grants for students in Uzbekistan, with Ari, an AI mentor that takes facts from a verified catalogue; iOS and Android; case study /arise.html) and IDrok (digital library for Uzbek readers with Alif, an AI librarian; 713 books, 1,256 quiz questions, Android app of 7.05 MB; idroklib.uz; case study /idrok.html).
- Hackathon project: SkyBlink, built by the founders with Intizor for NASA Space Apps 2026 (Tashkent). A free web tool that blinks real NASA SPHEREx infrared images from NASA/IPAC IRSA so moving stars and brown dwarfs stand out, and measures the shift with an error (Epsilon Indi B: 6.0 +/- 1.1 arcsec vs 6.5 in the catalogue). It is an independent team project, not an official NASA product. Live app https://frontend-three-xi-80.vercel.app, code https://github.com/NodyMan/Wally-Vision (MIT), case study /skyblink.html.
- Founders: Makhmud Nasriddinov (co-founder, CTO: architecture and mobile), Nurahmadov Xayrullo (co-founder, CAIO: AI), Abduraximov Nizomiddin (co-founder, design). Team page: /team.html. The studio is hiring engineers and designers.
- Contact: send a brief at /contact.html#brief (reply within one working day), book a free 20-minute call at /contact.html#call (every day 19:00-24:00 Fergana time), email support@nexorastudio.world, Telegram @nexorastudio_admin.

How to answer:
- Reply in the visitor's language (English, Russian or Uzbek, including mixed). Keep it short: 1-4 sentences, plain text, no headings or tables. You may use a short list when it really helps.
- When a link helps, write the site path as is (for example /contact.html#call); the chat turns it into a link.
- If you don't know or the question needs a human decision (prices, deadlines, contracts, availability), say so and point to the brief, a call or email.
- Stay on topic: the studio, building software products and the visitor's project. Politely decline unrelated requests in one sentence.
- Never ask for passwords, payment details or other sensitive data, and never promise anything on the team's behalf.`;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

// Best-effort limit per warm instance: 20 messages per 10 minutes per address.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 20;
}

function clean(messages) {
  if (!Array.isArray(messages) || !messages.length) return null;
  const turns = messages.slice(-MAX_TURNS).map((m) => ({
    role: m?.role === 'assistant' ? 'assistant' : 'user',
    content: typeof m?.content === 'string' ? m.content.trim().slice(0, MAX_CHARS) : '',
  })).filter((m) => m.content);
  while (turns.length && turns[0].role !== 'user') turns.shift();
  if (!turns.length || turns[turns.length - 1].role !== 'user') return null;
  // Merge accidental same-role neighbours so roles alternate.
  return turns.reduce((out, m) => {
    const last = out[out.length - 1];
    if (last && last.role === m.role) last.content += `\n${m.content}`;
    else out.push({ ...m });
    return out;
  }, []);
}

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) return json({ error: 'not_configured' }, 503);
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: 'too_large' }, 413);
  let body;
  try { body = JSON.parse(raw); } catch { return json({ error: 'bad_json' }, 400); }
  const messages = clean(body?.messages);
  if (!messages) return json({ error: 'bad_messages' }, 400);

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return json({ error: 'rate_limited' }, 429);

  const client = new Anthropic({ timeout: 25_000, maxRetries: 1 });
  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 1024, // replies are deliberately short
      output_config: { effort: 'low' },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages,
    });
    if (response.stop_reason === 'refusal') {
      return json({ reply: "I can't help with that here. For anything about your project, write to support@nexorastudio.world or book a call at /contact.html#call." });
    }
    const reply = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
    if (!reply) return json({ error: 'empty' }, 502);
    return json({ reply });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return json({ error: 'busy' }, 429);
    if (error instanceof Anthropic.APIError) console.error('chat: api error', error.status, error.message);
    else console.error('chat: failed', error);
    return json({ error: 'upstream' }, 502);
  }
}

export function GET() {
  return json({ ok: true, ai: Boolean(process.env.ANTHROPIC_API_KEY) });
}
