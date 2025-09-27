/**
 * Asset path utility for GitHub Pages deployment
 * Handles the base path configuration for static assets
 */

/**
 * Get the correct asset path for images, videos, and other static assets
 * @param path - The asset path starting with '/' (e.g., '/images/hero.jpg')
 * @returns The correct path with base path prefix for GitHub Pages
 */
export function getAssetPath(path: string): string {
  // For GitHub Pages, we need to manually add the base path
  // since Next.js Image component doesn't automatically handle it for static exports
  const basePath = '/mo-therapy';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as-is
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), prepend the base path
  return `${basePath}/${cleanPath}`;
}

/**
 * Get the correct asset path for Next.js Image component
 * @param path - The asset path starting with '/' (e.g., '/images/hero.jpg')
 * @returns The correct path for Next.js Image component
 */
export function getImagePath(path: string): string {
  return getAssetPath(path);
}

/**
 * Get the correct asset path for video elements
 * @param path - The video path starting with '/' (e.g., '/videos/hero.mp4')
 * @returns The correct path for video elements
 */
export function getVideoPath(path: string): string {
  return getAssetPath(path);
}
