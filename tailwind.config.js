const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        serif: ["Taviraj, serif", ...defaultTheme.fontFamily.serif],
        edu: "Edu VIC WA NT Beginner, cursive",
        teko: "Teko, sans-serif"

      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}
