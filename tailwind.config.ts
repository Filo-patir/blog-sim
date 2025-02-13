import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xd: '850px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#4B6BFB',
        'primary-content': '#FFFFFF',
        'neutral-content': '#242535',
        'base-100': '#181A2A',
        'base-200': '#141624',
        'base-300': '#242535',
        'base-content': '#97989F',
      },
      textStroke: {
        custom: '1px black',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
        },
        // Add more variations as needed
      };
      addUtilities(newUtilities);
    }),
  ],
  darkMode: 'class',
} satisfies Config;
