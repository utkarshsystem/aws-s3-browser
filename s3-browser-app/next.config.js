const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['vcp-s3-browser-ui', 'vcp-s3-browser-plugin-ts'],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    // Resolve workspace package directly from source during local development
    config.resolve.alias['vcp-s3-browser-ui'] = path.resolve(__dirname, '../s3-browser-plugin-ui/index.ts');
    return config;
  },
};

module.exports = nextConfig;
