const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function task(cb) {
    console.log('gulp start');
    cb();
}

exports.do = task