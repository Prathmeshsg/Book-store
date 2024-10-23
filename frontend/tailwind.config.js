/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#FFCE1A',
        'secondary': '#0D0842',
        'favorite': '#FF5841',
        'blackBg': 'F3F3F3'
      },

      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
