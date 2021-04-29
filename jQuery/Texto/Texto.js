$(document).ready(function(){

    reloadLinks();

    $("#add-butom").click(function(){
        var temp = $("#add-link").val();

        console.log(temp);
        // Añadir html desde js
        /* 
        $("#menu").html('<li><a href="'+temp+'"></a></li>');
        reloadLinks();
        */

        // Añadir elenetos a una lista
        // Añade al ultimo de la lista
        //$("#menu").append('<li><a href="'+temp+'"></a></li>'); 
        //reloadLinks();


        // Metodo prepend añade al inicio de la lista

        $("#menu").prepend('<li><a class="Enlace" href="'+temp+'"></a></li>'); 
        reloadLinks();

        // Aañdir elementos antes del sepeccionado
        //$("#menu").before('<li><a href="'+temp+'"></a></li>'); 
        //reloadLinks();

        //$("base").after("<div><center>Holiii</center></div>");

        
    })
    
   

});

function reloadLinks(){

    var enlaces = [];

    $('.Enlace').each(function(index){

        console.log($(this));

        var enalce = $(this).attr("class");

        $(this).text(enalce.value());

        enlaces[enlaces.length] = enalce;

        enlaces.forEach(function(item, index) {
            console.log(item,index);
        });

    })

    

}