export function getAssetPath(path: string): string {
  // In production (GitHub Pages), we need to include the base path
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'alexmassin.github.io';
    if (isGitHubPages) {
      return `/mo-therapy${path}`;
    }
  }
  
  // Development or other environments
  return path;
}

export function getImagePath(path: string): string {
  return getAssetPath(path);
}
