// Simple test file to verify utility functions
// This is not a formal test suite, just for verification

import { getAssetPath, getImagePath } from './utils';

// Mock window.location for testing
const mockWindowLocation = (hostname: string) => {
  Object.defineProperty(window, 'location', {
    value: { hostname },
    writable: true,
  });
};

// Test cases
console.log('Testing utility functions...');

// Test development environment (no window)
console.log('Development (no window):', getAssetPath('/logo.png')); // Should return '/logo.png'

// Test GitHub Pages environment
if (typeof window !== 'undefined') {
  mockWindowLocation('alexmassin.github.io');
  console.log('GitHub Pages:', getAssetPath('/logo.png')); // Should return '/mo-therapy/logo.png'
  
  mockWindowLocation('localhost');
  console.log('Localhost:', getAssetPath('/logo.png')); // Should return '/logo.png'
}

console.log('Utility function tests completed.');
