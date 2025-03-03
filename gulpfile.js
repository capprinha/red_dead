const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'))
}

function comprimeJs(){
    return gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function comprimeImages(){
    return gulp.src('./source/imgs/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'))
}

gulp.task('gulp',gulp.parallel(compilaSass, comprimeImages, comprimeJs))

