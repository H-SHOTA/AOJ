
 
var input = "";

function main(data){
	for(var i = 0; i < data.length - 1; i++){
		for(var j = 1; j < data.length; j++){
			if(data[j - 1] < data[j]){
				var tmp = data[j];
				data[j] = data[j - 1];
				data[j - 1] = tmp;
			}
		}
	}
	console.log(data[0]);
	console.log(data[1]);
	console.log(data[2]);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  for(var i = 0; i < input.length; i++){
	  input[i] = parseInt(input[i])
  }
  main(input);
});
