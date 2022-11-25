/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layoutRestaurant: `minmax(calc(100vh - 100px), 1fr) 100px`, // main, footer
        layoutUser: `100px minmax(calc(100vh - 300px), 1fr) 200px`, // header, main, footer
      },
      backgroundImage: {
        "main-bg": "url('/images/login-bg.png')",
        spoon: "url('/images/spoon.webp')",
        "food-bg": "url('/images/home-bg.jpeg')",
      },
      colors: {
        lightGray: "#F5F5F5",
      },
      backgroundPosition: {
        "main-right": "right -50%",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
