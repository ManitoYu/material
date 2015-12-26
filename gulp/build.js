var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('html', ['inject'], function () {

  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.tmp, 'index.html'))
    .pipe($.useref())
    .pipe($.rev())
    // js
    .pipe(jsFilter)
    .pipe($.uglify())
    .pipe(jsFilter.restore)
    // css
    .pipe(cssFilter)
    .pipe($.minifyCss())
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    // html
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(gulp.dest(conf.paths.dist))
});

gulp.task('clean', function () {
  return gulp.src([conf.paths.tmp, conf.paths.dist], { read: false })
    .pipe($.clean());
});

gulp.task('build', ['html']);
