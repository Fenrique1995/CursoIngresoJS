/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18) {
		alert("Es mayor de edad");
	} else if (edad < 18) {
		if (edad > 12) {
			alert("Es adolescente");
		}
		if (edad <= 12) {
			alert("Es niño");
		}
	}
}//FIN DE LA FUNCIÓN