'use strict'

/**
 * Programa que pida dos numeros y saber cual es mayor y cual es menor de ambos numeros o en caso de ser iguales decir que son iguales
 */


function getData(){
    var resultado = document.getElementById("resultado");
    var numero1 = parseInt(document.getElementById("n1").value);
    var numero2 = parseInt(document.getElementById("n2").value);

    //console.log(numero1+" "+numero2);
    //console.log(typeof numero1+" "+typeof numero2);

    if(numero1 > numero2){
        resultado.innerHTML = "El numero uno es mas grande que el numero dos";
    }else if(numero2 > numero1){
        resultado.innerHTML = "El numero dos es mas grande que el numero uno";
    }else if(numero1 == numero2){
        resultado.innerHTML = "Ambos son valores iguales";
    }else{
        resultado.innerHTML = "Introduce numeros correctos";
    }
    
}