import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set this to the canonical production URL — used for sitemap, og:url, canonical tags.
// Override at build time with `SITE_URL=... npm run build` if needed.
const SITE_URL = process.env.SITE_URL ?? 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  compressHTML: true,
});
