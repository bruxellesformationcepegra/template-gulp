/* ---------------------------------------- */
/* Déclaration des variables pour les tasks */
/* ---------------------------------------- */
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var rename          = require('gulp-rename');
var cleanCss        = require('gulp-clean-css');
var htmlMin         = require('gulp-htmlmin');
var uglify          = require('gulp-uglify');
var browserSync     = require('browser-sync');
var sourcemaps      = require('gulp-sourcemaps');

/* --------------------- */
/* Déclaration des tasks */
/* --------------------- */
gulp.task('sassification', function () {
  return gulp.src('./src/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: ['last 6 versions'],
      cascade: false
  }))
  .pipe(cleanCss({
    compatibility: 'ie8'
  }))
  .pipe(rename(function(path){ path.basename += ".min"; }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('minifyhtml', function() {
  return gulp.src('src/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglification', function() {
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(rename(function(path){ path.basename += ".min"; }))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('refresh', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});
/* ------------------- */
/* Exécution des tasks */
/* ------------------- */
gulp.task('watch', ['sassification', 'uglification', 'minifyhtml', 'refresh'], function () {
  gulp.watch('./src/sass/*/*.scss', ['sassification']);
  gulp.watch('./src/js/*.js', ['uglification']);
  gulp.watch('./src/*.html', ['minifyhtml']);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
