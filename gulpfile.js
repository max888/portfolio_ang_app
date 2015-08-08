var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less');

// gulp.task('webserver', function() {
//   connect.server({
//     livereload: true
//   });
// });

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable:true,
        path: 'app'
      },
      open: true
    }));
});

gulp.task('less', function() {
  gulp.src('app/styles/app.less')
    .pipe(less())
    .pipe(gulp.dest('app/styles'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('app/styles/*.less', ['less']);
});

gulp.task('heroku', function () {
  return gulp.src(config.base)
    .pipe(plugins.webserver({
        host: '0.0.0.0',
        port: process.env.PORT,
        livereload: false
    }));
});

gulp.task('default', ['less', 'webserver', 'watch']);
