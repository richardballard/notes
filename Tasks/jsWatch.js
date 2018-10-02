const gulp = require('gulp');
const gutil = require('gulp-util');
const config = require('../package').gulp;

const jsWatch = () => {
    gulp.watch(`${config.src.js}${config.selectors.js}`, ['jsBuild']);
    gutil.log(process.version);
};

gulp.task('jsWatch', jsWatch);
module.exports = jsWatch;