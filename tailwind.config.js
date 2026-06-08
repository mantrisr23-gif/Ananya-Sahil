/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F3EA',
        gold: '#B8923F',
        dark: '#3A2E2A', // A rich dark brown that pairs with antique gold
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'paper': "url('/textures/paper.webp')",
      }
    },
  },
  plugins: [],
}