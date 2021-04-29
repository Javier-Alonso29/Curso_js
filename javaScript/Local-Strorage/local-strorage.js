'use strict'

/*
Con esto podemos guardar informacion mediante esta la nevagacion
de usuario en la pagina en forma de secion
*/

//Comprobar si el localStorage esta disponible en el navegador
window.addEventListener('load', function () {

    if (typeof (Storage) != 'undefined') {
        console.log("Local Storage disponible");

        //Guardar un dato en el local storage

        localStorage.setItem("titulo", "Curso de Js");


        //Recuperar elementos del local storage

        var titulo = localStorage.getItem("titulo");
        console.log(titulo);

        document.querySelector("#local").innerHTML = titulo;

        //Guardar objetos

        var usuario = {
            nombre : "Javier",
            email : "kAlonso835@gmail.com",
            password : "Sep23"
        }

        localStorage.setItem("usuario-log", JSON.stringify(usuario));

        //Recuperar un objeto del Local Storage

        var userJs = JSON.parse(localStorage.getItem("usuario-log"));

        this.console.log(userJs);

        //Eliminar elementos del local storage

        localStorage.removeItem("titulo");

        // Vaciar todo el local storage

        localStorage.clear();

    } else {
        console.log("Incompatible");
    }

})


