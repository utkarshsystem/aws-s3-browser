import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve workspace package directly from source to avoid needing a dist build locally
      'vcp-s3-browser-ui': resolve(__dirname, '../s3-browser-plugin/index.ts'),
    },
  },
});
