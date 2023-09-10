const webpack = require('./webpack.config');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['shared'],
  webpack
};
