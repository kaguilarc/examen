'use stric';

let registrar_mascota = (pcodigo, pnombre, pedad, praza, psexo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_mascota",
        method: "POST",
        data: {
            codigo: pcodigo,
            nombre: pnombre,
            edad: pedad,
            raza: praza,
            sexo: psexo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done({
        type: 'success',
        title: 'Solicitud enviada',
        text: 'se ha enviado una solicitud exitosamente'
    });

};


let listar_mascotas = () => {

    let lista_mascotas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_mascotas",
        method: "GET",
        data: {},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_mascotas = res.mascotas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_mascotas;
};

