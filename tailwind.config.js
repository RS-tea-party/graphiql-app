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
        },
      },
    },
  },
  plugins: [],
});
