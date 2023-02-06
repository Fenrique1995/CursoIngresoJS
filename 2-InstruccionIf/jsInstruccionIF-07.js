/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo la edad  
	let edad, estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;
	if (edad < 18) {
		if (estado !== "Soltero") {
			alert("Es muy pequeño para NO ser soltero.");
		}
	}


}//FIN DE LA FUNCIÓN