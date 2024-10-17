/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-outline': 'url(../../assets/card-outline.svg)',
      },
    },
  },
  plugins: [],
}
