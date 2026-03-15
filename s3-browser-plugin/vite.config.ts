import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'VcpS3BrowserUI',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'aws-amplify',
        'aws-amplify/auth',
        'aws-amplify/utils',
        '@aws-amplify/ui-react',
        '@aws-amplify/ui-react-storage',
        '@aws-amplify/ui-react-storage/browser',
        '@aws-amplify/ui-react-storage/styles.css',
        'vcp-s3-browser-plugin-ts',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'aws-amplify': 'AwsAmplify',
          '@aws-amplify/ui-react': 'AwsAmplifyUiReact',
          '@aws-amplify/ui-react-storage': 'AwsAmplifyUiReactStorage',
        },
      },
    },
  },
});
