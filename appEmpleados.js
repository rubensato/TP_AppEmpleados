//ARCHIVO JS PARA LA APP EMPLEADOS - RECUPERATORIO 2 DE UAI LPPA 2021


//******* VARIABLES *********/
//inicializo el codigo pidiendo un listado de 12 empleados
var cantidadListado = 10;


// Consulto datos en randomusers.me
// randomuser devuelve en forma aleatporia una cantidad de perfiles que cambia cada vez que se
// actualiza la pagina web.
// En ocaciones da un error que no devuelve nada, a efectos de la prueba simplemente actualice la pagina
// SI LA PAGINA NO MUESTRA FICHAS, VUELVA A CARGARLA ACTUALIZANDOLA
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

        var textoBusqueda = document.getElementById('buscarListado');
        textoBusqueda.placeholder = "buscar en " + cantidadListado + " empleados...";

        //llamo a la funcion que me muestra el listado
        mostrarListado(cantidadListado, data.results) 

    })

function mostrarListado(cantidad, listaEmpleados) {
    // Obtener la referencia del elemento donde se ubicara el listado
    var marcoListado = document.getElementById('mostrarListado');

    
    // Crea un elemento <div>
    var listadoGeneral = document.createElement("div");
    listadoGeneral.classList.add("listadoGenerado");
    
    //crea las fichas de los empleados
    for (var i = 0; i < cantidad; i++) {
        
        // Crea un elemento <div>
        var fichas = document.createElement("div");
        fichas.className = "fichaEmpleado";

        // Crea una banda superior  <div> con icono de control
        var controlFicha = document.createElement("div");
        controlFicha.className = "cuadroControlFicha";

        // Crea el elemento <img> del icono de control
        // Asigno un icono aleatoriamente con la funcion getRandom
        var iconoControlFicha = document.createElement("img");
        iconoControlFicha.className = "imgControlFicha";
        urlFicha = "./img/icono-fichas" + getRandomInt(0, 5) + ".png";
        iconoControlFicha.src = urlFicha;
        
        controlFicha.appendChild(iconoControlFicha);

        fichas.appendChild(controlFicha);
        
        // Crea un elemento <img>
        var fichasFoto = document.createElement("img");
        fichasFoto.className = "imgEmpleado";
        fichasFoto.src = listaEmpleados[i].picture.large;

        fichas.appendChild(fichasFoto);

        // Crea un elemento <p>
        var fichaNombreApellido = document.createElement("p");
        fichaNombreApellido.className = "nombreApellido";
        fichaNombreApellido.textContent = listaEmpleados[i].name.first + ' ' + listaEmpleados[i].name.last;

        fichas.appendChild(fichaNombreApellido);

        // Crea un elemento <p>
        var fichasCargo = document.createElement("p");
        fichasCargo.className = "cargoEmpresa";
        fichasCargo.textContent = "Product Designer";

        fichas.appendChild(fichasCargo);
        
        // Crea un elemento <img>
        var fichasLinea = document.createElement("img");
        fichasLinea.className = "lineaFicha";
        fichasLinea.src = "./img/lineaFicha.png";

        fichas.appendChild(fichasLinea);

        // Crea un elemento <p>
        var fichasEmail = document.createElement("p");
        fichasEmail.className = "emailEmpleado";
        fichasEmail.textContent = listaEmpleados[i].email;

        fichas.appendChild(fichasEmail);

        // Crea un elemento <p>
        var fichasCelular = document.createElement("p");
        fichasCelular.className = "celularEmpleado";
        fichasCelular.textContent = listaEmpleados[i].cell;

        fichas.appendChild(fichasCelular);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        listadoGeneral.appendChild(fichas);
    }

    // appends <table> into 'marcoTablero'
    marcoListado.appendChild(listadoGeneral);

}



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }