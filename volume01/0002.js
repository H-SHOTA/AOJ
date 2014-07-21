var input = "";

exports.main = function(data){
	for(var i = 0; i < data.length; i++) {
		var d = data[i].split(' ');
		if(d.length == 2){
			console.log(String(parseInt(d[0]) + parseInt(d[1])).length);
		}
		else{
			break;
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
