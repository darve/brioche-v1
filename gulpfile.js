var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

// gulp.task('default', function(){
// 	gulp.src('./app/assets/scripts/*.js')
// 	    .pipe(uglify())
// 	    .pipe(gulp.dest('./app/assets/scripts/prod/main.min.js'));
// });

gulp.task('default', function () {
    gulp.src('./app/views/**/*.html')
        .pipe(templateCache('views.min.js', { module: 'BriocheApp',}))
        .pipe(gulp.dest('./app/assets/scripts/prod/'));
});

gulp.task('watch', function () {
    gulp.src('./app/views/**/*.html')
        .pipe(templateCache('views.min.js', { module: 'BriocheApp',}))
        .pipe(gulp.dest('./app/assets/scripts/prod/'));
});