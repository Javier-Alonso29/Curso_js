'use strict'

window.addEventListener('load', function () {
    // Fetch (ajax) y peticiones a servicios / apis rest


    var divUsuarios = document.querySelector("#usuarios");
    var divUsuario = document.querySelector("#janet");

    // Accede a un servicio remoto

    //Esto es una promesa
    getUsuarios()
        .then(data => data.json())
        .then(users => {

            console.log(users.data);

            listadoUsuarios(users.data);

            return getUsuario();


        }).then(data => data.json())
        .then(janet => {
            mostrarUsuario(janet.data);
        })

    function getUsuarios() {
        return fetch('https://reqres.in/api/users?page=2');
    }

    function getUsuario() {
        return fetch('https://reqres.in/api/users/2');
    }

    function mostrarUsuario(user) {
        console.log(user);
        let nombre = document.createElement("h3");

        nombre.innerHTML = user.name + user.username

        divUsuario.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    }


    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement("h3");

            console.log(user.first_name);

            nombre.innerHTML = i + " " + user.first_name + user.last_name;

            divUsuarios.appendChild(nombre);

            document.querySelector("#janet .loading").style.display = "none";
        });
    }


});
