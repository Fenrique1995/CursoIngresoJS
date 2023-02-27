/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
Enrique Santiago Fernandez
*/
function mostrar() {

	let repetciones = prompt("ingrese el número de repeticiones");

	for (let i = 0; i < repetciones; i++) {
		document.write("Hola UTN FRA <br>");
	}

}//FIN DE LA FUNCIÓN