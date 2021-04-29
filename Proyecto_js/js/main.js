$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    // Post
    var posts = [
        {
            title:'Titulo 1',
            date: 'Publicado '+moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        },
        {
            title:'Titulo 2',
            date: 'Publicado '+moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            
        },
        {
            title:'Titulo 3',
            date: 'Publicado '+moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            
        },
        {
            title:'Titulo 4',
            date: 'Publicado '+moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            
        }
    ]

    posts.push(
        {
            title:'Titulo 5',
            date: 'Publicado '+moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            
        }
    )

    posts.forEach((elemento,index)=>{
        var post = `<article class="post">
        <h2>${elemento.title}</h2>
        <span class="date">${elemento.date}</span>
        <p>${elemento.content}</p>
          <a href="" class="botton-more">leer mas</a>
      </article>`;

      $('#posts').append(post)

    })


    // Selector de temas

    var theme = $("#theme");

    if(localStorage.getItem("tema")){
        // Si existe un tema escogido por el usuario en el localstorage
        theme.attr("href",localStorage.getItem("tema"))
    }

    $("#to-black").click(function(){
        theme.attr("href","css/black.css")
        localStorage.setItem("tema", "css/black.css");
        
    });

    $("#to-withe").click(function(){
        theme.attr("href","css/withe.css")
        localStorage.setItem("tema", "css/withe.css");
    });

    // Scroll subir
    $('.subir').click(function(e){

        $('html, body').animate({
            scrollTo:0
        }, 500);

    });

    // Login
    $('#login form').submit(function(){
        let name = $("#form_name").val();
        let email = $("#form_email").val();
        let password = $("#form_pass").val();

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("pass",password);
    });

    if(localStorage.getItem("name") != null){

        $("#about p").html("Bienvenido, "+localStorage.getItem("name")+" <a href='#' id='logout' >Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })

    }else{
        $("#about p").html("Bienvenido, logeate para tener una mejor experiencia");
    }

    // Validacion
    $.validate({
        lang:'es'
    });

    
})