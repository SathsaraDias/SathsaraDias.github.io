# Sathsara Dias Portfolio Website - Complete Documentation

## Table of Contents
1. [Overview](#overview)
2. [Website Architecture](#website-architecture)
3. [Features & Functionality](#features--functionality)
4. [Technical Stack](#technical-stack)
5. [File Structure](#file-structure)
6. [Content Sections](#content-sections)
7. [Design & Styling](#design--styling)
8. [JavaScript Functionality](#javascript-functionality)
9. [SEO & Metadata](#seo--metadata)
10. [Deployment](#deployment)
11. [Customization Guide](#customization-guide)
12. [Browser Support](#browser-support)
13. [Performance Optimization](#performance-optimization)
14. [Maintenance & Updates](#maintenance--updates)

---

## Overview

This is a professional academic portfolio website for **Sathsara Dias**, an Applied Mathematician and Data Scientist specializing in Dynamic Mode Decomposition (DMD), reduced-order modeling, machine learning, and computational fluid dynamics. The website serves as a comprehensive showcase of research publications, professional experience, projects, and educational resources.

### Website URL
- **Live Site**: https://www.diassl.com
- **Domain**: diassl.com (configured via CNAME)

### Purpose
- Showcase academic research and publications
- Display professional experience and education
- Provide access to research notes, tutorials, and resources
- Serve as a professional contact point
- Demonstrate expertise in data-driven analysis and machine learning

---

## Website Architecture

### Architecture Type
**Static Website** - Pure HTML, CSS, and JavaScript (no backend or database)

### Design Philosophy
- **Minimalist & Professional**: Clean, academic-inspired design
- **Responsive First**: Mobile-first approach with adaptive layouts
- **Performance Focused**: Lightweight, fast-loading, optimized assets
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap

### Page Structure
1. **Homepage** (`index.html`) - Main landing page with all sections
2. **Research Notes** (`research-notes.html`) - Research methodologies and notes
3. **Tutorials** (`tutorials.html`) - Educational tutorials and guides
4. **Resources** (`resources.html`) - Books, datasets, tools, and code repositories

---

## Features & Functionality

### Core Features

#### 1. **Responsive Navigation**
- Fixed top navigation bar with smooth scrolling
- Dropdown menus for Publications and Notes & Code sections
- Mobile hamburger menu with smooth animations
- Active link highlighting based on scroll position
- Touch-friendly mobile interactions

#### 2. **About Section**
- Professional profile card with avatar
- Social media links (GitHub, LinkedIn, Google Scholar, Email)
- Comprehensive biography and research interests
- Education timeline (Ph.D., M.Sc., B.Sc.)
- Professional experience with dates and organizations
- Awards and honors display
- Certifications and training
- Acknowledgements modal with detailed credits

#### 3. **Publications Section**
- **Featured Publications**: Journal articles with visualizations
  - Strait of Gibraltar DMD analysis
  - Buffet oscillation detection using Sliding-Window DMD
  - Buffet boundary identification
- **Conference Papers**: Abstracts, posters, and proceedings
- Publication cards with:
  - Author information
  - Publication dates
  - Abstracts
  - Visualizations (GIFs, images)
  - Links to PDFs and DOIs

#### 4. **Projects Section**
- Grid layout showcasing various projects:
  - Deep Learning Applications
  - Artificial Intelligence Research
  - Robotics Systems
  - Skin Cancer AI Detection
  - Rainfall Forecasting System
- Project tags for categorization
- Hover effects and animations

#### 5. **Contact Section**
- Links to CV, Discord, and meeting scheduler
- Professional contact information
- Social media integration

#### 6. **Research Notes Page**
- Sidebar navigation for topics:
  - DMD Methods
  - POD Techniques
  - Data Science
  - Teaching Notes
  - Sample Code
  - Interactive Demos
- Placeholder content structure for future expansion

#### 7. **Tutorials Page**
- Grid layout for tutorial cards
- Support for:
  - Step-by-step guides
  - Video tutorials
  - Interactive Jupyter notebooks
  - Code examples

#### 8. **Resources Page**
- Organized sections:
  - Books & Reading Lists
  - Datasets & Sample Data
  - Tools & Software
  - Sample Code Repository
- Placeholder structure for content expansion

### Interactive Features

#### Modal System
- Acknowledgements modal with smooth animations
- Click outside to close
- Escape key support
- Body scroll lock when open

#### Smooth Scrolling
- Anchor link smooth scrolling
- Offset for fixed navigation
- Scroll-based active link highlighting

#### Image Optimization
- Lazy loading for images
- Intersection Observer API for performance
- Preloading for critical images
- Progressive image loading

#### Animations
- Fade-in animations on scroll
- Hover effects on cards and links
- Smooth transitions throughout
- Mobile menu animations

---

## Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup, structured data
- **CSS3**: Custom properties (CSS variables), Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Font Awesome 6.4.0**: Icon library (CDN)
- **Google Fonts**: Inter (body) and Crimson Pro (headings)

### External Dependencies
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Google Fonts: Inter and Crimson Pro families

### No Build Process
- Pure static files
- No compilation or bundling required
- Direct browser execution

---

## File Structure

```
sathsara-portfolio/
├── index.html                 # Main homepage
├── research-notes.html        # Research notes page
├── tutorials.html            # Tutorials page
├── resources.html            # Resources page
├── README.md                 # Basic readme
├── DOCUMENTATION.md          # This comprehensive documentation
├── CNAME                     # Custom domain configuration
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Search engine crawler instructions
├── deploy.sh                # Deployment script
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet (2000+ lines)
│   ├── js/
│   │   └── main.js          # Main JavaScript file
│   └── img/
│       ├── SD_1.jpg         # Profile photo
│       ├── logo_sd.png      # Logo
│       ├── icon.png         # Favicon
│       ├── gibraltar_animation.gif
│       ├── airfoil_animation.gif
│       ├── buffet_boundary_plot.jpg
│       └── [other images]
└── [deployment docs]
    ├── CUSTOM_DOMAIN_SETUP.md
    ├── DEPLOY_GITHUB.md
    └── FIX_WWW_SUBDOMAIN.md
```

---

## Content Sections

### Homepage Sections (index.html)

#### 1. Navigation Bar
- Fixed position at top
- Logo and brand name
- Navigation links with dropdowns
- Mobile hamburger menu

#### 2. About Section (#about)
- **Profile Card** (Left Sidebar):
  - Circular profile photo (200x200px)
  - Name and title
  - Social media icons
  - Sticky positioning on desktop
  
- **Content Area**:
  - Biography paragraphs
  - Research interests list
  - Education timeline
  - Professional experience
  - Awards and honors
  - Certifications
  - Acknowledgements button

#### 3. Publications Section (#publications)
- **Featured Publications** (#featured-publications):
  - 3 major journal articles
  - Each with visualization images/GIFs
  - Abstracts and links
  
- **Conference Papers** (#conference-papers):
  - Grid of conference presentation cards
  - Talk types (Oral, Poster, Conference)
  - Dates and venues
  - Author information
  - Abstract links

#### 4. Projects Section (#projects)
- Grid layout of project cards
- Project descriptions
- Technology tags
- Hover effects

#### 5. Contact Section (#contact)
- Contact message
- Links to CV, Discord, Calendly
- Social integration

#### 6. Footer
- Copyright notice
- Dynamic year (JavaScript)
- Simple, clean design

---

## Design & Styling

### Color Scheme

#### Primary Colors
- **Primary**: `#1d315a` (Dark Blue) - Navigation, accents
- **Primary Dark**: `#152542` - Hover states
- **Primary Light**: `#2a4a7a` - Light variants
- **Accent**: `#ffd700` (Gold) - Highlights, hover states
- **Accent Light**: `#ffeb3b` - Light accent

#### Background Colors
- **Background**: `#1a1a1a` (Dark theme)
- **Background Alt**: `#252525` - Section backgrounds
- **Background Section**: `#2a2a2a` - Card backgrounds

#### Text Colors
- **Text**: `#ffffff` / `#e5e5e5` - Primary text
- **Text Muted**: `#b0b8c4` / `#a3a3a3` - Secondary text
- **Text Light**: `#8a95a8` / `#737373` - Tertiary text

### Typography

#### Font Families
- **Body**: `Inter` - Modern, clean sans-serif
- **Headings**: `Crimson Pro` - Elegant serif for academic feel

#### Font Sizes
- **H1**: 2.5rem (40px)
- **H2**: 1.75rem (28px)
- **H3**: 1.25rem (20px)
- **Body**: 1rem (16px)
- **Small**: 0.85-0.9rem

### Layout System

#### Grid Layouts
- **About Section**: 2-column grid (350px profile + flexible content)
- **Publications**: Single column with cards
- **Projects**: Auto-fill grid (min 280px columns)
- **Conference Papers**: Auto-fill grid (min 300px columns)

#### Spacing System
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 3rem (48px)
- **XL**: 4rem (64px)

### Responsive Breakpoints

#### Desktop (Default)
- Full layout with sidebars
- Multi-column grids
- Sticky positioning

#### Tablet (≤992px)
- Adjusted column widths
- Simplified grids
- Maintained functionality

#### Mobile (≤768px)
- Single column layouts
- Hamburger menu
- Stacked content
- Touch-optimized

#### Small Mobile (≤576px)
- Compact spacing
- Smaller fonts
- Full-width elements

### CSS Architecture

#### CSS Variables
All colors, spacing, and design tokens use CSS custom properties for easy theming:
```css
:root {
  --primary: #1d315a;
  --accent: #ffd700;
  --bg: #1a1a1a;
  /* ... */
}
```

#### Component-Based Styling
- Modular CSS classes
- Reusable components
- Consistent naming conventions

#### Animations & Transitions
- Smooth transitions (0.3s cubic-bezier)
- Hover effects
- Scroll animations
- Modal animations

---

## JavaScript Functionality

### Main Features (main.js)

#### 1. **Mobile Menu Toggle**
```javascript
toggleMobileMenu() // Toggles hamburger menu
```
- Opens/closes mobile navigation
- Animated hamburger icon
- Touch event support
- Click outside to close

#### 2. **Dropdown Menus**
- Hover/click activation
- Smooth animations
- Mobile-friendly behavior
- Auto-close on link click

#### 3. **Active Navigation Highlighting**
- Scroll-based detection
- Updates active link
- Smooth transitions
- Section-based highlighting

#### 4. **Smooth Scrolling**
- Anchor link handling
- Offset for fixed nav
- Smooth behavior
- Cross-browser support

#### 5. **Modal System**
```javascript
openAcknowledgements()  // Opens modal
closeAcknowledgements() // Closes modal
```
- Fade-in animations
- Body scroll lock
- Click outside to close
- Escape key support

#### 6. **Image Optimization**
- Intersection Observer API
- Lazy loading
- Progressive enhancement
- Performance optimization

#### 7. **Scroll Animations**
- Fade-in on scroll
- Intersection Observer
- Performance optimized
- Smooth transitions

#### 8. **Dynamic Content**
- Current year in footer
- Dynamic updates
- No hardcoded dates

### Event Handlers

#### Document Ready
- Initializes all functionality
- Sets up event listeners
- Configures observers

#### Scroll Events
- Active link updates
- Navbar shadow changes
- Animation triggers

#### Click Events
- Menu toggles
- Modal controls
- Link navigation
- Dropdown interactions

---

## SEO & Metadata

### Meta Tags

#### Basic SEO
- **Title**: "Sathsara Dias | Applied Mathematician & Data Scientist"
- **Description**: Comprehensive description with keywords
- **Keywords**: Relevant research terms
- **Author**: Sathsara Dias
- **Theme Color**: `#1d315a`

#### Open Graph (Social Sharing)
- **og:title**: Page-specific titles
- **og:description**: Page descriptions
- **og:image**: Profile photo
- **og:url**: Canonical URLs
- **og:type**: website

#### Twitter Cards
- **twitter:card**: summary_large_image
- **twitter:title**: Page titles
- **twitter:description**: Descriptions
- **twitter:image**: Profile photo

### Structured Data

#### Person Schema (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sathsara Dias",
  "jobTitle": "Applied Mathematician & Data Scientist",
  "alumniOf": "Clarkson University",
  "knowsAbout": ["DMD", "Machine Learning", ...],
  "url": "https://www.diassl.com",
  "sameAs": ["GitHub", "LinkedIn", "Google Scholar"]
}
```

### Sitemap (sitemap.xml)
- All pages listed
- Priority levels assigned
- Change frequencies set
- Last modified dates

### Robots.txt
- Allows all crawlers
- Disallows `/assets/` directory
- Sitemap reference
- Crawl delay configured

### Canonical URLs
- Each page has canonical tag
- Prevents duplicate content
- SEO best practices

---

## Deployment

### GitHub Pages Deployment

#### Method 1: Using deploy.sh Script
```bash
./deploy.sh
```
The script:
- Checks for git
- Initializes repository if needed
- Adds all files
- Commits changes
- Provides push instructions

#### Method 2: Manual Deployment
```bash
# Initialize git (if needed)
git init

# Add remote
git remote add origin https://github.com/USERNAME/REPO.git

# Add and commit
git add .
git commit -m "Deploy website"

# Push to main branch
git branch -M main
git push -u origin main
```

### Custom Domain Setup

#### CNAME File
- Contains: `diassl.com`
- Points GitHub Pages to custom domain
- Must be in repository root

#### DNS Configuration
- A records or CNAME records
- Points to GitHub Pages IPs
- SSL certificate auto-provisioned

### Deployment Files
- `CUSTOM_DOMAIN_SETUP.md` - Domain setup guide
- `DEPLOY_GITHUB.md` - GitHub Pages guide
- `FIX_WWW_SUBDOMAIN.md` - Subdomain fixes

---

## Customization Guide

### Changing Colors

Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --primary: #1d315a;      /* Change primary color */
  --accent: #ffd700;        /* Change accent color */
  --bg: #1a1a1a;           /* Change background */
  /* ... */
}
```

### Adding Publications

In `index.html`, add to publications section:
```html
<article class="publication-card">
  <div class="publication-meta">
    <div class="authors">Author Names</div>
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

### Adding Projects

In `index.html`, add to projects section:
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

### Updating Profile Information

Edit the About section in `index.html`:
- Profile photo: Update `src` in `<img>` tag
- Biography: Edit `<p>` tags in `.article-content`
- Education: Modify `.education-list` items
- Experience: Update `.experience-list` items
- Social links: Update `.profile-social` links

### Modifying Navigation

Edit navigation in all HTML files:
```html
<ul class="navbar-nav">
  <li><a href="index.html" class="nav-link">Home</a></li>
  <!-- Add more items -->
</ul>
```

### Adding New Pages

1. Create new HTML file (e.g., `new-page.html`)
2. Copy structure from existing page
3. Update navigation links
4. Add to sitemap.xml
5. Update canonical URLs

---

## Browser Support

### Supported Browsers
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### Features Used
- CSS Grid
- CSS Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API
- ES6+ JavaScript
- Smooth scrolling
- CSS Animations

### Fallbacks
- Graceful degradation for older browsers
- Progressive enhancement approach
- Feature detection where needed

---

## Performance Optimization

### Image Optimization
- **Lazy Loading**: Images load as they enter viewport
- **Preloading**: Critical images preloaded
- **Format**: Optimized formats (JPG, PNG, GIF)
- **Sizing**: Proper width/height attributes
- **Decoding**: Async decoding for better performance

### CSS Optimization
- **Single File**: All styles in one file
- **Minification Ready**: Can be minified for production
- **Efficient Selectors**: Optimized CSS selectors
- **CSS Variables**: Reduces redundancy

### JavaScript Optimization
- **Vanilla JS**: No framework overhead
- **Event Delegation**: Efficient event handling
- **Intersection Observer**: Performance-friendly scroll detection
- **Debouncing**: Where applicable

### Loading Strategy
- **Critical CSS**: Inline or preloaded
- **Font Loading**: Preconnect to Google Fonts
- **Icon Loading**: Font Awesome from CDN
- **Progressive Enhancement**: Core functionality first

### Caching
- Static assets can be cached
- Proper cache headers recommended
- Versioning for updates

---

## Maintenance & Updates

### Regular Updates

#### Content Updates
1. **Publications**: Add new publications as they're published
2. **Experience**: Update professional experience
3. **Projects**: Add new projects
4. **Resources**: Expand tutorials and resources

#### Technical Updates
1. **Dependencies**: Update Font Awesome, fonts if needed
2. **Browser Testing**: Test on new browser versions
3. **Performance**: Monitor and optimize
4. **SEO**: Update metadata and sitemap

### Version Control
- Use Git for version control
- Commit meaningful messages
- Tag releases if needed
- Maintain changelog

### Backup Strategy
- Repository on GitHub (backup)
- Local backups recommended
- Asset backups important

### Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Links are valid
- [ ] Images load properly
- [ ] Mobile menu functions
- [ ] Modals work correctly
- [ ] Forms submit (if any)
- [ ] SEO metadata correct
- [ ] Social sharing works
- [ ] Cross-browser compatibility

---

## Additional Resources

### Documentation Files
- `README.md` - Basic project overview
- `DOCUMENTATION.md` - This comprehensive guide
- `CUSTOM_DOMAIN_SETUP.md` - Domain configuration
- `DEPLOY_GITHUB.md` - GitHub Pages deployment
- `FIX_WWW_SUBDOMAIN.md` - Subdomain troubleshooting

### External Links
- **Website**: https://www.diassl.com
- **GitHub**: https://github.com/SathsaraDias
- **LinkedIn**: https://www.linkedin.com/in/lsldias/
- **Google Scholar**: https://scholar.google.com/citations?hl=en&tzom=-330&user=iV9RTLMAAAAJ

### Contact
- **Email**: lsldias0521@gmail.com
- **Discord**: diassl_0521

---

## License & Copyright

© 2024-2025 Sathsara Dias. All rights reserved.

This website and its content are the property of Sathsara Dias. Unauthorized use or reproduction is prohibited.

---

## Changelog

### Version 1.0 (Current)
- Initial website launch
- Complete portfolio structure
- Responsive design
- SEO optimization
- Custom domain setup
- All core features implemented

---

## Support & Contributions

For questions, suggestions, or issues:
1. Check this documentation first
2. Review code comments
3. Contact via email or social media

---

**Last Updated**: January 2025
**Documentation Version**: 1.0
**Website Version**: 1.0
