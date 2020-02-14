function convert() {
	var num = Math.trunc(Number(document.getElementById("number").value));
	var x = num;
	var array = [];
	
	while (x != 0){
		rem = x%2;
		x = Math.trunc(x/2);
		array.push(rem);
	}

	document.getElementById("result").innerHTML = "Decimal Number: " + num + "<br>Binary form: ";
	while (array.length != 0) document.getElementById("result").innerHTML += array.pop();
}
