var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create(), // create a browser sync instance.
    reload = bs.reload;
    

var sassInput = '',
    sasssOutput = '';





gulp.task('default', ['watch', 'browser-sync', 'sass']);

// gulp browser sync task
gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: "./src"
        }
    });
});



gulp.task('bs-reload', function () {

    bs.reload();

});

// gulp watch task
gulp.task('watch', function () {

    gulp.watch(['./src/index.html'], ['bs-reload']);
    gulp.watch(['./src/assets/js/*.js']).on("change", reload);
    gulp.watch(['./src/assets/css/main.css']).on("change", reload);
});

// gulp SASS compile task
gulp.task('sass', function () {

    return gulp.src(sassInput)
               .pipe(sass().on('error', sass.logError))
               .pipe(autoprefixer({
                browsers: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
                cascade: true
            }))
               .pipe(gulp.dest(sasssOutput));

});

