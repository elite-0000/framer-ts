/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Cabin Sketch"', 'sans-serif'], 
      },
      fontSize: {
        '10xl': '10rem', 
        '11xl': '12rem',
        '12xl': '14rem', 
        '13xl': '16rem', 
      },
    },
  },
  plugins: [],
}
