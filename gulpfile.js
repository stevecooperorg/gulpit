var src = ['index.js', "src/**.js"];
var specs = ["spec/*.js"];

const gulp   = require('gulp');
const jshint = require('gulp-jshint');
const jasmine = require('gulp-jasmine');
const watch  = require('gulp-watch');

gulp.task('default', ['compile', 'test']);

gulp.task('watch', function() {
    gulp.watch(['spec/**', 'src/**'],   { ignoreInitial: false }, ['compile', 'test']);
});

gulp.task("compile", function () {
    gulp
        .src(src)
        .pipe(jshint({esversion: 5}))
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
    gulp
        .src(specs)
        .pipe(jshint({esversion: 5}))
        .pipe(jshint.reporter('default'))
        .pipe(jasmine({
            helpers: []
        }));
});