/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Enrique Santiago Fernandez
*/
function mostrar() {
	let num;
	let answer;
	let sumPositives;
	let plusNegatives;
	sumPositives = 0;
	plusNegatives = 1;
	answer = 'si';

	while (answer != "no") {
		num = parseInt(prompt("Ingrese un numero:"));
		if (num < 0) {
			plusNegatives *= num;
		} else if (num > 0) {
			sumPositives += num
		}
		answer = prompt("Desea continuar: ");
	}


	document.getElementById("txtIdSuma").value = sumPositives;
	document.getElementById("txtIdProducto").value = plusNegatives;

}//FIN DE LA FUNCIÓN