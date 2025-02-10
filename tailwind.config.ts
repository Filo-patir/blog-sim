import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
