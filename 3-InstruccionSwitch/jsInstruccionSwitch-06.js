/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
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
			} else if (horaDelDia > 11 && horaDelDia < 20) {
				alert("Es de tarde.");
			} else if (horaDelDia > 19 && horaDelDia < 25 || horaDelDia >= 0 && horaDelDia < 7) {
				alert("Es de noche.");
			}else{
				alert("la hora no existe.");
			}
			break;
		default:
			("la hora no existe.");
			break;
	}
}//FIN DE LA FUNCIÓN