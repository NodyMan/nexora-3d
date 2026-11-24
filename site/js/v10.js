/* --------------------------------------------------------------------------
   v10 boot: language, the 3D world, the form panels, and the way back to
   the classic site.

   The brief form and the call booking are real HTML (keyboards, autofill and
   screen readers need that) shown as glass panels standing in the scene:
   each belongs to a chapter and slides in as the camera arrives there.
   main.js drives the brief form, booking.js the call booking, exactly as on
   the classic contact page.
   -------------------------------------------------------------------------- */

import { t, getLang, setLang } from './i18n.js';

const html = document.documentElement;
const canvas = document.querySelector('canvas.world');
const panes = [...document.querySelectorAll('[data-pane]')];

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (error) {
    return false;
  }
}

function fail(reason) {
  // No WebGL, a lost GPU context, or too slow even on the lowest quality.
  console.warn('3D site unavailable:', reason);
  html.classList.add('no-3d');
  if (reason === 'slow') window.location.replace('./classic.html');
}

// Panels follow the journey: fully in at their chapter, sliding and fading
// out over the half chapter on either side.
function placePanes(s, stops) {
  panes.forEach((pane) => {
    const index = stops.findIndex((st) => st.pane === pane.dataset.pane);
    const d = s - index;
    const a = Math.max(0, 1 - Math.abs(d) * 2.2);
    const on = a > 0.02;
    if (pane.classList.contains('is-on') !== on) {
      pane.classList.toggle('is-on', on);
      if (!on && pane.contains(document.activeElement)) document.activeElement.blur();
    }
    pane.style.opacity = on ? String(a) : '';
    pane.style.setProperty('--slide', `${(d * 120).toFixed(1)}px`);
  });
}

// The estimator's answers arrive here and fill the brief.
window.addEventListener('nexora:brief', (e) => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const { projectType, message } = e.detail || {};
  const type = form.elements.projectType;
  if (type && [...type.options].some((o) => o.value === projectType)) type.value = projectType;
  form.elements.message.value = String(message || '').slice(0, 4000);
  form.elements.message.dispatchEvent(new Event('input', { bubbles: true }));
});

if (!hasWebGL()) {
  fail('webgl');
} else {
  import('./fx10/app.js')
    .then(({ mountSite }) => mountSite(canvas, {
      lang: getLang,
      t,
      onReady: ({ tier }) => { html.classList.add('is-ready'); html.dataset.tier = tier; },
      onFail: fail,
      onFrame: placePanes,
      onPlace: (place) => {
        const url = new URL(window.location.href);
        if (place === 'home') url.searchParams.delete('p');
        else url.searchParams.set('p', place);
        history.replaceState(null, '', url);
      },
    }))
    .then((site) => {
      if (!site) return;
      window.nexora = site;
      window.addEventListener('nexora:lang', (e) => {
        setLang(e.detail);
        site.retranslate();
      });
      import('./sound.js').then((sound) => {
        window.addEventListener('nexora:hover', () => sound.blip('hover'));
        window.addEventListener('nexora:click', () => sound.blip('click'));
        window.addEventListener('nexora:screen-shown', () => sound.blip('screen'));
      }).catch(() => {});
    })
    .catch((error) => { console.error(error); fail('load'); });
}

// Call booking: same widget and API as the classic contact page.
const booking = document.querySelector('[data-booking]');
if (booking) import('./booking.js').then(({ mountBooking }) => mountBooking(booking)).catch(() => {});
