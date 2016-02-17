var gulp=require("gulp");
//var browserify=require("gulp-browserify");
var gutil=require("gulp-util");
var source = require('vinyl-source-stream');
var watchify=require("watchify");
var browserify = require('browserify');
var babelify=require("babelify");

var glob=require("glob");
var path=require("path");
var argv=require("yargs").argv;

function doBuild(filename){
	if(!filename)
		filename="app";

	var b=watchify(browserify({
		entries:["./src/"+filename+".jsx"],
		transform:[babelify],
		extensions:[".jsx"],
		debug: true,
	    cache: {},
	    packageCache: {},
	    fullPaths: true
	}));

	function build(file){
		if(file)
			gutil.log('Recompiling ' + file);
		b.bundle()
		.on('error',gutil.log.bind(gutil,"Browserify Error"))
		.pipe(source(filename+".js"))
		.pipe(gulp.dest('./dist'));
	};

	build();
	b.on('update',build);
}

//eg: gulp build -n questionApp
gulp.task('build',function(){
	var filename=argv.n || "app";
	doBuild(filename);
})

gulp.task('all',function(){
	gulp.src("./src/*.jsx",function(err,files){
		if(err)
			console.log(err);
		files.map(function(file){
			var filename=path.basename(file,".jsx");
			console.log(filename);
			doBuild(filename);
		})
	});
});

var sass=require("gulp-sass");
var watch=require("gulp-watch");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
gulp.task('sass',function(){
	// gulp.src("./sass/*.scss")
	// 	.pipe(sass().on('error', sass.logError))
	// 	.pipe(concat("style.css"))
	// 	.pipe(gulp.dest("./dist"));

	gulp.src("./sass/style.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(rename("style.css"))
		.pipe(gulp.dest("./dist"));
});

gulp.task('watch',function(){
	gulp.watch("./sass/*.scss",["sass"]);
})

gulp.task('default',["build","sass","watch"]);

/*
gulp build -n xxx
gulp sass
gulp watch
gulp

browserify ./src/questionApp.jsx -t babelify -o ./dist/questionApp-bundle.js --extension .jsx
watchify ./src/questionApp.jsx -t babelify -o ./dist/questionApp-bundle.js -v --extension .jsx 

*/