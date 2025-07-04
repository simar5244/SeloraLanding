import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    build: {
      target: 'esnext',
      sourcemap: true,
    },
    ssr: {
      // Ensure external packages are properly bundled
      noExternal: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
      },
    },
  },
});