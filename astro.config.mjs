// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Spanish is the canonical locale and is served at the root with no prefix.
  // English lives under /en/. The authoritative locale list lives in
  // src/i18n/locales.ts; this mirrors it for Astro's own routing helpers.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
