'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var base64 = require('gulp-base64');
var concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src('./index.js')
        .pipe(browserify({
            debug: true,
            transform: ['babelify']
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
    gulp.src('./components/**/*.styl')
        .pipe(stylus({
            sourcemap: {
                inline: true,
                sourceRoot: '.',
                basePath: './components'
            }
        }))
        .pipe(base64({debug: true}))
        .pipe(autoprefixer())
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./build/'));
});
