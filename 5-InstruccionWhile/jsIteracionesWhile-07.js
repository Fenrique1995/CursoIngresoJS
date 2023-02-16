/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Enrique Santiago Fernandez
*/
function mostrar() {
	let counter;
	let sum;
	let answer;
	let num;
	counter = 0;
	sum = 0;
	answer = "si";

	while (answer != "no") {
		counter++;
		num = parseInt(prompt("ingrese un numero:"));
		sum += num;
		answer = prompt("Desea continuar? ");
	}


	document.getElementById("txtIdSuma").value = sum;
	document.getElementById("txtIdPromedio").value = sum / counter;

}//FIN DE LA FUNCIÓN