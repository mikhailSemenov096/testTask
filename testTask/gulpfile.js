var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss    = require('gulp-concat-css');

gulp.task('serve', ['sass'], function() { 

browserSync.init({
 browser: "chrome",
server: "src/"
}); 

gulp.watch("src/scss/*.scss", ['sass']); 
gulp.watch("src/*.html").on('change', browserSync.reload); 
}); 

// Compile sass into CSS & auto-inject into browsers 
gulp.task('sass', function() { 
return gulp.src("src/scss/*.scss") 
.pipe(sass().on('error', sass.logError)) 
.pipe(autoprefixer({ 
browsers: ['last 15 versions'], 
cascade: false 
}))// После установки автопрефиксер 
.pipe(concatCss('style.css')) 
.pipe(gulp.dest("src/css")) 
.pipe(browserSync.stream()); 
}); 

gulp.task('default', ['serve']); 