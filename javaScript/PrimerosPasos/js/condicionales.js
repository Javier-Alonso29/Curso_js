'use strict'

// Condicional if
var edad1 = 30;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("Edad uno es mayor que edad dos")
}else{
    console.log("Edad dos es mayor que edad uno");
}

var edad = 19;
var nombre = "Javier";

if(edad >= 18){
    console.log(nombre+" Es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres milenial");

    }else if(edad >= 70){
        console.log("Eres un anciano");
    }else{
        console.log("Ya no eres un milenian");
    }

}else{
    console.log(nombre+" No es mayor de edad");
}

/**
 * Operadores logicos
 *  &&, ||, !
 */

 //Negacion
 var year = 2018;
 if (year != 2016) {
     console.log("El año no es 2016");
 }

 