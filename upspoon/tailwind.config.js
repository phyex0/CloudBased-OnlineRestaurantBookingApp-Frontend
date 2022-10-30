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
        layoutRestaurant: `100px minmax(calc(100vh - 200px), 1fr) 100px`,
        layoutUser: `100px minmax(calc(100vh - 300px), 1fr) 200px`,
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
