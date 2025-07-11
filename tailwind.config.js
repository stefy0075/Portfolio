/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000f7d',
        secondary: '#e0e0e0ff',
        accent: '#d1be87',
        tertiary: '#1d2431',
      },
    },
  },
  plugins: [],
};
