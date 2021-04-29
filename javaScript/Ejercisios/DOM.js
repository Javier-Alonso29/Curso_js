'use strict'

window.addEventListener('load', function () {
    console.log("Dom cargado");

    var formulario = document.querySelector("#formulario");
    //    Ocultar un elemento desde js
    var box_dashed = this.document.querySelector(".dasehd");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var nombre, apellido, edad, password;

        //    Usamos "value" para obtener el valor que tiene ese campo
        nombre = document.querySelector("#nombre").value;
        apellido = document.querySelector("#apellidos").value;
        edad = document.querySelector("#edad").value;
        password = document.querySelector("#pass").value;

        console.log(nombre, apellido, edad, password);


        //Validacion del formulario
        if (nombre.trim() == null || nombre.length == 0) {

            alert("El nombre no es valido");
            document.querySelector("#error_nombre").style.color = "red";
            document.querySelector("#error_nombre").innerHTML = "Error al introduccir tu nombre";
            return false;

        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }

        if (apellido.trim() == null || apellido.length == 0) {

            alert("Los apellidos no son validos");
            document.querySelector("#error_apellidos").style.color = "red";
            document.querySelector("#error_apellidos").innerHTML = "Error al introduccir tus apellidos";
            return false;

        }else{
            document.querySelector("#error_apellidos").style.display = "none";
        }

        if (edad == null || edad <= 0) {

            alert("La edad no es valida");
            document.querySelector("#error_edad").style.color = "red";
            document.querySelector("#error_edad").innerHTML = "Error al introduccir tu edad";
            return false;

        }else{
            document.querySelector("#error_edad").style.display = "none";
        }

        box_dashed.style.display = "block";


        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
        var p_password = document.querySelector("#p_pass span");

        p_nombre.style.color = "blue";
        p_apellido.style.color = "blue";
        p_edad.style.color = "blue";
        p_password.style.color = "blue";


        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        p_password.innerHTML = password;


        //Se puede hacer mediante un for y las listas

        /*
        var datosuser = [nombre, apellido, edad, password];

        for (var dato in datosuser) {
            var parafo = document.createElement("p");
            parafo.append(datosuser[dato]);
            box_dashed.append(parafo);
        }
        */





    });
});