document.getElementById("container").addEventListener("click", calc);

let result = document.querySelector("#val");
let memory;

function calc(e) {
	let val;
	if (e.target.firstChild.length != undefined) {
		val = e.target.firstChild.nodeValue;
		
	} else {
		val = e.target.firstChild.firstChild.nodeValue;
		
	}
	
	if (result.innerHTML == "RESULTAT") result.innerHTML = "";
console.log(val);
switch (val) {
	case '0':
	case '1':
	case '2':
	case '3':
	case '4':
	case '5':
	case '6':
	case '7':
	case '8':
	case '9':
	case '+':
	case '-':
	case '*':
	case '/':
		result.innerHTML += val;
			console.log(val);
		break;

	case '=':
		console.log(result.innerHTML);
		let calcit = result.innerHTML;
		calcit = eval(calcit);
		calcit = calcit.toString();
		calcit = calcit.substring(0,10);
		result.innerHTML = calcit;
		break;
	
	case 'MC':
	memory = '';
	break;
	
	case 'C':
		result.innerHTML = "";
	case 'M+':
		memory = result.innerHTML;
		result.innerHTML = "";
		break;
	case 'MR':
		result.innerHTML += memory;
		break;
}

}