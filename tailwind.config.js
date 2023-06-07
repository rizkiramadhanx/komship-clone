/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F95031',
        'brand-black': '#222222',
        'brand-gray': '#828282'
      }
    }
  },
  plugins: []
}
