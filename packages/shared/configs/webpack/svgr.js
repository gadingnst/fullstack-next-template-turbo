/* eslint-disable no-undef */
function configSVGR(config) {
  /**
   * handle SVGR module
   * Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files into React components.
   * @see https://react-svgr.com/docs/next/
   * @see https://react-svgr.com/docs/webpack/
   */

  // Grab the existing rule that handles SVG imports
  const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/ // *.svg?url
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,

      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            typescript: true,
            ext: 'tsx'
          }
        }
      ]
    }
  );

  // Modify the file loader rule to ignore *.svg, since we have it handled now.
  fileLoaderRule.exclude = /\.svg$/i;

  /** End Config SVGR */
  return config;
}

module.exports = configSVGR;
