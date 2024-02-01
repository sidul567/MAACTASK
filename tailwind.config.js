/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('src/images/background1.png')",
      },
      boxShadow: {
        'tl': '-10px -11px 12px 4px rgba(0,82,204,0.11);',
        'tl2': '0px 0px 20px 13px rgba(5,44,104,0.17);'
      }
    },
  },
  plugins: [],
})

