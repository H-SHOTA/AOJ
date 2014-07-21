/**
 * 
 */
var input = "";
exports.main = function(data){
	var count = parseInt(data[0]);
	if(count != NaN || count > 0){
		for(var i = 1; i < data.length ; i++){
			if(data[i].length != 0){
				var lines = data[i].split(" ");
				var nums = [parseInt(lines[0]), parseInt(lines[1]), parseInt(lines[2])].sort(
					function(a,b){
				    	if( a < b ) return -1;
				        if( a > b ) return 1;
				        return 0;
					}
				);
				if((nums[0] * nums[0] + nums[1] * nums[1]) == (nums[2] * nums[2])){
					console.log("YES");
				}
				else{
					console.log("NO");
				}
			}
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
	input = input.split('\n');
	exports.main(input);
});
