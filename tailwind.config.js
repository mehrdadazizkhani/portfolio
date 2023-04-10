/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
    },
    colors: {
      light: {
        primary: "#ffffff",
        secondary: "#e0e0e0",
        accent: "#3563E9",
        content: "#181818",
      },
      dark: {
        primary: "#181818",
        secondary: "#313131",
        accent: "#3563E9",
        content: "#EBECF0",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
