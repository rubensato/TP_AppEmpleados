//ARCHIVO JS PARA LA APP EMPLEADOS - RECUPERATORIO 2 DE UAI LPPA 2021


//******* VARIABLES *********/
//inicializo el codigo pidiendo un listado de 12 empleados
var cantidadListado = 12;


// function climaActual(codigoCiudad) {
    fetch('https://randomuser.me/api/?results='+ cantidadListado)
    .then(response => response.json())
    .then(data => {
        //todos los datos
        console.log(data);

    })
// }