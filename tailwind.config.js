/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        'background_p': "#F7FBFC",
        
        'white_p': "#FFFFFF",

        'gray_1': "#5C6265",

        'blue_p': "#354282",

        'blue_p2': "#0D1950",

        'blue_p3': "#212E6D",

        'black_p': "#191919",

        'red_p': "#E83A33",
        
        'yellow_p': "#FCC132",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

