'use strict'

window.addEventListener('load', function () {

    var formulario = document.querySelector("#formAddUser");

    formulario.addEventListener('submit', function () {

        var usuarioTemp = document.querySelector("#addUser").value;

        if (usuarioTemp.length > 0) {

            localStorage.setItem(usuarioTemp, usuarioTemp);

        }


    });

    var ul = document.querySelector("#lista-usr");

    for (const key in localStorage) {
        console.log(localStorage[key]);

        if (typeof localStorage[key] == 'string') {

            var li = this.document.createElement("li");

            li.append(localStorage[key]);
            ul.append(li);

        }
    }

    var formularioElimina = document.querySelector("#formDeletUser");

    formularioElimina.addEventListener('submit', function(){
        var elimiaUsuario = document.querySelector("#deletuser").value;

        if(elimiaUsuario.length > 0){
            localStorage.removeItem(elimiaUsuario);
        }
    });

})