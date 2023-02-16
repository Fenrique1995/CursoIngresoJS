/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Enrique Santiago Fernandez
*/
function mostrar() {
	let counter;
	let sum;
	let number;

	counter = 0;
	sum = 0;

	while (counter < 5) {
		counter++;
		number = parseInt(prompt("Ingrese un numero para la suma y sacar el promedio:"));
		sum += number;
	}

	document.getElementById("txtIdSuma").value = sum;
	document.getElementById("txtIdPromedio").value = sum / 5;
}//FIN DE LA FUNCIÓN