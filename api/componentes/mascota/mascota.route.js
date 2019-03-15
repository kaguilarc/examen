'use strict';

const express = require('express');
const router = express.Router();
const mascotaApi = require('./mascota.api');

router.route('/registrar_mascota')
    .post(
        function (req, res) {
            mascotaApi.registrar(req, res)
        }
    );


router.route('/listar_mascotas')
    .get(
        function (req, res) {
            mascotaApi.listar_todos(req, res)
        }
    );

module.exports = router; 