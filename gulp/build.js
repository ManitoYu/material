var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('clean', function () {
  return gulp.src(conf.paths.tmp, { read: false })
    .pipe($.clean());
});
