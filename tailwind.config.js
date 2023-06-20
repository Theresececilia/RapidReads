/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accentGreen: '#99ddcc',
        accentPurple: '#c4b5fd',
        lightColor: '#Ffffff',
        darkColor: '#232323',
        darkGrey: '#4c4c4c',
        lightGrey: '#696969',
      },
    },
  },
  plugins: [],
};
