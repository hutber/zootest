module.exports = {
  plugins: [
	  require('postcss-mixins')
	  , require('postcss-strip-inline-comments')
    , require('precss')
    , require('postcss-simple-vars')
    , require('postcss-nested')
    , require('autoprefixer')
	  , new ExtractTextPlugin('style.css')
  ]
}
