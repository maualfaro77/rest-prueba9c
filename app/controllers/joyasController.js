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
function agregarJoya(req,res) {
    new joyasModel(req.body) .save() // se crea una nueva instancia del modelo joyasModel con los datos del cuerpo de la solicitud
    .then( info => {
        return res.status(200) .send({
            mensaje: 'La informacion se guardo correctamente',
            info
            
// si la informacion se guarda correctamente, se devuelve un codigo 200 con un mensaje de que la informacion se guardo correctamente y la informacion guardada
        }) 

    })
    .catch(e => {return res.status(404).send({
        mensaje: `error al guardar la informacion ${e}` })}
    )} 

function buscarJoya (req, res, next) {
    if (!req.body) req.body = {}; // <-- Solución agregada
    var consulta= {}
    consulta[req.params.key]=req.params.value;
    joyasModel.find(consulta)
    .then(joyas => {
        if(!joyas.length) return next(); // si no hay joyas, se llama al siguiente
        req.body.joyas = joyas; // si hay joyas, se asignan al cuerpo de la solicitud
        return next()
    })
    .catch(e => {
        req.body.e = e;
        return next();
    });
}

function mostrarJoya(req, res) { 
    if(req.body.e)return res.status(404).send({mensaje: `error al consultar la informacion` })
    if(!req.body.joyas) return res.status(204).send({mensaje: "No hay nada que mostrar"})
    let joyas = req.body.joyas
    return res.status(200).send({joyas}) // si hay joyas, se devuelve un codigo 200 con las joyas
}

function eliminarJoya(req, res) {
    var joyas ={}
    joyas = req.body.joyas 
    joyasModel.deleteOne(joyas[0])
    .then(info => {
        return res.status(200). send({mensaje:"Registro eliminado"})
    })
    .catch(e => {
        return res.status(404).send({mensaje: "error al eliminar la informacion",e })
    })
}
function modificarJoya(req, res) {
    var joyas = req.body.joyas;
    
    if (!joyas || !joyas.length) {
        return res.status(404).send({ mensaje: "no se encontro ni madres" });
    }
    
    joyasModel.updateOne(joyas[0], req.body)
        .then(() => {
            return res.status(200).send({ mensaje: " se registro correctamente :)" });
        })
        .catch(e => {
            return res.status(404).send({ mensaje: "error no jalo", e });
        });
}

module.exports = {
    buscarTodo,
    agregarJoya,
    buscarJoya,
    mostrarJoya,
    eliminarJoya,
    modificarJoya
}
