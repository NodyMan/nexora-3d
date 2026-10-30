import { createField } from './field.js';

/* --------------------------------------------------------------------------
   Client portal — kinetic field behind the sign-in screen.
   Loaded as its own module so the portal's sign-in bundle stays small and
   unchanged. The canvas lives inside the sign-in section, so it disappears
   (and pauses) once the dashboard opens.
   -------------------------------------------------------------------------- */

const login = document.getElementById('portal-login');

if (login) {
  const canvas = document.createElement('canvas');
  canvas.className = 'plogin__field';
  canvas.setAttribute('aria-hidden', 'true');
  login.prepend(canvas);
  createField(canvas, {
    count: window.innerWidth < 720 ? 10 : 18,
    viewport: true,
    // Spill out past the top-right corner of the sign-in card on wide screens,
    // and sit above the headline on phones.
    anchor: (camera) => (camera.aspect > 1.1 ? { x: 8.2, y: 3.6 } : { x: 1.5, y: 5.8 }),
  });
}
