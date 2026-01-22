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

// Mobile menu toggle function - available immediately
window.toggleMobileMenu = function() {
    const navbarNav = document.getElementById('navbarNav');
    const navToggle = document.getElementById('navToggle');
    
    if (navbarNav && navToggle) {
        const isActive = navbarNav.classList.contains('active');
        if (isActive) {
            navbarNav.classList.remove('active');
            navToggle.classList.remove('active');
        } else {
            navbarNav.classList.add('active');
            navToggle.classList.add('active');
        }
    }
    return false;
};

// Clean URL redirect - Remove index.html from URL
(function() {
    'use strict';
    // If URL contains index.html, redirect to clean URL
    if (window.location.pathname.includes('index.html')) {
        var cleanUrl = window.location.pathname.replace(/index\.html$/, '/') + window.location.search + window.location.hash;
        if (cleanUrl === '/') {
            window.history.replaceState({}, document.title, '/');
        } else {
            window.location.replace(cleanUrl);
        }
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
    
    if (!navToggle || !navbarNav) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Function to toggle menu
    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const isActive = navbarNav.classList.contains('active');
        if (isActive) {
            navbarNav.classList.remove('active');
            navToggle.classList.remove('active');
        } else {
            navbarNav.classList.add('active');
            navToggle.classList.add('active');
        }
        return false;
    }
    
    // Multiple event handlers for maximum compatibility
    navToggle.onclick = toggleMenu;
    navToggle.addEventListener('click', toggleMenu, false);
    navToggle.addEventListener('touchend', toggleMenu, false);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbarNav.classList.contains('active')) {
            if (!navToggle.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarNav.classList.remove('active');
            navToggle.classList.remove('active');
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

    // Handle dropdown link clicks
    const dropdownLinks = document.querySelectorAll('.nav-dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
            navbarNav.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('.section');
    const navLinksList = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
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

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .publication-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
