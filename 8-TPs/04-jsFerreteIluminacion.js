/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Enrique Santiago Fernandez
 */
function CalcularPrecio() {   /*document.getElementById("txtIdprecioDescuento").value*/
    let lamparas, marca, precioBruto, descuento, impuesto, precioTotal;
    const PRECIO = 35;
    lamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioBruto = lamparas * PRECIO;
    /*
    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
    if (lamparas >= 6) {
        descuento = precioBruto * 0.5;
        precioTotal = precioBruto - descuento;
        if (precioTotal > 120) {
            impuesto = precioBruto * 0.10;
            precioTotal += impuesto;
            alert("Usted pago $" + impuesto + " de IIBB.");
        }
        document.getElementById("txtIdprecioDescuento").value = precioTotal;
    } else {
        //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if (lamparas === 5) {
            if (marca === "ArgentinaLuz") {
                descuento = precioBruto * 0.4;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            } else {
                descuento = precioBruto * 0.3;
                precioTotal = precioBruto - descuento;
                if (precioTotal > 120) {
                    impuesto = precioBruto * 0.10;
                    precioTotal += impuesto;
                    alert("Usted pago $" + impuesto + " de IIBB.");
                }
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            }
            //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        } else if (lamparas === 4) {
            if (marca === "ArgentinaLuz" || marca === "FelipeLamparas") {
                descuento = precioBruto * 0.25;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            } else {
                descuento = precioBruto * 0.20;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            }
            //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.       
        } else if (lamparas === 3) {
            if (marca === "ArgentinaLuz") {
                descuento = precioBruto * 0.15;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            } else if (marca === "FelipeLamparas") {
                descuento = precioBruto * 0.10;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            } else {
                descuento = precioBruto * 0.05;
                precioTotal = precioBruto - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioTotal;
            }
        } else if (lamparas <= 2) {

            precioTotal = precioBruto;
            document.getElementById("txtIdprecioDescuento").value = precioTotal;
        } else {
            document.getElementById("txtIdprecioDescuento").value = "Precio con descuento";
        }
    }
    */
}
