const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();

function style(){
	return gulp.src('./sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	
}

 function typescript() {
    return gulp.src('./js/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            //outFile: '*.js'
        }))
        .pipe(gulp.dest('./js'));
}

function watch(){
	browserSync.init({
		server:{
			baseDir: './'
		}
	});
	gulp.watch('./sass/**/*.scss', style).on('change', browserSync.reload);
	gulp.watch('./js/*.ts', typescript).on('change', browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;