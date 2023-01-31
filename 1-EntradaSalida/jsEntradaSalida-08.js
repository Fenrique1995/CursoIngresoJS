/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Enrique Santiago Fernandez
*/
function SacarResto() {
	let dividendo, divisor, resultado;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = dividendo % divisor;

	alert("El resto de esta division es: " + resultado);

}
