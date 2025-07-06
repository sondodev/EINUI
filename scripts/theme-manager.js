// Theme Management Module
class ThemeManager {
  constructor() {
    this.themes = {
      light: {
        navbar: 'navbar-light',
        background: 'bg-white/95',
        border: 'border-black/10',
        text: 'text-gray-900',
        hover: 'hover:text-gray-600'
      },
      dark: {
        navbar: 'navbar-dark',
        background: 'bg-black/15',
        border: 'border-white/20',
        text: 'text-white',
        hover: 'hover:text-gray-300'
      },
      vibrant: {
        navbar: 'navbar-vibrant',
        background: 'bg-black/30',
        border: 'border-white/30',
        text: 'text-white',
        hover: 'hover:text-gray-300'
      },
      enhancedLight: {
        navbar: 'navbar-light',
        background: 'bg-white/98',
        border: 'border-gray-900/20',
        text: 'text-gray-900',
        hover: 'hover:text-gray-600'
      }
    };
  }

  getThemeForSlide(slideIndex) {
    // Slide backgrounds mapping:
    // 0: Hero - Light gray gradient (light theme)
    // 1: About - Blue to purple dark (dark theme)
    // 2: Lookbook - Pink-400 to purple-200 vibrant (enhanced contrast)
    // 3: Shop - Cyan-200 to pink-200 light (enhanced light theme)
    // 4: Community - Gray-800 to black dark (dark theme)
    
    if (slideIndex === 1 || slideIndex === 4) {
      return this.themes.dark;
    } else if (slideIndex === 2) {
      return this.themes.vibrant;
    } else if (slideIndex === 3) {
      return this.themes.enhancedLight;
    } else {
      return this.themes.light;
    }
  }

  updateNavbarTheme(slideIndex) {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo-container h1');
    const theme = this.getThemeForSlide(slideIndex);
    
    console.log('updateNavbarTheme called with slideIndex:', slideIndex);
    
    // Remove existing theme classes
    Object.values(this.themes).forEach(t => {
      navbar.classList.remove(t.navbar);
      navbar.classList.remove(t.background);
      navbar.classList.remove(t.border);
    });
    
    // Apply new theme
    navbar.classList.add(theme.navbar);
    navbar.classList.add(theme.background);
    navbar.classList.add(theme.border);
    
    // Update text elements
    const textElements = navbar.querySelectorAll('.nav-link, .nav-action, .cart, .cart-text');
    textElements.forEach(el => {
      // Remove all possible text classes
      Object.values(this.themes).forEach(t => {
        el.classList.remove(t.text);
        el.classList.remove(t.hover);
      });
      // Add current theme classes
      el.classList.add(theme.text);
      el.classList.add(theme.hover);
    });
    
    // Update logo
    if (logo) {
      Object.values(this.themes).forEach(t => {
        logo.classList.remove(t.text);
      });
      logo.classList.add(theme.text);
      console.log('Logo theme updated for slide', slideIndex);
    }
    
    // Update mobile menu toggle
    const mobileSpans = navbar.querySelectorAll('.mobile-menu-toggle span');
    mobileSpans.forEach(span => {
      if (theme === this.themes.light || theme === this.themes.enhancedLight) {
        span.classList.remove('bg-white');
        span.classList.add('bg-gray-900');
      } else {
        span.classList.remove('bg-gray-900');
        span.classList.add('bg-white');
      }
    });
  }

  updateFooterTheme(slideIndex) {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    const theme = this.getThemeForSlide(slideIndex);
    
    // Remove existing classes
    Object.values(this.themes).forEach(t => {
      footer.classList.remove(t.background);
      footer.classList.remove(t.border);
    });
    
    // Apply new theme
    footer.classList.add(theme.background);
    footer.classList.add(theme.border);
    
    // Update footer text elements
    const footerTextElements = footer.querySelectorAll('.footer-text, .footer-link');
    footerTextElements.forEach(el => {
      Object.values(this.themes).forEach(t => {
        el.classList.remove(t.text);
        el.classList.remove(t.hover);
      });
      el.classList.add(theme.text);
      el.classList.add(theme.hover);
    });
  }

  updateScrollIndicators(slideIndex, totalSlides) {
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
    const theme = this.getThemeForSlide(slideIndex);
    if (theme === this.themes.dark || theme === this.themes.vibrant) {
      slideIndicators.classList.remove('light-bg');
      slideIndicators.classList.add('dark-bg');
      scrollIndicator.classList.remove('text-gray-900');
      scrollIndicator.classList.add('text-white');
    } else {
      slideIndicators.classList.remove('dark-bg');
      slideIndicators.classList.add('light-bg');
      scrollIndicator.classList.remove('text-white');
      scrollIndicator.classList.add('text-gray-900');
    }
  }
}

// Export for use in other modules
window.ThemeManager = ThemeManager;
