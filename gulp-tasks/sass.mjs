import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
import csso from 'gulp-csso'
import autoPrefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'

const sass = gulpSass(dartSass);

export default function scss() {
  return gulp.src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoPrefixer({
      cascade: false,
    }))
    .pipe(autoPrefixer("last 2 version", "> 2%", "ie 6", "ie 5"))
    .pipe(concat('index.css'))
    .pipe(csso())
    .pipe(gulp.dest('dist'))
}