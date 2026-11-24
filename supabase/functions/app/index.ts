// Supabase Edge Function "app": the client portal, the studio console and
// brief storage. The routes are functions/routes.mjs (deployed next to this
// file as routes.mjs); Supabase provides SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY to every Edge Function, so no key is copied by hand.
// The site reaches it through vercel.json:
//   /functions/v1/app/api/*  ->  https://<project>.supabase.co/functions/v1/app/api/*

import { createClient } from 'npm:@supabase/supabase-js@2.117.3';
import { application } from './routes.mjs';

const BUCKET = 'portal-files';

class BackendError extends Error {
  code: string;
  status: number;
  constructor(code: string, status: number) {
    super(code);
    this.code = code;
    this.status = status;
  }
}

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const bucket = () => supabase.storage.from(BUCKET);
const missing = () => Object.assign(new Error('not found'), { code: 'storage_object_not_found' });

// The routes expect plain results from storage, and a fetch Response for downloads.
const storage = {
  async createSignedUrl(path: string, seconds: number) {
    const { data, error } = await bucket().createSignedUrl(path, seconds);
    if (error) throw error;
    return data;
  },
  async createSignedUploadUrl(path: string, options: { upsert?: boolean }) {
    const { data, error } = await bucket().createSignedUploadUrl(path, options);
    if (error) throw error;
    return data;
  },
  async download(path: string) {
    const { data, error } = await bucket().createSignedUrl(path, 60);
    if (error) throw /not.?found/i.test(error.message || '') ? missing() : error;
    const response = await fetch(data.signedUrl);
    if (response.status === 400 || response.status === 404) throw missing();
    return response;
  },
};

const handle = application({ db: supabase, storage, BackendError, env: (name: string) => Deno.env.get(name) });

Deno.serve(async (request: Request) => {
  try {
    return await handle({ request });
  } catch (error) {
    if (error instanceof BackendError) return json({ error: error.code }, error.status || 400);
    console.error('app: unexpected error', (error as Error)?.message || error);
    return json({ error: 'server_error' }, 500);
  }
});
