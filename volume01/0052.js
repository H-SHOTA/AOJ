 
var input = "";

function main(){
	var func = function(data){
		var ans = 0;
		while(parseInt(data / 5) > 0){
			data = parseInt(data / 5);
			ans += data;
		}
		console.log(ans);
	}
	
	for(var i = 0; i < input.length; i++){
		if(input[i] == "0")
			break;
		func(parseInt(input[i]));
	}
	
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
}); 
