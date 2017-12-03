const gulp = require('gulp');
const concat = require('gulp-concat')
const babel = require('gulp-babel');


gulp.task('babel', () => {
    return gulp.src('source/playground/counterApp.js') //'source/app.js', source/playground/*.js
    .pipe(babel({
        presets: ['env', 'react']
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/scripts/'));
  });

