// Vercel Routing Middleware: serves the product sites on their own subdomains.
//   arise.nexorastudio.world/...     -> site/apps/arise/...
//   skyblink.nexorastudio.world/...  -> site/apps/skyblink/...
// The main site is untouched. On the main domain, /apps/<name>/... redirects to the subdomain,
// so each product page has one public address.
const SITES = {
  'arise.nexorastudio.world': '/apps/arise',
  'skyblink.nexorastudio.world': '/apps/skyblink',
};

export const config = { matcher: '/:path*' };

const next = () => new Response(null, { headers: { 'x-middleware-next': '1' } });

export default function middleware(request) {
  const url = new URL(request.url);
  const base = SITES[url.hostname];
  if (base) {
    if (url.pathname.startsWith(base + '/')) return next();
    url.pathname = base + url.pathname;
    return new Response(null, { headers: { 'x-middleware-rewrite': url.toString() } });
  }
  const m = url.pathname.match(/^\/apps\/(arise|skyblink)(\/.*)?$/);
  if (m) return Response.redirect(`https://${m[1]}.nexorastudio.world${m[2] || '/'}${url.search}`, 308);
  return next();
}
