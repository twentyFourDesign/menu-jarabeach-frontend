/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueGreen: '#8CD7D3',
      },
      screens: {
        'xs': '200px', // Define your extra small breakpoint
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        inter:['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
