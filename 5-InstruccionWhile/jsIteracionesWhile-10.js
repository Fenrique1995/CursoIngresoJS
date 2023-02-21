/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Enrique Santiago Fernandez
*/
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let promedioNegativos;
	let promedioPositivos;
	let numerosPares = 0;
	let diferenciaEntreNegativosPositivos;

	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = parseFloat(prompt("Ingrese un numero: "));
		if (numeroIngresado === 0) {
			contadorCeros++;
		} else if (numeroIngresado < 0) {
			contadorNegativos++;
			sumaNegativos += numeroIngresado;
			promedioNegativos = sumaNegativos / contadorNegativos;
		} else if (numeroIngresado > 0) {
			contadorPositivos++;
			sumaPositivos += numeroIngresado;
			promedioPositivos = sumaPositivos / contadorPositivos;
		}
		if (numeroIngresado % 2 === 0) {
			numerosPares++;
		}
		diferenciaEntreNegativosPositivos = (sumaPositivos - sumaNegativos)
		respuesta = prompt("desea continuar?");
	}//fin del while

	document.write("La suma de negativos es : " + sumaNegativos +
		"<br/>La suma de positivos es : " + sumaPositivos +
		"<br/>Cantidad de positivos : " + contadorPositivos +
		"<br/>Cantidad de negativos : " + contadorNegativos +
		"<br/>Cantidad de ceros : " + contadorCeros +
		"<br/>Cantidad de numeros pares : " + numerosPares +
		"<br/>Promedio de Positivos : " + promedioPositivos +
		"<br/>Promedio de Negativos : " + promedioNegativos +
		"<br/>Diferencia entre positivos y negativos : " + diferenciaEntreNegativosPositivos);

}//FIN DE LA FUNCIÓN