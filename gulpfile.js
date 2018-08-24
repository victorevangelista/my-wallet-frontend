const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', () => {
	if(util.env.production) {
		sequence('deps', 'app')
		sleep(3000);
	}else{
		sequence('deps', 'app', 'server')
	}
})

