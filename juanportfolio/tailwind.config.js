/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", 'sans-serif'],
        webFont: ["Lexend Deca", 'sans-serif'],
        space: ["Space Grotesk", 'sans-serif'],
        orbitron: ["Orbitron", 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
