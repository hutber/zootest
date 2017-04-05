/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */

const path = require('path');
const webpack = require('webpack');
const {environment} = require('webpack-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
	      loader: ExtractTextPlugin.extract({
		      fallback: 'style-loader',
		      //resolve-url-loader may be chained before sass-loader if necessary
		      use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
	      })
      }
    ]
  },
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};
