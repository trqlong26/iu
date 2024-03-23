/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        iuOverlay: "url()",
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, "sans-serif"],
        montserrat: [`var(--font-montserrat)`, "sans-serif"],
      },
      colors: {
        primary: "#1A1C20",
        secondary: "#CBCCC5",
        accent: {
          DEFAULT: "#1A1C20",
          hover: "#CBCCC5",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
