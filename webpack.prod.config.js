/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const {environment} = require('webpack-config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

environment.set('cssIdent', '[local]_[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'postcss-loader?parser=postcss-scss']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'style.css',
      disable:false,
      allChunks: true
    })
  ]
});
