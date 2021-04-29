'use strict'

//Ver el tamaño de la pantalla
console.log("Width: "+window.innerWidth+" Heith: "+window.innerHeight);

//calculos correctos de la pantalla
console.log("Width: "+screen.width+" Heith: "+screen.height);

//Redireccionar a otra pagina
function redirect(url){
    window.location.href = url;
}

//abrir una nueva ventana
function abrirVentana(url){
    window.open(url,"","width=400,heigth=300");
}


// You can find the information in the next link: https://www.w3schools.com/jsref/obj_window.asp