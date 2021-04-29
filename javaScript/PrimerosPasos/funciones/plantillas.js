'use strict'

//Plantillas de texto

var nombre = prompt("Mete un nombre");
var apellido = prompt("Coloca tus apellidos");

var texto = "Mi nombre es: "+nombre+" mis apellidos son "+apellido;

document.write(texto);

//Usando plantillas

var textoPlantilla = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellido}</h3>
`

document.write(textoPlantilla);
