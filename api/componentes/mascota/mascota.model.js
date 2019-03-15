'use stric';

let mongoose = require('mongoose');

let mascostaSchema = new mongoose.Schema({
    codigo: { type: String, unique: true, requerid: true },
    nombre: { type: String, requerid: true },
    raza: { type: String, requerid: true },
    edad: { type: Number, requerid: true },
    sexo: { type: String, requerid: true }
});

module.exports = mongoose.model('Mascota', mascostaSchema);



/**
 * codigo, string unique
 * ●nombre, string
 * ●raza, string
 * ●edad, number (la edad no puede ser menor a 0)
 * ●sexo, string
 * **/