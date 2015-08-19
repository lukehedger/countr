var gulp = require('gulp');
var script = require('./tasks/script');
var test = require('./tasks/test');
var style = require('./tasks/style');
var watch = require('./tasks/watch');
var server = require('./tasks/server');

gulp.task('script', script);
gulp.task('script:build', ['test'], script.build);

gulp.task('test', test);

gulp.task('style', style);
gulp.task('style:build', ['test'], style.build);

gulp.task('watch', watch);

gulp.task('server', ['script'], server);

gulp.task('default', ['script', 'style', 'watch', 'server']);

gulp.task('build', ['test', 'script:build', 'style:build']);
