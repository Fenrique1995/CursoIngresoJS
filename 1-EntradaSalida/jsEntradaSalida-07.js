/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Enrique Santiago Fernandez
*/
function sumar() {
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;
	resultado = numeroUno + numeroDos
	alert("Resultado de la suma: "+resultado);
}

function restar() {
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;
	resultado = numeroUno - numeroDos
	alert("Resultado de la resta: "+resultado);
}

function multiplicar() {
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;
	resultado = numeroUno * numeroDos
	alert("Resultado de la multiplicacion: "+resultado);
}

function dividir() {
	let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado;
	if (numeroDos === 0) {
		alert("ERROR");
	} else {
		resultado = numeroUno / numeroDos
		alert("Resultado de la division: "+resultado);
	}

}

