//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaComentario.json');


//Metodo Seleccionar Comentario
function seleccionarComentario() {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectComentario, (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

//Metodo Agregar Comentario
function agregarComentario(comentario, calificacion, fecha, usuario, codigoAplicacion) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertComentario, [comentario, calificacion, fecha, usuario, codigoAplicacion], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

//Metodo Actualizar Comentario

function actualizarComentario(comentario,  calificacion, fecha, usuario, codigoAplicacion, idImagen) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateComentario, [comentario,  calificacion, fecha, usuario, codigoAplicacion, idImagen], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

//Metodo eliminar Comentario
function eliminarComentario(idImagen) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.deleteComentario, [idImagen], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

module.exports = {
    seleccionarComentario: seleccionarComentario,
    agregarComentario: agregarComentario,
    actualizarComentario: actualizarComentario,
    eliminarComentario: eliminarComentario
}