$(document).ready(function(){
    

    var caja = $("#caja").hide();

    var most = $("#mostrar");
    var ocult = $("#ocultar");

    most.click(function(){
        $(this).hide();
        ocult.show();
        //caja.show('low');
        //caja.fadeIn('normal');
        caja.fadeTo('normal',1);
    })

    ocult.click(function(){
        $(this).hide();
        most.show();
        //caja.hide('low');
        //caja.fadeOut('normal');
        caja.fadeTo('normal',0);
    })


    $("#todoEnUno").click(function(){
        //caja.toggle('fast');
        //caja.fadeToggle('fast');
        caja.slideToggle('fast');
    })



})