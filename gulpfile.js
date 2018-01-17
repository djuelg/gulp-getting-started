var gulp = require('gulp');
var gulpIf = require('gulp-if');
var runSequence = require('run-sequence');
// development process
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
// build process
var useref = require('gulp-useref');
var del = require('del');


/// Group development tasks
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
});

/// Group of build tasks
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'fonts'],
        callback
    )
});

/// Watch tasks
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


/// Initialize browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

/// Convert all scss files into css files
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

/// Minimize and merge all js and css files into minimized files 
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

/// Copy fonts to output directory
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

/// Delete dist folder (Cache not included)
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

/// Clear the cache
gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});