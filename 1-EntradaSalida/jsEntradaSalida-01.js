/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
Enrique Santiago Fernandez*/
function mostrar() {
	//alert("Hola Mundo!!!");
	//alert("Esto funciona de maravilla");
	let a, b, c;
	a = parseInt(Math.random() * 10 + 1);
	b = parseInt(Math.random() * 10 + 1);
	c = parseInt(Math.random() * 10 + 1);
	if (a < b && a < c) {
		alert("A es el menor: " + a);
	} else if (b < a && b < c) {
		alert("B es el menor: " + b);
	} else if (c < a && c < b) {
		alert("C es el menor: " + c);
	}
	let ejemplo = [5, 8, 2, 4, 3, 6, 7];
	ejemplo.sort();
	alert(ejemplo[0]);
}

