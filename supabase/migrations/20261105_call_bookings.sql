-- Intro calls booked from the contact page (daily 19:00–24:00 Fergana time).
-- Same rules as the other site tables: only the server reads or writes them.

create table public.call_bookings (
  id uuid primary key,
  name text not null,
  email text not null,
  topic text not null default '',
  locale text not null default 'en',
  slot_start timestamptz not null,
  status text not null default 'booked' check (status in ('booked', 'cancelled')),
  created_at timestamptz not null default now()
);
-- One live booking per slot; a cancelled slot can be booked again.
create unique index call_bookings_slot_live_idx on public.call_bookings (slot_start) where status = 'booked';
create index call_bookings_email_idx on public.call_bookings (email, slot_start);

alter table public.call_bookings enable row level security;
revoke all on public.call_bookings from anon, authenticated;
