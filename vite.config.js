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
         nested: resolve(__dirname, `users.html`),      
      },
   },
 },
});



