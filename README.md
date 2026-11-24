# Nexora Studio — website

**Source of [nexorastudio.world](https://nexorastudio.world), the site of Nexora Studio, a small product studio in Fergana, Uzbekistan that builds mobile apps, web platforms and applied AI.**

It has an interactive 3D hero, three languages, a project archive, and a private client portal with an admin console behind it.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## Features

- **3D scene:** a Three.js field of glass and metal shapes around a silver Nexora logo, which reacts to scroll and the pointer. It respects `prefers-reduced-motion`.
- **Pages:** Home, Studio, Work (Arise, DigitalLib), Team, Journal and Contact.
- **Languages:** English, Russian and Uzbek, switched on the page.
- **Client portal (`/portal`):** clients sign in with a single-use access code to see project progress, updates, invoices and shared files.
- **Admin console (`/admin`):** manage inquiries, clients, access codes, projects, invoices and file uploads.
- **Contact form:** validated on the server and delivered by email (Resend) on Vercel.
- **Hardened headers:** HSTS, `nosniff`, frame and permissions policies, and `noindex` on the portal and admin pages (see `vercel.json`).

## Project layout

```
site/        the static site that gets deployed (HTML, CSS, JS, assets)
src/         readable source of the site scripts (3D scene, i18n, portal, admin)
api/         Vercel Function: contact form -> email
functions/   backend routes for the portal and admin (sessions, clients, invoices, files)
dev/         local server with an in-memory store for testing the portal and admin
vercel.json  output folder, rewrites and security headers
```

## Run locally

```bash
node dev/server.mjs      # http://localhost:4173, with the site plus portal/admin routes on demo data
```

No build step is needed: `site/` is served as it is.

## Deploy

Vercel serves `site/` (`outputDirectory` in `vercel.json`). For the contact form, set these environment variables: `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, plus `CONTACT_FROM_EMAIL` if you want a custom sender. The portal backend reads its admin code from the `PORTAL_ADMIN` secret.

---

Built by [Nody](https://github.com/NodyMan) · [Nexora Studio](https://nexorastudio.world)
