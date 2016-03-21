'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var gutil = require('gulp-util');

gulp.task('sass', function () {
  return gulp.src('./assets/css/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
  gulp.src("./assets/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['es2015'] }).on('error', function(error, opts){
      var message = new gutil.PluginError('babel', error).toString();
      process.stderr.write(message + '\n');
      this.emit('end');
    }))
    .pipe(concat('application.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));
});



gulp.task('assets:watch', function () {
  gulp.watch('./assets/css/**/*.sass', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['js']);
});
