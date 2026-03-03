# Deploy to GitHub Pages - Instructions

## Your website is ready! ✅

Your portfolio website is fully responsive and ready to deploy.

### Responsive Design Status:
- ✅ Mobile phones (576px and below)
- ✅ Tablets (768px and below) 
- ✅ Desktop (all larger screens)
- ✅ Viewport meta tag configured
- ✅ All media queries in place

## Deployment Steps

### Option 1: Upload via GitHub Web Interface

1. **Go to your GitHub repository** (where your current website is hosted)
   - Log in to GitHub: https://github.com
   - Navigate to your repository (likely `Diassl3/diassl3.github.io` or similar)

2. **Delete old files** (if you want to replace everything):
   - Delete all files in the repository except `.git` folder

3. **Upload new files**:
   - Click "Add file" → "Upload files"
   - Drag and drop ALL files from `/home/sathsara-dias/Website/sathsara-portfolio/`
   - Include:
     - `index.html`
     - `assets/` folder (with all subfolders: css, js, img)
     - `README.md`

4. **Commit changes**:
   - Write commit message: "Replace with new portfolio website"
   - Click "Commit changes"

5. **Check GitHub Pages settings**:
   - Go to Settings → Pages
   - Source should be set to "Deploy from a branch"
   - Branch: `main` or `master` (whichever your repo uses)
   - Folder: `/ (root)`

6. **Wait for deployment** (usually 1-2 minutes)
   - Your site will be live at: https://diassl3.github.io (or your custom domain)

### Option 2: Deploy via Git Command Line

```bash
cd /home/sathsara-dias/Website/sathsara-portfolio

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Deploy new portfolio website"

# Add your GitHub repository as remote (replace URL with your repo URL)
git remote add origin https://github.com/Diassl3/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages.

### Option 3: Use GitHub CLI (if installed)

```bash
cd /home/sathsara-dias/Website/sathsara-portfolio
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin
git push -u origin main
```

## Important Notes

- ✅ Your website is fully responsive (mobile, tablet, desktop)
- ✅ All files are ready in: `/home/sathsara-dias/Website/sathsara-portfolio/`
- ✅ Custom domain `diassl.com` should work after deployment
- ⏱️ Deployment typically takes 1-2 minutes
- 🔄 GitHub Pages auto-updates when you push changes

## Need Help?

If you need assistance with any step, let me know!
