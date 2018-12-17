'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

    sass.compiler = require('node-sass');

var gSrc = {
    scss: [
        'src/sass/main.scss'
    ],
    js: [
        'src/js/*.js'
    ]
};
var gDst = {
    styles: 'dist/css',
    js: 'dist/js'
};

gulp.task('js', function(){
    return gulp.src(gSrc.js)
        .pipe(gulp.dest(gDst.js))
});

gulp.task('scss', function(){
    return gulp.src(gSrc.scss)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe(gulp.dest(gDst.styles))
});