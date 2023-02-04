/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Enrique Santiago Fernandez
*/
function FahrenheitCentigrados () 
{
	let temperatura, celsius;
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    celsius = (temperatura - 32) / 1.8;
    alert(temperatura+" Fahrenheit es igual a "+celsius+" Centigrados.");
}

function CentigradosFahrenheit () 
{
	let temperatura, fahrenheit;
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahrenheit = (temperatura * 1.8) + 32;
    alert(temperatura+" Centigrados es igual a "+fahrenheit+" Fahrenheit.");
}
