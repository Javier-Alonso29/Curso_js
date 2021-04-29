'use strict'

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); //valor 50


//Prueba con let

var texto = "Curso Js";
console.log(texto); // Curso Js

if(true){
    let texto = "Curso laravel 5"; //Solo se actua a nivel de blocke, se limita el alcance
    console.log(texto); //Curso laravel 5
}

console.log(texto); //Curso Js