/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue : ["Bebas Neue","sans-serif"],
        Roboto : ["Roboto", "sans-serif"]
      },
      clipPath: {
        'custom-polygon': 'polygon(78% 94%, 100% 100%, 100% 31%, 0 32%, 0% 100%, 89% 100%)',
      },
      dropShadow: {
        '3xl': '0px 0px 10px rgba(195, 26, 255, 0.70)',
        '2xl': '1px 1px 2px rgba(0, 0, 0, 0.70)',
      }
      
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-polygon-custom': {
          clipPath: 'polygon(78% 94%, 100% 100%, 100% 31%, 0 32%, 0% 100%, 89% 100%)',
        },
      });
    },
  ],
}

