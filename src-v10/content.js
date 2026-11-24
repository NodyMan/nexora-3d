/* --------------------------------------------------------------------------
   v10 content: places in the valley and the chapters (stops) inside them.
   Text is written as English keys; i18n.js supplies Russian and Uzbek.
   P('start of a sentence') takes the full sentence from the classic pages
   (corpus.js), so the 3D site and the classic site say exactly the same.
   `shot` names a camera position in app.js (SHOTS).

   Elements a chapter can have, top to bottom:
     eyebrow, title (big), lede, list (clickable rows), rows (title + text),
     points (short lines), quote, author, screens (app screen switcher),
     stores, estimator, buttons
   -------------------------------------------------------------------------- */

import { CORPUS } from './corpus.js';

export function P(prefix) {
  const hit = CORPUS.find((s) => s.startsWith(prefix));
  if (!hit) throw new Error(`corpus: no sentence starts with "${prefix}"`);
  return hit;
}

const EMAIL = 'support@nexorastudio.world';

export const PLACES = [
  {
    id: 'home',
    label: 'Home',
    stops: [{
      shot: 'home-hero',
      content: {
        eyebrow: 'Product studio · Design · Mobile · Web · AI',
        title: 'The studio that makes your product better.',
        big: true,
        lede: 'We design and build new products, improve the ones you already have, and stay with them after launch.',
        top: 12,
        buttons: [
          { label: 'Start a project', primary: true, action: { stop: 'contact-brief' } },
          { label: 'See our work', action: { place: 'work' } },
        ],
      },
    }],
  },
  {
    id: 'services',
    label: 'Services',
    stops: [{
      shot: 'home-services',
      content: {
        eyebrow: 'Services',
        title: 'Everything a product needs, from the first idea to launch.',
        lede: 'One team handles design, engineering and AI, so nothing gets lost between agencies.',
        top: 34,
        list: [
          { label: 'Mobile apps', service: 0, action: { stay: true } },
          { label: 'Web platforms', service: 1, action: { stay: true } },
          { label: 'AI features', service: 2, action: { stay: true } },
          { label: 'Product design', service: 3, action: { stay: true } },
        ],
        buttons: [{ label: 'Estimate a timeline', action: { place: 'estimate' } }],
      },
    }],
  },
  {
    id: 'work',
    label: 'Work',
    stops: [{
      shot: 'work-overview',
      content: {
        eyebrow: 'Work',
        title: 'Products we built and still run.',
        lede: 'Two products of our own, live and in daily use. Read how we built them and what we learned.',
        top: 14,
        buttons: [
          { label: 'Arise', raw: true, action: { place: 'arise' } },
          { label: 'IDrok', raw: true, action: { place: 'idrok' } },
        ],
      },
    }],
  },
  {
    id: 'arise',
    label: 'Arise',
    raw: true,
    stops: [
      {
        shot: 'work-arise',
        content: {
          eyebrow: 'iOS · Android · UZ · RU · EN',
          title: 'Finds the right career, university and grant for each student.',
          lede: 'Students tell Arise what they want to become. Ari, the built-in AI mentor, turns that goal into a plan: which skills to learn, which courses to take and what to do this week.',
          top: 30,
          screens: 'arise',
          stores: ['App Store', 'Google Play'],
        },
      },
      {
        shot: 'arise-problem',
        content: {
          eyebrow: 'The problem',
          title: 'Students were choosing their future alone.',
          lede: P('Most school students in Uzbekistan choose'),
          points: [P('We wanted to give every student')],
          top: 24,
        },
      },
      {
        shot: 'arise-built',
        content: {
          eyebrow: 'What we built',
          title: 'A plan for each student, and a mentor to follow it.',
          rows: [
            { title: 'Personal plan', text: P('The student picks a goal') },
            { title: 'Skill tree', text: P('Progress is shown as a tree') },
            { title: 'Ari, the AI mentor', text: P('Ari answers questions, explains skills') },
            { title: 'Easy start', text: P('Sign in with Google or Apple, or try') },
          ],
          top: 36,
        },
      },
      {
        shot: 'arise-ai',
        content: {
          eyebrow: 'How Ari works',
          title: 'An AI mentor that does not make things up.',
          points: [
            P('Every answer has a next step'),
            P('When the catalogue has no answer, Ari says so'),
            P('The rules for refusals were written'),
          ],
          quote: P('A mentor that admits the gap'),
          top: 28,
          buttons: [{ label: 'Read the Arise case study', action: { href: './arise.html' } }],
        },
      },
    ],
  },
  {
    id: 'idrok',
    label: 'IDrok',
    raw: true,
    stops: [
      {
        shot: 'work-idrok',
        content: {
          eyebrow: 'Android · Web · idroklib.uz',
          title: 'A personal digital library that works on any phone.',
          lede: 'IDrok brings books and academic papers into one app with a comfortable reader. Alif, its AI librarian, finds pages, explains ideas and suggests what to read next.',
          top: 30,
          screens: 'idrok',
          stores: ['Google Play'],
        },
      },
      {
        shot: 'idrok-problem',
        content: {
          eyebrow: 'The problem',
          title: 'Books were scattered across Telegram channels.',
          lede: P('Readers in Uzbekistan looked for books'),
          points: [P('We set out to put them in one place')],
          top: 24,
        },
      },
      {
        shot: 'idrok-built',
        content: {
          eyebrow: 'What we built',
          title: 'One library, a good reader and an AI librarian.',
          rows: [
            { title: 'My Library', text: P('Continue reading where you stopped') },
            { title: 'Comfortable reader', text: P('Three display modes') },
            { title: 'Alif, the AI librarian', text: P('Alif finds pages, quotes books') },
            { title: 'Arena', text: P('Quizzes on book chapters') },
          ],
          top: 36,
        },
      },
      {
        shot: 'idrok-engineering',
        content: {
          eyebrow: 'Engineering',
          title: 'Light, not stripped down.',
          lede: P('The Android app weighs 7.05 MB'),
          points: [
            P('Chapters load as you read'),
            P('Only the pages you have opened'),
            P('No third-party SDK slows down'),
          ],
          top: 30,
          buttons: [
            { label: 'Read the IDrok case study', action: { href: './idrok.html' } },
            { label: 'Visit idroklib.uz', action: { href: 'https://idroklib.uz' } },
          ],
        },
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    stops: [
      {
        shot: 'about-gate',
        content: {
          eyebrow: 'About',
          title: P('A small studio from Fergana'),
          lede: P('Nexora Studio is a team of engineers and designers.'),
          top: 18,
        },
      },
      {
        shot: 'about-story',
        content: {
          eyebrow: 'Our story',
          title: 'How we started.',
          lede: P('We started with problems we saw around us.'),
          points: [P('So we built Arise and IDrok ourselves'), P('In 2026 we opened Nexora Studio')],
          top: 26,
        },
      },
      {
        shot: 'about-principles',
        content: {
          eyebrow: 'How we work',
          title: 'What you can expect from us.',
          rows: [
            { title: 'You talk to the team.', text: P('You work directly with the designers') },
            { title: 'Small by design.', text: P('We take on a few projects at a time') },
            { title: 'Honest about limits.', text: P("If something can't be done well") },
            { title: 'We stay after launch.', text: P('Releases, monitoring and iteration') },
          ],
          top: 36,
        },
      },
      {
        shot: 'about-team',
        content: {
          eyebrow: 'Team',
          title: 'The people you will work with.',
          rows: [
            { titleRaw: 'Makhmud Nasriddinov', sub: 'Co-founder · CTO', text: P('Leads architecture and mobile development') },
            { titleRaw: 'Nurahmadov Xayrullo', sub: 'Co-founder · CAIO', text: P('Leads AI work.') },
            { titleRaw: 'Abduraximov Nizomiddin', sub: 'Co-founder · Design', text: P('Leads product design') },
          ],
          top: 36,
          buttons: [{ label: "We're hiring.", action: { href: `mailto:${EMAIL}?subject=Application%20%E2%80%94%20Nexora%20Studio` } }],
        },
      },
    ],
  },
  {
    id: 'journal',
    label: 'Journal',
    stops: [
      {
        shot: 'journal-overview',
        content: {
          eyebrow: 'Journal',
          title: 'Notes from our team.',
          lede: P('Notes from our team on performance'),
          top: 16,
        },
      },
      {
        shot: 'journal-1',
        content: {
          eyebrow: 'Engineering',
          title: 'Light, not stripped down',
          lede: P('The IDrok Android app weighs'),
          quote: P('Performance is a product decision'),
          author: '— Makhmud Nasriddinov, systems',
          top: 30,
          buttons: [{ label: 'Read the full note in our journal', action: { href: './journal.html#seven-mb' } }],
        },
      },
      {
        shot: 'journal-2',
        content: {
          eyebrow: 'Applied AI',
          title: 'Guardrails before magic',
          lede: P('Ari is the mentor inside Arise.'),
          quote: P('A mentor that admits the gap'),
          author: '— Nurahmadov Xayrullo, machine learning',
          top: 30,
          buttons: [{ label: 'Read the full note in our journal', action: { href: './journal.html#guardrails' } }],
        },
      },
      {
        shot: 'journal-3',
        content: {
          eyebrow: 'Studio',
          title: 'Two engagements per quarter',
          lede: P('Capacity is not a sales constraint.'),
          quote: P('A small studio is not a boutique aesthetic.'),
          author: '— Abduraximov Nizomiddin, design',
          top: 30,
          buttons: [{ label: 'Read the full note in our journal', action: { href: './journal.html#capacity' } }],
        },
      },
    ],
  },
  {
    id: 'estimate',
    label: 'Estimate',
    stops: [{
      shot: 'estimate',
      content: {
        eyebrow: 'Estimate',
        title: 'How long will your project take?',
        estimator: true,
        top: 40,
      },
    }],
  },
  {
    id: 'contact',
    label: 'Contact',
    stops: [
      {
        id: 'contact-main',
        shot: 'work-end',
        content: {
          eyebrow: 'Contact',
          title: "Have a product in mind? Let's talk.",
          big: true,
          lede: 'Tell us what you are building and when you need it. We reply within one working day.',
          top: 18,
          buttons: [
            { label: 'Start a project', primary: true, action: { stop: 'contact-brief' } },
            { label: 'Book a call', action: { stop: 'contact-call' } },
            { label: 'Write on Telegram', action: { href: 'https://t.me/nexorastudio_admin' } },
          ],
          points: [EMAIL],
          rawPoints: true,
        },
      },
      {
        id: 'contact-brief',
        shot: 'contact-brief',
        pane: 'brief',
        content: {
          eyebrow: 'Contact',
          title: 'Tell us about your project.',
          lede: "Tell us what you're building, who it's for and when it needs to exist. We reply within one working day.",
          points: [EMAIL, 'Telegram @nexorastudio_admin'],
          rawPoints: true,
          top: 22,
          compact: true,
        },
      },
      {
        id: 'contact-call',
        shot: 'contact-call',
        pane: 'call',
        content: {
          eyebrow: 'Intro call',
          title: 'Book a 20-minute call.',
          lede: 'Every day from 19:00 to 24:00 Fergana time (UTC+5). Pick a time that suits you; we send the call link by email.',
          top: 22,
          compact: true,
        },
      },
    ],
  },
];

export const NAV = [
  { label: 'Services', action: { place: 'services' } },
  { label: 'Work', action: { place: 'work' } },
  { label: 'About', action: { place: 'about' } },
  { label: 'Journal', action: { place: 'journal' } },
  { label: 'Contact', action: { place: 'contact' } },
];

// Timeline estimator: rough weeks from four answers (same model as estimate.html).
export const ESTIMATE = {
  questions: [
    { id: 'type', label: 'What are you building?', single: true, options: [['mobile', 'Mobile app'], ['web', 'Web platform'], ['ai', 'AI feature'], ['design', 'Design only']] },
    { id: 'platform', label: 'Where should it work?', options: [['ios', 'iOS'], ['android', 'Android'], ['web', 'Web'], ['admin', 'Admin panel']] },
    { id: 'feature', label: 'What should it do?', options: [['auth', 'Sign-in and profiles'], ['payments', 'Payments'], ['ai', 'AI assistant or chat'], ['offline', 'Works offline'], ['languages', 'Several languages'], ['notifications', 'Notifications']] },
    { id: 'stage', label: 'Where are you now?', single: true, options: [['idea', 'Just an idea'], ['designs', 'Designs are ready'], ['existing', 'Improving an existing product']] },
  ],
  BASE: { mobile: [6, 9], web: [5, 8], ai: [3, 5], design: [2, 4] },
  PLATFORM: { ios: 0, android: 1, web: 3, admin: 2 },
  FEATURE: { auth: 1, payments: 2, ai: 3, offline: 2, languages: 1, notifications: 1 },
  STAGE: { idea: 2, designs: -1, existing: 1 },
};

export function estimateWeeks(answers) {
  const type = answers.type?.[0];
  if (!type) return null;
  let [lo, hi] = ESTIMATE.BASE[type];
  const k = type === 'design' ? 0.5 : 1;
  let add = 0;
  (answers.platform || []).forEach((p) => { add += ESTIMATE.PLATFORM[p] * k; });
  if (type === 'mobile' && answers.platform?.includes('ios') && answers.platform?.includes('android')) add += 1;
  (answers.feature || []).forEach((f) => { add += ESTIMATE.FEATURE[f] * k; });
  if (answers.stage?.[0]) add += ESTIMATE.STAGE[answers.stage[0]];
  lo = Math.max(2, Math.round(lo + add));
  hi = Math.max(lo + 1, Math.round(hi + add * 1.3));
  return [lo, hi];
}
