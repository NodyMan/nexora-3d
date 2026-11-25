document.documentElement.classList.remove('no-js');
const top = document.querySelector('.top');
const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, {passive: true}); onScroll();
const tabs = [...document.querySelectorAll('.tab')];
const img = document.getElementById('viewer-img');
if (tabs.length && img) {
  const pick = (t, focus) => {
    tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
    if (focus) t.focus();
    img.style.opacity = 0;
    setTimeout(() => { img.src = t.dataset.src; img.alt = t.dataset.alt; img.style.opacity = 1; }, 140);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', e => {
      const d = {ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1}[e.key];
      if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  // Preload the other screens so switching is instant.
  tabs.forEach(t => { const i = new Image(); i.src = t.dataset.src; });
}
