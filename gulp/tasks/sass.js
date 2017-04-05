var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

//libsass
gulp.task('sass', function () {
	return gulp.src('./frontend/sass/style.scss')
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/susy/sass']
    }))
		//.pipe(minifyCSS())
		.pipe(sourcemaps.write('./public/css'))
		.on('error', handleErrors)
		.pipe(gulp.dest('./public/css'))
});
