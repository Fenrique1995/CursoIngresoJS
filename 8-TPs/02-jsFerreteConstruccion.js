/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Enrique Santiago Fernandez
*/

function Rectangulo() {
    let ancho, largo, resultado;
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    resultado = parseInt((largo + ancho) * 2);
    alert("Se necesitan "+resultado+" metros de alambre");
}
function Circulo() {
    let radio, resultado;
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    resultado = parseFloat(radio * 3);
    alert(resultado);
}
function Materiales() {
    let ancho, largo, cemento, cal, metros;
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    metros = parseInt(largo + ancho);
    cemento = metros * 2;
    cal = metros * 3;
    alert("Se necesitan "+cemento+" bolsas de cementos \n"+" y \n"+cal+" bolsas de cal");
}