/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo el mes
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 días o 29 en año bisiesto");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");
			break;
	}





}//FIN DE LA FUNCIÓN