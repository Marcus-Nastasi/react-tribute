import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  build: {
   rollupOptions: {
     input: {
         main: resolve(__dirname, 'index.html'),
         publi: resolve(__dirname, '/pages/publi.html'), 
         create: resolve(__dirname, '/pages/create.html'),
         edit: resolve(__dirname, '/pages/edit.html'),
      },
   },
 },
});

