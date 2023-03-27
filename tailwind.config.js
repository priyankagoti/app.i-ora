/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#E7F2F8',
        'sky': '#74BDCB',
      },
      fontFamily: {
        'OpenSans': "'Open Sans', sans-serif"
      }
    }
  },
  plugins: [],
}
