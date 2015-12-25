var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('styles-reload', function () {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return buildStyles();
});

function buildStyles() {

  // sass配置
  var sassOptions = {
    style: 'expanded'
  };

  // 待注入的scss文件
  var injectFiles = gulp.src([
    path.join(conf.paths.src, '**', '*.scss'),
    path.join('!' + conf.paths.src, 'app.scss')
  ], { read: false });

  // 注入配置
  var injectOptions = {
    transform: function (filePath) {
      console.log(filePath)
      filePath = filePath.replace(conf.paths.src + '/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  return gulp.src([
    path.join(conf.paths.src, 'app.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sass(sassOptions).on('error', console.error))
    .pipe($.autoprefixer().on('error', console.error))
    .pipe(gulp.dest(conf.paths.tmp));
}
