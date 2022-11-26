/* VARIABLES */
let nombre = prompt('Hola Bienvenidos al conversor de moneda ARS/USD ARS/EUR blue... Cual es tu nombre?');
alert(`Hola ${nombre} es un placer poder ayudarte, los valores son estimativos a la fecha 25/11/2022`);
let resultado = 0;
let moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toUpperCase();
let valor = parseInt(prompt("ingrese el valor en ARS a cambiar"));

/* FUNCIONES */
function convertir(valor, moneda) {
    resultado = valor / moneda
};

function mostrar(mensaje) {
    alert("el valor convertido " + moneda + " es " + mensaje);
    alert(`"¡Gracias ${nombre} por confiar en nosotros! `);
};

/* CICLO */

while (valor != "esc") {
    if (moneda == "ARS/USD") {
        convertir(valor, 320);
        mostrar(resultado.toFixed(2));

        moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toLowerCase();
        valor = parseInt(prompt("ingrese el valor a cambiar"));
        

    } else if (moneda == "ARS/EUR") {
        convertir(valor, 308);
        mostrar(resultado.toFixed(2));

        moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toLowerCase();
        valor = parseInt(prompt("ingrese el valor a cambiar"));
        

    } else {
        alert("tipo de cambio incorrecto");
        break;

    }
}


