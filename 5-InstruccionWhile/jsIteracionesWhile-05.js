/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Enrique Santiago Fernandez
*/
function mostrar()
{
	let sex;
	sex = prompt("ingrese f ó m .");
	while (sex != 'f' && sex != 'm') {
		sex = prompt("debe ingresar f ó m .");
	}


	document.getElementById("txtIdSexo").value=sex;
}//FIN DE LA FUNCIÓN