const precss = require('precss');
const stripInlineComments = require('postcss-strip-inline-comments');


module.exports = {
  plugins: [
    stripInlineComments
    , precss
    , require('postcss-simple-vars')
    , require('postcss-nested')
    , require('autoprefixer')
  ]
}
