const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodo) 

// se define la ruta para buscar todas las joyas, se usa el metodo get y se llama a la funcion buscarTodo del controlador joyasController

module.exports = router