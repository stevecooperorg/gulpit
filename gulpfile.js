var src = ['index.js', "src/**.js"];
var specs = ["spec/*.js"];
var allJs = src.concat(specs).concat(["!./node_modules/**"]);
var allFiles = allJs.concat(['**/*.html', '**/*.css']);

// DONE
// lint code singly.
// get jslint to work when the code changes.
// get livereload server started
// pipe changes to livereload -- js, html, css

// TODO
// get karma to work

const gulp       = require('gulp');
const jshint     = require('gulp-jshint');
const jasmine    = require('gulp-jasmine');
const watch      = require('gulp-watch');
const livereload = require('gulp-livereload');
const Server     = require('karma').Server;
const fs         = require('fs');

gulp.task('lint', function() {
    // starts jshint
    gulp
        .src(allJs)
        .pipe(jshint({ esversion: 5 }))
        .pipe(jshint.reporter('default'));
});

gulp.task('lr', function() {
    // pipes all content (html, css, js, tests) through to started livereload server.
    // <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    gulp
        .src(allFiles)
        .pipe(livereload());
});

gulp.task('karma', function(done) {
    /*new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();*/
});

var hackDoDDatabase = function() {
    var msg = fs.readFileSync( './message', 'utf8');
    var messages = ['Hacking Department of Defence Database'];
    for(var i = 0; i < 50; i++) {
        messages.push('');
    }
    messages.push(msg);

    for(var i = 0; i < messages.length; i++) {
        (function(i, message) {
            setTimeout(function() {
                console.log(message);
            }, 100 * i);
        })(i, messages[i]);
    }
};

gulp.task('default', ['lint','lr'], function(done) {
    livereload.listen();
    gulp.watch(allJs, { ignoreInitial: false }, ['lint']);
    gulp.watch(allFiles, { ignoreInitial: false }, ['lr']);
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();

    hackDoDDatabase();

});
