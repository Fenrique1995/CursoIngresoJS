/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
Enrique Santiago Fernandez
*/
function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) {

		case "Cataratas":
			alert("Este destino se encuentra en el Norte de nuestro pais");
			break;
		case "Bariloche":
			alert("Este destino se encuentra en el Oeste de nuestro pais");
			break;
		case "Mar del plata":
			alert("Este destino se encuentra en el Este de nuestro pais");
			break;
		case "Ushuaia":
			alert("Este destino se encuentra en el Sur de nuestro pais");
			break;

		default:
			break;
	}

}//FIN DE LA FUNCIÓN