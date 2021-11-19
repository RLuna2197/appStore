var configuraciones = config;

function consultarCategorias() {

    $('#categorias').html('')
    $('#categoria').html('')

    $.ajax(configuraciones.hostApi + configuraciones.SelectCategoria, {
        type: "GET",
        datatype: 'Json',
        
        success: function (data, status) {

            let listaCategorias = data;

            for (let i of listaCategorias) {

                $('#categorias').append('<option value="' + i.idCategoria + '">' + i.nombreCategoria + '</option>')
                $('#categoria').append('<option value="' + i.idCategoria + '">' + i.nombreCategoria + '</option>')
            }

        },
        error: function (jqXhr, textStatus, erroMensaje) {
            console.log("Error" + jqXhr)
            console.log("Error detalle" + erroMensaje)
        }
    })
}

consultarCategorias();