// EIN Fashion Studio - Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const mainSwiper = new Swiper('.main-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        grabCursor: true,
        
        // Enhanced mousewheel with snap behavior
        mousewheel: {
            enabled: true,
            sensitivity: 0.5,
            thresholdDelta: 50,
            thresholdTime: 500,
            forceToAxis: true,
        },
        
        // Keyboard navigation
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                const titles = ['HOME', 'ABOUT', 'LOOKBOOK', 'SHOP'];
                return '<span class="' + className + ' px-4 py-2 text-xs font-medium tracking-wide rounded-full transition-all duration-300">' + titles[index] + '</span>';
            },
        },
        
        // Slide transition effect
        effect: 'slide',
        
        // Touch/swipe settings
        allowTouchMove: true,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        
        // Snap behavior
        resistance: true,
        resistanceRatio: 0.85,
        
        // Prevent momentum scrolling
        freeMode: false,
        freeModeSticky: false,
        
        // Callbacks
        on: {
            slideChange: function() {
                updateNavbarTheme(this.activeIndex);
                updateScrollIndicators(this.activeIndex, this.slides.length);
                animateActiveSlide();
            },
            touchStart: function() {
                this.allowClick = false;
            },
            touchEnd: function() {
                setTimeout(() => {
                    this.allowClick = true;
                }, 300);
            }
        }
    });

    // Update navbar theme based on current slide
    function updateNavbarTheme(slideIndex) {
        const navbar = document.querySelector('.navbar');
        
        // Remove existing theme classes
        navbar.classList.remove('navbar-dark', 'navbar-light');
        
        // Dark backgrounds: About (1) and Lookbook (2)
        // Light backgrounds: Hero (0) and Shop (3)
        if (slideIndex === 1 || slideIndex === 2) {
            // Dark theme
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('bg-white/95', 'border-black/10');
            navbar.classList.add('bg-black/15', 'border-white/20');
            
            // Update text colors
            const textElements = navbar.querySelectorAll('.nav-logo h1, .nav-link, .nav-action, .cart');
            textElements.forEach(el => {
                el.classList.remove('text-gray-900');
                el.classList.add('text-white');
            });
            
            const currency = navbar.querySelector('.currency');
            if (currency) {
                currency.classList.remove('bg-gray-100', 'text-gray-900');
                currency.classList.add('bg-white/20', 'text-white');
            }
            
            const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
            mobileSpans.forEach(span => {
                span.classList.remove('bg-gray-900');
                span.classList.add('bg-white');
            });
        } else {
            // Light theme
            navbar.classList.add('navbar-light');
            navbar.classList.remove('bg-black/15', 'border-white/20');
            navbar.classList.add('bg-white/95', 'border-black/10');
            
            // Update text colors
            const textElements = navbar.querySelectorAll('.nav-logo h1, .nav-link, .nav-action, .cart');
            textElements.forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-900');
            });
            
            const currency = navbar.querySelector('.currency');
            if (currency) {
                currency.classList.remove('bg-white/20', 'text-white');
                currency.classList.add('bg-gray-100', 'text-gray-900');
            }
            
            const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
            mobileSpans.forEach(span => {
                span.classList.remove('bg-white');
                span.classList.add('bg-gray-900');
            });
        }
    }

    // Update scroll indicators
    function updateScrollIndicators(slideIndex, totalSlides) {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const scrollProgress = document.querySelector('.scroll-progress');
        
        // Hide scroll indicator on last slide
        if (slideIndex === totalSlides - 1) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }

        // Update progress dots
        const progressDots = document.querySelectorAll('.progress-dot');
        progressDots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active');
                dot.classList.remove('bg-white/40', 'border-black/20');
                dot.classList.add('bg-gray-900', 'border-white', 'scale-125');
                dot.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-gray-900', 'border-white', 'scale-125');
                dot.classList.add('bg-white/40', 'border-black/20');
                dot.style.boxShadow = 'none';
            }
        });

        // Adapt colors to background
        if (slideIndex === 1 || slideIndex === 2) { // Dark backgrounds
            scrollProgress.style.filter = 'invert(1)';
            scrollIndicator.classList.remove('text-gray-900');
            scrollIndicator.classList.add('text-white');
        } else { // Light backgrounds
            scrollProgress.style.filter = 'invert(0)';
            scrollIndicator.classList.remove('text-white');
            scrollIndicator.classList.add('text-gray-900');
        }
    }

    // Animate active slide elements
    function animateActiveSlide() {
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            const elementsToAnimate = activeSlide.querySelectorAll(
                '.hero-title, .hero-subtitle, .cta-button, .section-title, .feature, .category-card, .lookbook-item'
            );
            
            elementsToAnimate.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    element.style.transition = 'all 0.6s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    }

    // Navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            mainSwiper.slideTo(index + 1);
        });
    });

    // Progress dot clicks
    const progressDots = document.querySelectorAll('.progress-dot');
    progressDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            mainSwiper.slideTo(index);
        });
    });

    // CTA button clicks
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-animation 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Navigate to shop section if it's a shop button
            if (this.textContent.includes('SHOP')) {
                mainSwiper.slideTo(3);
            }
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-menu-open');
            this.classList.toggle('active');
        });
    }

    // Enhanced touch gestures for mobile
    if ('ontouchstart' in window) {
        let startY = 0;
        let endY = 0;
        let isScrolling = false;
        
        document.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
            isScrolling = false;
        }, { passive: true });
        
        document.addEventListener('touchmove', function() {
            if (!isScrolling) {
                isScrolling = true;
            }
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            endY = e.changedTouches[0].clientY;
            const deltaY = startY - endY;
            const threshold = 50;
            
            if (Math.abs(deltaY) > threshold && isScrolling) {
                if (deltaY > 0) {
                    mainSwiper.slideNext();
                } else {
                    mainSwiper.slidePrev();
                }
            }
            
            isScrolling = false;
        }, { passive: true });
    }

    // Custom wheel event handler for better snap behavior
    let wheelTimeout;
    let isWheeling = false;
    
    function handleWheel(e) {
        e.preventDefault();
        
        if (isWheeling) return;
        
        isWheeling = true;
        clearTimeout(wheelTimeout);
        
        const delta = e.deltaY;
        const threshold = 10;
        
        if (Math.abs(delta) > threshold) {
            if (delta > 0) {
                mainSwiper.slideNext();
            } else {
                mainSwiper.slidePrev();
            }
        }
        
        wheelTimeout = setTimeout(() => {
            isWheeling = false;
        }, 1000);
    }
    
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            mainSwiper.update();
        }, 250);
    });

    // Initialize
    updateNavbarTheme(0);
    updateScrollIndicators(0, mainSwiper.slides.length);
    
    // Set body as loaded
    document.body.classList.add('loaded');
    
    // Initial animation
    setTimeout(() => {
        animateActiveSlide();
    }, 300);
});
