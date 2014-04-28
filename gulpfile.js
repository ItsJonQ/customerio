// Requiring gulp modules
var gulp = require('gulp');
var browserify = require('gulp-browserify');
// var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Default Gulp Task
gulp.task('default', ['sass', 'scripts', 'watch']);


// Browserify
gulp.task('scripts', function() {
    gulp.src('./build/js/app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('./public/js'));
});


// Sass
gulp.task('sass', function() {
    gulp.src('./build/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});


// Watch
gulp.task('watch', function() {
    // var server = livereload();
    gulp.watch('./build/css/**/*.scss', ['sass']);
    gulp.watch('./build/js/**/*.js', ['scripts']);
    // gulp.watch('./build/**').on('change', function(file) {
    //     server.changed(file.path);
    // });
});