var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function() {
  gulp.src('app/styles/app.less')
    .pipe(less())
    .pipe(gulp.dest('app/styles'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/styles/*.less', ['less']);
})

var serve = require('gulp-serve');

gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: [__dirname],
  port: 80,
  middleware: function(req, res) {
  }
}));

gulp.task('default', ['less', 'webserver', 'watch']);
