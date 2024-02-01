/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "min-xl": { min: "1280px" },
      "min-lg": { min: "1024px" },
      "min-md": { min: "768px" },
      "min-sm": { min: "640px" },
      '2xl': '1400px',
      ...defaultTheme.screens
    },
    container: {
    },
    backgroundImage: {
      "footer-shape": "url('/footer-shape.png')",
      "mobile-footer-shape": "url('/mobile-footer-shape.png')",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      "primary-color": "#FF817B",
      "secondary-color": "#842FFB",
      "primary-text-color": "#1F1233",
      "secondary-text-color": "#7A6899",
      "primary-background-color":"#F8F4FF",
      "white":"#FFFFFF",
    },


    extend: {},
  },
  plugins: [],
});

