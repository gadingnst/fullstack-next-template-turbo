/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin');

const tailwindCustomPlugins = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.base-container': {
      width: theme('width.full'),
      maxWidth: '1600px',
      paddingLeft: theme('spacing.6'),
      paddingRight: theme('spacing.6'),
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '.no-scrollbar::-webkit-scrollbar': {
      display: 'none'
    },
    '.no-scrollbar': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none'
    }
  });
});

module.exports = tailwindCustomPlugins;
