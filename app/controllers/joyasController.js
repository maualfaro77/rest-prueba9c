const joyasModel = require('../models/joyasModel') // se importa el modelo de la coleccion joyas
function buscarTodo(req, res){
    joyasModel.find({})
    .then(joyas => {
        if(joyas.length){
            return res.status(200).send({joyas})
        }
        return res.status(204).send ({ mensaje: 'No hay joyas registradas' })
    })
    .catch (e =>{ return res.status(404).send ({mensaje: `error al consultar la informacion ${e}` })})

    // se busca todas las joyas en la coleccion joyas, si hay joyas, se devuelve un codigo 200 con las joyas, si no hay joyas, se devuelve un codigo 204 con un mensaje de que no hay joyas registradas, si hay un error al consultar la informacion, se devuelve un codigo 404 con un mensaje de error
}

module.exports = {
    buscarTodo
}
