import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  
  esbuild: {
    jsxFactory: 'jsx',
  },
  server: {
    // host: true,
    // open: true,
    port: 4000,
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
    },
  },
});

