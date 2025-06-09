/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tierra': '#D2691E',
        'cemento': '#8C8C8C',
        'construccion': '#FF8C00',
        'seguridad': '#FFD700',
      },
    },
  },
  plugins: [],
}
