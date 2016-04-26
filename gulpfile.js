var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');

var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('clean', function () {
	rimraf.sync('./www/js');
	rimraf.sync('./www/styles');
});

gulp.task('sass', function () {
	return gulp.src(['app/styles/main.scss', 'app/styles/**/*.css'])
		.pipe(plugins.concat('main.css'))
		.pipe(plugins.sass())
		.pipe(gulp.dest('./www/styles'));
});

gulp.task('index', function () {
	return gulp.src('./app/index.html')
		.pipe(gulp.dest('./www'));
});

gulp.task('assets', function () {
	return gulp.src('./app/assets/**/*')
		.pipe(gulp.dest('./www/assets'));
});

gulp.task('build', ['clean', 'browserify', 'sass', 'index', 'assets']);

gulp.task('watch', function () {
	gulp.watch('app/*.html', ['index']);
  gulp.watch('app/assets/**/*', ['assets'])
	gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['sass']);
	gulp.watch(['app/**/*.js'], ['browserify']);
});

gulp.task('default', ['build'], function () {
  gulp.watch('app/*.html', ['index']);
  gulp.watch('app/assets/*', ['assets']);
	gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['sass']);
	return buildScript('app.js', true);
});

gulp.task('browserify', function () {
	return buildScript('app.js', false);
});

function handleErrors() {
	var args = Array.prototype.slice.call(arguments);
	plugins.notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
	var props = {
		entries: ['./app/' + file],
		debug: true,
		transform: [babelify]
	};

	// watchify() if watch requested, otherwise run browserify() once
  	var bundler = watch ? watchify(browserify(props)) : browserify(props);

	function rebundle() {
		var stream = bundler.bundle();
		return stream
			.on('error', handleErrors)
			.pipe(source(file))
			.pipe(gulp.dest('./www/js'));
  }

	// listen for an update and run rebundle
	bundler.on('update', function () {
		rebundle();
	});

	// run it once the first time buildScript is called
	return rebundle();
}
