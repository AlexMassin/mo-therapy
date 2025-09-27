#!/bin/bash

# GitHub Pages deployment script for mo-therapy
echo "🚀 Starting GitHub Pages deployment..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🔗 Your assets will be available at:"
    echo "   - Images: https://username.github.io/mo-therapy/images/..."
    echo "   - Videos: https://username.github.io/mo-therapy/videos/..."
    echo ""
    echo "📋 Next steps:"
    echo "1. Commit and push your changes to GitHub"
    echo "2. Make sure GitHub Pages is configured to serve from the 'out' directory"
    echo "3. Your site will be available at: https://username.github.io/mo-therapy"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
