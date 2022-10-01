const gulp = require("gulp");
const debug = require("gulp-debug");
const babel = require("gulp-babel");

gulp.task("build", async () => {
    //console.log("gulp building...");
    return gulp.src("src/**/*.js")
        .pipe(debug())
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .on("error", (err) => {
            console.log(`Babel error: ${err}`);
        })
        .pipe(gulp.dest(".compiled"));
});

gulp.task("default", gulp.series('build'), async () => {
    console.log("gulp default...");
});