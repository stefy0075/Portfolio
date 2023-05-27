/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('./src/assets/side.png')",
        'contact': "url('./src/assets/contact.png')"
      },
      colors: {
        primary: '#000f7d',
        secondary: '#f4f6fc',
        tertiary: '#050a30',
        quaternary: '#2d0085',
        quintary: '#7957BC',
        sextary: '#233dff',
        septenary: '#BCCEF7',
        octary: '#',
        nonary: '#',
        decennial: '#'
      },
    },
  },
  plugins: [],
};

