var elixir = require('laravel-elixir');

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var watch = require('gulp-watch');


var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');


var sloc = require('gulp-sloc');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var gulp = require('gulp');

var less_sources = [
    'resources/assets/less/notosplus/style.less',
    'resources/assets/less/datepicker/main.less'
];

gulp.task('less', function () {
    return gulp.src(less_sources)
        //.pipe(watchLess('resources/assets/less/style.less'))
        .pipe(less({compress: true}))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(notify('Less Compiled, Prefixed and Minified'));
});


var js_sources = [
    'public/js/modules/notosplus.module.js',
    'public/js/modules/core/*module*.js',
    'public/js/modules/data/*module*.js',
    'public/js/modules/**/*module*.js',
    'public/js/modules/core/*.js',
    'public/js/modules/data/*.js',
    'public/js/modules/**/*.js'
];

gulp.task('js', function () {
    gulp.src(js_sources)
        //.pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
        .pipe(notify('JS Compiled and Minified'));
});

var sloc_sources = [
    /* NOTOSPLUS */
    'app/**/*.*',
    'config/**/*.*',
    'public/css/**/*.*',
    'public/test/**/*.js',
    'public/js/**/*.js',
    'public/js/**/*.html',
    'resources/**/*.*',
    '.env*',
    '.php',
    '.js',
    '.md',

    /* NOTOS MAIN PACKAGE */
    'packages/bakgat/notos/bootstrap/*.php',
    'packages/bakgat/notos/config/*.php',
    'packages/bakgat/notos/src/**/*.php',
    //'packages/bakgat/notos/tests/**/*.php',
    'packages/bakgat/notos/*.php',
    'packages/bakgat/notos/*.travis',
    'packages/bakgat/notos/*.yml',
    'packages/bakgat/notos/*.xml',
    'packages/bakgat/notos/*.md',

    /* PORTAL */
    '../portal/app/**/*.*',
    '../portal/config/**/*.*',
    '../portal/public/js/**/*.js',
    '../portal/public/js/**/*.html',
    '../portal/resources/**/*.*',
]
gulp.task('sloc', function() {
    gulp.src(sloc_sources)
        .pipe(sloc());
});

gulp.task('watch', function () {
    gulp.watch('public/js/modules/**/*.js', ['js']);
    gulp.watch('resources/assets/less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
    //gulp.watch('packages/bakgat/notos/src/**/*.php', ['sloc']);
    //gulp.watch('packages/bakgat/notos/tests/**/*.php', ['sloc']);
});

gulp.task('default', ['watch']);

