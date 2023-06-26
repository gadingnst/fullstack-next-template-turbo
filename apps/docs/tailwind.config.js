/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBaseTailwindConfig = require('../../packages/shared/src/configs/withBaseTailwindConfig');

/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = withBaseTailwindConfig({
  content: [
    './src/packages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
});
