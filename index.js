#!/usr/bin/env node
var program = require('commander');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var chalk = require('chalk');

var autoprefixer = require('autoprefixer');

program
  .version('1.0.0')
  .option('-e, --entry [path]', 'entry file path','./')
  .option('-o, --output [path]', 'output file path','./')
  .option('-s, --output-style [type]', 'output style compressed|compact|nested|expanded default compressed','compressed')
  .parse(process.argv);


gulp.task('sass',function(){
    var processors = [autoprefixer];
    return gulp.src(program.entry+'*.scss')
           .pipe(sass({outputStyle:program.outputStyle}).on('error',sass.logError))
           .pipe(postcss(processors))
           .pipe(gulp.dest(program.output));
});

gulp.task('default',['sass']);
gulp.start();
console.log(chalk.green('Success! sass watching...'));
var watcher = gulp.watch(program.entry+'*.scss',['sass']);
watcher.on('change',function(event){
    console.log(chalk.green('Success! go on tasking...'))
});
