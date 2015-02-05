var gulp    = require('gulp');

//Used to bundle angular
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var ngmin   = require('gulp-ngmin');

// Used to bundle react
var reactify = require('reactify'); 
var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');

// CSS
var less    = require('gulp-less');

var paths = {
  scripts: {
    angular :[
      'assets/src/angular/**/*.js', 
      'assets/src/angular/*.js', 
      'bower_components/ng-file-upload/angular-file-upload.min.js'
    ],
    react : [
      'assets/src/app/app.js'
    ]
  },
  less: 'assets/less/*.less'
};

var DIST = 'public/js'

gulp.task('angular', function() {
  return gulp.src(paths.scripts.angular)
    .pipe(ngmin())
    .pipe(uglify())
    .pipe(concat('upload.min.js'))
    .pipe(gulp.dest(DIST));
});


gulp.task('react', function() {
  return gulp.src(paths.scripts.react)
    .pipe(browserify({
      transform: [reactify]
    }))
    .pipe(gulp.dest(DIST));
});

gulp.task('less', function(){
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
})


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts.react, ['react']);
  gulp.watch(paths.less, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['react', 'angular', 'less']);