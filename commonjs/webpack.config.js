var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'entry.bundle.js'
  }
};
