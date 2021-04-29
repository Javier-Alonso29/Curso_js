'use strict'

//DOM -> Document Object Model

var caja = document.getElementById("micaja");

console.log(caja);

//Capturar el codigo html

var cajaHtml = document.getElementById("micaja").innerHTML;
console.log(cajaHtml);

//Cambiar un valor de HTML desde JS

var cajaDos = document.getElementById("micajaDos").innerHTML = "Texto cambiado desde js";

//Cambiar los estilos desde js de un elemento

var cajaTres = document.getElementById("micajaTres");
cajaTres.style.background = "#000";
cajaTres.style.color = "#fff";
cajaTres.style.padding = "20px";

function cambiaColor(color) {
    caja.style.background = color;
}

//Añadir un atributo al documento html

var cajaCuatro = document.getElementById("micajaCuatro");
cajaCuatro.className = "class-Caja";
console.log(cajaCuatro);

//Query selector
//Uso del selector como css... id == # | class == . 
var cajaQuery = document.querySelector("#micajaCinco");
console.log(cajaQuery);

cajaQuery.style.background = "#3498db";
cajaQuery.style.padding = "20px";


//------------------------------------------------------------------------------------------------------------------------------------
//Buscar todos los div que tengo dentro de mi html

var todosDivs = document.getElementsByTagName("div");
console.log(todosDivs);

//Obtenemos el valor de un elemento en especifico

var contenidoTexto = todosDivs[5].innerHTML;
console.log("-------------->"+contenidoTexto);


for (const valor in todosDivs) {

    if (typeof todosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#ListaTextos").append(parrafo);
    }

}

//Poner elemetos html desde js
var seccion = document.querySelector("#doom2");
var hr = document.createElement("hr");
seccion.append(hr)

//Conseguir elementos por sus clases
/**
 * Si sabes que los elementos que vas a seleccionar se van a conformar mediante una lista
 * debes de usar getElementsByClassName o getElementsById ya que estos hacen una lista de los
 * elementos seccionados
 * 
 * con el query tambien existen dos elementos el priermo solo selecciona un elelemto "querySelector()"
 * y el segundo selecciona todos los elementos con la clase o el id querySelectorAll()
 */
var divRojos = document.getElementsByClassName("rojo");
console.log(divRojos);


var divAmarillos = document.querySelector(".amarillo");
console.log(divAmarillos);

//Le voy a poner stilo a cada uno de los elementos de la lista
for (const div in todosDivs) {
    
    if (todosDivs[div].className == "rojo") {

        todosDivs[div].style.background = "red";
        todosDivs[div].style.padding = "20px";

    }else if(todosDivs[div].className == "amarillo"){
        todosDivs[div].style.background = "yellow";
        todosDivs[div].style.padding = "20px";
    }
}




