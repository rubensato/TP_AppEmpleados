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

        //muestro resultados
        console.log(data.results);

        //muestro el primer resultado
        console.log(data.results[0]);

        //datos del 1er resultado: 
        console.log('nombre: ' + data.results[0].name.first + 
        ' ' + data.results[0].name.last);
        console.log('email: ' + data.results[0].email);
        console.log('telefono: ' + data.results[0].phone);
        console.log('celular: ' + data.results[0].cell);
        console.log('foto: ' + data.results[0].picture.large);

    })
// }