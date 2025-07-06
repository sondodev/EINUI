# EIN Fashion Studio Website

A modern, responsive fashion website featuring full-screen scroll snap sections with smooth animations and adaptive navigation.

## ✨ Features

- **Zero Dependencies**: Uses CDN links only - no npm installation required
- **Full-Screen Scroll Snap**: Vertical carousel with Swiper.js
- **Adaptive Navigation**: Navbar colors automatically adapt to section backgrounds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Built with Tailwind CSS for clean, professional styling
- **Smooth Animations**: Custom CSS animations and transitions
- **Touch/Gesture Support**: Optimized for touch devices

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
3. **That's it!** No installation required

### Optional: Development Server

For live reload during development, you can use any of these methods:

```bash
# Python (if installed)
python -m http.server 3000

# Or use VS Code Live Server extension
# Or simply open index.html directly in your browser
```

## 📁 Project Structure

```
├── index.html          # Main HTML file with complete website
├── scripts/
│   ├── theme-manager.js        # Theme management and color adaptation
│   ├── cart-manager.js         # Shopping cart functionality
│   ├── animation-manager.js    # Animation utilities
│   ├── navigation-manager.js   # Navigation and user interactions
│   ├── app-refactored.js       # Main application (modular)
│   └── app.js                  # Legacy file (reference)
├── styles/
│   ├── variables.css           # CSS Custom Properties (Design System)
│   ├── base.css                # Global styles and fonts
│   ├── swiper.css              # Swiper component customizations
│   ├── navigation.css          # Navigation component styles
│   ├── cart.css                # Cart component with animations
│   ├── indicators.css          # Slide indicators and UI controls
│   ├── animations.css          # Reusable animation utilities
│   ├── responsive.css          # Mobile and responsive styles
│   └── main.css                # Legacy file (reference)
├── assets/
│   └── README.md       # Asset guidelines
├── memory_bank/        # AI context management
├── README.md           # This file
├── DEVELOPMENT.md      # Development guidelines
└── CLEANUP.md          # Cleanup documentation
```

## 🎨 Sections

- **Hero**: Welcome section with animated title
- **About**: Company information and mission
- **Lookbook**: Fashion gallery showcase
- **Shop**: Product display and shopping

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling (CDN)
- **Swiper.js** - Touch slider/carousel (CDN)
- **Vanilla JavaScript** - Smooth interactions
- **Google Fonts** - Inter typography (CDN)

## 💫 Customization

All styles use Tailwind CSS utility classes making customization easy:

- Colors, spacing, and typography can be modified in the HTML
- Custom animations are in `styles/main.css`
- Interactive behavior is in `scripts/app.js`

## 📱 Browser Support

Works in all modern browsers:

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

MIT License - feel free to use for any project!
