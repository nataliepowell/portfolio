var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
return gulp.src('./src/scss/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./src/css/'))
});


//Watch task
gulp.task('default',function() {
return gulp.watch('./src/scss/*.scss',gulp.series('styles'));
});
