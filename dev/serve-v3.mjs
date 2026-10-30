// Local QA server for site-v3: the same static server and business routes as
// dev/server.mjs, pointed at the new site.
process.env.SITE_DIR ||= 'site-v3';
process.env.PORT ||= '4190';
await import('./server.mjs');
