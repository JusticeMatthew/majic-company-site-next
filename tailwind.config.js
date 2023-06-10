/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
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
