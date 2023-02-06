/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
		if (edad > 12 && edad < 18) {
			alert("Es adolescente");
		}
}//FIN DE LA FUNCIÓN