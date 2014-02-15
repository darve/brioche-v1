var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src('./app/assets/scripts/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('./app/assets/scripts/prod/main.min.js'));
});