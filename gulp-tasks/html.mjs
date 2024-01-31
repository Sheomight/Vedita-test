import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'

export default function html() {
  return gulp.src('src/**.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
}
