/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8f55ff',
        secondary: '#ffeb69',
        dark: '#00171f',
      }
    },
  },
  plugins: [],
}