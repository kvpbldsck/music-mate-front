import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  base: '/music_project/',
  plugins: [
    react(),
    htmlMinifier({
      minify: true,
      removeComments: true,
      collapseWhitespace: true,
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
      },
    },
  },
});
