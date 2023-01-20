/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'droid': ['"Droid Serif"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      colors:{
        'primary': '#0d0f11',
        'secondary': '#16161e',
      }
    },
  },
  plugins: [],
}
