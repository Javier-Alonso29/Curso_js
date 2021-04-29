'use strict'

/**
 * Mostrar todos los numeros divisores de un numero introducido por el usuario
 */

 function divisores(){
     var numeroUser = parseInt(document.getElementById("numerosUser").value);
     console.log(typeof numeroUser);

     for (let index = 0; index <= numeroUser; index++) {
         
        if(numeroUser%index == 0){
            document.write(index+"<br>");
        }
     }
}