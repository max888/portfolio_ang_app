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
        path: 'index.html'
      },
      open: true
    }));
});

gulp.task('heroku', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: false,
      host: '0.0.0.0',
      port: process.env.PORT,
      directoryListing: {
        enable:true,
        path: 'index.html'
      },
      open: false
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



gulp.task('default', ['less', 'webserver', 'watch']);
