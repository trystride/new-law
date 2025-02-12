// Initialize WOW.js for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    new WOW().init();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation classes to sections when they come into view
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            if (!section.classList.contains('fade-in')) {
                section.classList.add('fade-in');
            }
        }
    });
};

window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mainHeader = document.querySelector('.main-header');
const body = document.body;

const toggleMenu = () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    mainHeader.classList.toggle('menu-open');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
};

mobileMenuToggle.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Close mobile menu when resizing window beyond mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        mainHeader.classList.remove('menu-open');
        body.style.overflow = '';
    }
});
