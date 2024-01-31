import gulp from 'gulp'
import browSync from 'browser-sync'
import { deleteAsync } from 'del'

import fonts from './gulp-tasks/fonts.mjs'
import images from './gulp-tasks/images.mjs'
import html from './gulp-tasks/html.mjs'
import scss from './gulp-tasks/sass.mjs'
import scripts from './gulp-tasks/scripts.mjs'
import ghPages from './gulp-tasks/gh-pages.mjs'

const sync = browSync.create()

function clear() {
  return deleteAsync(['dist'])
}
 
const serve = () => {
  sync.init({
    server: './dist'
  })

  gulp.watch('src/**.html', gulp.series(html)).on('change', sync.reload)
  gulp.watch('src/scss/**.scss', gulp.series(scss)).on('change', sync.reload)
  gulp.watch('src/js/**.js', gulp.series(scripts)).on('change', sync.reload)
}

export default gulp.series( clear, fonts, images, html, scss, scripts, serve) 
export const build = gulp.task('build', gulp.series(clear, fonts, images, html, scss, scripts));