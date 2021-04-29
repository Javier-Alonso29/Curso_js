'use strict'

/**
 * Explicacion y ejemplicacion de las funciones de callback
 */


 //Esta es una forma de hacerlo, separando las dos funciones
 function main(callback){
    alert("Primero hago algo y despues ejecuto el callback");
    callback();
    
 }
/*
 
 function greenting(){
     alert("Yo soy un callback");
 }


 main(greenting);
*/
 /**
  * 1.- Entra al main
  * 2.- ejecuta el alert
  * 3.- manda llamar la funcion greeting()
  * 4.- ejecuta el alert de la funcion greeting()
  */



 //Otra forma de hacerlo es crear la funcion dentro de la misma funcion
 /*
 main(function(){
     alert("Otro callback echo de otra manera");
 });
*/
/*
main(fun =>
    alert("Hola este es un callback muy raro pero mas sensillo")    
);
*/
/*
main(nameJa =>
    nameJa = "Javier"
);
*/

/**
 * 1.- Mando llamar la funcion main()
 * 2.- se ejecuta el alert de la funcion main()
 * 3.- ejecuta el callback()
 * 4.- la funcion anonima ejecuta un alert()
 */


 /*
 //Callback dentro de un ejemplo

 function userName(funcion){
    var name = prompt("Give me your name");
    funcion(name);
 }

 function buildGreeting(name){
    alert("Hola "+name);
 }

 userName(buildGreeting);


 /*
 1.- Ejecuta user name
 2.- Pide el nombre al usuario
 3.- ejecuta la funcion que esta dentro de ella
 4.- la funcion manda un alert() con el nombre del user
 */


 //Otro ejemplo usando callback y parametros

 function math(a,b,funcion){
    var res = a + b;
    funcion(res);
 }

 function suma(res){
    if(res > 10){
        alert("Es mayor de 10 "+res);
    }else{
        alert("Es muy pequeño "+res);
    }
 }

 math(1,1,suma);

 /*
 1.- Mandar llamar la funcion math
 2.- Hacer la suma con los parametros pasados
 3.- manda llamar la funcion suma()
 4.- Compara el resultaod pasado como parametro
 y dependiendo de eso hace un alert
 */
