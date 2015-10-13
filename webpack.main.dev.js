var path = require('path')
var webpack = require('webpack')

module.exports = {
  name: 'main',
  debug: true,
  devtool: 'eval',
  target: 'electron',
  entry: {
    init: ['./app/init']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'commonjs'
  },
  externals: [
    'menubar',
    'winston',
    'subcomandante',
    'node-notifier'
  ],
  node: {
    __dirname: __dirname
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'app'),
      query: {
        optional: ['runtime']
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
