const { src, dest, watch, series, parallel } = require('gulp');

var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'); // Подключаем Sass пакет

function gulpSass () { // Создаем таск "sass"
  return src(['sass//*.sass', 'sass//*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
}

gulp.task(gulpSass);

// gulp.task('watch', function() {
//   gulp.watch(['sass//*.sass', 'sass//*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
// });

// gulp.task('default', ['watch']);
function watchTask(){
    watch(['sass//*.sass', 'sass//*.scss', 'JS//*.js'],
        parallel(gulpSass));
}

exports.default = series(
    parallel(gulpSass),
    // cacheBustTask,
    watchTask
);
