var gulp = require('gulp'),
    dest = require('gulp-dest'),
    source     = require('vinyl-source-stream'),
    rename     = require('gulp-rename'),
    glob       = require('glob'),
    es         = require('event-stream'),
    babelify = require("babelify"),
    browserify = require("browserify");


gulp.task('default', function() {
    gulp.watch('./app/js/**/*.es6', ['transform']);
});

// https://babeljs.io/docs/setup/#browserify
gulp.task('transform', function(done) {
    // http://fettblog.eu/gulp-browserify-multiple-bundles/
    glob('./app/js/*App.es6', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry] })
                .transform(["babelify",{presets: ["es2015"]}]) // https://github.com/babel/babelify/issues/103
                .bundle()
                .pipe(source(entry))
                .pipe(dest(':name.bundle.js')) // https://www.npmjs.com/package/gulp-dest
                .pipe(gulp.dest('./dist'))
        });

        es.merge(tasks).on('end', done);
    })
});