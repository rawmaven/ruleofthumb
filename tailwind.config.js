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
        'rto-dark-gray-trans-a': '#00000099',
        'rto-dark-gray-trans-b': '#00000066',
        'rto-header-gradient-a': 'rgba(0, 0, 0, 0.698864)',
        'rto-header-gradient-b': 'rgba(0, 0, 0, 0.01)',
        'rto-white-trans-a': '#FFFFFF66',
      },
      fontFamily: {
        'lato-regular': ['LatoRegular', 'sans-serif'],
        'lato-light': ['LatoLight', 'sans-serif'],
        'lato-bold': ['LatoBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

