/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Enrique Santiago Fernandez
*/
function mostrar() {	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero = true;
	respuesta = 'si';
	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		respuesta = prompt("Desea continuar? :")
		if (banderaDelPrimero === true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		if (banderaDelPrimero === false) {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}

		}

	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN