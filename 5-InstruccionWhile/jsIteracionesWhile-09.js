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
	banderaDelPrimero = 0;
	respuesta = 'si';
	while (respuesta == "si") {
		banderaDelPrimero++;
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if(banderaDelPrimero == 1)       {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}

		if (banderaDelPrimero > 1 && numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}

		if (banderaDelPrimero > 1 && numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}
		respuesta = prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN