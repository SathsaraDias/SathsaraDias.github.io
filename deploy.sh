#!/bin/bash
# GitHub Pages Deployment Script

echo "🚀 Starting deployment to GitHub Pages..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Initialize git if needed
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "➕ Adding files to git..."
git add .

# Check if there are changes
if git diff --staged --quiet && git diff --quiet; then
    echo "ℹ️  No changes to commit."
else
    echo "💾 Committing changes..."
    git commit -m "Deploy new portfolio website - $(date '+%Y-%m-%d %H:%M:%S')" || echo "Note: Commit may have failed if nothing changed"
fi

echo ""
echo "✅ Local git repository ready!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your GitHub repository remote:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo ""
echo "2. Push to GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Or if repository already exists, just push:"
echo "   git push origin main"
echo ""
