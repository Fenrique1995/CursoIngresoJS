/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 12) {
		alert("Esta persona no es adolescente");
	} else if (edad >= 18) {
		alert("Esta persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN