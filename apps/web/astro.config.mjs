import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://baragji.github.io/techflow-solutions',
  base: '/techflow-solutions',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      assetsDir: 'assets'
    }
  },
  compressHTML: true,
  trailingSlash: 'never'
});