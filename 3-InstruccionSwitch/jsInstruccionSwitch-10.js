/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
Enrique Santiago Fernandez
*/
function mostrar() {
	let destinoIngresado, estacionIngresada;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	/*un ejemplo
	switch (estacionIngresada) {
		case "Invierno":
			if (destinoIngresado === "Bariloche") {
				alert("se viaja");
			}else{
				alert("No se viaja");
			}	
			break;
	}
	*/
	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					alert("se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Cataratas":
				case "Mar del plata":	
					alert("se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}	
		case "Otoño":
			switch (destinoIngresado) {
				default:
					alert("se viaja");
					break;
			}
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					alert("No se viaja");
					break;
			
				default:
					alert("se viaja");
					break;
			}	
	}
}//FIN DE LA FUNCIÓN