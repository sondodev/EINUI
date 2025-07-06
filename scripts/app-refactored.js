// EIN Fashion Studio - Main Application Script (Refactored)
class EINApp {
  constructor() {
    this.swiper = null;
    this.themeManager = new ThemeManager();
    this.cartManager = new CartManager();
    this.navigationManager = null;
    
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeSwiper();
      this.initializeManagers();
      this.initializeEventHandlers();
      this.initializeApp();
    });
  }

  initializeSwiper() {
    this.swiper = new Swiper('.main-swiper', {
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
        slideChange: () => {
          this.handleSlideChange();
        },
        touchStart: () => {
          this.swiper.allowClick = false;
        },
        touchEnd: () => {
          setTimeout(() => {
            this.swiper.allowClick = true;
          }, 300);
        }
      }
    });
  }

  initializeManagers() {
    this.navigationManager = new NavigationManager(this.swiper, this.themeManager);
  }

  initializeEventHandlers() {
    // Custom wheel event handler for better snap behavior
    this.initializeWheelHandler();
    
    // Handle window resize
    this.initializeResizeHandler();
  }

  initializeWheelHandler() {
    let wheelTimeout;
    let isWheeling = false;
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isWheeling) return;
      
      isWheeling = true;
      clearTimeout(wheelTimeout);
      
      const delta = e.deltaY;
      const threshold = 10;
      
      if (Math.abs(delta) > threshold) {
        if (delta > 0) {
          this.swiper.slideNext();
        } else {
          this.swiper.slidePrev();
        }
      }
      
      wheelTimeout = setTimeout(() => {
        isWheeling = false;
      }, 1000);
    };
    
    document.addEventListener('wheel', handleWheel, { passive: false });
  }

  initializeResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.swiper.update();
      }, 250);
    });
  }

  handleSlideChange() {
    const activeIndex = this.swiper.activeIndex;
    const totalSlides = this.swiper.slides.length;
    
    this.themeManager.updateNavbarTheme(activeIndex);
    this.themeManager.updateFooterTheme(activeIndex);
    this.themeManager.updateScrollIndicators(activeIndex, totalSlides);
    AnimationManager.animateActiveSlide();
  }

  initializeApp() {
    // Set body as loaded
    document.body.classList.add('loaded');
    
    // Initialize theme for current slide (usually slide 0 - light theme)
    const initialLogo = document.querySelector('.logo-container h1');
    if (initialLogo) {
      initialLogo.classList.add('text-gray-900');
    }
    
    this.themeManager.updateNavbarTheme(0);
    this.themeManager.updateFooterTheme(0);
    this.themeManager.updateScrollIndicators(0, this.swiper.slides.length);
    
    // Initialize animations
    AnimationManager.initializeLogoAnimation();
    
    // Initial slide animation
    setTimeout(() => {
      AnimationManager.animateActiveSlide();
    }, 300);

    // Add global reset cart function for demo purposes
    window.resetCart = () => {
      this.cartManager.reset();
    };
  }
}

// Initialize the application
new EINApp();
