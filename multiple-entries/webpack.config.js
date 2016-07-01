var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    'entryOne': './entry1.js',
    'entryTwo': './entry2.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  }
};
