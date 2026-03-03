// Main JavaScript for Portfolio Website

// Define Acknowledgements functions immediately (before DOMContentLoaded)
window.openAcknowledgements = function() {
    const modal = document.getElementById('acknowledgementsModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeAcknowledgements = function() {
    const modal = document.getElementById('acknowledgementsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.toggleMobileMenu = function() {
    const navbarNav = document.getElementById('navbarNav');
    const navToggle = document.getElementById('navToggle');
    const overlay = document.getElementById('menuOverlay');
    
    if (navbarNav && navToggle) {
        const isActive = navbarNav.classList.contains('active');
        if (isActive) {
            navbarNav.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (overlay) overlay.classList.remove('active');
        } else {
            navbarNav.classList.add('active');
            navToggle.classList.add('active');
            document.body.classList.add('menu-open');
            if (overlay) overlay.classList.add('active');
        }
    }
    return false;
};

// URL routing - Map clean URLs to sections
const urlToSectionMap = {
    '/': 'about',
    '/publications': 'publications',
    '/featured-publications': 'featured-publications',
    '/conference-papers': 'conference-papers',
    '/projects': 'projects',
    '/contact': 'contact'
};

// Clean URL redirect - Remove index.html from URL and handle routing
(function() {
    'use strict';
    const pathname = window.location.pathname;
    
    // If URL contains index.html, redirect to clean URL
    if (pathname.includes('index.html')) {
        var cleanUrl = pathname.replace(/index\.html$/, '/') + window.location.search + window.location.hash;
        if (cleanUrl === '/') {
            window.history.replaceState({}, document.title, '/');
        } else {
            window.location.replace(cleanUrl);
        }
        return;
    }
    
    // Handle clean URLs - scroll to section on page load
    if (pathname !== '/' && urlToSectionMap[pathname]) {
        const sectionId = urlToSectionMap[pathname];
        setTimeout(function() {
            const section = document.getElementById(sectionId);
            if (section) {
                const nav = document.getElementById('navbar');
                const navH = nav ? nav.offsetHeight : 64;
                const offsetTop = section.offsetTop - navH;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'instant'
                });
            }
        }, 100);
    }
})();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Set current year in footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle - Multiple approaches for maximum compatibility
    const navToggle = document.getElementById('navToggle');
    const navbarNav = document.getElementById('navbarNav');
    
    const menuOverlay = document.getElementById('menuOverlay');

    if (!navToggle || !navbarNav) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    function closeMenu() {
        navbarNav.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        if (menuOverlay) menuOverlay.classList.remove('active');
    }

    function openMenu() {
        navbarNav.classList.add('active');
        navToggle.classList.add('active');
        document.body.classList.add('menu-open');
        if (menuOverlay) menuOverlay.classList.add('active');
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (navbarNav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
        return false;
    }
    
    navToggle.addEventListener('click', toggleMenu, false);
    
    document.addEventListener('click', function(e) {
        if (navbarNav.classList.contains('active')) {
            if (!navToggle.contains(e.target) && !navbarNav.contains(e.target)) {
                closeMenu();
            }
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Dropdown menu functionality
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle active state
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    const dropdownLinks = document.querySelectorAll('.nav-dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
            closeMenu();
        });
    });

    // Active navigation link on scroll and URL pathname
    const sections = document.querySelectorAll('.section');
    // Only select nav-links in navbar-nav, exclude brand-link
    const navLinksList = document.querySelectorAll('.navbar-nav .nav-link:not(.brand-link)');

    function updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;
        const pathname = window.location.pathname;

        // Check if we're on homepage (no pathname or just /)
        const isHomePage = pathname === '/' || pathname === '/index.html' || pathname.endsWith('/index.html');

        // Get current section from URL pathname
        if (urlToSectionMap[pathname]) {
            current = urlToSectionMap[pathname];
        } else if (isHomePage) {
            // On homepage, check scroll position
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            // If at top of page, default to 'about'
            if (scrollY < 200 && !current) {
                current = 'about';
            }
        }

        // First, remove all active states from all nav links
        navLinksList.forEach(link => {
            link.classList.remove('active');
        });

        let activeLinkFound = false;

        // Update active states for main nav links - only one should be active
        navLinksList.forEach(link => {
            if (activeLinkFound) return; // Stop after finding the active link
            
            const href = link.getAttribute('href');
            
            // Handle Home link
            if (isHomePage && (current === 'about' || current === '' || scrollY < 200)) {
                if (href === '/' || href === '/index.html' || href === 'index.html') {
                    link.classList.add('active');
                    activeLinkFound = true;
                    return;
                }
            }
            
            // Handle section links with clean URLs
            if (current && !activeLinkFound) {
                // Check if href matches the current section
                const sectionFromUrl = urlToSectionMap[href];
                if (sectionFromUrl === current) {
                    link.classList.add('active');
                    activeLinkFound = true;
                    return;
                }
            }
        });

        // Handle dropdown parent links and children
        const dropdownParents = document.querySelectorAll('.nav-item-dropdown > .nav-link');
        dropdownParents.forEach(parent => {
            const dropdown = parent.closest('.nav-item-dropdown');
            const dropdownLinks = dropdown.querySelectorAll('.nav-dropdown-link');
            let hasActiveChild = false;
            
            dropdownLinks.forEach(child => {
                child.classList.remove('active');
                const childHref = child.getAttribute('href');
                const childSection = urlToSectionMap[childHref];
                if (childSection === current) {
                    child.classList.add('active');
                    hasActiveChild = true;
                }
            });
            
            // Check if parent link matches current section
            const parentHref = parent.getAttribute('href');
            const parentSection = urlToSectionMap[parentHref];
            if (parentSection === current || hasActiveChild) {
                parent.classList.add('active');
            } else {
                parent.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    function getNavHeight() {
        return navbar ? navbar.offsetHeight : 64;
    }

    document.querySelectorAll('a[href^="/"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (urlToSectionMap[href] && href !== '/') {
                const sectionId = urlToSectionMap[href];
                const section = document.getElementById(sectionId);
                if (section) {
                    e.preventDefault();
                    window.history.pushState({}, '', href);
                    const offsetTop = section.offsetTop - getNavHeight();
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    updateActiveNav();
                } else {
                    e.preventDefault();
                    window.location.href = '/#' + sectionId;
                }
            }
        });
    });

    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const hashSection = document.getElementById(hash);
        if (hashSection) {
            setTimeout(() => {
                const offsetTop = hashSection.offsetTop - getNavHeight();
                window.scrollTo({ top: offsetTop, behavior: 'instant' });
                const cleanPath = Object.keys(urlToSectionMap).find(
                    key => urlToSectionMap[key] === hash
                );
                if (cleanPath) {
                    window.history.replaceState({}, '', cleanPath);
                }
                updateActiveNav();
            }, 150);
        }
    }

    window.addEventListener('popstate', function(e) {
        const pathname = window.location.pathname;
        if (urlToSectionMap[pathname]) {
            const sectionId = urlToSectionMap[pathname];
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop - getNavHeight();
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                updateActiveNav();
            }
        } else if (pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            updateActiveNav();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - getNavHeight();
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar shadow on scroll
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }
        
        lastScroll = currentScroll;
    });

    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.publication-card, .project-card, .talk-card').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Initialize
    updateActiveNav();

    // Acknowledgements Modal Functions are already defined above (before this IIFE)

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('acknowledgementsModal');
        if (event.target == modal) {
            closeAcknowledgements();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('acknowledgementsModal');
            if (modal && modal.classList.contains('active')) {
                closeAcknowledgements();
            }
        }
    });

    // Optimize image loading with Intersection Observer for better lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Force decode for better performance
                    if (img.decode) {
                        img.decode().catch(() => {
                            // If decode fails, just load normally
                        });
                    }
                    // Add a class when image is loading
                    img.classList.add('image-loading');
                    img.onload = () => {
                        img.classList.remove('image-loading');
                        img.classList.add('image-loaded');
                    };
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before image comes into view
        });

        // Observe all lazy-loaded images
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}); // End of DOMContentLoaded
