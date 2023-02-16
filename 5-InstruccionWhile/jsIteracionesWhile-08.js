/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Enrique Santiago Fernandez
*/
function mostrar()
{
	let num;
	let answer;
	let sumPositives;
	let plusNegatives;
	let counter;
	counter=0;
	sumPositives=0;
	plusNegatives=0;
	answer='si';

	while (answer != "no") {
		counter++;
		num = parseInt(prompt("Ingrese un numero:"));
		if (num < 0) {
			plusNegatives += num;
		}else if (num > 0) {
			sumPositives += num
		}
		answer = prompt("Desea continuar: ");
	}


	document.getElementById("txtIdSuma").value=sumPositives;
	document.getElementById("txtIdProducto").value=plusNegatives*= counter;

}//FIN DE LA FUNCIÓN