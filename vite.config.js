import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  base: './',
  plugins: [react(), compression()],
  build: {
    outDir: 'dist',               // ensure it still spits into dist/
    emptyOutDir: true,            // clear previous builds
    rollupOptions: {
      input: './index.html'       
    }
  }
});
 