var gulp = require("gulp"),
    watch = require("gulp-watch"),
    typescript = require("gulp-tsc");
 
gulp.task("compile", function(){
  gulp.src(["src/**/*.ts", "spec/**/*.ts"])
    .pipe(typescript({ emitError: false, target: "ES5" }))
    .pipe(gulp.dest("dist/"))
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.ts", "spec/**/*.ts"], ["compile"]);
});
