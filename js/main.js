// ==================== MOBILE MENU ==================== 
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ==================== HERO IMAGE SLIDER ==================== 
let currentImageIndex = 0;
const heroImages = document.querySelectorAll('.hero-image');
const imageInterval = 8000; // Change image every 8 seconds

function changeHeroImage() {
    // Remove active class from all images
    heroImages.forEach(img => img.classList.remove('active'));
    
    // Add active class to current image
    heroImages[currentImageIndex].classList.add('active');
    
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

// Change hero image at intervals
if (heroImages.length > 0) {
    setInterval(changeHeroImage, imageInterval);
}

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

// ==================== SMOOTH SCROLL ==================== 
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

// ==================== NAVBAR SCROLL EFFECT ==================== 
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== COUNTER ANIMATION ==================== 
const counters = document.querySelectorAll('.stat-number');
const speed = 200;
let hasAnimated = false;

function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        const increment = target / speed;
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// Trigger counter animation when hero section is visible
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.pageYOffset + window.innerHeight >= heroBottom && !hasAnimated) {
            runCounters();
        }
    }
});

// ==================== FORM HANDLING ==================== 
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: contactForm.elements[0].value,
            email: contactForm.elements[1].value,
            phone: contactForm.elements[2].value,
            projectType: contactForm.elements[3].value,
            message: contactForm.elements[4].value
        };
        
        // Show success message (in production, this would send to a server)
        showNotification('Message sent successfully! We will contact you soon.', 'success');
        contactForm.reset();
    });
}

// ==================== NOTIFICATION SYSTEM ==================== 
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles if not already present
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 600;
                animation: slideIn 0.3s ease-out;
                z-index: 2000;
                max-width: 300px;
            }
            
            .notification-success {
                background: #4caf50;
                color: white;
            }
            
            .notification-error {
                background: #f44336;
                color: white;
            }
            
            .notification-info {
                background: #2196f3;
                color: white;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    top: 80px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== PARALLAX EFFECT ==================== 
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.about::before');
    parallaxElements.forEach((el) => {
        const scrollPosition = window.pageYOffset;
        el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// ==================== PERFORMANCE: Lazy Loading ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== ACTIVE NAV LINK ==================== 
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== DYNAMIC YEAR IN FOOTER ==================== 
const year = new Date().getFullYear();
const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom) {
    footerBottom.innerHTML = footerBottom.innerHTML.replace('2024', year);
}

console.log('%c🏗️ New Horizons Constructions Website Loaded', 'color: #e94560; font-size: 16px; font-weight: bold;');