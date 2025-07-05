# Assets Directory

This directory is reserved for images, videos, and other media files.

## Recommended Structure

```
assets/
├── images/
│   ├── hero/           # Hero section images
│   ├── about/          # About section images
│   ├── lookbook/       # Fashion gallery images
│   ├── products/       # Product images
│   └── icons/          # UI icons and logos
├── videos/             # Background videos (optional)
└── fonts/              # Custom fonts (if not using CDN)
```

## Image Guidelines

### Formats

- **WebP** - Primary format for better compression
- **JPG** - Fallback for older browsers
- **PNG** - For images requiring transparency
- **SVG** - For icons and simple graphics

### Optimization

- Compress images before adding to project
- Use responsive image sizes for different breakpoints
- Consider lazy loading for better performance

### Naming Convention

```
hero-background.webp
about-team-photo.jpg
lookbook-collection-1.webp
product-dress-front.jpg
icon-arrow-right.svg
```

## Usage in HTML

```html
<!-- Responsive images -->
<picture>
  <source srcset="assets/images/hero/hero-bg.webp" type="image/webp" />
  <img
    src="assets/images/hero/hero-bg.jpg"
    alt="Hero background"
    class="w-full h-full object-cover"
  />
</picture>

<!-- Direct usage -->
<img
  src="assets/images/products/dress-1.webp"
  alt="Summer dress"
  class="w-full h-64 object-cover rounded-lg"
/>
```

## Current Status

This directory is currently empty. Add your images and media files here following the structure above.
