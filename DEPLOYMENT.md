# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js application to GitHub Pages and fix the common issue of broken images.

## Why Images Break on GitHub Pages

GitHub Pages doesn't support Next.js's built-in image optimization and routing system. When you deploy a Next.js app to GitHub Pages:

1. The app is served as static files from the root of your repository
2. Next.js Image components expect the app to be running on a Next.js server
3. Image paths like `/logo.png`, `/team/dillon.png`, etc. don't resolve correctly

## Solution: Static Export with Base Path

We've configured the app to:
- Export as static files (`output: 'export'`)
- Use the correct base path for GitHub Pages (`/mo-therapy`)
- Disable image optimization (`unoptimized: true`)
- Handle asset paths dynamically

## Deployment Steps

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Set source to "GitHub Actions"

### 2. Push Your Changes

The GitHub Actions workflow will automatically:
- Build your Next.js app
- Export it as static files
- Deploy to GitHub Pages

### 3. Verify Deployment

After deployment, your site should be available at:
`https://alexmassin.github.io/mo-therapy`

## How the Fix Works

### Base Path Configuration

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/mo-therapy' : '',
  images: {
    unoptimized: true,
  },
};
```

### Dynamic Asset Paths

```typescript
// src/lib/utils.ts
export function getAssetPath(path: string): string {
  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname === 'alexmassin.github.io';
    if (isGitHubPages) {
      return `/mo-therapy${path}`;
    }
  }
  return path;
}
```

### Updated Components

All image components now use `getImagePath()` to ensure correct paths in both development and production.

## Troubleshooting

### Images Still Broken?

1. Check that the GitHub Actions workflow completed successfully
2. Verify the base path in `next.config.ts` matches your repository name
3. Ensure all image components use `getImagePath()`
4. Clear browser cache and hard refresh

### Build Errors?

1. Check that `output: 'export'` is set in `next.config.ts`
2. Ensure all pages are compatible with static export
3. Remove any server-side only features

## Local Development

For local development, run:
```bash
npm run dev
```

The base path will be empty in development, so images will work normally.

## Production Build

For production builds:
```bash
npm run build
```

This will create an `out/` directory with static files ready for deployment.
