'use strict'

window.addEventListener('load', function(){

    // Se ejecuta dependiendo del tiempo que se le pasa como el parametro
    /*
    var tiempo = setInterval(function(){
        console.log("setInterval ejecutado");
    }, 3000);

    */

    //Ejemplo
    
    var tiempoCambiarTitulo = setInterval(function(){

        var encabezado = document.querySelector("h1");
        encabezado.style.textAlign ="center";
        encabezado.style.padding = "20px 20px";


        if(encabezado.style.background == "rgb(30, 144, 255)"){

            
            encabezado.style.background = "#ff6b81";

        }else{
            
            encabezado.style.background = "#1e90ff";
            
        }

    }, 100);


    //Solo se ejecuta una sola vez

    /*
    var tiempo = setTimeout(function(){
        var encabezado = document.querySelector("h1");
        encabezado.style.textAlign = "center";
    }, 1000);

    */

    var stop = document.querySelector("#boton2");

    stop.addEventListener('click',function(){
        alert("Se ha parado el intervalo de tiempo ");
        clearInterval(tiempoCambiarTitulo);
    });

});