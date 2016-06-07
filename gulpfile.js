var gulp = require('gulp');
var haml = require('gulp-ruby-haml');

// hamlタスク設定
gulp.task('haml', function() {
  gulp.src('*.haml').
  //gulp.src('./hamlのディレクトリ/**/*.haml').
       pipe(haml()).
       //..pipe(gulp.dest('./書き出したいディレクトリ'));
       pipe(gulp.dest('./haml'));
});
 
// 監視設定
gulp.task('watch',function(){
  //gulp.watch('./hamlのディレクトリ/**/*.haml',['haml']);
  gulp.watch('./*.haml',['haml']);
});
 
// 項目追加
gulp.task('default',['haml','watch']);
