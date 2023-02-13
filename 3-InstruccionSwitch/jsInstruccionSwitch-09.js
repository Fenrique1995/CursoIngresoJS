/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Enrique Santiago Fernandez
*/
function mostrar() {
	let estacionIngresada, destinoIngresado, descuento, aumento, precioTotal;
	const PRECIO = 15000;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	switch (estacionIngresada) {
		case "Invierno":
			if (destinoIngresado === "Bariloche") {
				aumento = PRECIO * 0.2;
				precioTotal = PRECIO + aumento;
				alert(precioTotal);
			} else if (destinoIngresado === "Cataratas" || destinoIngresado === "Cordoba") {
				descuento = PRECIO * 0.1;
				precioTotal = PRECIO - descuento;
				alert(precioTotal);
			} else if (destinoIngresado === "Mar del plata") {
				descuento = PRECIO * 0.2;
				precioTotal = PRECIO - descuento;
				alert(precioTotal);
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoIngresado === "Cataratas" || destinoIngresado === "Mar del plata" || destinoIngresado === "Bariloche") {
				aumento = PRECIO * 0.1;
				precioTotal = PRECIO + aumento;
				alert(precioTotal);
			} else {
				alert(PRECIO);
			}
			break;
		case "Verano":
			if (destinoIngresado === "Mar del plata") {
				aumento = PRECIO * 0.2;
				precioTotal = PRECIO + aumento;
				alert(precioTotal);
			} else if (destinoIngresado === "Cataratas" || destinoIngresado === "Cordoba") {
				aumento = PRECIO * 0.1;
				precioTotal = PRECIO + aumento;
				alert(precioTotal);
			} else if (destinoIngresado === "Bariloche") {
				descuento = PRECIO * 0.2;
				precioTotal = PRECIO - descuento;
				alert(precioTotal);
			}
			break;

		default:
			break;
	}


}//FIN DE LA FUNCIÓN