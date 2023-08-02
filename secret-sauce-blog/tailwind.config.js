/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      keyframes: {
        modal: {
          '0%, 100%': { opacity: '0' },
          '25%, 75%': { opacity: '1' },
        },
      },
      animation: {
        modal: 'modal 2s linear 1',
      },
    },
  },
  plugins: [],
};
