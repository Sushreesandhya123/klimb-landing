/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        klimb: {
          primary: '#4F46E5', // A vibrant purple-blue
          secondary: '#10B981', // A fresh green
          accent: '#F59E0B', // A warm orange
        },
      },
      fontFamily: {
        sans: ['"Comic Neue"', 'cursive', 'sans-serif'], // Child-friendly font
      },
    },
  },
  plugins: [],
}