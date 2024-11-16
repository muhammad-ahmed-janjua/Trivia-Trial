import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()], // Use TailwindCSS and autoprefixer
    },
  },
  plugins: [
    vue(), // Add Vue plugin for .vue file handling
  ],
  server: {
    port: 3000, // Dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Proxy API requests to backend
        changeOrigin: true, // Change the origin of the request to the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/api" from the request path
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Resolve "@" to the "src" directory
    },
  },
  build: {
    outDir: 'dist', // Specify output directory for the build
    rollupOptions: {
      input: fileURLToPath(new URL('./src/main.ts', import.meta.url)), // Entry point for the application
    },
    emptyOutDir: true, // Clear the output directory before each build
  },
});