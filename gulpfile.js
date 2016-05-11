var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

function compileTemplatesAndOptimize() {

    var opts = {
        collapseWhitespace: true,
        removeEmptyAttributes: false,
        removeComments: true
    };

    return gulp.src([
        './partials/**/*.pug'
    ])
        .pipe($.pug({}))
        .pipe($.htmlmin(opts))
        .pipe(gulp.dest('./partials/'));
}

function compileTemplates() {
    return gulp.src([
        './partials/**/*.pug'
    ])
        .pipe($.pug({
            pretty: true
        }))
        .pipe(gulp.dest('./partials/'));
}

gulp.task('compileTemplatesAndOptimize', compileTemplatesAndOptimize);
gulp.task('compileTemplates', compileTemplates);

function watch() {
    gulp.watch('./partials/**/*.pug', gulp.series('compileTemplates'));
}

gulp.task('watch', watch);

gulp.task('default', gulp.series('watch'));