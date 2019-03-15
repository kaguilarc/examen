'use strict';

const tabla = document.querySelector('#tbl_mascotas tbody');

let mostrar_datos = () => {

    let mascotas = listar_mascotas();

    for (var i = 0; i < mascotas.length; i++) {

        let fila = tabla.insertRow();


    //var fila = document.createElement("tr");

        //var celda = document.createElement("td");

        //celda.appendChild(document.createTextNode(mascotas[i].codigo + " "));
        //celda.appendChild(document.createTextNode(mascotas[i].nombre + " "));
        //celda.appendChild(document.createTextNode(mascotas[i].raza + " "));
        //celda.appendChild(document.createTextNode(mascotas[i].edad + " "));
        //celda.appendChild(document.createTextNode(mascotas[i].sexo + " "));

        
        fila.insertCell().InnetHTML = mascotas[i]['codigo'];
        fila.insertCell().InnetHTML = mascotas[i]['nombre'];
        fila.insertCell().InnetHTML = mascotas[i]['raza'];
        fila.insertCell().InnetHTML = mascotas[i]['edad'];
        fila.insertCell().InnetHTML = mascotas[i]['sexo'];
        
        //fila.appendChild(celda)

        //tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);

};

mostrar_datos(); 