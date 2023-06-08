/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F95031',
        'brand-black': '#222222',
        'brand-gray': '#828285'
      },
      gridTemplateColumns: {
        benefitText: '4fr 6fr',
        'benefit-partner': '4fr 5fr'
      }
    }
  },
  plugins: []
}
