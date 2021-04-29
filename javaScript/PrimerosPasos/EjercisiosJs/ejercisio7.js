'use strict'

/**
 * Tabla de multiplicar de un numero introduciodo por pantalla
 */

 function multiplicacion(){
     
     var numeroUser = parseInt(document.getElementById("numeroUser").value);
     
     document.getElementById("titulo").innerHTML = "Tabla del numero "+numeroUser.toString();
     console.log(typeof numeroUser);

     for(var i = 1; i <= 10; i++ ){
        var resultado = i * numeroUser;
        
        var result = resultado.toString();

        if(i == 1){
            console.log("hola");
            document.getElementById("n1").innerHTML = result;
        }else if( i == 2){
            document.getElementById("n2").innerHTML = result;
        }else if( i == 3){
            document.getElementById("n3").innerHTML = result;
        }else if( i == 4){
            document.getElementById("n4").innerHTML = result;
        }else if( i == 5){
            document.getElementById("n5").innerHTML = result;
        }else if( i == 6){
            document.getElementById("n6").innerHTML = result;
        }else if( i == 7){
            document.getElementById("n7").innerHTML = result;
        }else if( i == 8){
            document.getElementById("n8").innerHTML = result;
        }else if( i == 9){
            document.getElementById("n9").innerHTML = result;
        }else if( i == 10){
            document.getElementById("n10").innerHTML = result;
        }
     }
 }