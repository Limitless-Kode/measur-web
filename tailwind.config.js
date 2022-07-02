/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#2B0FD4',
      'secondary': '#FA0FF0',
      'grey': {
        200: '#5F5F5F'
      }
    },
    extend: {},
  },
  plugins: [],
}
