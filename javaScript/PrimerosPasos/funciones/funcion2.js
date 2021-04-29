'use strict'

//Parametros Rest y Spread

function listadoFrutas(fruta1, fruta2){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
}
console.log("********************************");
listadoFrutas("naranja","melon");

//Funciones REST sirve por si es que lleva mas parametros de los que solo soporta la funcion
function listadoFrutasRest(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Fruta 2: ",resto_frutas);
}
/**
 * Como vemos la funcion solo permite dos valores 
 * y hay otro parametros que lleva trs puntos y depues el nombre del parametro
 * al momento de llamarlo le podemos pasar los parametros que queramos y los sobrantes 
 * los va a almacenar en un array 
 */
console.log("********************************");
listadoFrutasRest("naranja","melon","mango","Sandia","Sanahorea","Pepino","Aguacate");

/*
Funciones Sread.- Esta funcion nos permite que los valores que hay dentro de un arreglo
sean los parametros de una funcion.
*/

//Los dos elementos seran parametro de la siguiente funcion
var frutas = ["Naranja","Manzana"];

function listadoFrutasSpread(fruta1, fruta2,...fruta3){
    console.log("Futa1: ",fruta1);
    console.log("Futa2: ",fruta2);
    console.log("Futa3: ",fruta3);
}
//Pao el array y loos demas parametros
console.log("********************************");
listadoFrutasSpread(...frutas,"Melon","Sandia");