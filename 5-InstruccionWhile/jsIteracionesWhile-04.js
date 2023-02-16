/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Enrique Santiago Fernandez
*/
function mostrar() {
	let numeroIngresado;
    numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	while (numeroIngresado <= -1 || numeroIngresado >= 10) {
		numeroIngresado = prompt("vuelva ingresar un número entre 0 y 10.");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN