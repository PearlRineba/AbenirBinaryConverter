function convert() {
	var num = Math.trunc(Number(document.getElementById("number").value));
	var x = num;
	var rem;
	var array = [];
	
	
	while (x != 0){
		rem = x%2;
		x = Math.trunc(x/2);
		array.push(rem);
	}
	
	
	document.getElementById("result").innerHTML = "Decimal Number: " + num + "<br>Binary form: ";
	
	if (array.length == 0){
		document.getElementById("result").innerHTML = "Decimal Number: " + num + "<br>Binary form: 0 ";
	}
	else{
		while (array.length != 0){
		document.getElementById("result").innerHTML += array.pop();
		}
	}
}
