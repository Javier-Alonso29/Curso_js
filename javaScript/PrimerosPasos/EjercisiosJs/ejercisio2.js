'use strict'

/**
 * Utilizar un buble, mostrar la suma y la media de los numeros introducidos 
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */

 var suma = 0;
 var contador = 0;
 var resultadoSuma = document.getElementById("suma");

 do {

     var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo",0));
     console.log(typeof numero);

     if(isNaN(numero)){
        numero = 0;
     }else if(numero >= 0){
        suma = suma + numero;

        contador++;
     }

     console.log(suma);
     console.log(contador);

 } while (numero >= 0);

 alert("La suma de todos numeros es: "+suma);
 alert("La media de todos los numeros es: "+(suma/contador));