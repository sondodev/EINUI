// Animation Utilities Module
class AnimationManager {
  static animateActiveSlide() {
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

  static addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-animation 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  static initializeLogoAnimation() {
    const logo = document.querySelector('.logo-container h1');
    
    if (logo) {
      // Add entrance animation
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }
  }
}

// Export for use in other modules
window.AnimationManager = AnimationManager;
