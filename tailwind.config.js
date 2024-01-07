const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peachFuzz: {
          50: '#fff4ed',
          100: '#ffe9dc',
          200: '#ffdecb',
          500: '#ffbe98',
          DEFAULT: '#ffbe98',
        },
        peachGray: {
          100: '#b29f93',
          DEFAULT: '#d8cfc9',
        },
      },
      spacing: {
        896: '56rem',
        640: '40rem',
        600: '37.5rem',
        260: '16.25rem',
      },
      padding: {
        '350px': '350px',
        '260px': '260px',
      },
      translate: {
        '200%': '200%',
      },
      screens: {
        maxmd: { max: '959px' },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
});
