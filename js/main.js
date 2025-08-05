// Main JavaScript for ABC Company Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your actual public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init("TORHrmPxdumIfrxhp"); // Your EmailJS public key
    }
    
    // Initialize all components
    initNavigation();
    initHeroAnimations();
    initQuoteCalculator();
    initTestimonialSlider();
    initContactForm();
    initSmoothScrolling();
    initStickyElements();
    initAnimationOnScroll();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Hero section animations
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    // Add animation classes when page loads
    setTimeout(() => {
        if (heroContent) heroContent.style.opacity = '1';
        if (heroImage) heroImage.style.opacity = '1';
    }, 300);
}

// Quote calculator functionality
function initQuoteCalculator() {
    const quoteForm = document.getElementById('quote-form');
    const quoteResult = document.getElementById('quote-result');
    const estimatedPrice = document.getElementById('estimated-price');

    // Pricing structure
    const pricing = {
        serviceMultipliers: {
            'residential': 1.0,
            'commercial': 1.4,
            'movein': 1.6,
            'deep': 1.8,
            'specialty': 2.0
        },
        frequencyDiscounts: {
            'one-time': 1.0,
            'weekly': 0.8,
            'bi-weekly': 0.85,
            'monthly': 0.9
        },
        baseRatePerSqFt: 0.15,
        bedroomMultiplier: {
            '1': 1.0,
            '2': 1.2,
            '3': 1.4,
            '4': 1.6,
            '5+': 1.8
        }
    };

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = quoteForm.querySelector('.btn-calculate');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Calculating...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(quoteForm);
            const serviceType = formData.get('serviceType');
            const propertySize = parseInt(formData.get('propertySize')) || 0;
            const frequency = formData.get('frequency');
            const bedrooms = formData.get('bedrooms') || '1';
            const email = formData.get('email');

            // Calculate price
            setTimeout(() => {
                const price = calculateQuote(serviceType, propertySize, frequency, bedrooms);
                
                // Show result
                estimatedPrice.textContent = `$${price}`;
                quoteResult.style.display = 'block';
                quoteResult.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Send quote data (simulate API call)
                sendQuoteEmail(email, {
                    serviceType,
                    propertySize,
                    frequency,
                    bedrooms,
                    price
                });

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Reset form
                quoteForm.reset();
            }, 1500);
        });
    }

    function calculateQuote(serviceType, propertySize, frequency, bedrooms) {
        const serviceMultiplier = pricing.serviceMultipliers[serviceType] || 1.0;
        const frequencyDiscount = pricing.frequencyDiscounts[frequency] || 1.0;
        const bedroomMultiplier = pricing.bedroomMultiplier[bedrooms] || 1.0;

        let basePrice = propertySize * pricing.baseRatePerSqFt;
        basePrice *= serviceMultiplier;
        basePrice *= bedroomMultiplier;
        basePrice *= frequencyDiscount;

        // Minimum price
        const minPrice = 75;
        return Math.max(Math.round(basePrice), minPrice);
    }

    function sendQuoteEmail(email, quoteData) {
        // EmailJS template parameters for quote
        const templateParams = {
            to_email: 'rajatamang503@gmail.com',
            customer_email: email,
            service_type: quoteData.serviceType,
            property_size: quoteData.propertySize,
            frequency: quoteData.frequency,
            bedrooms: quoteData.bedrooms,
            estimated_price: quoteData.price,
            reply_to: email
        };

        // Send quote notification using EmailJS with your actual service and template IDs
        emailjs.send('service_io86osx', 'template_8zbstfb', templateParams)
            .then(() => {
                console.log('Quote notification sent to business email');
                showNotification('Quote sent to your email!', 'success');
            })
            .catch((error) => {
                console.error('Failed to send quote notification:', error);
                showNotification('Quote calculated! Please contact us to confirm pricing.', 'success');
            });
    }
}

// Testimonial slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    if (testimonials.length === 0) return;

    // Auto-slide functionality
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.testimonials-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }

    function showSlide(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(prevIndex);
    }

    function goToSlide(index) {
        showSlide(index);
        // Reset auto-slide timer
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(contactForm);
            const contactData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                serviceNeeded: formData.get('serviceNeeded'),
                message: formData.get('message')
            };

            // Send email using EmailJS
            sendContactEmail(contactData)
                .then(() => {
                    // Reset form and button
                    contactForm.reset();
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                })
                .catch((error) => {
                    console.error('Email sending failed:', error);
                    showNotification('Failed to send message. Please check your EmailJS configuration.', 'error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    function sendContactEmail(data) {
        // EmailJS template parameters
        const templateParams = {
            to_email: 'rajatamang503@gmail.com',
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            service_needed: data.serviceNeeded,
            message: data.message,
            reply_to: data.email
        };

        // Send email using EmailJS with your actual service and template IDs
        return emailjs.send('service_io86osx', 'template_usxkobt', templateParams);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Sticky elements and mobile CTA
function initStickyElements() {
    const stickyCTA = document.querySelector('.sticky-cta');
    
    // Show/hide sticky CTA based on screen size and scroll position
    function toggleStickyCTA() {
        if (window.innerWidth <= 768) {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > windowHeight * 0.5) {
                stickyCTA.style.display = 'flex';
            } else {
                stickyCTA.style.display = 'none';
            }
        } else {
            stickyCTA.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleStickyCTA);
    window.addEventListener('resize', toggleStickyCTA);
    toggleStickyCTA(); // Initial call
}

// Animation on scroll
function initAnimationOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.service-card, .testimonial, .about-content, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card,
        .about-content,
        .contact-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate-in,
        .about-content.animate-in,
        .contact-content.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card {
            transition-delay: 0.1s;
        }
        
        .service-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .service-card:nth-child(4) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);
}

// Utility function for notifications
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Hide notification
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Form validation helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Image lazy loading fallback for older browsers
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Performance optimization
function initPerformanceOptimizations() {
    // Preload critical resources
    const criticalImages = [
        'assets/images/hero-cleaning.jpg',
        'assets/images/team-photo.jpg'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });

    // Optimize scroll performance
    let ticking = false;
    
    function updateOnScroll() {
        // Batch scroll-based updates here
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Initialize performance optimizations
initLazyLoading();
initPerformanceOptimizations();

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error to analytics service
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        showNotification
    };
}
