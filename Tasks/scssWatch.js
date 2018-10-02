const gulp = require('gulp');
const gutil = require('gulp-util');
const config = require('../package').gulp;

const scssWatch = () => {
    gulp.watch([
        `${config.src.scss}${config.selectors.scss}`,
    ], ['scssBuild']);
    gutil.log(process.version);
};

gulp.task('scssWatch', scssWatch);
module.exports = scssWatch;