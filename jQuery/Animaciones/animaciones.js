$(document).ready(function(){

    var caja = $("#caja");

    $("#Animame").click(function(){
        //Mediante el uso de json
        caja.animate({ 
            marginLeft:'500px',
            fontSize : '40px',
            height: '100px'
        },'normal').animate({
            borderRadius : '900px',
            marginTop : '300px'
        },'fast').animate({
            marginLeft: '0px',
            borderRadius : '0px'
        },'fast').animate({
            marginTop: '0px',
            borderRadius : '100px'
        },'fast')

    })


    var add = $("#Añadir-Product");
    var sectProducts = $("#products")

    add.click(function(){

        console.log(sectProducts);
        

        var newDiv = document.createElement("div");

        newDiv.setAttribute("class","caja-Product");

        sectProducts.append(newDiv);


    })


})