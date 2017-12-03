var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "./public"
    }
  });

  watch(['public/index.html', 'source/*.js', 'source/**/*.js'], function() {
    gulp.start('babel')
    browserSync.reload();
  });

  watch('public/styles/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('public/temp/styles/styles.css')
    .pipe(browserSync.stream());
});