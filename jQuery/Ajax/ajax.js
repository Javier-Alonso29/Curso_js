$(document).ready(function(){

    //Load -- Permite hacer una peticion por GET
    // $('#datosLoad').load("https://reqres.in");

    //GET
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element, index) =>{
            $('#datosGet').append('<p>'+element.first_name+' '+element.last_name+'</p>');
        });
    });

    //POST
    $('#formulario').submit(function(e){

        e.preventDefault();

        var usuario = {
            name : $('input[name="name"]').val(),
            rol : $('input[name="rol"]').val()
        }

        console.log(usuario)
    
        /*
        $.post($(this).attr("action"), usuario, function(res){
            console.log(res)
        }).done(function(){
            alert("Usuario "+usuario.name+" agregado correctamente");
        });
        */

        // otra forma de hacer peticiones ajax
        $.ajax({
            type: 'POST',
            dataType : 'json',
            url : $(this).attr("action"),
            data : usuario,
            beforeSend: function(){
                console.log('Enviando usuario')
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log('A orcurrido un error');
            },
            timeout : 2000
        });

        return false;
    });


});