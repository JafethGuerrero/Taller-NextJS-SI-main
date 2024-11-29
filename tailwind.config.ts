/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anaheim: ['"Anaheim"', "sans-serif"],
      },
      colors: {
        green_category: "#4ade80",
        orange_category: "#f97316",
        blue_category: "#3b82f6",
        gray_secondary: "#f3f4f6",
        gray_primary: "#6b7280",
      },
    },
  },
  plugins: [],
};
