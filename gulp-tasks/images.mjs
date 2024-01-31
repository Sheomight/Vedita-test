import gulp from 'gulp'
import imagemin, { mozjpeg, optipng, svgo } from 'gulp-imagemin'

export default function images() {
  return gulp
    .src('./src/assets/images/**/*')
    .pipe(
      imagemin(
        [
          mozjpeg({ quality: 60, progressive: true }),
          optipng({ optimizationLevel: 5, interlaced: null }),
          svgo({multipass: true})
        ],
        {
          silent: false,
        }
      )
    )
    .pipe(gulp.dest('./dist/assets/images'))
}