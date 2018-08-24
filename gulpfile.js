const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')



gulp.task('heroku:production', function(){
  sequence('clean', 'build', 'minify')
})

