# Portfolio

Production-ready personal portfolio. Built with **Astro + TypeScript + Tailwind CSS v4**, output as fully static HTML — every section is crawlable, no JS required to read content.

## What's in the box

- **SSG (`output: 'static'`)** — fully pre-rendered HTML, all critical content visible without JS.
- **SEO** — per-page `title`/`description`, Open Graph + Twitter cards, canonical URLs, JSON-LD (`Person`, `WebSite`, per-project `CreativeWork`, home-page `ItemList`), `noindex` on 404.
- **Sitemap + robots.txt** — `@astrojs/sitemap` generates `sitemap-index.xml` automatically.
- **Per-project pages** — each project lives in `src/content/projects/*.md` and gets its own URL (`/projects/<slug>`) with its own metadata.
- **Performance** — Tailwind v4 (PurgeCSS-equivalent at build), HTML compression, prefetch on hover, near-zero JS, system-font fallback.
- **A11y** — semantic landmarks, skip-link, `prefers-reduced-motion`, proper heading hierarchy, focus rings.
- **Docker-ready** — multi-stage build → nginx alpine. Final image ~30MB.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serve the built site locally
```

Set `SITE_URL` to your canonical production URL when building so sitemap entries, `og:url`, and `<link rel="canonical">` are correct:

```bash
SITE_URL=https://yourdomain.com npm run build
```

## Customizing

All profile data lives in [`src/data/site.ts`](src/data/site.ts):
- `site` — name, role, tagline, email, location, etc.
- `social` — GitHub, LinkedIn, X, anything else.
- `skills` — grouped by category.
- `experience` — roles with highlights.

Projects are markdown files in `src/content/projects/`. Add a new file with the frontmatter schema defined in [`src/content.config.ts`](src/content.config.ts):

```yaml
---
title: My Project
tagline: One-line pitch (max 160 chars).
description: Long-form description used in JSON-LD.
stack: [TypeScript, Node.js]
year: 2025
featured: true
repo: https://github.com/...
demo: https://...
---

Markdown body — rendered on the project detail page.
```

Replace the favicon (`public/favicon.svg`) and OG image (`public/og-image.svg`) with your own. **Note:** SVG OG images render fine on Twitter/X and LinkedIn but Facebook prefers PNG. For maximum compatibility, export `og-image.svg` to a 1200×630 PNG and update `site.ogImage` in `src/data/site.ts`.

## Docker

```bash
docker build --build-arg SITE_URL=https://yourdomain.com -t portfolio .
docker run --rm -p 8080:8080 portfolio
```

The container runs nginx on port 8080 with sensible cache headers (immutable for hashed assets, `must-revalidate` for HTML, short TTL for the sitemap).

## Deployment

This site is fully static, so any host works:

- **Static hosts** — Netlify, Vercel, Cloudflare Pages: point them at `dist/`. Set `SITE_URL` in their env.
- **Container hosts** — Fly.io, Render, ECS, Cloud Run: use the `Dockerfile`.
- **CDN-first** — `aws s3 sync dist/ s3://bucket/ && aws cloudfront create-invalidation ...`.

## Project layout

```
src/
├── components/      # Section components (Hero, About, Skills, ...)
├── content/         # Markdown content collections
│   └── projects/
├── content.config.ts# Collection schema (Zod)
├── data/site.ts     # Profile data — single source of truth
├── layouts/         # BaseLayout (HTML shell + SEO)
├── pages/           # File-based routes
│   ├── index.astro
│   ├── 404.astro
│   └── projects/[...slug].astro
└── styles/global.css
public/              # Static assets served as-is
astro.config.mjs
nginx.conf           # Production nginx config (used by Dockerfile)
Dockerfile
```

## License

MIT.
# my-portfolio
