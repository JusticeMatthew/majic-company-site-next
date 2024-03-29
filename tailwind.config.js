/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    extend: {
      screens: {
        sg: '945px',
        mg: '1200px',
      },
      colors: {
        seasalt: '#F8FAFC',
        text: '#0D111C',
        yinmin: '#1B5299',
        purp: '#735CDD',
        picton: '#00A7E1',
        darkBlue: '#0B112B',
        blurple: '#6287FF',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        calistoga: ['var(--font-calistoga)', 'cursive'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #735CDD, #00A7E1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
