import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

export default function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
}