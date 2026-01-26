# Astro Portfolio (SEO/AEO) — Agent Notes

This file documents what was generated/changed in this project, how to run it locally, and where to edit things next.

## Quick start (local development)

### Node version (required)

Astro 4 requires **Node.js >= 18.14.1**.

This environment initially had **Node v12**, which caused `astro dev` to fail. We've implemented automatic safeguards to prevent this error.

### Automated setup (recommended)

Run the setup script which automatically handles Node version switching:

```bash
./setup.sh
```

This script will:
- Detect and load nvm if available
- Read `.nvmrc` file (specifies Node 18)
- Install Node 18 if needed
- Switch to Node 18
- Install all dependencies

### Manual setup

If you prefer manual setup, from the project root (`/home/user/vibe_coding/astro-portfolio`):

```bash
source ~/.nvm/nvm.sh
nvm use 18  # or: nvm use (reads .nvmrc automatically)
npm install
npm run dev
```

**Note:** The project includes `.nvmrc` and `.node-version` files, so `nvm use` (without specifying a version) will automatically use Node 18.

### Run the site

After setup:

```bash
npm run dev
```

Astro will print the local URL (expected):

- `http://localhost:4321/`

**Automatic Node version checks:**
- `preinstall` script checks Node version before installing dependencies
- `predev` and `prebuild` scripts check Node version before running commands
- If Node version is incompatible, you'll see a clear error message with instructions

### Open in browser

- Visit `http://localhost:4321/` manually, or run:

```bash
xdg-open http://localhost:4321/
```

## Project goals & constraints (as implemented)

- **Framework**: Astro (static output)
- **Styling**: Tailwind CSS
- **Pages**: Home, About, Projects
- **Design**: Minimal, bold, high whitespace
- **Colors**: white/black + one accent red `#ff0022`
- **Fonts**:
  - Headings: **Khand** (bold)
  - Body: **Playfair Display** (serif; bold italic used for emphasis)
- **Newsletter conversion**: prominent email capture on Home and Projects
- **Performance**: mostly static; minimal client JS (only for nav toggle + form validation)

## File structure (generated)

```text
src/
├── layouts/
│   └── Layout.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── NewsletterForm.astro
│   └── CTAButton.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── projects.astro
└── styles/
    └── global.css
```

Other key files:

- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `public/favicon.svg` - Site favicon
- `.nvmrc` - Node version for nvm (specifies 18)
- `.node-version` - Node version for other managers (specifies 18)
- `setup.sh` - Automated setup script
- `scripts/check-node-version.js` - Node version validation script

## Styling system

### Colors

Defined in `tailwind.config.mjs`:

- `violent-red`: `#ff0022`
- `violent-red-dark`: `#cc001b`
- `text-primary`: `#000000`
- `text-secondary`: `#333333`

### Typography

- Font families are configured in `tailwind.config.mjs`:
  - `font-heading`: `Khand`, sans-serif
  - `font-body`: `Playfair Display`, serif
- Fonts are imported from Google Fonts in `src/styles/global.css`.

### Animation

- Red pulse animation is defined in `src/styles/global.css` (`@keyframes pulse-red`) and also mapped in Tailwind config as `animation.pulse-red`.
- Red CTA buttons use the `animate-pulse-red` utility.

## Components (what they do)

### `src/layouts/Layout.astro`

- Wraps every page with:
  - `<Header />` (sticky nav)
  - `<Footer />` (minimal footer)
  - SEO basics in `<head>` (title/description + OG/Twitter tags)
- Imports global styles: `src/styles/global.css`

### `src/components/Header.astro`

- Sticky top navigation with:
  - name/logo on the left
  - Home/About/Projects links on desktop
  - hamburger menu on mobile
  - current page highlight via `currentPage` prop
- Small client-side script for mobile menu toggle.

### `src/components/Footer.astro`

- Minimal footer with copyright.
- Social links placeholder commented for later.

### `src/components/CTAButton.astro`

- Reusable CTA button:
  - red background, white text
  - bold typography
  - hover + focus states
  - subtle pulse animation
  - **Improved:** Now supports optional `class` prop for custom styling
  - **Improved:** Includes `ariaLabel` prop for better accessibility
  - **Improved:** Uses consistent base classes with template string merging
  - **Fixed:** Removed deprecated `onClick` prop (use form handlers instead)

### `src/components/NewsletterForm.astro`

- Email-only signup form with:
  - client-side validation (simple regex)
  - success/error message UI
  - `console.log` submission payload (no backend yet)

Important fix applied:

- `CTAButton` is used inside `NewsletterForm.astro`, so it must be imported there.
  - Added: `import CTAButton from './CTAButton.astro';`

## Pages

### `src/pages/index.astro` (Home)

- Hero with name + tagline + primary CTAs
- Featured accomplishments section
- Prominent newsletter signup (`<NewsletterForm />`)

### `src/pages/about.astro` (About)

- Profile section with placeholder SVG image
- Skills + timeline layout
- Newsletter signup CTA at the bottom

### `src/pages/projects.astro` (Projects)

- Projects hero
- Prominent newsletter CTA band
- Project grid (4 cards) with placeholder SVG thumbnails
- Secondary newsletter CTA at bottom (`<NewsletterForm />`)

Note:

- The prominent red-band newsletter form on this page is intentionally custom-styled (white button on red background) and logs to console, similar to `NewsletterForm.astro`.

## Node version safeguards (implemented)

To prevent the "Node.js v12 is not supported by Astro!" error, we've added multiple safeguards:

1. **`.nvmrc` file**: Specifies Node 18 for nvm users
2. **`.node-version` file**: Alternative version file for other Node version managers
3. **`package.json` engines field**: Declares required Node/npm versions
4. **Pre-install script**: `scripts/check-node-version.js` runs before `npm install`
5. **Pre-dev/build scripts**: Check Node version before running dev/build commands
6. **Setup script**: `setup.sh` automates the entire setup process

### How it works

When you run `npm install` or `npm run dev`:
- The pre-script checks your Node version
- If incompatible, you'll see a clear error with fix instructions
- If compatible, the command proceeds normally

### Manual fix (if needed)

If you still encounter Node version issues:

```bash
source ~/.nvm/nvm.sh
nvm use 18  # or: nvm use (reads .nvmrc automatically)
node -v     # Verify: should show v18.x.x
```

Then reinstall/run:

```bash
npm install
npm run dev
```

## Troubleshooting

### “Node.js v12 is not supported by Astro!”

**This should now be prevented automatically**, but if you still see it:

1. Run the setup script: `./setup.sh`
2. Or manually switch: `source ~/.nvm/nvm.sh && nvm use 18`
3. Verify: `node --version` should show v18.x.x

The pre-install and pre-dev scripts will catch this before Astro runs.

### “CTAButton is not defined”

**Fixed:** `src/components/NewsletterForm.astro` now properly imports `CTAButton`.

**If you see this error elsewhere:**
- Ensure the component file exists: `src/components/CTAButton.astro`
- Add the import at the top of your `.astro` file:
  ```astro
  import CTAButton from '../components/CTAButton.astro';
  ```
- Check the import path is correct relative to your file location

## Security note (npm audit)

`npm install` reported vulnerabilities. Address later if desired:

```bash
npm audit
```

Only run `npm audit fix --force` after reviewing, since it may introduce breaking changes.

