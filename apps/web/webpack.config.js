/* eslint-disable no-param-reassign */
const configSVGR = require('shared/configs/webpack/svgr');

/** @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config */
function webpack(config) {
  config = configSVGR(config);
  return config;
}

module.exports = webpack;
