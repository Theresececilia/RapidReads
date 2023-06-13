/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        accentGreen: '#E7FAAA',
        accentPurple: '#B89BDF',
        lightColor: '#FFFFFF',
        darkColor: '#232323',
        darkGrey: '#454545',
        lightGrey: '#696969',
      },
    },
  },
  plugins: [],
};
