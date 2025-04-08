/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui';

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [primeui],
}