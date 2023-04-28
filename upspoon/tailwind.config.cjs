/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layoutFirst: `minmax(calc(100vh - 60px), 1fr) 60px`, // main, footer
        layoutSecond: `80px minmax(calc(100vh - 140px), 1fr) 60px`, // header, main, footer
      },
      backgroundImage: {
        homeBg: "url('../src/assets/images/home-bg.png')",
      },
      colors: {},
      backgroundPosition: {},
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
