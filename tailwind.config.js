/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "615px",
      md: "820.5px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkWhite: "#e3dcdc",
      offWhite: "#f7f0f0",
      "light-blue": "#8E8DDB",
      "dark-blue": "#000235",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
  },
  extend: {
    spacing: {
      12: "180px",
    },
  },
  important: true,
  plugins: [],
};
