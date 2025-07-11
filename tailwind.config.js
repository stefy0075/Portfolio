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
        secondary: '#e0e0e0ff', // Gris claro
        accent: '#d1be87',
        tertiary: '#1d2431',
        quaternary: '#f0f3f5',
        quintary: '#7957BC',
        sextary: '#233dff',
        septenary: '#5B388A',
        octary: '#46326E',
        nonary: '#DCCAFF',
        decennial: '#5B48A4',
      },
    },
  },
  plugins: [],
};
