import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://techrix.dk',
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