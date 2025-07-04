import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  esbuild: {
    // Ensure JSX is properly handled
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
});
