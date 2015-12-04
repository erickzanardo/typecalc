var gulp = require("gulp"),
    watch = require("gulp-watch"),
    typescript = require("gulp-tsc");
 
gulp.task("compile", function(){
  gulp.src(["src/**/*.ts"])
    .pipe(typescript({ emitError: false, target: "ES6", module: "ES6" }))
    .pipe(gulp.dest("dist/"))
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.ts", ["compile"]);
});
