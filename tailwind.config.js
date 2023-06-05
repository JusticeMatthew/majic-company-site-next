/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        seasalt: '#F8FAFC',
        text: '#0D111C',
        yinmin: '#1B5299',
        purp: '#735CDD',
        picton: '#00A7E1',
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
