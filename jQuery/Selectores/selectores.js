
/**
 * Para comprobar que esta funcionando jQuery 
 * Los $ significan que son objetos jQuery
 */

$(document).ready(function () {


    //Selector de id
    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    var verde = $("#verde").css("background", "green")
        .css("color", "white");

    var morado = $("#morado").css("background","purple").css("color","white");

    //Selector de clase
    var parrafo = $('.parrafo');

    parrafo.css('border', 'solid', 'green ');

    var clase_zebra = $('.zebra');

    console.log(clase_zebra);


    console.log(clase_zebra[0]);

    /*
        Esta es una funcion para seleccionar un elemento del arrelgo 
    */
    console.log(clase_zebra.equ(1));

    //selectores de atributos
    $('[title="google"]').css('backround','#ccc');
    $('[title="youtube"').css('backround','yellow');


    // otors
    //$('p, a').addClass('margen_superior');

    var buesqueda = $('#caja').find('.resaltado');
    console.log(buesqueda);
    

})