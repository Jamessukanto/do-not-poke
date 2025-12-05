import { defineConfig } from 'vite';

export default defineConfig({
  base: '/do-not-poke/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

