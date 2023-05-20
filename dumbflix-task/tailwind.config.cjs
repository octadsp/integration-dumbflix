/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black' : '#1F1F1F',
        'light-black-300' : '#121212',
        'light-black-500' : '#2c2c2c',
      },
    },
  },
  plugins: [require("daisyui")],
}
