/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Enrique Santiago Fernandez
*/
function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) {
		case "Cataratas":
		case "Mar del plata":
			alert("En este destino hace calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("En este destino hace frio");
			break;
	}

}//FIN DE LA FUNCIÓN