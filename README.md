# Sathsara Dias - Professional Portfolio Website

A clean, professional portfolio website inspired by modern academic websites, built with pure HTML, CSS, and JavaScript.

## Features

✨ **Clean & Professional Design**
- Minimalist layout inspired by Thomas Gültzow's website style
- Professional typography with Inter and Crimson Pro fonts
- Dark blue (#1d315a) and gold (#FFD700) color scheme

📱 **Fully Responsive**
- Mobile-first design
- Optimized for mobile phones, tablets, laptops, and desktops
- Adaptive navigation menu
- Touch-friendly interactions

🌙 **Dark/Light Theme**
- Toggle between light and dark themes
- Theme preference saved in browser
- Smooth transitions

⚡ **Fast Performance**
- No framework dependencies
- Pure HTML/CSS/JavaScript
- Optimized assets
- Fast page loads

## Sections

1. **About Me** - Profile with avatar, bio, interests, and education
2. **Featured Publications** - Research publications with abstracts
3. **Projects** - Portfolio of projects with tags
4. **Contact** - Contact information and links

## Getting Started

### View the Website

Simply open `index.html` in your web browser:

```bash
cd /home/sathsara-dias/Website/sathsara-portfolio
# Open index.html in your browser
```

Or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Then visit: http://localhost:8000
```

### File Structure

```
sathsara-portfolio/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── main.js     # JavaScript functionality
│   └── img/            # Images
│       ├── SD_1.png
│       ├── user-2.jpg
│       └── ...
└── README.md
```

## Customization

### Change Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #1d315a;      /* Dark blue */
  --accent: #FFD700;       /* Gold */
  --bg: #ffffff;           /* Background */
  /* ... */
}
```

### Add Publications

Edit the publications section in `index.html`:

```html
<article class="publication-card">
  <div class="publication-meta">
    <div class="authors">Author names</div>
    <div class="publication-date">2024</div>
    <span class="pub-type">Journal Article</span>
  </div>
  <h2 class="publication-title">
    <a href="#">Publication Title</a>
  </h2>
  <p class="publication-abstract">Abstract text...</p>
  <div class="publication-links">
    <a href="#" class="btn-outline">DOI</a>
  </div>
</article>
```

### Add Projects

Similar structure for projects:

```html
<article class="project-card">
  <h2 class="project-title">Project Title</h2>
  <p class="project-description">Description...</p>
  <div class="project-tags">
    <span class="tag">Tag 1</span>
    <span class="tag">Tag 2</span>
  </div>
</article>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The website is ready to deploy to any static hosting service:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any web server**

Just upload all files to your hosting service.

## License

© 2024 Sathsara Dias. All rights reserved.
