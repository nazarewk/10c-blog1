var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task('serve', serve('src'));
gulp.task('serve-build', serve(['src', 'build']));
gulp.task('serve-prod', serve({
  root: ['src', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware
  }
}));