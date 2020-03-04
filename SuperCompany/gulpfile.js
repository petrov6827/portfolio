
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

var rename      = require('gulp-rename');
var svgstore    = require('gulp-svgstore');
var svgmin      = require('gulp-svgmin');

var plumber     = require('gulp-plumber');
var postcss     = require('gulp-postcss');
var autoprefixer= require('autoprefixer');
var mqpacker    = require('css-mqpacker');
var minify      = require('gulp-csso');
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');
var run         = require('run-sequence');
var del         = require('del');


gulp.task('sass', function() {
    gulp.src('./sass/style.scss')
        .pipe(plumber())                     //проверка ошибок
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: [
                'last 1 version',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Opera versions',
                'last 2 Edge versions',
                        ]}),
            mqpacker({
                sort: false
            })             
            ]))
        .pipe(gulp.dest('build/css'))
         
        .pipe(minify())                      //минификация
        .pipe(rename('style.min.css'))      
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass', function() {           //преобразование scss ---> css
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
    });


gulp.task('build', function(fn) {
    run('style', 'images', 'symbols', fn);
})

gulp.task('images', function() {                         //минификация картинок из папки билд
    return gulp.src('build/img/**/*.{png,jpg,gif}')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest('build/img'));
});

gulp.task('symbols', function() {                           //минификация спрайтов
    return gulp.src('build/img/icons/&.svg')
        .pipe(svgmin())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('symbols.svg'))
        .pipe(gulp.dest('build/img'));
})

gulp.task('clean', function() {
    return del('build');
});

gulp.task('copy', function() {                             //копирование
    return gulp.src([
        'fonts/**/*.{woff,woff2}',
        'img/**',
        'js/**',
        '*.html'
        ], {
            base: "."
        })
        .pipe(gulp.dest('build'));
});

gulp.task('browser-sync', function() {   //отображение в браузере, сервер-локальный
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {  //отображение в терминале изменений scss, html, js файлов
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('build', function(fn) {
    run(
        'clean',
        'copy',
        'sass',
        'images',
        'symbols',
        fn
    );
});