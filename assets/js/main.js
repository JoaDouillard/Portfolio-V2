// main.js - Animations et interactions pour le portfolio Jekyll
// Reprend exactement les mêmes fonctionnalités que l'ancien portfolio

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== ANIMATIONS D'ENTRÉE ====================
    
    // Animation des éléments au scroll
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
    
    // Observer tous les éléments avec la classe 'fade-in'
    document.querySelectorAll('.grid-item, .project-card, .sidebar-section, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ==================== ANIMATIONS DES BARRES DE PROGRESSION ====================
    
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            // Animation avec délai
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Déclencher l'animation des barres si on est sur la page skills
    if (document.querySelector('#skills')) {
        setTimeout(animateProgressBars, 500);
    }
    
    // ==================== EFFET TYPEWRITER POUR LES MESSAGES ====================
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Appliquer l'effet typewriter aux messages de click
    const clickMessages = document.querySelectorAll('.click-message');
    clickMessages.forEach(msg => {
        const text = msg.textContent;
        setTimeout(() => {
            typeWriter(msg, text, 80);
        }, 1000);
    });
    
    // ==================== INTERACTIONS DES CARTES PROJET ====================
    
    // Animation hover des projets sur la page d'accueil
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Réduire les autres projets
            projectItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.7';
                    otherItem.style.transform = 'scale(0.95)';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            // Restaurer tous les projets
            projectItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
                otherItem.style.transform = 'scale(1)';
            });
        });
    });
    
    // ==================== NAVIGATION SMOOTH ====================
    
    // Smooth scroll pour les liens de navigation
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
    
    // ==================== EFFET PARALLAX LÉGER ====================
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const parallaxElements = document.querySelectorAll('.gradient-overlay');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // ==================== ANIMATION DU STATUS INDICATOR ====================
    
    const statusIndicator = document.querySelector('.status-indicator.online');
    if (statusIndicator) {
        // Ajouter une animation de pulsation plus prononcée au clic
        statusIndicator.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease-in-out 3';
            }, 10);
        });
    }
    
    // ==================== FORMULAIRE DE CONTACT ====================
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi
            const submitButton = this.querySelector('.form-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                submitButton.textContent = 'Message envoyé !';
                submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                
                // Réinitialiser après 3 secondes
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    contactForm.reset();
                }, 3000);
            }, 2000);
        });
        
        // Validation en temps réel
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = 'var(--highlight-color)';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--highlight-color)';
            });
        });
    }
    
    // ==================== GESTION DES CLICS SUR LES SECTIONS ====================
    
    // Redirection pour les sections cliquables
    const clickableSections = {
        '.about': '/about',
        '.skills-section': '/skills',
        '.contact-section': '/contact',
        '.all-projects': '/projects'
    };
    
    Object.entries(clickableSections).forEach(([selector, url]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                // Ajouter un effet de clic
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                    window.location.href = url;
                }, 150);
            });
        }
    });
    
    // ==================== EFFET GLITCH POUR LE TITRE ABOUT ====================
    
    const glitchElement = document.querySelector('.glitch-effect');
    if (glitchElement) {
        // Déclencher l'effet glitch aléatoirement
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% de chance
                glitchElement.style.animation = 'none';
                setTimeout(() => {
                    glitchElement.style.animation = '';
                }, 50);
            }
        }, 3000);
    }
    
    // ==================== INTERACTIONS TACTILES MOBILES ====================
    
    // Améliorer l'expérience tactile sur mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('.grid-item, .project-card').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
    
    // ==================== PRÉCHARGEMENT DES IMAGES ====================
    
    // Précharger les images importantes pour les animations
    const imagesToPreload = [
        '/assets/images/projects/VignetteallP.webp',
        '/assets/images/projects/project1/VignetteP1.webp',
        '/assets/images/projects/project2/DetailsP2.svg',
        '/assets/images/about/me.jpeg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // ==================== GESTION DES ERREURS D'IMAGES ====================
    
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Image non trouvée:', this.src);
        });
    });
    
    // ==================== ANIMATION D'ENTRÉE DE LA PAGE ====================
    
    // Animation d'entrée générale
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
    
    console.log('🚀 Portfolio Jekyll chargé avec succès !');
});

// ==================== FONCTIONS UTILITAIRES ====================

// Fonction pour détecter si un élément est visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction de debounce pour les événements de scroll
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

// Optimisation des événements de scroll
const optimizedScroll = debounce(() => {
    // Code d'optimisation du scroll si nécessaire
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScroll);