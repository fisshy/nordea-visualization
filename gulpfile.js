var gulp    = require('gulp');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var ngmin   = require('gulp-ngmin');
var less    = require('gulp-less');

var paths = {
  scripts: ['assets/src/**/*.js', 'assets/src/*.js', 'bower_components/ng-file-upload/angular-file-upload.min.js'],
  less: 'assets/less/*.less'
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(ngmin())
   // .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('less', function(){
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
})


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.less, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'less', 'watch']);