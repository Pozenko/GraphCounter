var One = {
	"w": 0,
	"2": 7,
	"3": 9,
	"6": 14 
}
var Two = {
	"w": 0,
	"1": 7,
	"3": 10,
	"4": 15
}
var Three = {
	"w": 0,
	"1": 9,
	"2": 10, 
	"4": 11,
	"6": 2
}
var Four = {
	"w": 0,
	"2": 15,
	"3": 11,
	"5": 6
}
var Five = {
	"w": 0,
	"4": 6,
	"6": 9
}
var Six = {
	"w": 0,
	"1": 14,
	"3": 2,
	"5": 9
}
var arr = [One, Two, Three, Four, Five, Six];

function pointerFunc(a, b, arr){
	var start = a;
	var arrWays = [];
	var minVal = 0;
	var minKey = null;
	while(arrWays.length != arr.length){
		for(var val in arr[a-1]){
			if(arrWays.indexOf(+val) != -1){
				continue;
			}
	 		if(val != "w"){
	 			var tempVal = arr[a-1][val] + arr[a-1]["w"];
	 			if(arr[val - 1]["w"] == 0 || arr[val - 1]["w"] > tempVal) 
	 				arr[val - 1]["w"] = tempVal;

	 			if(minVal == 0){
	 				minVal = arr[a-1][val];
	 				minKey = val;
	 			}
	 			if(arr[a - 1][val] < minVal){
	 				minVal = arr[a-1][val];
	 				minKey = val;
	 			}
	 		}
		}
		minVal = 0;
		arrWays.push(+a);
		a = minKey;
	}
	//return "From " + start + " to " + b + " = " + arr[b - 1]["w"];
	return arr[b - 1]["w"];
}