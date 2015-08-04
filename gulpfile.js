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

gulp.task('default', ['less', 'webserver', 'watch']);

gulp.task('serveprod', function() {
  connect.server({
    root: [your_project_path],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
