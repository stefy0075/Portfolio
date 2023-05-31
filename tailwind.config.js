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
        'contacts': "url('./src/assets/contact.png')",
        'about-as': "url('./src/assets/about-as.png')",
        'proyects': "url('./src/assets/proyects.png')"
      },
      colors: {
        primary: '#000f7d',
        secondary: '#f4f6fc',
        tertiary: '#050a30',
        quaternary: '#2d0085',
        quintary: '#7957BC',
        sextary: '#233dff',
        septenary: '#BCCEF7',
        octary: '#46326E',
        nonary: '#DCCAFF',
        decennial: '#5B48A4'
      },
    },
  },
  plugins: [],
};

