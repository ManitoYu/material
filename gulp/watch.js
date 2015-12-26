var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('watch', ['inject'], function () {

  // html
  gulp.watch(path.join(conf.paths.src, 'index.html'), ['inject-reload']);

  // css
  gulp.watch([
    path.join(conf.paths.src, '**', '*.scss')
  ], function (event) {
    gulp.start(event.type == 'changed' ? 'styles-reload' : 'inject-reload');
  });

  // js
  gulp.watch([
    path.join(conf.paths.src, '**', '*.{cjsx,coffee}')
  ], function (event) {
    gulp.start(event.type == 'changed' ? 'scripts-reload' : 'inject-reload');
  });

});
