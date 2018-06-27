var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var tsProject = ts.createProject("app/tsconfig.json");
gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("app/dist"));
});
gulp.task("public", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['public/src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("public/dist"));
});