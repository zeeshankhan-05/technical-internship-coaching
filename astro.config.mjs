// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Update site URL in src/config/site.ts before production launch
const SITE_URL = 'https://PLACEHOLDER-DOMAIN.com';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
