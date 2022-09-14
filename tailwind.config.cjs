const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backdropBlur: {
        xs: "2px"
      },
      backgroundImage: {
        wordlist: "url('/concert.png')",
        sunshop: "url('beach.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
