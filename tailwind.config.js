const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alfa: "#900000",
        alpine: "#0090FF",
        aston_martin: "#006F62",
        alphatauri: "#2B4562",
        ferrari: "#DC0000",
        haas: "#FFFFFF",
        mclaren: "#FF8700",
        mercedes: "#00D2BE",
        red_bull: "#0600EF",
        williams: "#005AFF",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        russo: ["Russo One"],
      },
    },
  },
  safelist: [
    "border-alfa",
    "border-alpine",
    "border-aston_martin",
    "border-alphatauri",
    "border-ferrari",
    "border-haas",
    "border-mclaren",
    "border-mercedes",
    "border-red_bull",
    "border-williams",
  ],
  plugins: [],
};
