const webpack = require('./webpack.config');

module.exports = {
  webpack,
  reactStrictMode: true,
  transpilePackages: ['shared'],
  swcMinify: true,
  pageExtensions: ['ts', 'tsx']
};
