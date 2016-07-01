var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    'entryOne': './entry1.js',
    'entryTwo': './entry2.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  }
};
