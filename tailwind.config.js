/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FA7070",
        "secondary": "#557C55",
        "tertiary": "#A6CF98"
      }
    },
  },
  plugins: [],
}

