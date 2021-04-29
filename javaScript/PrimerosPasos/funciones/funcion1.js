'use stric'

//Funciones es una agrupacion reutilizable de un conjunto de instrucciones

function pruebaf(){
    return "Hola soy la pruebaf";
}

console.log(pruebaf());

function pruebaf2(){
    console.log("Hola soy de nuevo la pruebaf2");
}

pruebaf2();

var numero1 = parseInt(prompt("Cual es el primer numero?"));
var numero2 = parseInt(prompt("Cual es el segundo numero?"));
var operacion = parseInt(prompt("Que operacion quieres realizar?"));

//Parametros dentro de las funciones
function suma(numero1, numero2){
    return numero1 + numero2;
}
function resta(numero1, numero2){
    return numero1 - numero2;
}
function divicion(numero1, numero2){
    return numero1 / numero2;
}
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}

function calculadora(numero1, numero2, operacion, mostrar = false){

    if(operacion == 1){
        if(mostrar == false){
            console.log(suma(numero1,numero2));
        }else{
            document.write(suma(numero1,numero2));
        }
    }else if(operacion == 2){
        if(mostrar == false){
            console.log(resta(numero1,numero2));
        }else{
            document.write(resta(numero1,numero2));
        }
    }else if(operacion == 3){
        if(mostrar == false){
            console.log(divicion(numero1,numero2));
        }else{
            document.write(divicion(numero1,numero2));
        }
    }else if(operacion == 4){
        if(mostrar == false){
            console.log(multiplicacion(numero1,numero2));
        }else{
            document.write(multiplicacion(numero1,numero2));
        }
    }

}

calculadora(numero1, numero2, operacion);

calculadora(numero1, numero2, operacion, true);