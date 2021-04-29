'use strict'



window.addEventListener('load', () => {

    //Uso del objeto date

    var date = new Date();

    console.log(date);

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    var TiempoArmado = `
        El año es: ${year}
        El mes es: ${month+1}
        El dia es: ${day}
    `;

    console.log(TiempoArmado);
});
