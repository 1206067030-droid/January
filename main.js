// January Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initTheme();
    initLanguage();
    initNavigation();
    initMobileMenu();
    initBackToTop();
    initLazyLoading();
    initSmoothScroll();
    initContactForm();
});

// ==================== Theme Management ====================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    
    // Check for saved theme preference or system preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    
    // Toggle theme function
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        
        // Save preference
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            updateMetaThemeColor('#1a1a1a');
        } else {
            localStorage.setItem('theme', 'light');
            updateMetaThemeColor('#FAFAF9');
        }
    }
    
    // Add event listeners
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
}

function updateMetaThemeColor(color) {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', color);
}

// ==================== Language Management ====================

let currentLang = localStorage.getItem('language') || 'zh';

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    
    // Apply saved language
    applyLanguage(currentLang);
    
    // Toggle language function
    function toggleLanguage() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLang);
        applyLanguage(currentLang);
    }
    
    // Add event listeners
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
}

function applyLanguage(lang) {
    // Update all elements with data attributes
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    
    // Update page title based on language
    updatePageTitle(lang);
}

function updatePageTitle(lang) {
    const title = document.querySelector('title');
    if (title) {
        if (window.location.pathname.includes('product.html')) {
            title.textContent = lang === 'zh' ? '產品詳情 | January - 極簡家居掛畫藝術' : 'Product Details | January - Minimalist Wall Art';
        } else {
            title.textContent = lang === 'zh' ? 'January | 極簡家居掛畫藝術' : 'January | Minimalist Wall Art';
        }
    }
}

// ==================== Navigation ====================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    // Navbar scroll behavior
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar?.classList.add('shadow-md');
        } else {
            navbar?.classList.remove('shadow-md');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Active link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ==================== Mobile Menu ====================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger to X
            const icon = mobileMenuBtn.querySelector('svg');
            if (!mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            }
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            });
        });
    }
}

// ==================== Back to Top Button ====================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== Lazy Loading Images ====================

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
}

// ==================== Smooth Scroll ====================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== Contact Form ====================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!validateForm(data)) return;
            
            // Show success message (in real implementation, send to server)
            showNotification(currentLang === 'zh' ? '感謝您的訊息！我們會盡快回覆您。' : 'Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

function validateForm(data) {
    // Basic validation
    if (!data.name || data.name.trim().length < 2) {
        showNotification(currentLang === 'zh' ? '請輸入有效的姓名' : 'Please enter a valid name', 'error');
        return false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showNotification(currentLang === 'zh' ? '請輸入有效的電郵地址' : 'Please enter a valid email address', 'error');
        return false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
        showNotification(currentLang === 'zh' ? '請輸入至少10個字符的訊息內容' : 'Please enter at least 10 characters for the message', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-24 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ==================== Utility Functions ====================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for use in other scripts
window.JanuarySite = {
    toggleTheme: () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    },
    switchLanguage: () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLang);
        applyLanguage(currentLang);
    },
    getCurrentLanguage: () => currentLang,
    showNotification: showNotification
};