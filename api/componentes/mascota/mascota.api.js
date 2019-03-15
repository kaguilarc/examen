'use stric';

const mascotaModel = require('./mascota.model');

module.exports.registrar = (req, res) => {

    let nuevaMascota = new mascotaModel({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        raza: req.body.raza,
        edad: req.body.edad,
        sexo: req.body.sexo
    });

    nuevaMascota.save(function (error){
        if (error) {

            res.json({
                success: false,
                msg: 'la mascota no pudo ser registrada ' + error
            });
        }
        else {
            res.json({
                success: true,
                msg: 'la mascota fue registrada exitosamente'
            }); 
        }
    });


};

module.exports.listar_todos = (req, res) => {

    mascotaModel.find().then(

        function (mascotas) {
            if (mascotas.length > 0) {
                res.json(
                    {
                        success: true,
                        mascotas: mascotas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron comentarios'
                    }
                )
            }
        }
    )




};