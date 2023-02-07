/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Enrique Santiago Fernandez
*/
function Sumar() {
    let precioUno, precioDos, precioTres, suma;
    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno + precioDos + precioTres;
    alert("La suma de los precios es: " + suma);
}
function Promedio() {
    let precioUno, precioDos, precioTres, promedio;
    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    promedio = (precioUno + precioDos + precioTres)/3;
    alert("El promedio de estos precios es: "+promedio.toFixed(2));
}
function PrecioFinal() {
    let precioUno, precioDos, precioTres, suma, iva, precioFinal;
    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno + precioDos + precioTres;
    iva = suma * 0.21;
    precioFinal = suma + iva;
    alert("El precio final seria: "+precioFinal.toFixed(2));
}