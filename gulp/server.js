var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');

var $ = require('gulp-load-plugins')();

gulp.task('serve', ['watch'], function () {

  var server = { baseDir: conf.paths.tmp };
  // api代理设置
  server.middleware = proxyMiddleware('/api', { target: 'http://localhost:8000', changeOrigin: true });

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: 'default'
  });
});
