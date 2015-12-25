var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('inject-reload', ['inject'], function () {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function () {

  // 待注入css文件
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, 'app.css')
  ], { read: false });

  // 待注入js文件
  var injectScripts = gulp.src([
    path.join(conf.paths.tmp, 'app.js')
  ], { read: false });

  // 注入配置
  var injectOptions = {
    ignorePath: [conf.paths.tmp],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, 'index.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(gulp.dest(conf.paths.tmp));
});
