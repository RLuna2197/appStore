var configuraciones = config;

function EliminarApp(codigoApp) {
    $.ajax(configuraciones.hostApi + configuraciones.DeleteAplicacion + codigoApp, {
        type: "delete",
        success: function (data, status) {
          alert("Ha sido eliminada exitosamente")
          consultarAplicacion();
        },
        error: function (jqXhr, textStatus, erroMensaje) {
                // $('#mensaje').append('Ocurrio un erro');
                console.log('Error')
        }
    })
}
