// Base path for GitHub Pages deployment
const BASE_PATH = '/mo-therapy';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Check if we're on GitHub Pages
const isGitHubPages = isBrowser && window.location.hostname === 'alexmassin.github.io';

export function getAssetPath(path: string): string {
  // If we're on GitHub Pages, prepend the base path
  if (isGitHubPages) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_PATH}${cleanPath}`;
  }
  
  // In development or other environments, return the path as-is
  return path;
}

export function getImagePath(path: string): string {
  return getAssetPath(path);
}

// Function that works in both client and server contexts
export function getAssetPathClient(path: string): string {
  return getAssetPath(path);
}

// Function to get the current base path
export function getBasePath(): string {
  return isGitHubPages ? BASE_PATH : '';
}
