/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'violent-red': '#ff0022',
        'violent-red-dark': '#cc001b',
        'text-primary': '#000000',
        'text-secondary': '#333333',
      },
      fontFamily: {
        'heading': ['Khand', 'sans-serif'],
        'body': ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
