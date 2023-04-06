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
      josefin: ["var(--font-josefin)", ...fontFamily.sans],
    },
    colors: {
      light: {
        primary: "#ffffff",
        accent: "#3563E9",
        content: "#181818",
      },
      dark: {
        primary: "#181818",
        accent: "#3563E9",
        content: "#ffffff",
      },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
