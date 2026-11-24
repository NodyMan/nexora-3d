"""Long-form content carried over from the previous site (journal notes)."""

# (anchor, kind, date line, title, lede, body html, signature)
ARTICLES = [('seven-mb',
  'Engineering',
  'October 2026 · 6 min read',
  'Light, not stripped down',
  'The IDrok Android app weighs 7.05 MB. That is not a size cap we put on every product. It is the result of one '
  'project, and it shows how we build: compact, fast and fully working.',
  '<p>The easy version of a reading platform is a browser wrapped around a CDN. It looks finished on a fast connection '
  'and falls apart on the connection most students actually have. We started from the opposite direction: a device '
  'from 2019, a metered data plan and a campus where the Wi-Fi drops between buildings.</p>\n'
  '          <p>Every dependency had to justify its kilobytes. We kept the reader in the platform WebView, streamed '
  'chapters instead of preloading the catalogue, and cached only the pages a reader had actually opened. Analytics, '
  'crash reporting and A/B tooling — the default cargo of a modern app — were replaced with a single lightweight event '
  'pipe we could reason about.</p>\n'
  '          <blockquote>Performance is a product decision, not a cleanup task.</blockquote>\n'
  '          <p>The result is an app a student can download on mobile data without thinking about it, with nothing cut '
  'to get there. The lesson is not that every app should weigh 7 MB. Each product gets the size its job needs; what '
  'carries over is the habit of making every kilobyte earn its place.</p>\n'
  '          <ul>\n'
  '            <li>The reader stays in the platform WebView; the catalogue streams on demand.</li>\n'
  '            <li>Covers are generated as responsive AVIF and WebP at build time.</li>\n'
  '            <li>No third-party SDK sits in the critical path.</li>\n'
  '          </ul>',
  '— Makhmud Nasriddinov, systems'),
 ('guardrails',
  'Applied AI',
  'October 2026 · 5 min read',
  'Guardrails before magic',
  'Ari is the mentor inside Arise. The hardest part was not making it sound intelligent — it was keeping it honest '
  'about what it knows.',
  '<p>Students ask direct questions: which university, which subject, which deadline. A fluent answer that invents a '
  'scholarship is worse than no answer at all. So Ari is built around retrieval first and generation second. '
  'University facts, deadlines and requirements come from a verified catalogue; the model composes the route, not the '
  'facts.</p>\n'
  '          <p>Every response is constrained to a structured shape — a next step, a reason, a source. When the '
  'catalogue has no answer, Ari says so and offers the closest verified path. That refusal style was designed before '
  'the first prompt was written.</p>\n'
  '          <blockquote>A mentor that admits the gap is more useful than one that fills it with noise.</blockquote>\n'
  '          <p>Multilingual support is not a translation layer on top. English, Russian and Uzbek prompts share the '
  'same structured contract, and the mentor answers in the language the student used — including the mixed language '
  'students actually type.</p>',
  '— Nurahmadov Xayrullo, machine learning'),
 ('capacity',
  'Studio',
  'September 2026 · 4 min read',
  'Two engagements per quarter',
  'Capacity is not a sales constraint. It is the mechanism that keeps the people who scope your product on the line '
  'that ships it.',
  '<p>Nexora is a small team with no account managers in between. That is easy to write and hard to keep. The only way '
  'to keep it true is to limit how many projects run at once.</p>\n'
  '          <p>Two client engagements per quarter is a deliberate ceiling. It leaves room for architecture reviews, '
  'for the unglamorous week where a release is stabilised, and for our own platforms — Arise and IDrok — which we '
  'still run ourselves.</p>\n'
  '          <blockquote>A small studio is not a boutique aesthetic. It is an operating constraint.</blockquote>\n'
  '          <p>It also makes the first conversation honest. If the timing does not fit, we say so instead of hiring a '
  'team you have never met to carry the work. The studio stays small because the alternative is a promise we cannot '
  'keep.</p>',
  '— Abduraximov Nizomiddin, design')]
