import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://seloraa.com',
  output: 'static',
  integrations: [tailwind(), react()],
  typescript: {
    ignoreBuildErrors: true
  },
  server: {
    host: true,
    port: 3000
  }
});