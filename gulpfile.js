/*
 cd ~/IdeaProects/foo
 rm package.json
 rm -rf node_modules
 npm init -y
 npm install gulp --save-dev
 npm install jshint --save-dev
 npm install gulp-jshint --save-dev
 npm install gulp-watch --save-dev
 npm install jasmine --save-dev
 npm install gulp-jasmine --save-dev
 curl file:////Users/steve/IdeaProjects/foo/setup/gulpfile.js > gulpfile.js
 # curl https://gist.githubusercontent.com/stevecooperorg/c67898608d718c8c62c30dcfcee2100a/raw/gulpfile.js > gulpfile.js
 gulp watch
 node ./node_modules/gulp/bin/gulp.js watch

 */
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