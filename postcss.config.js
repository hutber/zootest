const precss = require('precss');
const autoprefixer = require('autoprefixer');
const stripInlineComments = require('postcss-strip-inline-comments');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  plugins: [
    stripInlineComments
    , precss
    , autoprefixer
    , require('postcss-simple-vars')
    , require('postcss-nested')
    , autoprefixer({browsers: ['last 2 versions']})
  ]
}
