'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Hola";
var texto2 = "Criaturitas del señor amen señor de dios americano señor";

//Como transformar un numero a string
var numeroString = numero.toString();
console.log(typeof numero +" "+ typeof numeroString);

//Convertirlo a mayusculas
var mayus = texto1.toUpperCase();
console.log(mayus);

//Convertirlo a minusculas
var minus = texto1.toLowerCase();
console.log(minus);

//Calcular longitud de un texto

console.log(texto2.length);
var nombre = "";
console.log(nombre.length);

var nombres = ["Javier","Alonso"];
console.log(nombres.length);

//Concatenar -- Unir textos
var textoTotal = texto1+texto2;
console.log(textoTotal);

var textoTotalConcat = texto1.concat(" "+texto2);
console.log(textoTotalConcat);

//Buscar dentro de un texto

var busqueda = texto2.indexOf("señor");
console.log(busqueda);

var busquedaLast = texto2.lastIndexOf("señor");
console.log(busquedaLast);

var search = texto2.search("Criaturitas");
console.log(search);

var palablas = texto2.match(/señor/gi);
console.log(palablas);

var sub = texto2.substr(14,5);
console.log(sub);

var charAt = texto2.charAt(44);
console.log(charAt);

var startWith = texto2.startsWith("Criaturitas");
console.log(startWith);

var includes = texto2.includes("amen");
console.log(includes);

//Remplazar texto por otro
var remplacee = texto2.replace("amen","alajaba");
console.log(remplacee);

//Separar el texto
var slice = texto2.slice(12,22);
console.log(slice);

//Recortar las palabras
var split = texto2.split(" ");
console.log(split);

//Recortar los espacios
var trin = texto2.trim();
console.log(trin);