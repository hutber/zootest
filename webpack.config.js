/* eslint-disable */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const {environment} = require('webpack-config');

environment.set('cssIdent', '[path]___[name]__[local]___[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  devServer: {
    contentBase: [
      'demo/'
    ],
    hot: true,
    host: '0.0.0.0',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin()
  ]
});
