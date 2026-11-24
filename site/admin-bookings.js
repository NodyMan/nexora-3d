// Studio console: upcoming intro calls booked from the contact page.
// Loads whenever the console is shown (after sign-in) and on Refresh.
(() => {
  const API = '/functions/v1/app/api/admin/bookings';
  const list = document.getElementById('admin-bookings');
  const count = document.getElementById('admin-bookings-count');
  const app = document.getElementById('admin-app');
  if (!list || !app) return;

  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };
  const when = (iso) => new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tashkent', weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));

  async function load() {
    let data = null;
    try {
      const response = await fetch(API, { credentials: 'same-origin' });
      if (!response.ok) return;
      data = await response.json();
    } catch (error) {
      return;
    }
    const rows = (data.bookings || []).filter((b) => b.status === 'booked');
    count.textContent = String(rows.length).padStart(2, '0');
    if (!rows.length) {
      list.replaceChildren(el('p', 'pcard__empty', 'No calls booked. Visitors book from the contact page (19:00–24:00 Fergana time).'));
      return;
    }
    list.replaceChildren(...rows.map((b) => {
      const row = el('div', 'arow');
      const main = el('div', 'arow__main');
      main.append(el('b', null, `${when(b.slot_start)} · ${b.name}`));
      const line = el('span');
      const mail = el('a', null, b.email);
      mail.href = `mailto:${b.email}`;
      line.append(mail, document.createTextNode(` · ${(b.locale || 'en').toUpperCase()} · 20 min, Fergana time`));
      main.append(line);
      if (b.topic) main.append(el('p', 'arow__message', b.topic));
      const side = el('div', 'arow__side');
      const cancel = el('button', 'pbtn pbtn--small', 'Cancel');
      cancel.type = 'button';
      cancel.addEventListener('click', async () => {
        if (!window.confirm(`Cancel the call with ${b.name} on ${when(b.slot_start)}? The slot opens again. Email them yourself to let them know.`)) return;
        cancel.disabled = true;
        try {
          const response = await fetch(`${API}/${b.id}/cancel`, { method: 'POST', credentials: 'same-origin' });
          if (response.ok) load();
          else cancel.disabled = false;
        } catch (error) {
          cancel.disabled = false;
        }
      });
      side.append(cancel);
      row.append(main, side);
      return row;
    }));
  }

  new MutationObserver(() => { if (!app.hidden) load(); }).observe(app, { attributes: true, attributeFilter: ['hidden'] });
  document.getElementById('admin-refresh')?.addEventListener('click', load);
  if (!app.hidden) load();
})();
