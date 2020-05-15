let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let babel = require('gulp-babel');
let connect = require("gulp-connect");

gulp.task("watch-all",async ()=>{
    // html
    gulp.watch("./src/pages/*.html",async ()=>{
        gulp.src("./src/pages/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,         
            removeComments: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true  
        }))
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi\\pages"));
      })
    // css
    gulp.watch("./src/css/*.css", async ()=>{
        gulp.src("./src/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi\\css"));
    })    
    // js
    gulp.watch("./src/js/*.js", async ()=>{
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi\\js"));
    })
    // img
    gulp.watch("./src/images/**/*", async ()=>{
        gulp.src("./src/images/**/*")
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi\\images"));
    })
    // php
    gulp.watch("./*.html",async ()=>{
        gulp.src("./*.html")
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi"));
    })
    
    gulp.watch("./*.php",async ()=>{
        gulp.src("./*.php")
        .pipe(gulp.dest("d:\\phpStudy\\WWW\\Mi"));
    })
})

gulp.task('server', function () {
    connect.server({
        root: './dist',
        livereload: true
    });
});