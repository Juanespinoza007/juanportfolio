/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        webFont: ["Lexend Deca", 'sans-serif'],
        space: ["Space Grotesk", 'sans-serif'],
        orbitron: ["Orbitron", 'sans-serif'],
        sans: ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
