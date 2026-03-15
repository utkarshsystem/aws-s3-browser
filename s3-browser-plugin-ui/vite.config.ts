import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    port: 3001,
  },
  ...(command === 'build' ? {
    build: {
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        name: 'VcpS3BrowserUI',
        fileName: 'index',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'vcp-s3-browser-plugin-ts'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  } : {}),
}));
