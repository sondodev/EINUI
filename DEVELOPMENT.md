# Development Guide

## Project Overview

This is a standalone fashion website that requires no dependencies or build process. All external libraries are loaded via CDN.

## Architecture

### Standalone Design

- **No Build Process**: Simply open `index.html` in a browser
- **CDN Dependencies**: All libraries loaded from reliable CDNs
- **Vanilla JavaScript**: No frameworks, pure ES5/ES6 JavaScript
- **Utility-First CSS**: Tailwind CSS for rapid styling

### File Structure

```
├── index.html          # Complete website in one file
├── scripts/app.js      # All JavaScript functionality
├── styles/main.css     # Custom animations and overrides
└── assets/             # Future images/media
```

## Development Workflow

### 1. Quick Start

```bash
# Simply open the file
open index.html
# OR double-click index.html in file explorer
```

### 2. With Live Reload (Optional)

```bash
# Use the optional npm script
npm run serve
```

### 3. Editing Guidelines

#### HTML (index.html)

- All sections are in one file for simplicity
- Uses Tailwind utility classes
- Semantic HTML5 structure
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

#### JavaScript (scripts/app.js)

- Vanilla JavaScript (no modules to avoid CORS)
- Swiper initialization and configuration
- Navigation theme adaptation
- Scroll indicators and progress dots

#### CSS (styles/main.css)

- Custom animations only
- Swiper.js overrides
- Hardware acceleration optimizations

## Key Features Implementation

### 1. Scroll Snap Sections

- Swiper.js vertical carousel
- Four main sections: Hero, About, Lookbook, Shop
- Touch/mouse wheel navigation
- Smooth transitions

### 2. Adaptive Navigation

- Light navbar on dark backgrounds
- Dark navbar on light backgrounds
- Smooth color transitions

### 3. Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## Customization Guide

### Colors

Modify Tailwind classes in HTML:

```html
<!-- Primary colors -->
bg-gray-900 → bg-blue-900 text-gray-900 → text-blue-900

<!-- Gradients -->
from-gray-50 to-gray-200 → from-blue-50 to-blue-200
```

### Typography

Update font family in Tailwind config:

```javascript
fontFamily: {
  'inter': ['Inter', 'sans-serif'],    // Current
  'custom': ['Your Font', 'sans-serif'] // New
}
```

### Animations

Add custom animations in `styles/main.css`:

```css
@keyframes yourAnimation {
  /* keyframes */
}
```

### Sections

Modify section content directly in `index.html` using Tailwind classes.

## Browser Testing

### Desktop

- Chrome (recommended)
- Firefox
- Safari
- Edge

### Mobile

- iOS Safari
- Chrome Mobile
- Samsung Internet

### Testing Checklist

- [ ] Scroll snap works smoothly
- [ ] Navigation adapts to backgrounds
- [ ] Touch gestures work on mobile
- [ ] All animations are smooth
- [ ] Text is readable on all backgrounds
- [ ] Images load properly

## Performance

### Optimizations

- Hardware acceleration: `transform: translateZ(0)`
- Efficient animations: `transform` and `opacity` only
- Minimal JavaScript footprint
- CDN caching for external resources

### Loading Strategy

1. HTML renders immediately
2. Tailwind CSS loads from CDN
3. Google Fonts load with `display=swap`
4. Swiper.js loads before DOM ready
5. Custom scripts run after DOM ready

## Deployment

### Static Hosting

Works with any static host:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

### Steps

1. Upload all files maintaining structure
2. Ensure `index.html` is in root
3. No build process required

## Troubleshooting

### Common Issues

**Blank page:**

- Check browser console for errors
- Ensure all CDN links are accessible
- Verify file paths are correct

**Scroll not working:**

- Check Swiper.js loaded properly
- Verify CSS classes are applied
- Test with different browsers

**Navigation not adapting:**

- Check JavaScript console
- Verify scroll event listeners
- Test section background detection

## 🔧 Common Development Tasks

### Adding a New Section Component

1. **Create Component File**

```javascript
// components/NewSection.js
export class NewSectionComponent {
  constructor() {
    this.element = null;
  }

  render() {
    return `
            <div class="new-section flex items-center justify-center relative min-h-screen pt-20 bg-gradient-to-br from-blue-400 to-green-400">
                <div class="hero-content max-w-4xl px-8 text-center">
                    <h2 class="section-title text-5xl font-bold mb-8 text-white">NEW SECTION</h2>
                    <p class="text-xl text-white/90">Section content here</p>
                </div>
            </div>
        `;
  }

  mount(container) {
    const element = document.querySelector(container);
    element.innerHTML = this.render();
    element.classList.add(
      "swiper-slide",
      "flex",
      "items-center",
      "justify-center",
      "relative"
    );
    this.element = element;
    this.bindEvents();
    this.animateElements();
  }

  bindEvents() {
    // Add event listeners
  }

  animateElements() {
    // Add entrance animations
  }
}
```

2. **Add to Main Application**

```javascript
// scripts/main.js
import { NewSectionComponent } from "../components/NewSection.js";

// In initializeComponents()
this.components.newSection = new NewSectionComponent();
this.components.newSection.mount("#new-section");

// Update pagination titles
const titles = ["HOME", "ABOUT", "LOOKBOOK", "SHOP", "NEW"];
```

3. **Add HTML Container**

```html
<!-- index.html -->
<div id="new-section" class="swiper-slide"></div>
```

### Customizing Styles

#### Using Tailwind Classes

```html
<!-- Direct in component render() method -->
<div
  class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg"
>
  Content
</div>
```

#### Custom CSS Animations

```css
/* styles/main.css */
@keyframes customAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-element {
  animation: customAnimation 0.6s ease-out;
}
```

### Theme Adaptation

The navbar automatically adapts colors based on section backgrounds:

```javascript
// scripts/main.js - updateNavbarTheme()
updateNavbarTheme(slideIndex) {
    // Light sections: 0 (Hero), 3 (Shop), 4 (New)
    // Dark sections: 1 (About), 2 (Lookbook)
    const theme = ([1, 2].includes(slideIndex)) ? 'dark' : 'light';
    this.components.navbar.updateTheme(theme);
}
```

## 🎨 Tailwind CSS Guidelines

### Responsive Design

```html
<!-- Mobile first approach -->
<div class="text-sm md:text-base lg:text-lg xl:text-xl">Responsive text</div>

<!-- Grid layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Color Schemes

```html
<!-- Gradients -->
<div class="bg-gradient-to-br from-blue-400 to-purple-600">
  Gradient background
</div>

<!-- Opacity -->
<div class="bg-white/95 text-black/80">Semi-transparent elements</div>
```

### Animations

```html
<!-- Hover effects -->
<div
  class="transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
>
  Hover me
</div>

<!-- Custom animations (defined in Tailwind config) -->
<div class="animate-gradient-shift">Gradient animation</div>
```

## 🔍 Debugging Tips

### Component Not Showing

1. Check browser console for import errors
2. Verify component is imported in `main.js`
3. Ensure HTML container exists
4. Check if `mount()` is called

### Scroll Not Working

1. Verify Swiper initialization
2. Check CSS `overflow` properties
3. Test mousewheel and touch events
4. Ensure proper slide structure

### Styling Issues

1. Check Tailwind class names
2. Verify custom CSS in `styles/main.css`
3. Test responsive breakpoints
4. Check CSS specificity conflicts

## 📱 Browser Testing

### Desktop

- Chrome (primary)
- Firefox
- Safari
- Edge

### Mobile

- iOS Safari
- Chrome Mobile
- Samsung Internet

### Testing Checklist

- [ ] Scroll snap functionality
- [ ] Navigation theme switching
- [ ] Mobile touch gestures
- [ ] Responsive layouts
- [ ] Image loading
- [ ] Animation performance

## 🚀 Deployment

### Static Hosting

```bash
# Build ready - upload these files:
index.html
components/
scripts/
styles/
assets/
```

### Performance Optimization

- Use WebP images for better compression
- Implement lazy loading for images
- Minify CSS/JS for production
- Add service worker for caching

## 📞 Support

For questions or issues:

1. Check browser console for errors
2. Verify all files are properly linked
3. Test in different browsers
4. Check network requests in DevTools
