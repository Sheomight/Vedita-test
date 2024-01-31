import gulp  from "gulp"
import concat from 'gulp-concat'

export default function scripts() {
  return gulp.src('src/js/**.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
}