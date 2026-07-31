import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://candelanuzzolese.github.io',
  base: process.env.ASTRO_BASE || '/leonardoferrucci',
  integrations: [mdx()],
});
