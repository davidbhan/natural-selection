import { defineConfig } from 'vite';

export default defineConfig({
  base: '/natural-selection/',
  oxc: { jsx: { runtime: 'classic' } },
  build: { outDir: 'build' },
});
