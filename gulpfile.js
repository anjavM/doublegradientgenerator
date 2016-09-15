var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('sass', function (){
    return sass('./scss/style.scss', {
        style: 'compressed',
        sourcemap: true
    })
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

gulp.watch('./scss/**/*.scss', ['sass']);
gulp.watch('./index.html', browserSync.reload);
gulp.watch('./js/app.js', browserSync.reload);

});
