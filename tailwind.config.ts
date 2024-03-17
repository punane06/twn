/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        twnHiglightColor: '#14cc76',
        twnTextColor: '#3a3d57',
        twnAlternateTextColor: '#fff',
        twnSecondaryColor: '#ff57a2',
        twnBackgroundColor: '#3a3d57',
        twnLinkHoverColor: '#03875c',
        twnBlockColor: '#efefef',
      },
      fontFamily: {
        twn: 'var(--twn-font)'
      },
      backgroundImage: {
        'bg-top-right1': "url('./images/bg-deco-right.svg')",
        'bg-bottom-left': "url('./images/bg-deco-left.svg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};