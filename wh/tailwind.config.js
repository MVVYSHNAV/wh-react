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
      dropShadow: {
        '3xl': '0px 0px 10px rgba(195, 26, 255, 0.70)',
        '2xl': '1px 1px 2px rgba(0, 0, 0, 0.70)',
      }
      
    },
  },
  darkMode: "class",
  plugins: [],
}

