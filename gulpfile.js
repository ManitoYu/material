var gulp = require('gulp');
var wrench = require('wrench');

// 遍历gulp目录
wrench.readdirSyncRecursive('./gulp').forEach(function (file) {
  require('./gulp/' + file);
});
