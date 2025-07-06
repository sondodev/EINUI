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
                updateFooterTheme(this.activeIndex);
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
    });    // Update navbar theme based on current slide
    function updateNavbarTheme(slideIndex) {
        const navbar = document.querySelector('.navbar');
        const logo = document.querySelector('.logo-container h1');
        const cart = document.querySelector('.cart');
        
        console.log('updateNavbarTheme called with slideIndex:', slideIndex);
        
        // Remove existing theme classes
        navbar.classList.remove('navbar-dark', 'navbar-light', 'navbar-vibrant');
        
        // Slide backgrounds:
        // 0: Hero - Light gray gradient (light theme)
        // 1: About - Blue to purple dark (dark theme)
        // 2: Lookbook - Pink-400 to purple-200 vibrant (enhanced contrast)
        // 3: Shop - Cyan-200 to pink-200 light (light theme)
        // 4: Community - Gray-800 to black dark (dark theme)
        
        if (slideIndex === 1 || slideIndex === 4) {
            // Dark theme for About (1) and Community (4)
            console.log('Applying dark theme for slide', slideIndex);
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('bg-white/95', 'border-black/10', 'bg-black/30', 'border-white/30');
            navbar.classList.add('bg-black/15', 'border-white/20');
            
            // Update navbar text colors
            const textElements = navbar.querySelectorAll('.nav-link, .nav-action, .cart, .cart-text');
            textElements.forEach(el => {
                el.classList.remove('text-gray-900');
                el.classList.add('text-white');
            });
            
            // Update logo color to white on dark backgrounds
            if (logo) {
                logo.classList.remove('text-gray-900');
                logo.classList.add('text-white');
                console.log('Logo set to white for slide', slideIndex);
            }
            
            const currency = navbar.querySelector('.currency');
            if (currency) {
                currency.classList.remove('bg-gray-100', 'text-gray-900');
                currency.classList.add('bg-white/20', 'text-white');
            }
            
            const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
            mobileSpans.forEach(span => {
                span.classList.remove('bg-gray-900');
                span.classList.add('bg-white');
            });        } else if (slideIndex === 2) {
            // Enhanced contrast theme for Lookbook (2) - vibrant pink-400 background
            console.log('Applying vibrant theme for slide', slideIndex);
            navbar.classList.add('navbar-vibrant');
            navbar.classList.remove('bg-white/95', 'border-black/10', 'bg-black/15', 'border-white/20');
            navbar.classList.add('bg-black/30', 'border-white/30');
            
            // Update navbar text colors to white for better contrast on vibrant background
            const textElements = navbar.querySelectorAll('.nav-link, .nav-action, .cart, .cart-text');
            textElements.forEach(el => {
                el.classList.remove('text-gray-900');
                el.classList.add('text-white');
            });
            
            // Update logo color to white for vibrant background
            if (logo) {
                logo.classList.remove('text-gray-900');
                logo.classList.add('text-white');
                console.log('Logo set to white for vibrant slide', slideIndex);
            }
            
            const currency = navbar.querySelector('.currency');
            if (currency) {
                currency.classList.remove('bg-gray-100', 'text-gray-900');
                currency.classList.add('bg-white/20', 'text-white');
            }
            
            const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
            mobileSpans.forEach(span => {
                span.classList.remove('bg-gray-900');
                span.classList.add('bg-white');
            });        } else if (slideIndex === 3) {
            // Enhanced light theme for Shop (3) - cyan-200 to pink-200 gradient needs better contrast
            console.log('Applying enhanced light theme for slide', slideIndex);
            navbar.classList.add('navbar-light');
            navbar.classList.remove('bg-black/15', 'border-white/20', 'bg-black/30', 'border-white/30');
            navbar.classList.add('bg-white/98', 'border-gray-900/20');
            
            // Update navbar text colors to darker for better contrast
            const textElements = navbar.querySelectorAll('.nav-link, .nav-action, .cart, .cart-text');
            textElements.forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-900');
            });
            
            // Update logo color to darker for better contrast
            if (logo) {
                logo.classList.remove('text-white');
                logo.classList.add('text-gray-900');
                console.log('Logo set to dark for enhanced light slide', slideIndex);
            }
            
            const currency = navbar.querySelector('.currency');
            if (currency) {
                currency.classList.remove('bg-white/20', 'text-white');
                currency.classList.add('bg-gray-200', 'text-gray-900');
            }
            
            const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
            mobileSpans.forEach(span => {
                span.classList.remove('bg-white');
                span.classList.add('bg-gray-900');
            });
        } else {
            // Light theme for Hero (0) only
            console.log('Applying light theme for slide', slideIndex);
            navbar.classList.add('navbar-light');
            navbar.classList.remove('bg-black/15', 'border-white/20', 'bg-black/30', 'border-white/30');            navbar.classList.add('bg-white/95', 'border-black/10');
            
            // Update navbar text colors
            const textElements = navbar.querySelectorAll('.nav-link, .nav-action, .cart, .cart-text');
            textElements.forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-900');
            });
            
            // Update logo color to dark on light backgrounds
            if (logo) {
                logo.classList.remove('text-white');
                logo.classList.add('text-gray-900');
                console.log('Logo set to dark for slide', slideIndex);
            }
            
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
    }    // Update footer theme based on current slide (footer only appears on last slide)
    function updateFooterTheme(slideIndex) {
        const footer = document.querySelector('.footer');
        if (!footer) return; // Footer only exists on the last slide
        
        // Slide backgrounds:
        // 0: Hero - Light gray gradient (light theme)
        // 1: About - Blue to purple dark (dark theme)
        // 2: Lookbook - Pink-400 to purple-200 vibrant (enhanced contrast)
        // 3: Shop - Cyan-200 to pink-200 light (light theme)
        // 4: Community - Gray-800 to black dark (dark theme)
        
        if (slideIndex === 1 || slideIndex === 4) {
            // Dark theme for footer on About (1) and Community (4)
            footer.classList.remove('bg-white/95', 'border-black/10', 'bg-black/30', 'border-white/30');
            footer.classList.add('bg-black/15', 'border-white/20');
            
            // Update text colors to white
            const footerTextElements = footer.querySelectorAll('.footer-text, .footer-link');
            footerTextElements.forEach(el => {
                el.classList.remove('text-gray-900', 'hover:text-gray-600');
                el.classList.add('text-white', 'hover:text-gray-300');
            });        } else if (slideIndex === 2) {
            // Enhanced contrast theme for footer on Lookbook (2)
            footer.classList.remove('bg-white/95', 'border-black/10', 'bg-black/15', 'border-white/20');
            footer.classList.add('bg-black/30', 'border-white/30');
            
            // Update text colors to white for better contrast
            const footerTextElements = footer.querySelectorAll('.footer-text, .footer-link');
            footerTextElements.forEach(el => {
                el.classList.remove('text-gray-900', 'hover:text-gray-600');
                el.classList.add('text-white', 'hover:text-gray-300');
            });
        } else if (slideIndex === 3) {
            // Enhanced light theme for footer on Shop (3)
            footer.classList.remove('bg-black/15', 'border-white/20', 'bg-black/30', 'border-white/30');
            footer.classList.add('bg-white/98', 'border-gray-900/20');
            
            // Update text colors to dark for better contrast
            const footerTextElements = footer.querySelectorAll('.footer-text, .footer-link');
            footerTextElements.forEach(el => {
                el.classList.remove('text-white', 'hover:text-gray-300');
                el.classList.add('text-gray-900', 'hover:text-gray-600');
            });
        } else {
            // Light theme for footer on Hero (0) only
            footer.classList.remove('bg-black/15', 'border-white/20', 'bg-black/30', 'border-white/30');
            footer.classList.add('bg-white/95', 'border-black/10');
            
            // Update text colors to dark
            const footerTextElements = footer.querySelectorAll('.footer-text, .footer-link');
            footerTextElements.forEach(el => {
                el.classList.remove('text-white', 'hover:text-gray-300');
                el.classList.add('text-gray-900', 'hover:text-gray-600');
            });
        }
    }

    // Update slide indicators with adaptive colors
    function updateScrollIndicators(slideIndex, totalSlides) {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const slideIndicators = document.querySelector('.slide-indicators');
        
        // Hide scroll indicator on last slide
        if (slideIndex === totalSlides - 1) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }

        // Update slide dots
        const slideDots = document.querySelectorAll('.slide-dot');
        slideDots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Adapt indicator colors to background
        // Light backgrounds: Hero (0), Lookbook (2), Shop (3)
        // Dark backgrounds: About (1), Community (4)
        if (slideIndex === 1 || slideIndex === 4) {
            // Dark backgrounds - use light indicators
            slideIndicators.classList.remove('light-bg');
            slideIndicators.classList.add('dark-bg');
            scrollIndicator.classList.remove('text-gray-900');
            scrollIndicator.classList.add('text-white');
        } else {
            // Light backgrounds - use dark indicators  
            slideIndicators.classList.remove('dark-bg');
            slideIndicators.classList.add('light-bg');
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
    }    // Navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Map nav links to slide indices: About=1, Lookbook=2, Shop=3, Community=4
            mainSwiper.slideTo(index + 1);
        });
    });// Slide dot clicks
    const slideDots = document.querySelectorAll('.slide-dot');
    slideDots.forEach((dot, index) => {
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
                mainSwiper.slideTo(3); // Shop is now slide 3 (0-indexed)
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
    });    // Initialize cart functionality
    initializeCart();
    
    // Initialize logo functionality
    initializeLogo();    // Set body as loaded
    document.body.classList.add('loaded');
    
    // Initialize theme for current slide (usually slide 0 - light theme)
    const initialLogo = document.querySelector('.logo-container h1');
    if (initialLogo) {
        initialLogo.classList.add('text-gray-900');
    }
    
    updateNavbarTheme(0);
    updateFooterTheme(0);
    updateScrollIndicators(0, mainSwiper.slides.length);
    
    // Initial animation
    setTimeout(() => {
        animateActiveSlide();
    }, 300);
});

// Logo functionality with improved UX
function initializeLogo() {
    const logo = document.querySelector('.logo-container h1');
    
    if (logo) {
        // Add click functionality to navigate to home
        logo.addEventListener('click', () => {
            mainSwiper.slideTo(0); // Navigate to first slide
            
            // Add click animation
            logo.style.transform = 'scale(0.95)';
            setTimeout(() => {
                logo.style.transform = '';
            }, 150);
        });
        
        // Add keyboard accessibility
        logo.setAttribute('tabindex', '0');
        logo.setAttribute('role', 'button');
        logo.setAttribute('aria-label', 'Navigate to home page');
        
        logo.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                logo.click();
            }
        });
        
        // Add entrance animation
        setTimeout(() => {
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1)';
        }, 100);
    }
}

// Cart functionality with impressive animations
function initializeCart() {
    const cartContainer = document.querySelector('.cart-container');
    const cart = document.querySelector('.cart');
    const cartIcon = document.querySelector('.cart-icon');
    const cartBadge = document.querySelector('.cart-badge');
    const cartCount = document.querySelector('.cart-count');
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    let cartItems = 0;
    
    // Add items to cart with animation
    function addToCart() {
        cartItems++;
        updateCartDisplay();
        playAddToCartAnimation();
    }
    
    // Update cart display with animations
    function updateCartDisplay() {
        cartCount.textContent = cartItems;
        
        if (cartItems > 0) {
            cartBadge.classList.add('show');
            cartCount.classList.add('cart-count-increment');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                cartCount.classList.remove('cart-count-increment');
            }, 400);
        } else {
            cartBadge.classList.remove('show');
        }
    }
      // Play impressive add to cart animation
    function playAddToCartAnimation() {
        // Add shake effect
        cart.classList.add('cart-shake');
        
        // Add ripple effect
        cart.classList.add('cart-ripple', 'active');
        
        // Create particle effects
        createParticleEffect();
        
        // Add floating effect
        setTimeout(() => {
            cart.classList.add('cart-float');
        }, 100);
        
        // Remove animation classes
        setTimeout(() => {
            cart.classList.remove('cart-shake', 'cart-ripple', 'active', 'cart-float');
        }, 800);
        
        // Add success state
        setTimeout(() => {
            cartIcon.classList.add('cart-success');
            setTimeout(() => {
                cartIcon.classList.remove('cart-success');
            }, 800);
        }, 200);
        
        // Add heartbeat for high count
        if (cartItems >= 5) {
            cartBadge.classList.add('heartbeat');
            setTimeout(() => {
                cartBadge.classList.remove('heartbeat');
            }, 3000);
        }
    }
    
    // Create particle effect
    function createParticleEffect() {
        const particleCount = 6;
        const cartRect = cart.getBoundingClientRect();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'cart-particles';
            
            // Random position around cart
            const angle = (360 / particleCount) * i;
            const radius = 20;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            particle.style.cssText = `
                position: fixed;
                left: ${cartRect.left + cartRect.width / 2 + x}px;
                top: ${cartRect.top + cartRect.height / 2 + y}px;
                width: 4px;
                height: 4px;
                background: ${i % 2 === 0 ? '#fbbf24' : '#10b981'};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            
            document.body.appendChild(particle);
            
            // Animate particle
            setTimeout(() => {
                particle.style.animation = `particleFloat 1s ease-out forwards`;
            }, i * 50);
            
            // Remove particle
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 1000 + (i * 50));
        }
    }
    
    // Cart click handler
    cart.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simulate adding an item
        addToCart();
        
        // Create floating notification
        createFloatingNotification();
    });
    
    // Create floating notification
    function createFloatingNotification() {
        const notification = document.createElement('div');
        notification.className = 'floating-notification';
        notification.textContent = 'Item added to cart!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
            transform: translateX(100%);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 9999;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2500);
    }
      // Connect CTA buttons to add to cart
    ctaButtons.forEach(button => {
        if (button.textContent.includes('SHOP')) {
            button.addEventListener('click', function(e) {
                // Add small delay for the shop navigation, then add item
                setTimeout(() => {
                    addToCart();
                }, 500);
            });
        }
    });
    
    // Make product cards clickable for demo
    const productCards = document.querySelectorAll('.category-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add visual feedback to card
            this.style.transform = 'scale(0.95) translateY(-8px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Add to cart with delay
            setTimeout(() => {
                addToCart();
            }, 300);
        });
        
        // Add hover effect hint
        card.style.cursor = 'pointer';
        const cardTitle = card.querySelector('h3');
        if (cardTitle) {
            cardTitle.style.transition = 'all 0.3s ease';
        }
        
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.textContent = '🛒 ' + title.textContent.replace('🛒 ', '');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.textContent = title.textContent.replace('🛒 ', '');
            }
        });
    });
    
    // Add hover sound effect (optional)
    cart.addEventListener('mouseenter', function() {
        // You can add a subtle hover sound here if desired
        // playHoverSound();
    });
    
    // Reset cart function (for demo purposes)
    window.resetCart = function() {
        cartItems = 0;
        updateCartDisplay();
    };
}
