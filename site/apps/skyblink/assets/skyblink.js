// Blink between two visits: fixed stars stay, the brown dwarf jumps.
const field = document.querySelector('.field');
const label = document.querySelector('[data-visit]');
if (field && label && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    const b = field.classList.toggle('b');
    label.textContent = b ? '2026-09-22' : '2025-04-29';
  }, 800);
}
