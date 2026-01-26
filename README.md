# Astro Portfolio Website

A minimal, bold, and clean personal portfolio website built with Astro and Tailwind CSS for SEO/AEO optimization.

## Features

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS
- **Design**: Minimal, bold, clean with generous white space
- **Colors**: White, black, and violent red (#ff0022) accent
- **Typography**: Khand (headings) and Playfair Display (body)
- **Pages**: Home, About, Projects
- **Newsletter**: Email capture form (client-side only)

## Project Structure

```
astro-portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with nav/footer
│   ├── components/
│   │   ├── Header.astro          # Navigation component
│   │   ├── Footer.astro          # Footer component
│   │   ├── NewsletterForm.astro  # Email capture form
│   │   └── CTAButton.astro        # Reusable red CTA button
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   └── projects.astro         # Projects page
│   └── styles/
│       └── global.css            # Global styles & font imports
├── public/                        # Static assets
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind configuration
└── package.json                  # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit `tailwind.config.mjs` to modify the color scheme:
- `violent-red`: #ff0022 (accent color)
- `violent-red-dark`: #cc001b (hover state)

### Typography

Fonts are loaded from Google Fonts in `src/styles/global.css`:
- Headings: Khand (sans-serif)
- Body: Playfair Display (serif)

### Content

Replace placeholder Lorem ipsum content in:
- `src/pages/index.astro` - Homepage content
- `src/pages/about.astro` - About page content
- `src/pages/projects.astro` - Projects page content

### Newsletter Integration

The newsletter form currently logs submissions to the console. To integrate with a backend service:

1. Edit `src/components/NewsletterForm.astro`
2. Replace the `console.log` in the form submit handler with your API call
3. Update the success/error message handling as needed

## Design Philosophy

- **Minimal**: Clean, uncluttered layouts
- **Bold**: Strong typography and strategic use of accent color
- **White Space**: Generous padding and margins for breathing room
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Static generation, optimized assets

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

Private project - All rights reserved.
