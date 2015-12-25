var gulp = require('gulp');
var conf = require('./conf');
var path = require('path');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts-reload', function () {
    return buildScripts()
      .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return buildScripts();
});

function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app.cjsx'), { read: false })
    .pipe($.browserify({
      transform: ['coffee-reactify'],
      extensions: ['.cjsx']
    }))
    .pipe($.rename('app.js'))
    .pipe(gulp.dest(path.join(conf.paths.tmp)));
}
