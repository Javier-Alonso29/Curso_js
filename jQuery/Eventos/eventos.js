$(document).ready(function(){

    //Eventos MouseOver y MouseOut

    var caja = $("#caja1");

    //Haciendo uso de funciones anonimnas

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","yellow");
    });

    // Hover

    var caja2 = $("#caja2");

    //Haciendo uso de funciones 

    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaAmarillo(){
        $(this).css("background","yellow");
    }

    caja2.hover(cambiaRojo,cambiaAmarillo);

    //Click y doble click
    var caja3 = $("#caja3");

    caja3.click(function(){
        $(this).css("background","black")
                .css("color","#fff");
    });

    var caja4 = $("#caja4");

    caja4.dblclick(function(){
        $(this).css("background","pink")
                .css("color","#fff");
    });

    //Focus
    $("#nombre").focus(function(){
        console.log("Holaaa");
        $(this).css("border","5px solid red");
    })

    $("#nombre").blur(function(){
        $(this).css("border","1px solid #ccc");
        
        $("#datos").text($(this).val()).show();

    });

    //Mousedown moseup

    var datos = $("#datos");

    datos.mousedown(function(){
        $(this).css("border","solid 10px black");
        $(this).css("position","relative");
        $(this).css("left","50%");
        $(this).css("background","#1e3799");
        $(this).css("color","#fff")
            .css("font-size","30px");
    })

    datos.mouseup(function(){
        $(this).css("background","#fad390");
    })

    //mosemove
    $(document).mousemove(function(){
        console.log("X: "+event.clientX);
        console.log("Y: "+event.clientY);

        //Hacier que un div siga al raton
        $("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                    .css("top",event.clientY);


    })

    



});