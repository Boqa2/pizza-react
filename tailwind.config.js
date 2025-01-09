/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundColor: "#FE5F00",
      borderColor: "#FE5F00",
      colors: {
        orenge: "#FE5F00",
        forPizza: "#FFF7EE"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
