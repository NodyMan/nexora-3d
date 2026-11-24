-- Nexora Studio: contact intake, client portal and studio console.
-- Only the server (Vercel function with the Supabase secret key) reads or
-- writes these tables. Row Level Security is on with no policies, so the
-- public anon key cannot see anything.

create table public.inquiries (
  id uuid primary key,
  name text not null,
  email text not null,
  company text not null default '',
  project_type text not null default '',
  budget text not null default '',
  message text not null,
  locale text not null default 'en',
  created_at timestamptz not null default now()
);
create index inquiries_email_created_idx on public.inquiries (email, created_at desc);

create table public.portal_clients (
  id uuid primary key,
  name text not null,
  company text not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table public.portal_access_codes (
  id uuid primary key,
  client_id uuid not null references public.portal_clients (id) on delete cascade,
  code_hash text not null,
  expires_at timestamptz not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);
create index portal_access_codes_client_idx on public.portal_access_codes (client_id, code_hash);

create table public.portal_sessions (
  token_hash text primary key,
  client_id uuid references public.portal_clients (id) on delete cascade,
  role text not null check (role in ('client', 'admin')),
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

-- Dates stay as text: the console sends '' for "no date".
create table public.portal_projects (
  id uuid primary key,
  client_id uuid not null references public.portal_clients (id) on delete cascade,
  name text not null,
  summary text not null default '',
  status text not null default 'discovery' check (status in ('discovery', 'building', 'review', 'live', 'paused')),
  phase text not null default '',
  progress integer not null default 0 check (progress between 0 and 100),
  start_date text not null default '',
  target_date text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index portal_projects_client_idx on public.portal_projects (client_id, created_at);

create table public.portal_updates (
  id uuid primary key,
  client_id uuid not null references public.portal_clients (id) on delete cascade,
  project_id uuid references public.portal_projects (id) on delete set null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
create index portal_updates_client_idx on public.portal_updates (client_id, created_at desc);

create table public.portal_invoices (
  id uuid primary key,
  client_id uuid not null references public.portal_clients (id) on delete cascade,
  project_id uuid references public.portal_projects (id) on delete set null,
  number text not null,
  amount bigint not null check (amount >= 0),
  currency text not null check (currency in ('UZS', 'USD', 'EUR')),
  status text not null default 'sent' check (status in ('draft', 'sent', 'paid', 'overdue')),
  issued_date text not null,
  due_date text not null default '',
  note text not null default '',
  created_at timestamptz not null default now()
);
create index portal_invoices_client_idx on public.portal_invoices (client_id, created_at desc);

create table public.portal_files (
  id uuid primary key,
  client_id uuid not null references public.portal_clients (id) on delete cascade,
  project_id uuid references public.portal_projects (id) on delete set null,
  name text not null,
  object_path text not null unique,
  size bigint not null,
  content_type text not null,
  status text not null default 'pending' check (status in ('pending', 'ready')),
  created_at timestamptz not null default now()
);
create index portal_files_client_idx on public.portal_files (client_id, created_at desc);

-- Failed console sign-ins, to pause guessing after too many tries.
create table public.admin_login_failures (
  id uuid primary key,
  ip_hash text not null,
  created_at timestamptz not null default now()
);
create index admin_login_failures_ip_idx on public.admin_login_failures (ip_hash, created_at);

alter table public.inquiries enable row level security;
alter table public.portal_clients enable row level security;
alter table public.portal_access_codes enable row level security;
alter table public.portal_sessions enable row level security;
alter table public.portal_projects enable row level security;
alter table public.portal_updates enable row level security;
alter table public.portal_invoices enable row level security;
alter table public.portal_files enable row level security;
alter table public.admin_login_failures enable row level security;

-- Belt and braces: the public keys get no table rights at all.
revoke all on public.inquiries, public.portal_clients, public.portal_access_codes, public.portal_sessions,
  public.portal_projects, public.portal_updates, public.portal_invoices, public.portal_files,
  public.admin_login_failures from anon, authenticated;

-- Private bucket for files shared with clients (25 MB each, signed links only).
insert into storage.buckets (id, name, public, file_size_limit)
values ('portal-files', 'portal-files', false, 26214400)
on conflict (id) do nothing;

-- Console logins: usernames and PBKDF2 password hashes. The first login is
-- created on the console page with a one-time setup code.
create table public.admin_users (
  username text primary key check (username ~ '^[a-z0-9._-]{3,32}$'),
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table public.admin_setup_codes (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  expires_at timestamptz not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.admin_setup_codes enable row level security;
revoke all on public.admin_users, public.admin_setup_codes from anon, authenticated;
