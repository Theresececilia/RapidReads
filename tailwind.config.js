/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentGreen: "#abff36",
        accentPurple: "#9377FF",
        lightColor: "#fafafa",
        darkColor: "#232323",
        darkGrey: "#747377",
        lightGrey: "#696969",
      },
      backgroundImage: {
        footergradient:
          "linear-gradient(225deg, #4c4c4c 7%, #c4b5fd 37%, #ffffff 50%, #99ddcc 69%, #223322 94%",
      },
    },
  },
  plugins: [],
};
