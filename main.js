// /* VARIABLES */
// let nombre = prompt('Hola Bienvenidos al conversor de moneda ARS/USD ARS/EUR blue... Cual es tu nombre?');
// alert(`Hola ${nombre} es un placer poder ayudarte, los valores son estimativos a la fecha 25/11/2022`);
// let resultado = 0;
// let moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toUpperCase();
// let valor = parseInt(prompt("ingrese el valor en ARS a cambiar"));

// /* FUNCIONES */
// function convertir(valor, moneda) {
//     resultado = valor / moneda
// };

// function mostrar(mensaje) {
//     alert("el valor convertido " + moneda + " es " + mensaje);
//     alert(`"¡Gracias ${nombre} por confiar en nosotros! `);
// };

// /* CICLO */

// while (valor != "esc") {
//     if (moneda == "ARS/USD") {
//         convertir(valor, 320);
//         mostrar(resultado.toFixed(2));

//         moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toLowerCase();
//         valor = parseInt(prompt("ingrese el valor a cambiar"));


//     } else if (moneda == "ARS/EUR") {
//         convertir(valor, 308);
//         mostrar(resultado.toFixed(2));

//         moneda = prompt("ingrese si desea cambiar ARS/USD o ARS/EUR").toLowerCase();
//         valor = parseInt(prompt("ingrese el valor a cambiar"));


//     } else {
//         alert("tipo de cambio incorrecto");
//         break;

//     }
// }

// MANEJO DE STOCK - CREANDO OBJETOS

// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.cantidad = cantidad;
//         this.precio = precio;
//     }

//     vender() {
//         if (this.cantidad > 0) {
//             this.cantidad -= 1;
//         }
//     }
//     aumentar() {
//         this.precio += 78
//     }
// }

// const taza1 = new Producto("taza", 550, 3);

// taza1.vender();
// taza1.aumentar();
// console.log(taza1);

// MANEJO DE STOCK - CREANDO OBJETOS - USANDO INFO.

class Producto {
    constructor(info) {
        this.nombre = info.nombre;
        this.cantidad = info.cantidad;
        this.precio = info.precio;
    }

    vender() {
        if (this.cantidad > 0) {
            this.cantidad -= 1;
        }
    }
    aumentar() {
        this.precio += 78
    }
}

const taza1 = new Producto({
    cantidad: 1000,
    nombre: "taza simpsons",
    precio: 800,
});


console.log(taza1);
taza1.vender();
taza1.aumentar();
console.log(taza1);
