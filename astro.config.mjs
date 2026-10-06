// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL to your real domain once deployed (used for canonical + Open Graph URLs).
const SITE_URL = process.env.SITE_URL || undefined;

export default defineConfig({
  site: SITE_URL,
  build: {
    format: 'file',            // /work/campus-sphere.html → served at /work/campus-sphere
    inlineStylesheets: 'always' // one request per page, no render-blocking CSS file
  },
  trailingSlash: 'never',
  devToolbar: { enabled: false }
});
