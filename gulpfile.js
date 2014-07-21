var gulp = require('gulp');

gulp.task('default', function() {
	 var test = require('../AOJ/0003.js');
	 test.main(["3","4 3 5", "4 3 6" , "8 8 8"]);
});

gulp.task('watch', function() {
	  gulp.watch('../AOJ/0003.js', function(event) {
		 var test = require('../AOJ/0003.js');
		 test.main(["3","4 3 5", "4 3 6" , "8 8 8"]);
	  });
});
