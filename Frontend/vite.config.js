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
    port: parseInt(process.env.VITE_DEV_SERVER_PORT) || 3000, // Dev server port
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL, // Proxy API requests to backend
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