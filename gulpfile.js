var gulp = require('gulp');

gulp.task('default', function () {
    // 将你的默认的任务代码放在这
    console.log('this is glup task');
});


var jsdoc = require('gulp-jsdoc3');
var connect = require('gulp-connect');

gulp.task('doc', function (cb) {

    var config = require('./jsdoc.json');
    gulp.src(['README.md', './lib/**/*.js'], {
            read: false
        })
        .pipe(jsdoc(config, cb));
    connect.server({
        root: './docs/gen',
        livereload: true,
        port: 9001 //服务器端口
    });
   
});