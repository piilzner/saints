var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
  watch('./www/css/**/*.sass', function (event) {
        console.log('[SASS]: File ' + event.path + ' was changed, running tasks...');
        gulp.src('./www/css/**/*.sass')
            .pipe(sass())
			.pipe(autoprefixer())
            .pipe(gulp.dest('./www/css'));
    });
});