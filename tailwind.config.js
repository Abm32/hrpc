/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a4b8f',
        'on-primary': '#ffffff',
        secondary: '#096c4b',
        'on-secondary': '#ffffff',
        surface: '#f8f9fa',
        'on-surface': '#191c1d',
        'surface-container': '#edeeef',
        'outline-variant': '#c3c6d2',
        background: '#f8f9fa',
        'primary-container': '#d7e2ff',
        'on-primary-container': '#001b3f',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '9999px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      fontFamily: {
        body: ['IBM Plex Sans', 'Noto Sans Malayalam', 'sans-serif'],
        headline: ['IBM Plex Serif', 'Noto Sans Malayalam', 'serif'],
        malayalam: ['Noto Sans Malayalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
