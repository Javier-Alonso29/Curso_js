'use strict'

/**
 * 1.- Pedir 6 numeros por pantalla y meterlos por pantalla
 * 2.- Mostrar todos los elementos del array en el cuerpo de la 
 * pagina y la consola
 * 3.- Sacar el array ordenado
 * 4.- Invertir el orden del array y mostrarlo
 * 5.- Mostrar cuantos elementos tiene el array
 * 6.- Buscar un valor introducido por el usuario y que nos diga si lo encuentra
 * y su indice
 * 7.- Ordenar una lista de numeros
 */

//-----------------------PUNTO No.1----------------------
var numeroElementos = parseInt(prompt("Dame el numero de ingredientes de la receta"));
var ingredientes = [];


for (let i = 1; i <= numeroElementos ; i++) {
    let elemento = prompt("¿Que ingrediente es el numero "+i+"?");
    ingredientes.push(elemento);
    
}

//-----------------------PUNTO No.2----------------------
function mostrarArreglo(datos){
    document.write("<ol>");
    for (let ingrediente in datos) {
        document.write("<li>"+datos[ingrediente]+"</li>");
    }

    document.write("</ol>");
    console.log(ingredientes);
}

mostrarArreglo(ingredientes)

//-----------------------PUNTO No.3----------------------
 ingredientes.sort();
 console.log(ingredientes);
 mostrarArreglo(ingredientes);

 //-----------------------PUNTO No.4----------------------
 ingredientes.reverse();
 console.log(ingredientes);
 mostrarArreglo(ingredientes);

  //-----------------------PUNTO No.5----------------------
  document.write("Tienes un total de ingredientes de: "+ingredientes.length);

//-----------------------PUNTO No.6----------------------
var nameToSearch = prompt("What number do you want to search ? ");

var ingredientSearced = ingredientes.find( ingrediente => 
    ingrediente == nameToSearch
);

var indexIngredient = ingredientes.indexOf(nameToSearch);
console.log(ingredientSearced+" index "+indexIngredient);

//-----------------------PUNTO No.7----------------------

var numers = [1,6,8,9,12,2,3,74,10,13,405,101];

numers.sort(function(a, b){return a-b});
document.write("<p>------Acendente------</p> <br />");
mostrarArreglo(numers);

var numers2 = [1,6,8,9,12,2,3,74,10,13,405,101];

numers2.sort(function(a, b){return b-a});
document.write("<p>------Decendente------</p> <br />");
mostrarArreglo(numers2);