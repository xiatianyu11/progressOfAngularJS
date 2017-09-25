var gulp = require('gulp');
var sass = require('gulp-sass');
var config = {port: 30001};

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
  	browser: 'google chrome',
  	port: config.port,
    server: {
      baseDir: 'app',
      routes: {
        "/node_modules": "node_modules"
      }
    },
  })
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.tmpl', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/**/*.css', browserSync.reload);
});