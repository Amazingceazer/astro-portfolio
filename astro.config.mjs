import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false, // We'll handle base styles in global.css
  })],
  output: 'static',
  site: 'https://example.com', // Update with your actual domain
});
