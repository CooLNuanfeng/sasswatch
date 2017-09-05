#!/usr/bin/env node
var program = require('commander');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var chalk = require('chalk');

var autoprefixer = require('autoprefixer');

const config = {
    'l2v' : 'last 2 versions',
    'l2cv': 'last 2 Chrome versions',
    'l2mv': 'last 2 major versions',
    'l2iosmv' : 'last 2 iOS major versions',
    'gt5' : '> 5%',
    '5US' : '> 5% in US',
    '5AS' : '> 5% in alt-AS',
    '5Stats' : '> 5% in my stats',
    'ie' : 'ie 6-8',
    'gtf20' : 'Firefox > 20',
    'gef20' : 'Firefox >= 20',
    'lt20' : 'Firefox < 20',
    'lef20' : 'Firefox <= 20',
    'fesr' : 'Firefox ESR',
    'ios7' : 'iOS 7',
    'unrlv': 'unreleased versions',
    'unrclv':'unreleased Chrome versions',
    'notie' : 'not ie <= 8'
}

program
  .version('1.0.0')
  .option('-e, --entry [path]', 'entry file path','./')
  .option('-o, --output [path]', 'output file path','./')
  .option('-s, --output-style [type]', 'output style compressed|compact|nested|expanded default compressed','compressed')
  .option('-b, --browsers [config]', 'config browserslist default config >= 5%')

program.on('--help', function(){
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ sass -e ./ -o ./dist -s expanded -b l2v');
    console.log('');
    console.log('');
    console.log('   '+chalk.green('browserslist config map: '));
    console.log('');
    console.log(config);
});

program.parse(process.argv);


gulp.task('sass',function(){
    var browser;
    program.browsers && config[program.browsers] ? browser = [config[program.browsers]] : browser = ['>= 5%'];
    console.log(chalk.green('browserslist: ' + browser));
    var processors = [autoprefixer({browsers:browser})];
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
