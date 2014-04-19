// Requiring gulp modules
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Default Gulp Task
gulp.task('default', function() {
    // Styles
    gulp.src('./build/css/main.scss')
        .pipe(watch())
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});