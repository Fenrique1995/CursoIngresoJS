/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Enrique Santiago Fernandez
*/
function mostrar() {	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let respuesta;
	//iniciar variables
	banderaDelPrimero = 0;
	respuesta = 'si';
	while (respuesta == "si") {
		banderaDelPrimero++;
		numeroIngresado = prompt("Ingrese un numero: ");
		respuesta = prompt("desea continuar?");

		if (banderaDelPrimero == 1) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}	
		
		if (banderaDelPrimero > 1 && numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		} 

		if (banderaDelPrimero > 1 && numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN