'use strict'

/**
 * Mostrar todos los numeros entre dos numeros introducidos por el ususario
 */

 var numero1 = parseInt(prompt("Introduce el primer numero",0));
 var numero2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h2> De "+numero1+" a "+numero2+" estan estos numeros:</h2>")
for (let index = numero1; index <= numero2; index++) {
    document.write(index+"<br>");
}