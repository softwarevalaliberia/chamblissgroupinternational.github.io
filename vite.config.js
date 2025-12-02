import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
});