//ARCHIVO JS PARA LA APP EMPLEADOS - RECUPERATORIO 2 DE UAI LPPA 2021


//******* VARIABLES *********/
//inicializo el codigo pidiendo un listado de 12 empleados
var cantidadListado = 10;


// Consulto datos
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

        //llamo a la funcion que me muestra el listado
        mostrarListado(cantidadListado, data.results) 

    })

function mostrarListado(cantidad, listaEmpleados) {
    // Obtener la referencia del elemento body
    var marcoListado = document.getElementById('mostrarListado');

    
    // Crea un elemento <div>
    var listadoGeneral = document.createElement("div");
    listadoGeneral.classList.add("listadoGenerado");
    
    //crea las fichas de los empleados
    for (var i = 0; i < cantidad; i++) {
        // Crea un elemento <div> y un elemento <tbody>
        var fichas = document.createElement("div");
        fichas.className = "fichaEmpleado";
        
        // Crea un elemento <div> y un elemento <tbody>
        var fichasFoto = document.createElement("img");
        fichasFoto.className = "imgEmpleado";
        console.log(listaEmpleados[i].picture.large);
        fichasFoto.src = listaEmpleados[i].picture.large;

        fichas.appendChild(fichasFoto);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        listadoGeneral.appendChild(fichas);
    }

    // appends <table> into 'marcoTablero'
    marcoListado.appendChild(listadoGeneral);


    

}