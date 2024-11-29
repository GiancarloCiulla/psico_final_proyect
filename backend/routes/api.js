const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/apiController');

// Ruta para obtener datos
router.get('/blog', getData);

module.exports = router;
