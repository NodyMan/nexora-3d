/* --------------------------------------------------------------------------
   Nexora Studio — project timeline estimator (estimate.html, [data-estimator]).
   A rough timeline in weeks from four answers. No prices: the studio confirms
   scope, timeline and cost after the intro call. "Send as a brief" carries the
   answers to the contact form.
   -------------------------------------------------------------------------- */

import { t } from './i18n.js';

// Weeks [low, high] for each answer. Kept deliberately simple and readable.
const BASE = { mobile: [6, 9], web: [5, 8], ai: [3, 5], design: [2, 4] };
const PLATFORM = { ios: 0, android: 1, web: 3, admin: 2 };
const FEATURE = { auth: 1, payments: 2, ai: 3, offline: 2, languages: 1, notifications: 1, integrations: 2, maps: 1 };
const STAGE = { idea: 2, designs: -1, existing: 1 };
const TYPE_FOR_FORM = { mobile: 'Mobile app', web: 'Web platform', ai: 'AI product', design: 'Brand & site' };

export function mountEstimator(form) {
  const out = {
    total: form.querySelector('[data-est-total]'),
    design: form.querySelector('[data-est-design]'),
    build: form.querySelector('[data-est-build]'),
    launch: form.querySelector('[data-est-launch]'),
    note: form.querySelector('[data-est-note]'),
  };

  const labelOf = (input) => input.closest('label')?.querySelector('[data-label]')?.textContent.trim() || input.value;

  function compute() {
    const type = form.type.value;
    if (!type) return null;
    let [lo, hi] = BASE[type];
    const platforms = [...form.querySelectorAll('input[name="platform"]:checked')];
    const features = [...form.querySelectorAll('input[name="feature"]:checked')];
    const stage = form.stage.value;
    // Design-only work grows more slowly with scope than a full build.
    const k = type === 'design' ? 0.5 : 1;
    let add = 0;
    platforms.forEach((p) => { add += PLATFORM[p.value] * k; });
    // A mobile app on both stores shares one codebase: the second platform costs about a week.
    if (type === 'mobile' && platforms.some((p) => p.value === 'ios') && platforms.some((p) => p.value === 'android')) add += 1;
    features.forEach((f) => { add += FEATURE[f.value] * k; });
    if (stage) add += STAGE[stage];
    lo = Math.max(2, Math.round(lo + add));
    hi = Math.max(lo + 1, Math.round(hi + add * 1.3));
    const part = (share) => [Math.max(1, Math.round(lo * share)), Math.max(1, Math.round(hi * share))];
    return {
      lo, hi, type, stage, platforms, features,
      design: type === 'design' ? [lo, hi] : part(0.25),
      build: type === 'design' ? null : part(0.6),
      launch: type === 'design' ? null : [1, 2],
    };
  }

  const range = ([a, b]) => (a === b ? `${a}` : `${a}–${b}`);
  const weeks = (r) => `${range(r)} ${t('weeks')}`;

  function render() {
    const r = compute();
    form.classList.toggle('has-result', Boolean(r));
    if (!r) return;
    out.total.textContent = `${range([r.lo, r.hi])}`;
    out.design.textContent = weeks(r.design);
    out.build.closest('li').hidden = !r.build;
    out.launch.closest('li').hidden = !r.launch;
    if (r.build) out.build.textContent = weeks(r.build);
    if (r.launch) out.launch.textContent = weeks(r.launch);
  }

  function brief() {
    const r = compute();
    if (!r) return null;
    const typeInput = form.querySelector('input[name="type"]:checked');
    const stageInput = form.querySelector('input[name="stage"]:checked');
    const lines = [
      `${t('Project')}: ${labelOf(typeInput)}`,
      r.platforms.length ? `${t('Platforms')}: ${r.platforms.map(labelOf).join(', ')}` : '',
      r.features.length ? `${t('Features')}: ${r.features.map(labelOf).join(', ')}` : '',
      stageInput ? `${t('Where we are')}: ${labelOf(stageInput)}` : '',
      `${t('Rough timeline from the estimator')}: ${range([r.lo, r.hi])} ${t('weeks')}`,
    ].filter(Boolean);
    return { projectType: TYPE_FOR_FORM[r.type], message: lines.join('\n') };
  }

  // Phones: the result card sits below the questions, so a small bar keeps the
  // timeline in sight while the visitor picks answers.
  const result = form.querySelector('.est-result');
  const bar = document.createElement('a');
  bar.className = 'est-bar';
  bar.href = '#';
  bar.setAttribute('data-no-i18n', '');
  bar.addEventListener('click', (event) => { event.preventDefault(); result.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  document.body.append(bar);
  let resultVisible = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { resultVisible = entry.isIntersecting; sync(); }).observe(result);
  }
  function sync() {
    const r = compute();
    bar.classList.toggle('is-on', Boolean(r) && !resultVisible);
    if (r) bar.textContent = `${t('Rough timeline')}: ${range([r.lo, r.hi])} ${t('weeks')} ↓`;
  }

  form.addEventListener('change', render);
  form.addEventListener('change', sync);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = brief();
    if (!data) {
      form.querySelector('input[name="type"]')?.focus();
      return;
    }
    try { sessionStorage.setItem('nx-brief', JSON.stringify(data)); } catch (error) { /* private mode */ }
    window.location.href = './contact.html#contact-form';
  });
  render();
}
