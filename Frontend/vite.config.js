import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Vue plugin for handling .vue files
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // TailwindCSS for styling
        autoprefixer(), // Autoprefixer for vendor prefixing
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Resolve "@" to "src" directory
    },
  },
  server: {
    port: process.env.VITE_DEV_SERVER_PORT || 3000, // Use port from environment variable or fallback to 3000
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'http://localhost:5000', // Backend API URL
        changeOrigin: true, // Change request origin to match target
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/api" from the request path
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for production builds
    emptyOutDir: true, // Clear output directory before building
    rollupOptions: {
      input: fileURLToPath(new URL('./src/main.ts', import.meta.url)), // Main entry point
    },
  },
  base: '/', // Base URL for the app (use "/" for Vercel deployments)
});