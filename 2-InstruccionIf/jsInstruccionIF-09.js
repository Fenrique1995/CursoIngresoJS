/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
Enrique Santiago Fernandez
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let random = 0;
	random = parseInt(Math.random()*10+1);
	

	alert("EL NUMERO RANDOM ES: "+random);
}//FIN DE LA FUNCIÓN