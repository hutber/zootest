var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', ['build'], function () {
	browserSync({
		server: {
		 // src is included for use with sass source maps
		 baseDir: ['public', 'src']
		},
		port: 4046,
		files: [
			// Only reload when the style.css has been built.
			"public/css/style.css",
			//reload for any images changed in public
			"public/img/**",
			//refresh once we have finished building views.min.js
			"public/js/main.js",
			//refresh when we changed an view from express file
			"app/jade/**/*.jade",
			//refresh when we changed an view from express file
			//"app/**/*.jade",
			// Exclude sourcemap files
			"!public/css/*.map"
		]
	});
});
