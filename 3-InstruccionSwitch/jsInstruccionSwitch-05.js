/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Enrique Santiago Fernandez
*/
function mostrar() {
	//tomo la hora
	let horaDelDia;
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	switch (horaDelDia) {
		case horaDelDia:
		 	if (horaDelDia > 6 && horaDelDia < 12) {
				alert("Es de mañana.");
			}
			break;
		default:
			break;
	}





}//FIN DE LA FUNCIÓN