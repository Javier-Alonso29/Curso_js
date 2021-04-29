'use strict'

//Arreglos

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan lopez", "Manolo garcia", "Jose Martin", "Javier Alonso",true,265];

var lenguajes = new Array("PHP","JS","GO","JAVA");
/*
var elemento = parseInt(prompt("Que elemento del array quieres",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que "+nombres.length);
}
alert("El usuario seleccionado es "+nombres[elemento]);

document.write("<h1>Lenguajes de programacion del 2019</h1>")
document.write("<ol>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ol>");
*/
//uso de foreach
document.write("<ul>");
document.write("<h2>Uso del foreach</h2>");

nombres.forEach((elemento, indece, datos)=>{
    document.write("<li>"+indece+" - "+elemento+" - "+datos+"</li>");
});

document.write("</ul>");

/**
 * For in
 */
document.write("<h2> for in </h2>");
document.write("<ul>");

 for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
 }

 document.write("</ul>");

 //Busqueda dentro de un arreglo

 var busqueda = lenguajes.find( lenguaje => 
    lenguaje == "PHP"
 );

 console.log(busqueda);

 //Obtener el index del objeto que busco

 var busquedaIndex = lenguajes.findIndex( lenguaje => 
     lenguaje == "PHP"
 );

 console.log(busquedaIndex);

 //SOME Comprobar si algun valor es mayor o igual al que tengo
var precios = [10,20,50,99,12];
 var busquedaNum = precios.some( precio => 
    precio == 80
 );

 console.log(busquedaNum);