var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

gulp.task('browser-sync',function(){
    borwserSync.init({
        server:{
            baseDir:'./'
        }
    });

    gulp.watch('src/style/scss/**/*.scss',['sassfile']);
    gulp.watch("*.html").on('change',reload);
});

gulp.task('sassfile',function(){
    return gulp
        .src('./src/style/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest( './src/style/css' ) );
});