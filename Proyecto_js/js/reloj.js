$(document).ready(function(){

    // Hora
    setInterval(function(){
        var reloj = moment().format('h:mm:ss');
        let calendario = moment().format('LL');
        $("#date").html(reloj+"<br>"+calendario);

    }, 1000);

});