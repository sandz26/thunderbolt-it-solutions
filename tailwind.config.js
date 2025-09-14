/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gray': '#848487',
        'brand-purple': '#6C37B5',
        'brand-light': '#E1DFE1',
        'brand-dark': '#14141C',
        'thunder-purple': '#6C37B5',
        'thunder-dark': '#14141C',
        'thunder-gray': '#848487',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
