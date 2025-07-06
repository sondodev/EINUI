// Cart Functionality Module
class CartManager {
  constructor() {
    this.cartItems = 0;
    this.elements = {
      container: document.querySelector('.cart-container'),
      cart: document.querySelector('.cart'),
      icon: document.querySelector('.cart-icon'),
      badge: document.querySelector('.cart-badge'),
      count: document.querySelector('.cart-count')
    };
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.makeProductCardsClickable();
  }

  bindEvents() {
    // Cart click handler
    if (this.elements.cart) {
      this.elements.cart.addEventListener('click', (e) => {
        e.preventDefault();
        this.addToCart();
        this.createFloatingNotification();
      });
    }

    // Connect CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
      if (button.textContent.includes('SHOP')) {
        button.addEventListener('click', () => {
          setTimeout(() => this.addToCart(), 500);
        });
      }
    });
  }

  addToCart() {
    this.cartItems++;
    this.updateCartDisplay();
    this.playAddToCartAnimation();
  }

  updateCartDisplay() {
    if (this.elements.count) {
      this.elements.count.textContent = this.cartItems;
    }
    
    if (this.cartItems > 0) {
      this.elements.badge?.classList.add('show');
      this.elements.count?.classList.add('cart-count-increment');
      
      setTimeout(() => {
        this.elements.count?.classList.remove('cart-count-increment');
      }, 400);
    } else {
      this.elements.badge?.classList.remove('show');
    }
  }

  playAddToCartAnimation() {
    const { cart, icon, badge } = this.elements;
    
    // Add shake effect
    cart?.classList.add('cart-shake');
    
    // Add ripple effect
    cart?.classList.add('cart-ripple', 'active');
    
    // Create particle effects
    this.createParticleEffect();
    
    // Add floating effect
    setTimeout(() => {
      cart?.classList.add('cart-float');
    }, 100);
    
    // Remove animation classes
    setTimeout(() => {
      cart?.classList.remove('cart-shake', 'cart-ripple', 'active', 'cart-float');
    }, 800);
    
    // Add success state
    setTimeout(() => {
      icon?.classList.add('cart-success');
      setTimeout(() => {
        icon?.classList.remove('cart-success');
      }, 800);
    }, 200);
    
    // Add heartbeat for high count
    if (this.cartItems >= 5) {
      badge?.classList.add('heartbeat');
      setTimeout(() => {
        badge?.classList.remove('heartbeat');
      }, 3000);
    }
  }

  createParticleEffect() {
    const particleCount = 6;
    const cartRect = this.elements.cart?.getBoundingClientRect();
    if (!cartRect) return;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'cart-particles';
      
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
      
      setTimeout(() => {
        particle.style.animation = `particleFloat 1s ease-out forwards`;
      }, i * 50);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 1000 + (i * 50));
    }
  }

  createFloatingNotification() {
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
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 2500);
  }

  makeProductCardsClickable() {
    const productCards = document.querySelectorAll('.category-card');
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        
        card.style.transform = 'scale(0.95) translateY(-8px)';
        setTimeout(() => {
          card.style.transform = '';
        }, 200);
        
        setTimeout(() => this.addToCart(), 300);
      });
      
      card.style.cursor = 'pointer';
      
      card.addEventListener('mouseenter', function() {
        const title = this.querySelector('h3');
        if (title && !title.textContent.includes('🛒')) {
          title.textContent = '🛒 ' + title.textContent;
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const title = this.querySelector('h3');
        if (title) {
          title.textContent = title.textContent.replace('🛒 ', '');
        }
      });
    });
  }

  reset() {
    this.cartItems = 0;
    this.updateCartDisplay();
  }
}

// Export for global access
window.CartManager = CartManager;
