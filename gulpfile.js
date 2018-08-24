const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', (done) => {
	if(util.env.production) {
		sequence('deps', 'app')
		done()
	}else{
		sequence('deps', 'app', 'server')
	}
})

