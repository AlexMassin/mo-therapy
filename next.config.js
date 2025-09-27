/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/mo-therapy' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mo-therapy' : '',
  // Ensure static assets are properly handled
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
