// ==========================================
// Axel44 Agency - Main JavaScript
// ==========================================

// ==========================================
// Mobile Navigation Toggle
// ==========================================

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        if (mobileNav) {
            mobileNav.classList.toggle('active');
        }
        // Animate hamburger
        this.style.transform = mobileNav?.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
    });
}

// Close mobile nav when link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
        if (hamburger) {
            hamburger.style.transform = 'rotate(0deg)';
        }
    });
});

// ==========================================
// E-Book Purchase Functionality
// ==========================================

const purchaseButtons = document.querySelectorAll('.btn-purchase');
purchaseButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const ebookCard = this.closest('.ebook-card');
        const ebookTitle = ebookCard.querySelector('h3').textContent;
        const ebookPrice = ebookCard.querySelector('.price').textContent;
        
        alert(`Thank you for your interest!\n\n${ebookTitle}\n${ebookPrice}\n\nThis is a demo. Payment processing would be integrated here.`);
    });
});

// ==========================================
// Bundle Purchase Functionality
// ==========================================

const bundleButton = document.querySelector('.bundle-offer .btn-primary');
if (bundleButton) {
    bundleButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Complete E-Book Bundle: $129.99\n\nThis is a demo. Payment processing would be integrated here.');
    });
}

// ==========================================
// Action Buttons (Services Page)
// ==========================================

const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Feature: ${this.textContent}\n\nThis would navigate to the relevant section in a full implementation.`);
    });
});

// ==========================================
// Smooth Scroll Behavior
// ==========================================

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

// ==========================================
// Intersection Observer for Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe expertise cards
document.querySelectorAll('.expertise-card').forEach(card => {
    observer.observe(card);
});

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe ebook cards
document.querySelectorAll('.ebook-card').forEach(card => {
    observer.observe(card);
});

// Add fade-in animation keyframes
if (!document.getElementById('animations-style')) {
    const style = document.createElement('style');
    style.id = 'animations-style';
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// Navigation Active Link Highlight
// ==========================================

function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    document.querySelectorAll('.mobile-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

updateActiveLink();

// ==========================================
// Console Welcome Message
// ==========================================

console.log('%c🚀 Welcome to Axel44 Agency', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cFull Stack Developer | Crypto & Futures Trader | Social Media Expert', 'font-size: 14px; color: #ff6b9d;');
console.log('%cVisit our services page to learn more about what we offer!', 'color: #ffd700;');
