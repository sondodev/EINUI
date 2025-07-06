// Navigation and Interaction Manager
class NavigationManager {
  constructor(swiper, themeManager) {
    this.swiper = swiper;
    this.themeManager = themeManager;
    this.init();
  }

  init() {
    this.bindNavigationLinks();
    this.bindSlideDots();
    this.bindCTAButtons();
    this.bindMobileMenu();
    this.bindLogo();
    this.bindTouchGestures();
    this.bindKeyboardNavigation();
  }

  bindNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Map nav links to slide indices: About=1, Lookbook=2, Shop=3, Community=4
        this.swiper.slideTo(index + 1);
      });
    });
  }

  bindSlideDots() {
    const slideDots = document.querySelectorAll('.slide-dot');
    slideDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.swiper.slideTo(index);
      });
    });
  }

  bindCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add ripple effect
        AnimationManager.addRippleEffect(button, e);
        
        // Navigate to shop section if it's a shop button
        if (button.textContent.includes('SHOP')) {
          this.swiper.slideTo(3); // Shop is slide 3 (0-indexed)
        }
      });
    });
  }

  bindMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-menu-open');
        mobileToggle.classList.toggle('active');
      });
    }
  }

  bindLogo() {
    const logo = document.querySelector('.logo-container h1');
    
    if (logo) {
      // Add click functionality to navigate to home
      logo.addEventListener('click', () => {
        this.swiper.slideTo(0);
        
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
    }
  }

  bindTouchGestures() {
    if ('ontouchstart' in window) {
      let startY = 0;
      let endY = 0;
      let isScrolling = false;
      
      document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isScrolling = false;
      }, { passive: true });
      
      document.addEventListener('touchmove', () => {
        if (!isScrolling) {
          isScrolling = true;
        }
      }, { passive: true });
      
      document.addEventListener('touchend', (e) => {
        endY = e.changedTouches[0].clientY;
        const deltaY = startY - endY;
        const threshold = 50;
        
        if (Math.abs(deltaY) > threshold && isScrolling) {
          if (deltaY > 0) {
            this.swiper.slideNext();
          } else {
            this.swiper.slidePrev();
          }
        }
        
        isScrolling = false;
      }, { passive: true });
    }
  }

  bindKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowUp':
          e.preventDefault();
          this.swiper.slidePrev();
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.swiper.slideNext();
          break;
        case 'Home':
          e.preventDefault();
          this.swiper.slideTo(0);
          break;
        case 'End':
          e.preventDefault();
          this.swiper.slideTo(this.swiper.slides.length - 1);
          break;
      }
    });
  }
}

// Export for use in main app
window.NavigationManager = NavigationManager;
