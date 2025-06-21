import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yousef-1.github.io',
  base: '/techflow-solutions',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  },
  compressHTML: true
});