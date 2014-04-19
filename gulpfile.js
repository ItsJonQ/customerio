// Requiring gulp modules
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Default Gulp Task
gulp.task('default', ['sass', 'watch']);


gulp.task('sass', function() {
    gulp.src('./build/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function() {
    gulp.watch('./build/css/**/*.scss', ['sass']);
});