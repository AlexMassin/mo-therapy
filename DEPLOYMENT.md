# M.O. Therapy - GitHub Pages Deployment Guide

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### 3. Update Repository Name
**Important:** Update the `basePath` and `assetPrefix` in `next.config.js` to match your repository name:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

### 4. Update Site URLs
Update the `siteUrl` in `next-sitemap.config.js`:
```javascript
siteUrl: process.env.SITE_URL || 'https://yourusername.github.io/your-repo-name',
```

## 📂 What's Configured

### ✅ Next.js Static Export
- `output: 'export'` for static generation
- `images: { unoptimized: true }` for GitHub Pages compatibility
- `trailingSlash: true` for proper routing

### ✅ GitHub Actions Workflow
- Automatically builds and deploys on push to main
- Uses Node.js 18 with npm caching
- Deploys to GitHub Pages

### ✅ GitHub Pages Optimization
- `.nojekyll` file to prevent Jekyll processing
- Proper asset paths for subdirectory hosting
- SEO-optimized sitemap generation

## 🌐 Your Site Will Be Available At:
```
https://yourusername.github.io/your-repo-name
```

## 🔧 Local Testing
Test the static build locally:
```bash
npm run build
npx serve out
```

## 📝 Important Notes

1. **Repository Name**: Make sure to update the repository name in config files
2. **Custom Domain**: If you want a custom domain, add a `CNAME` file to the `public` folder
3. **Analytics**: Google Analytics will work automatically on the deployed site
4. **Blog Images**: All blog images in `public/blog/` will be included in the deployment

## 🐛 Troubleshooting

### Build Fails
- Check that all imports are correct
- Ensure no server-side only code is used in client components

### Images Not Loading
- Verify images are in the `public` folder
- Check that image paths don't include `/public/`

### Routing Issues
- Make sure `trailingSlash: true` is set in next.config.js
- All internal links should use relative paths

## 📈 SEO Features Included

- ✅ Automated sitemap generation
- ✅ Robots.txt file
- ✅ OpenGraph meta tags
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Proper canonical URLs
