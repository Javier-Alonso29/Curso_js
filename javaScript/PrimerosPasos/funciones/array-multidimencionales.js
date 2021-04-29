'use strict'

var categorias = ['accion','terror','comedia'];
var peliculas = ['La verdad duele','La vida es bella','Simi'];

var cine = [categorias,peliculas];

console.log(cine[0][1]);

//Añadir un elemento al array
peliculas.push("Batman");
console.log(peliculas);

//Eliminar un elemento del arreglo
peliculas.pop();
console.log(peliculas);

var indice = peliculas.indexOf("Simi");
console.log(indice);

if(indice > -1){
    peliculas.splice(indice, 1);
}

console.log(peliculas);

//Convertir un array a texto
var peliculasString = peliculas.join();
console.log(peliculasString);

//Convertir de string a array
var cadena = "Texto1, texto2, texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array);

//Ordenar arrays
var nombresDesordenados = ["Lupe","Juan","Alexa","Adriana","Sebastian","Zaragoza","Roberto"];
console.log(nombresDesordenados);
//Ordeno el arreglo alfabeticamente
var numerosOrdenados = nombresDesordenados.sort();
console.log(numerosOrdenados);

var NumerosDesordenados = [1, 10, 2, 21];
console.log(NumerosDesordenados);
//Ordenando los numeros  --> este metodo convierte a los numeros en string y compara su codigo ascci
var numerosOrdenados = NumerosDesordenados.sort();
console.log(numerosOrdenados);

//DARLE LA VUELTA AL ARREGLO
peliculas.reverse();
console.log(peliculas);

