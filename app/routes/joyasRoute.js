const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodo) // se define la ruta para buscar todas las joyas, se usa el metodo get y se llama a la funcion buscarTodo del controlador joyasController
    .post('/',joyasController.agregarJoya) // se define la ruta para agregar una nueva joya, se usa el metodo post y se llama a la funcion agregarJoya del controlador joyasController
    .get('/:key/:value', joyasController.buscarJoya, joyasController.mostrarJoya) // ruta para buscar una joya por una clave y un valor, se usa el metodo get
    .delete('/:key/:value', joyasController.buscarJoya, joyasController.eliminarJoya) // ruta para eliminar una joya, se usa el metodo delete
    .put('/:key/:value', joyasController.buscarJoya, joyasController.modificarJoya) // ruta para modificar una joya


module.exports = router