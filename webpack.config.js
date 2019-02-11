const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  stats: {
    colors: true
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'source-map'
}
