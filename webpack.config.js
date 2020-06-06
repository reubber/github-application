'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  },

  plugins:
    [new webpack.HotModuleReplacementPlugin(), new ExtractTextPlugin('style.css')],

  module: {
    preLoaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard'
      }
    ],

    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style', 'raw']
      }
    ]
  }
})
