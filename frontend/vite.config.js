import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
    // This helps with client-side routing in development
    historyApiFallback: true,
  },
  // Ensure proper build output
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Copy _redirects file to dist folder during build
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  // Important: This ensures that in production, all routes fall back to index.html
  preview: {
    historyApiFallback: true,
  },
  // Copy public files including _redirects
  publicDir: 'public'
});