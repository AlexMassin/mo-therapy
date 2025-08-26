import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This script fixes asset paths after Next.js static export
// It ensures images and other assets are accessible at the correct paths for GitHub Pages

const outDir = path.join(process.cwd(), 'out');
const basePath = '/mo-therapy';

console.log('🔧 Fixing asset paths for GitHub Pages deployment...');

// Function to update HTML files to use correct asset paths
function updateHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip the mo-therapy directory to avoid infinite recursion
      if (entry.name !== 'mo-therapy') {
        updateHtmlFiles(fullPath);
      }
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Update image paths to include base path
      content = content.replace(
        /src="\/([^"]*\.(png|jpg|jpeg|gif|svg|ico))"/g,
        `src="${basePath}/$1"`
      );
      
      // Update other asset paths
      content = content.replace(
        /href="\/([^"]*\.(css|js|woff2))"/g,
        `href="${basePath}/$1"`
      );
      
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Updated: ${fullPath}`);
    }
  }
}

try {
  // Update HTML files to use correct paths
  console.log('🔍 Updating HTML files...');
  updateHtmlFiles(outDir);

  console.log('✅ Asset paths fixed successfully!');
  console.log(`🌐 Your site will be accessible at: https://alexmassin.github.io${basePath}`);
  console.log('📝 Note: Make sure to deploy the entire "out" directory to GitHub Pages');
  
} catch (error) {
  console.error('❌ Error fixing asset paths:', error);
  process.exit(1);
}
