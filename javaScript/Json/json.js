'use strict'

//JSON - JavaScript Object Notation
window.addEventListener('load', function () {
    var pelicula = {
        titulo: 'Batman',
        year: 2017,
        pais: 'Estados Unidos'
    }

    console.log(pelicula);

    console.log(pelicula.pais);

    console.log(pelicula.titulo);

    pelicula.titulo = "Super man";

    console.log(pelicula.titulo);


    var peliculas = [
        { titulo: "La verdad duele", year: 2019, pais: "Francia" },
        pelicula
    ]

    console.log(peliculas);

    // --------------------------------------------------------

    var objetoJSON = {
        Nombre: "Javier",
        Edad: "19",
        render: function () {
            document.getElementById("content").innerHTML = objetoJSON.Nombre + " " + objetoJSON.Edad;
            alert("Tu Nombre es: " + this.Nombre + " Y tu edad es: " + this.Edad);
        }
    };

    objetoJSON.render();

    var objetos = {
        Personas: [
            { Nombre: "Luis", Edad: "20" },
            { Nombre: "Javier", Edad: "26" },
            { Nombre: "Mariana", Edad: "10" },
            { Nombre: "Judith", Edad: "20" }
        ]
    };

    this.document.getElementById('content').innerHTML = objetos.Personas[0].Nombre;


    //Crear un nuevo objeto

    function Usuario(nombre, apellido) {
        this.nombre = nombre;
        this.saludar = function () {
            console.log("Hola a todos soy " + this.nombre);
        }
        this.nombre_completo = nombre + " " + apellido;
    }

    var usuarioNuevo = new Usuario("Sebastian");

    usuarioNuevo.saludar();


    var jose = new Usuario("Jose");

    jose.saludar();


    //------------------------------

    function creausuario(nombre, edad, profecion) {
        var us = {
            Nombre: nombre,
            Edad: edad,
            Profecion: profecion
        }

        return us;
    }


    var boton_envia = this.document.querySelector("#boton-envia");

    boton_envia.addEventListener('click', function () {
        var nombre_user, apellido_user, profecion_user;

        nombre_user = document.querySelector("#nombre_usr").value;
        console.log(nombre_user);
        apellido_user = document.querySelector("#apellido_usr").value;
        profecion_user = document.querySelector("#prfo_usr").value;

        var newuser = creausuario(nombre_user, apellido_user, profecion_user);

        console.log(newuser);


    })




})
