'use strict'

/**
 * La funcion de load sirva para poner el secript al principio del html y no tener ninigun error
 * de existencia de elementos
 */
window.addEventListener('load', () => {

    //Eventos para el raton

    var boton = document.querySelector("#botton-R1");

    function cambiaColor() {

        console.log("Hola");

        var bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;

    }

    var boton2 = document.querySelector("#buton-R2");

    function cambiaTexto() {

        var text = boton2.innerText;
        console.log(text);

        if (text == "on") {
            boton2.innerText = "off";
        } else {
            boton2.innerText = "on";
        }
    }

    var boton3 = document.querySelector("#buton-R3");

    boton3.addEventListener('click', function () {
        var body = document.getElementsByTagName("body");
        var parrafos = document.getElementsByTagName("p");
        // console.log(parrafos);

        if (body[0].style.background == "black") {
            console.log("Hola ");
            body[0].style.background = "white";
            for (const p in parrafos) {

                if (typeof parrafos[p].textContent == "string") {
                    parrafos[p].style.color = "black";
                }
            }

        } else {
            console.log("Hola asda");
            body[0].style.background = "black";
            for (const p in parrafos) {

                if (typeof parrafos[p].textContent == "string") {
                    parrafos[p].style.color = "white";
                }
            }
        }
    });

    //Estos deben de siempre ir juntos ya que uno es para cuando entra y otro es para cuando salgas 

    //Mouse over
    var boton4 = document.querySelector("#buton-R4");

    boton4.addEventListener('mouseover', function () {
        boton4.style.background = "black";
        boton4.style.color = "white";
    });

    //Mouse out
    boton4.addEventListener('mouseout', function () {
        boton4.style.background = "white";
        boton4.style.color = "red";
    });

    //Focus
    var boton5 = document.querySelector("#buton-R5");
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function () {
        console.log("Estas dentro del input");

        input.style.border = "5px solid blue";
    });

    //Blur
    input.addEventListener('blur', function () {
        console.log("Estas dentro del input");

        input.style.border = "1px solid red";
        alert("Te has salido del input");
    });

    //keydown -> Cunado estas pulsando una tecla

    var input2 = document.querySelector("#campo_nombre2");

    input2.addEventListener('keydown', function (event) {

        console.log("Pulsando esta tecla ", String.fromCharCode(event.keyCode));

    });

    //Keypress --> Cundo pulso una tecla  "Es mejor esta forma"

    var input3 = document.querySelector("#campo_nombre3");

    input3.addEventListener('keypress', function (event) {

        console.log("Tecla precionada", String.fromCharCode(event.keyCode));

    });

    //keyup -> Cuando el usuario levanta el dedo de la tecla

    var input4 = document.querySelector("#campo_nombre4");

    input4.addEventListener('keyup', function (event) {

        console.log("Tecla soltada ", String.fromCharCode(event.keyCode));

    });

});