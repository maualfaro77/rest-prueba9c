const config= require('./configuracion')
const mongoose = require('mongoose')
module.exports = { // se exporta un objeto que contiene la configuracion de la conexion a la base de datos
    connection: null,
    connect: ()=> {
       if (this.connection) return this.connection // si ya hay una conexion, se regresa a la conexion existente
       return mongoose.connect(config.DB)
       .then(conn=> { //conn es el objeto de conexion que se devuelve al conectarse a la base de datos
        this.connection = conn // se guarda la conexion en el objeto
        console.log('La conexion se realizo con exito')
       }
    )
       .catch( e => { console.log(`Error en la conexion ${e}`)}) // si hay un error en la conexion, se muestra el error en consola
       }
        
    }