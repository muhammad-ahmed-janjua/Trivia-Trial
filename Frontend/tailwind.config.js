/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'curulean': '#227C9D', 
        'fission-6': '#231942',
        'fission-1': '#9310f8',
        'fission-2': '#fb8399',
        'fission-3': '#f97044',
        'fission-4': '#faf5ff',
        'fission-5': '#140122',

                
        'l-bg': '#faf5ff',
        'l-primary': '#9412f8',
        'l-secondary': '#fb8399',
        'l-accent': '#f97143',
        'l-text': '#150123',

        'd-bg': '#05000a',
        'd-primary': '#8a07ed',
        'd-secondary': '#7c041a',
        'd-accent': '#bc3306',
        'd-text': '#f0dcfe',

        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

