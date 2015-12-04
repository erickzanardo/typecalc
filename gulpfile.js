var gulp = require("gulp"),
    watch = require("gulp-watch"),
    typescript = require("gulp-tsc");
 
gulp.task("compile", function(){
  gulp.src(["src/**/*.ts"])
    .pipe(typescript())
    .pipe(gulp.dest("dist/"))
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.ts", ["compile"]);
});