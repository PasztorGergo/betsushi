/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F47979",
        secondary: "#186259",
        background: "#FDF9F2",
        selected: "#F8EBD3",
      },
    },
  },
  plugins: [],
};
