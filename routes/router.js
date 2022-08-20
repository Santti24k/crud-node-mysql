const express = require('express');

/* conexion a base de datos */
const conexion = require('../database/db');

const router = express.Router();

/* conexion a views */

router.get('/', function(req, res, next) {
    res.render('../views/layouts/home.hbs');
});

module.exports = router;

