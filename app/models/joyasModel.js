const mongoose = require('mongoose') // se importa mongoose para poder crear el modelo de la coleccion joyas
const joyasSchema = mongoose.Schema( // se define el esquema de la coleccion joyas
{
    nombre: {
        type: String,
        required: true, 
        length:50 
    },
    descripcion: {
        type: String,
        required: true, 
        length: 200
    },
    precio: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 10
    }

}) // se define el esquema de la coleccion joyas, con los campos nombre, descripcion, precio, peso y stock 

const joyasModel = mongoose.model('joyas', joyasSchema) // se crea el modelo de la coleccion joyas
module.exports = joyasModel // se exporta el modelo para poder usarlo en otros archivos

