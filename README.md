# Nexora Studio — website

**Source of [nexorastudio.world](https://nexorastudio.world), the site of Nexora Studio, a small product studio in Fergana, Uzbekistan that builds mobile apps, web platforms and applied AI.**

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## What's on the site

- **Pages:** home, services, work, team, journal, contact, a project estimator and privacy, plus case studies for **Arise**, **IDrok** and **SkyBlink** (NASA Space Apps 2026).
- **Motion design:** scroll-driven animation with GSAP, ScrollTrigger and Lenis, plus WebGL backgrounds. It respects `prefers-reduced-motion`.
- **Chat assistant:** "Ask Nexora" answers questions about the studio (`api/chat.mjs`, using Claude).
- **Lead tools:** a project brief form, call booking and a cost estimator, with email confirmations sent through Resend.
- **Client portal and admin console** (`portal.html`, `admin.html`): access codes, project progress, invoices and file delivery, backed by Supabase.
- **Hardened deployment:** security headers, redirects for old addresses and `noindex` on private pages (`vercel.json`).

## Project layout

```
site/        the deployed static site (HTML, CSS, JS, assets)
tools/       build_v11.py generates every page in site/; content lives in it and v11_content.py
api/         Vercel Functions: chat assistant, contact form, confirmation emails
supabase/    database migrations and the portal's Edge Function
functions/   portal and admin routes
src*/, lab/  sources and experiments for the 3D and motion layers
dev/         local server with an in-memory store for testing portal and admin
```

## Editing pages

Pages are generated, so don't edit `site/*.html` by hand. Change `tools/build_v11.py` (or `tools/v11_content.py` for journal articles), then rebuild:

```bash
python tools/build_v11.py
```

## Run locally

```bash
node dev/server.mjs   # site plus portal/admin routes on demo data
```

## Deploy

Every push to `main` deploys to Vercel; `site/` is the output folder. The functions read these environment variables: `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` and `SUPABASE_URL`.

## Team

| Member | Role |
|---|---|
| **Nody** | Co-founder · CTO: architecture and mobile development |
| **Nurahmadov Xayrullo** | Co-founder · CAIO: applied AI |
| **Abduraximov Nizomiddin** | Co-founder · Design: product design and visual identity |
| **Muhammadali Abdurahmanov** | Investor · Developer: has built and backed several startups, including [Celamur](https://celamur.com) |
| **Bahodir Toshtemirov** | AI-native developer: the studio's resident vibe-coder; studied at iTeach |

---

[nexorastudio.world](https://nexorastudio.world) · support@nexorastudio.world
