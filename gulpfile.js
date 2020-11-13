var 
    isBuild = false,
    gulp = require('gulp'),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    webpackStream = require('webpack-stream'),
    connect = require('gulp-connect-php'),
    bs = require('browser-sync').create(),
    stream = bs.stream,
    reload = bs.reload,
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    plumber = require("gulp-plumber"),
    prefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    pug = require("gulp-pug"),
    del = require("del"),
    rs = require("run-sequence"),
    concatFilenames = require('gulp-concat-filenames'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    rename = require("gulp-rename"),
    args = require('yargs').argv,
    cleanCSS = require('gulp-clean-css'),
    fileInclude = require('gulp-file-include'),
    wpcg = require('./webpack'),
    webpackConfig  = wpcg.getWebpackConfig(),
    minifyOpt = { ext: { min: '.js' }, noSource: true }
    ;

    const path = {
        src: './src',
        target: './html',
    };
    path.srcJs = path.src+'/js';
    path.srcCss = path.src+'/css';
    path.srcImg = path.src+'/images';
    path.targetJs = path.target+'/js';
    path.targetCss = path.target+'/css';
    path.targetImg = path.target+'/images';

gulp.task('html', function() {
        return gulp.src( path.src +'/*.html' )
          .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
          }))
          .pipe(gulp.dest( path.target ));
    });


gulp.task('scssCompile', function (done) {
  
      if(isBuild){
          gulp.src( path.srcCss +'/style.scss')
          .pipe(sass())
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest( path.targetCss ));
      }
      else{
          gulp.src( path.srcCss+'/style.scss')
          .pipe(plumber({
              errorHandler: notify.onError(function (err) {
                  return {
                      title: 'Styles',
                      message: err.message
                  }
              })
          }))
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(sourcemaps.write())
          .pipe(gulp.dest( path.targetCss ))
          .pipe(stream());
      }
      
      done();
  });
gulp.task('scss', gulp.series('scssCompile' ) );

gulp.task('webpack', function( done )  {
  return gulp.src( path.srcJs+'/index.js')
      .pipe( webpackStream(webpackConfig) )
      .pipe(gulp.dest( path.targetJs ));

});
gulp.task('js', gulp.series('webpack'));



gulp.task('clean:html', function (done) {
    del( path.target +'/*.html');
    done();
});
gulp.task('clean:js', function (done) {
    del( path.targetJs );
    done();
});
gulp.task('clean:css', function (done) {
    del( path.targetCss );
    done();
});
gulp.task('clean:img', function (done) {
    del( path.targetImg );
    done();
});
gulp.task('clean', gulp.parallel('clean:html', 'clean:css', 'clean:js', 'clean:img'));



gulp.task('copy:img', function (done) {
  gulp.src( path.srcImg +'/**/*.*')
      .pipe(gulp.dest( path.targetImg ));
  done();
});
gulp.task('copy', gulp.parallel('copy:img'));



gulp.task('watchers', function (done) {
    gulp.watch( path.src + '/**/*.html', gulp.series('html') );
    gulp.watch( path.srcCss + '/**/*.scss', gulp.series('scss') );
    gulp.watch( path.srcJs + '/**/*.js', gulp.series('js') );
    gulp.watch( path.srcImg + '/**/*.*', gulp.series('copy:img') );
    
    // gulp.watch( path.src +'/images/**/*.*', gulp.series('copy:img') );
    // gulp.watch( path.src +'/fonts/**/*.*', gulp.series('copy:fonts') );

    done();
});
    
gulp.task('serve', function(done) {
  connect.server({
    // port: 8000, //default
    // hostname: '127.0.0.1' //default
    base: path.target,
    open: true
  });
    done();
});


gulp.task(
    'server',
    gulp.series(
        // gulp.parallel('html', 'scss', 'js', 'copy:fonts', 'copy:img', 'copy:libs'),
        gulp.parallel('html', 'scss', 'js', 'copy:img'),
       'serve',
        'watchers'
    )
);
  




// gulp.task('default', gulp.series('clean', 'html', 'scss', 'js'));
gulp.task('default', gulp.series('clean', 'copy', 'server'));

