'use strict'

var boton1 = document.querySelector("#boton1");

function cambiaColorFondo() {


    var bg = boton1.style.background;

    if (bg == "green") {
        console.log("Aqui");
        boton1.style.background = "red";


    } else {
        console.log("Abajo");
        boton1.style.background = "green";
    }

    return true;
}


var boton2 = document.querySelector("#boton2");

boton2.addEventListener('click',function(){

    console.log("Me acabas de precionar");

    var bg = boton2.style.background;

    if(bg == "blue none repeat scroll 0% 0%" || bg == "blue"){

        console.log("Arriba");
        boton2.style.background = "red";

    }else{

        console.log("Abajo")
        boton2.style.background = "blue";
        console.log(boton2.style.background);

    }
});