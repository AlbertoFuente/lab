var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    babel = require("gulp-babel"),
    browserify = require('gulp-browserify');

gulp.task('default', function() {

    gulp.src([
        'core/api/lab.api.js',
        'core/components/lab.components.js',
        'core/workers/lab.workers.js'
    ])
        .pipe(browserify ({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(concat('lab.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});


gulp.task('watch', function() {

    gulp.watch([
        'core/api/lab.api.js',
        'core/components/lab.components.js',
        'core/workers/lab.workers.js'
    ], function() {
        gulp.start('default');
    });
});
