const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Node Js File To src
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/bootstrap/dist/js/bootstrap.bundle.min.js','node_modules/popper.js/dist/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

//Watch Sass And serevy
gulp.task('serve', function(){
        browserSync.init({
            server:"./src"
        })
        gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
        gulp.watch("src/*.html").on('change',browserSync.reload);
    });

//move font awesome fonts folder to src
gulp.task('fonts',function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("src/fonts"));
});

// move font awesome css file
gulp.task('fa',function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
});

gulp.task('default',['js', 'serve', 'fa', 'fonts']);