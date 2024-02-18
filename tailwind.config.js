/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Sriracha", "cursive"],
      xyz: ["Montserrat Alternates", "sans-serif"], // Add the new font family
    },
  },
  plugins: [],
}
