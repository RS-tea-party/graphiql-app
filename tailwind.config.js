const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peachFuzz: {
          200: '#ffdecb',
          500: '#ffbe98',
        },
      },
      spacing: {
        896: '56rem',
        640: '40rem',
        560: '35rem',
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
        maxmd: { max: '960px' },
      },
    },
  },
  plugins: [],
});
