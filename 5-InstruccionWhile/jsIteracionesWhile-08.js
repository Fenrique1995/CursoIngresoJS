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
	let flag;

	flag = true;

	sumPositives = 0;
	plusNegatives = 1;
	answer = 'si';

	while (answer != "no") {
		num = parseInt(prompt("Ingrese un numero:"));


		if (num >= 0) {
			sumPositives += num;
			
		} else {
			
			plusNegatives *= num;
			flag = false;
		}

		answer = prompt("Desea continuar: ");
		
	}
	if (flag == true) {
		plusNegatives = 0;
	}

	document.getElementById("txtIdSuma").value = sumPositives;
	document.getElementById("txtIdProducto").value = plusNegatives;

}//FIN DE LA FUNCIÓN