var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var spawn = require('child_process').spawn;


gulp.task('static', function() {
    gulp.src('static/**')
    .pipe(gulp.dest('publish'));
});

gulp.task('build', ['static']);

gulp.task('deploy', ['build'], function() {
    return gulp.src('./publish/**/*')
        .pipe(ghPages());
});
