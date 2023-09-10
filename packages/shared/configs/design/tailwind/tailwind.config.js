/* eslint-disable no-undef */
/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'sans': ['var(--font-raleway)', 'ui-sans-serif', 'system-ui'],
      'serif': ['var(--font-raleway)', 'ui-serif', 'Georgia'],
      'mono': ['var(--font-raleway)', 'ui-monospace', 'SFMono-Regular']
    },
    extend: {
      keyframes: require('./keyframes'),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./custom.config')
  ]
};
