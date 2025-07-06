# Project Long Term Memory

## Project Goals

- Create a modern, responsive fashion website for EIN Studio
- Implement full-screen scroll snap sections with smooth animations
- Provide adaptive navigation that responds to section backgrounds
- Maintain zero dependencies (CDN-only approach)
- Ensure excellent mobile and touch device support

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN), Custom CSS with CSS Custom Properties
- **Animations**: Swiper.js for scroll snapping, Custom CSS animations
- **Fonts**: Baloo 2 (Google Fonts), Bootstrap Icons
- **Architecture**: Modular CSS and JavaScript with class-based components

## Architecture

### File Structure

```
├── index.html                    # Main HTML file
├── styles/
│   ├── variables.css            # CSS Custom Properties (Design System)
│   ├── base.css                 # Global styles and fonts
│   ├── swiper.css               # Swiper component customizations
│   ├── navigation.css           # Navigation component styles
│   ├── cart.css                 # Cart component with animations
│   ├── indicators.css           # Slide indicators and UI controls
│   ├── animations.css           # Reusable animation utilities
│   ├── responsive.css           # Mobile and responsive styles
│   └── main.css                 # Legacy file (kept for reference)
├── scripts/
│   ├── theme-manager.js         # Theme management and color adaptation
│   ├── cart-manager.js          # Shopping cart functionality
│   ├── animation-manager.js     # Animation utilities
│   ├── navigation-manager.js    # Navigation and user interactions
│   ├── app-refactored.js        # Main application (modular)
│   └── app.js                   # Legacy file (kept for reference)
├── memory_bank/                 # AI context management
└── assets/                      # Media files directory
```

### Component Architecture

- **ThemeManager**: Handles adaptive navbar/footer themes based on slide backgrounds
- **CartManager**: Manages shopping cart state and impressive animations
- **AnimationManager**: Provides reusable animation utilities
- **NavigationManager**: Handles all user interactions and navigation
- **EINApp**: Main application class that orchestrates all components

## Conventions

- **CSS**: Use CSS Custom Properties for consistent design system
- **JavaScript**: ES6+ classes with modular architecture
- **File Naming**: kebab-case for CSS files, camelCase for JS classes
- **Comments**: Clear documentation for complex logic
- **Responsive**: Mobile-first approach with progressive enhancement
- **Accessibility**: Keyboard navigation and ARIA labels where needed

## Solution Direction

- **Modular Architecture**: Separated concerns into logical modules
- **Design System**: Consistent spacing, colors, and typography via CSS variables
- **Performance**: Hardware-accelerated animations, efficient event handling
- **Maintainability**: Clear separation between styling, behavior, and business logic
- **Scalability**: Easy to add new sections, themes, or interactive features

## Key Decisions

- **Modular Refactoring**: Split large CSS/JS files into focused modules for better maintainability
- **CSS Custom Properties**: Implemented design system for consistent theming
- **Class-Based JS**: Used ES6 classes for better organization and reusability
- **Theme Management**: Centralized theme logic in dedicated ThemeManager class
- **Legacy Preservation**: Kept original files as reference while implementing new structure
- **Zero Dependencies**: Maintained CDN-only approach for easy deployment
