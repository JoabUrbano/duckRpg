/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
         'cor-barra': '#222',
         'cor-barra-clara': '#333',
         'cor-bg': '#eee',
        },
    },
  },
  plugins: [],
}

