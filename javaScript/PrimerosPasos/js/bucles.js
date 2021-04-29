'use strict'

/*
//BUBLE FOR
var numero = 100;

document.write("Bucle for <br/>");
for (let index = 0; index <= numero; index++) {
    document.write(index+"<br/>");
    
    //Funcion para abrir el debuger de la consola del buscador
    //debugger;
}

document.write("Bucle while <br/>");
numero = 0;
//BUCLE WHILE
while (numero < 100) {
    document.write("El valor de numero incremento "+numero+"<br/> ");
    numero++;
}


//Do while

var years = 30;
do{

    alert("Solo cuando sea diferente a 20");
    years--;

}while(years > 25);
*/

//Uso del breack
var year = 2019;

while (year != 1991) {
    console.log("Estamos en el año "+year);

    if(year == 2000){
        break;
    }
    year--;
}