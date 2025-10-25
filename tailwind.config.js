/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        haii: {
           100: '#D97706'
        }
      }
    },
  },
  plugins: [],
}

