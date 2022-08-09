const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        edu: "Edu VIC WA NT Beginner, cursive",
        taviraj: "Taviraj, serif",
        teko: "Teko, sans-serif"

      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}
