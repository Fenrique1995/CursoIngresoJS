/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Enrique Santiago Fernandez
*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let nota = 0;
	nota = parseFloat(Math.random()*10+1).toFixed(1);
	
	if (nota >= 9) {
		alert(nota+" EXCELENTE");
	} else if (nota >= 4) {
		alert(nota+" APROBÓ");
	} else if (nota < 4) {
		alert(nota+" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN