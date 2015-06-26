var gulp = require('gulp');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('clean', function(cb){
  return del(['./build'], cb);
});

gulp.task('copy', ['clean'], function(){
  return gulp.src([
    './out/production/max-mqtt/mqtt.class',
    './help/mqtt.maxhelp',
    './lib/org.eclipse.paho.client.mqttv3-1.0.2.jar',
    './README.md'
  ]).pipe(gulp.dest('./build'));
});

gulp.task('compress', ['copy'], function () {
  return gulp.src('build/**/*')
    .pipe(zip('mqtt.zip'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['compress']);
