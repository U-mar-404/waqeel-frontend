/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf0',
          100: '#ccd5e1',
          200: '#99abc3',
          300: '#6682a5',
          400: '#335887',
          500: '#1a365d', // main primary
          600: '#152c4a',
          700: '#102138',
          800: '#0a1625',
          900: '#050b13',
        },
        accent: {
          50: '#fbf6e6',
          100: '#f7edcc',
          200: '#efdb99',
          300: '#e7c966',
          400: '#dfb733',
          500: '#d4af37', // main accent (gold)
          600: '#a98c2c',
          700: '#7f6921',
          800: '#554616',
          900: '#2a230b',
        },
        civil: {
          500: '#3b82f6', // blue for civil
          700: '#1d4ed8',
        },
        criminal: {
          500: '#ef4444', // red for criminal
          700: '#b91c1c',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};