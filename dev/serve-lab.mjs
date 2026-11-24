// Local sandbox for experiments: the same static server and routes as
// dev/server.mjs, pointed at lab/ on its own port. Nothing here is deployed.
process.env.SITE_DIR ||= 'lab';
process.env.PORT ||= '4200';
await import('./server.mjs');
