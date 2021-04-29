$(document).ready(function(){
    
    // Poder mover un elemento de la pagina
    $(".elemento").draggable();

    // Para redimenzionar un elementos
    $(".elemento").resizable();

    // Seleccionamos la lista
    $("#lista-cambio").selectable();

    // Lista y ordernar los elementos
    $("#lista-sortable").sortable({
        update: function(event, ui){
            console.log('Asi detectamos el cambio')
        }
    });

    // Efecto de agarrar y soltar
    $(".elemento-area").draggable();
    // Drop
    $(".elemento-soltar").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    });

    // Efectos
    // Mostrar y ocultar 
    $("#mostrar").click(function(){
        $('#cajaEfectos').toggle("fade");
    })

    // Explode
    $("#explode").click(function(){
        $('#cajaEfectosExplode').toggle('explode');
    })

    // Blind
    $("#blind").click(function(){
        $('#cajaEfectosBlind').toggle('blind');
    })

    // Slide
    $("#slide").click(function(){
        $('#cajaEfectosSlide').toggle('slide');
    })

    // Drop
    $("#drop").click(function(){
        $('#cajaEfectosDrop').toggle('drop');
    })

    // puff
    $("#puff").click(function(){
        $('#cajaEfectosPuff').toggle('puff');
    })

    // Escale
    $("#scale").click(function(){
        $('#cajaEfectosScale').toggle('scale');
    })

    // Shake
    $("#shake").click(function(){
        $('#cajaEfectosShake').toggle('shake', "slow");
    })

});