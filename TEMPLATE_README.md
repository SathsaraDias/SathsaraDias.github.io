# Academic Portfolio Website Template

A clean, professional, and fully responsive portfolio website template perfect for academics, researchers, and professionals.

## ✨ Features

- **Clean & Professional Design** - Minimalist layout with dark theme
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Fast Performance** - Pure HTML, CSS, and JavaScript (no frameworks)
- **SEO Optimized** - Complete metadata and structured data
- **Easy to Customize** - Well-organized code with clear comments
- **Modern Navigation** - Smooth scrolling and clean URLs
- **Multiple Sections** - About, Publications, Projects, Contact, and more

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/SathsaraDias/SathsaraDias.github.io.git
cd SathsaraDias.github.io
```

### 2. Customize Content

1. **Update Personal Information** (`index.html`):
   - Replace name, title, and bio
   - Update profile photo (`assets/img/SD_1.jpg`)
   - Add your education and experience
   - Update social media links

2. **Update Publications** (`index.html`):
   - Replace with your publications
   - Add publication images/visualizations
   - Update links to PDFs and DOIs

3. **Update Projects** (`index.html`):
   - Add your projects
   - Update descriptions and tags

4. **Customize Colors** (`assets/css/style.css`):
   ```css
   :root {
     --primary: #1d315a;      /* Your primary color */
     --accent: #ffd700;        /* Your accent color */
     --bg: #1a1a1a;           /* Background color */
   }
   ```

5. **Update Meta Tags** (all HTML files):
   - Change title, description, keywords
   - Update Open Graph tags
   - Update canonical URLs

### 3. Deploy

#### Option A: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push your files:
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to Settings → Pages
4. Select source branch: `main`
5. Your site will be live at: `https://YOUR_USERNAME.github.io`

#### Option B: Other Hosting

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **Any web server**: Upload all files

## 📁 File Structure

```
portfolio-template/
├── index.html              # Main homepage
├── research-notes.html     # Research notes page
├── tutorials.html          # Tutorials page
├── resources.html          # Resources page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── img/               # Images and assets
├── CNAME                  # Custom domain (optional)
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine instructions
└── LICENSE.md             # License information
```

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #1d315a;      /* Navigation and accents */
  --accent: #ffd700;        /* Highlights and active states */
  --bg: #1a1a1a;           /* Background */
  --text: #ffffff;         /* Text color */
}
```

### Adding a New Section

1. Add section HTML in `index.html`:
   ```html
   <section id="new-section" class="section">
     <h1>New Section</h1>
     <!-- Your content -->
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="/new-section" class="nav-link">New Section</a></li>
   ```

3. Update URL mapping in `assets/js/main.js`:
   ```javascript
   const urlToSectionMap = {
     '/new-section': 'new-section',
     // ... other mappings
   };
   ```

### Adding Publications

```html
<article class="publication-card">
  <div class="publication-meta">
    <div class="authors">Your Name, Co-Author</div>
    <div class="publication-date">2024</div>
    <span class="pub-type">Journal Article</span>
  </div>
  <h2 class="publication-title">
    <a href="#">Publication Title</a>
  </h2>
  <p class="publication-abstract">Abstract text...</p>
  <div class="publication-links">
    <a href="#" class="btn-outline">DOI</a>
    <a href="#" class="btn-outline">PDF</a>
  </div>
</article>
```

## 📝 What to Replace

### Required Changes

- [ ] Name and personal information
- [ ] Profile photo
- [ ] Bio and description
- [ ] Education details
- [ ] Professional experience
- [ ] Publications
- [ ] Projects
- [ ] Contact information
- [ ] Social media links
- [ ] Meta tags and SEO
- [ ] Domain/CNAME (if using custom domain)

### Optional Changes

- [ ] Color scheme
- [ ] Fonts
- [ ] Logo
- [ ] Additional sections
- [ ] Page structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📚 Documentation

For detailed documentation, see:
- `DOCUMENTATION.md` - Complete technical documentation
- `README.md` - Basic project overview

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Share your customized version

## 📄 License

See `LICENSE.md` for license information.

## 🙏 Credits

Template created by Sathsara Dias.

**Feel free to use this template for your own portfolio!**

---

**Need Help?** Check the documentation or create an issue in the repository.

**Happy building!** 🎉
