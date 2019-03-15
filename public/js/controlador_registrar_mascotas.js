'use stric';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
var input_edad = document.querySelector('#txt_edad');
var input_raza;
var input_sexo;
const btn_enviar = document.querySelector('#btn_registrar');


let add_radios_values = () => {

    input_sexo = document.querySelector("input[name=rbt_sexo]:checked");
};

let add_list_values = () => {

    input_raza = document.getElementById('slt_raza');
};

let print_console_values = () => {

    console.log(input_codigo);
    console.log(input_nombre);
    console.log(input_edad);
    console.log(input_raza);
    console.log(input_sexo);
}

let verificar_datos = () => {

    try {

        if (!input_codigo.value) {
            throw "El codigo no puede estar vacio";
        }
        if (!input_nombre.value) {
            throw "El nombre no puede estar vacio ";
        }
        if (!input_edad.value || input_edad.value == 0) {
            throw "El valor de edad no es valido";
        }
        if (!input_raza.value) {
            throw "Debe seleccionar una raza";
        }
        if (input_sexo == null || !input_sexo.value) {
            throw "Debe seleccionar el sexo";
        }


    } catch (e) {
        throw e;
    }

}


let enviar_datos = () => {

    try {

        add_radios_values();
        add_list_values();
        verificar_datos();
        registrar_mascota(
            input_codigo.value,
            input_nombre.value,
            input_edad.value,
            input_raza.value,
            input_sexo.value
        );

        Swal.fire('Mascota Registrada')
    } catch (e) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: e,
            footer: 'Algo salio mal!'
        })
    }

};


btn_enviar.addEventListener('click', enviar_datos);
