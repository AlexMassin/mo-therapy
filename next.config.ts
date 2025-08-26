import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mo-therapy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/mo-therapy',
  // Ensure static assets are copied correctly
  distDir: 'out',
};

export default nextConfig;
