/*
al presionar el botón repetir hasta que utilizamos 'BREAK'.
Enrique Santiago Fernandez
*/
function mostrar() {
	/*
		/*Ejercicio Nro 1:
	1) De los 100 participantes del torneo de P AC-MAN, se deben ingresar los datos de acuerdo a lo siguiente:
	Nombre
	● Sexo (“F” o “M”)
	● Edad (validar de manera coherente)
	● score (validar de manera coherente)
	Informar:
	a) La cantidad de participantes de sexo masculino.
	b) El promedio de la edad de todos los participantes de sexo femenino.
	c) El nombre del participante mayor de edad
	Pedir datos por prompt y mostrar la información por document.write. 
	Enrique Santiago Fernandez
	
		let participantes, nombre, sexo, edad, score, participantesMasculino, participantesFemeninos, promediosFemenino, edadFemenina, edadParticipanteMayor, nombreParticipanteMayor; //bandera; no hacia falta hacer una bandera 
		participantes = 0;
		participantesMasculino = 0;
		participantesFemeninos = 0;
		edadFemenina = 0;
		edadParticipanteMayor = 0;
		//bandera = true;
		for (let i = 0; i < 2; i++) {
			nombre = prompt("Ingrese el nombre:");
	
			do {
				sexo = prompt("Ingrese el sexo (f/m): ");
			} while (sexo != 'f' && sexo != 'm');
			do {
				edad = parseInt(prompt("Ingrese una edad (13/100): "));
			} while (edad < 13 || edad > 100);
	
			do {
				score = parseFloat(prompt("Ingrese un puntaje (100/1000): "));
			} while (score < 100 || score > 1000);
	
			if (edad > edadParticipanteMayor) {
				edadParticipanteMayor = edad;
				nombreParticipanteMayor = nombre;
			}
			/*hacer un while fue un error
			while (edad > edadParticipanteMayor) {
				if (bandera === true) {
					nombreParticipanteMayor = nombre;
					edadParticipanteMayor = edad;
					banderaDelPrimero = false;
				}
				if (bandera === false) {
					if (edad > edadParticipanteMayor) {
						nombreParticipanteMayor = nombre;
						edadParticipanteMayor = edad;
					}
				}
			}
			if (sexo === 'm') {
				participantesMasculino++;
			}
			if (sexo === 'f') {
				participantesFemeninos++;
				edadFemenina += edad;
	
			}
		}
		promediosFemenino = edadFemenina / participantesFemeninos;
	
	
		document.write("Cantidad de participantes Masculinos: " + participantesMasculino + "<br>");
		document.write("Edad promedio de participantes femeninos: " + promediosFemenino + "<br>");
		document.write("El participante con mas edad es: " + nombreParticipanteMayor + " " + edadParticipanteMayor);
	*/
	/*
	2) Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al
	siguiente detalle:
	● Tipo de PC (“DESKTOP” o “LAPTOP”)
	● Marca (“DELL”, “HP”, “ACER”)
	● Modelo
	● Precio (No puede ser menor a 100.000 pesos)
	Informar:
	a) El precio de la PC más cara.
	b) La cantidad total de PC de tipo LAPTOP cuya marca es DELL.
	c) El promedio total del precio.
	Pedir datos por prompt y mostrar la información por document.write.
	Enrique Santiago Fernandez
	*/
	/*let tipo;
	let marca;
	let modelo;
	let precio;
	let precioMasCaro;
	let pcMasCaro;
	let marcaMasCara;
	let modeloMasCaro;
	let contador = 0;
	let sumaPrecios = 0;
	let promedioDePrecios = 0;
	let cantidadLaptopDell = 0;
	precioMasCaro = 0;
	let respuesta = "si";
	while (respuesta == "si") {
		contador++;
		do {
			tipo = prompt("Ingrese el tipo de computadora (Desktop o Laptop):");
		} while (tipo != "Desktop" && tipo != "Laptop");

		do {
			marca = prompt("Ingrse si es DELL, HP o ACER (Tal cual esta en mayusculas!): ")
		} while (marca != "DELL" && marca != "HP" && marca != "ACER");

		modelo = prompt("Ingrese el modelo de la computadora:");

		do {
			precio = parseFloat(prompt("Debe ingresar el precio (dicha suma no puede ser menor a la cantidad de $100.000)"));
		} while (precio < 100000);

		if(precio>precioMasCaro){
			precioMasCaro = precio;
			pcMasCaro = tipo;
			marcaMasCara = marca;
			modeloMasCaro = modelo;
		}

		if (tipo === "Laptop" && marca === "DELL") {
			cantidadLaptopDell++;
		}
		sumaPrecios+=precio;
		//esto es para que se ingrese hasta que se quiera
		respuesta = prompt("Desea continuar? (si/no)")
	}
	promedioDePrecios = sumaPrecios / contador;

	document.write("La pc mas cara es: "+pcMasCaro+" "+marcaMasCara+" "+modeloMasCaro+" $"+precioMasCaro+"<br>");
	document.write("Esta es la cantidad de Laptops DELL que se ingreso: "+cantidadLaptopDell+"<br>");
	document.write("El promedio total de los precios es: "+promedioDePrecios);
*/

	/*"Inmobiliaria" Se esta migrando la base de datos y necesitamos ingresar los datos nuevamente hasta que queramos:
	Hasta que el usuario quiera,se pide :
	Tipo(dpto ,casa , quinta)solo estos tres tipos
	Nombre
	Saldo a favor o encontra
	Lugar(CABA, PCIA, INTERIOR)
	Cantidad de inquilinos(entre 1-5 para casa, 1-3 dpto, 4-10 quinta)
	Informar SOLO SI HAY
	a) el NOMBRE del del que más debe y vive en quinta
	b) el Lugar donde vive el que más saldo a favor tiene
	c) el tipo de vivienda más elegido 
	d) el promedio del saldo a favor que hay 
	Enrique Santiago Fernandez
	*/

	
	

}//FIN DE LA FUNCIÓN