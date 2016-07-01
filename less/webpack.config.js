var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'entry.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}