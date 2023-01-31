/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Enrique Santiago Fernandez
*/
function sumar()
{
	let numeroUno, numeroDos, resultado;
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno+numeroDos;

	alert("El resultado de la suma es: "+resultado);

}

