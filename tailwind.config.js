/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    extend: {
      screens: {
        mg: '73rem',
      },
      colors: {
        seasalt: '#F8FAFC',
        text: '#0D111C',
        yinmin: '#1B5299',
        purp: '#735CDD',
        picton: '#00A7E1',
        darkBlue: '#0B112B',
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
  plugins: [],
};
