/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: "#app",
  theme: {
    extend: {
      screens: {
        'sm': '320px'
      },
      colors: {
        'rto-green': '#3CBBB4CC',
        'rto-yellow': '#F9AD1DCC',
        'rto-light-gray': '#EBEBEB',
        'rto-dark-gray': '#464646',
        'rto-dark-gray-trans': '#00000099',
      },
      fontFamily: {
        'lato-regular': ['LatoRegular', 'sans-serif'],
        'lato-light': ['LatoLight', 'sans-serif']
      }
    },
  },
  plugins: [],
}

