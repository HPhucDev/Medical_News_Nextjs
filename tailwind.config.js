module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        'dark-mode': 'rgb(15, 23, 42)',
        'dark-mode-1': 'rgb(31, 41, 55)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};
