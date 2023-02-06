/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
Enrique Santiago Fernandez
*/
function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18) {
		alert("Es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN