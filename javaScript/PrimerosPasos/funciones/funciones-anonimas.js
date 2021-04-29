'use strict'

//Funciones anonimas, una funcion que no tiene nombre

var pelicula = function(nombrePelicula){
    return "El nombre de la pelicula es "+nombrePelicula;
}

function sumame(numero1, numero2, sumaMuestra, sumaPorDos){
    var suma = numero1 + numero2;

    sumaMuestra(suma);
    sumaPorDos(suma);

    return suma;
}

/**
 * Al momento de llamarlas mandamos llamar dos funciones anonimas
 * A estas funciones se les llama funciones de kalback
 */

sumame(5,7, function(dato){
    console.log("la suma es: ",dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));
});

/**
 * Funciones de flecha, se utiliza con una flecha => 
 */
