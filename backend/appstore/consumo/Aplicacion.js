var configuraciones = config;
var id;
var id2;

function guardarAplicacion(nombreI, precioI, descripcionI, iconoI, instaladaI, calificacionI, descargasI, desarrolladorI, idCategoriaI) {

  $.ajax(configuraciones.hostApi + configuraciones.InsertAplicacion, {

    type: "post",
    datatype: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      nombre: nombreI,
      precio: precioI,
      descripcion: descripcionI,
      icono: iconoI,
      instalada: instaladaI,
      calificacion: calificacionI,
      descargas: descargasI,
      desarrollador: desarrolladorI,
      idCategoria: idCategoriaI
    }),
    success: function (data, status) {
      alert("Ha sido instalado exitosamente")
      $('#exampleModal').modal('hide');
      $('#nombre').val('')
      $('#precio').val('');
      $('#descripcion').val('');
      $('#icono').val('');
      $('#desarrollador').val('');
    },
    error: function (jqXhr, textStatus, erroMensaje) {
      console.log(jqXhr)
      if (jqXhr.responseJSON.status == 400) {
        //$('#mensaje').append('<p>' + jqXhr.responseJSON.mensaje + '</p>');
        console.log(jqXhr.responseJSON.mensaje)
      } else {
        // $('#mensaje').append('Ocurrio un erro');
        console.log('Error')
      }
    }
  })

}

function consultarAplicacion() {

  $('#aplicacion').html('')

  let codigo = id2;

  $.ajax(configuraciones.hostApi + configuraciones.SelectAplicacion + codigo, {
    type: "GET",
    datatype: 'Json',
    //data:
    success: function (data, status) {

      let listaAplicacion = data;
      let contador = 5;

      for (let i of listaAplicacion[0].aplicaciones) {

        $('#aplicacion').append(
          '<div class="col" >' +
          '<div id="app" class="card h-100 bg-image hover-overlay ripple">' +
          '<a id="' + i.codigo + '" class="nav-link border border-light rounded waves-effect" target="_blank" type="button" data-mdb-toggle="modal" data-mdb-target="#DetalleApp" data-mdb-whatever="@getbootstrap" onclick="ShowModal(' + i.codigo + ');">' +
          '<div class="mask"></div>' +
          '<img id="icono" src="../img/app-icons/' + i.icono + '" class="card-img-top img-fluid rounded" alt="..."/> </a>' +
          '<div class="card-body">' +
          '<p id="app-text" class="mb-1 fw-bold">' + i.nombre + '</p>' +
          '<p id="app-text" class="">' + i.descripcion + '</p>' +
          '<span id="calificacion"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>' +
          '</span>' +
          '<br><small id="app-text" class="fw-bold h5 mb-1">$' + i.precio + '</small>' +
          '</div></div></div>'
        );
      }

    },
    error: function (jqXhr, textStatus, erroMensaje) {
      console.log("Error" + jqXhr)
      console.log("Error detalle" + erroMensaje)
    }
  })
}

function ShowModal(cod) {

    $('#DetalleApp').html('')

    let codigo = id2;

    $.ajax(configuraciones.hostApi + configuraciones.SelectAplicacion + codigo, {
        type: "GET",
        datatype: 'Json',
        //data:
        success: function (data, status) {

            let listaAplicacion = data;

            console.log(listaAplicacion)

            for (let i of listaAplicacion[0].aplicaciones) {
                
                if(i.codigo == cod){
              
                $('#DetalleApp').append(
                    '<div class="modal-dialog ">'+
              '<div class="modal-content">'+
                '<div class="modal-body" >'+
                  '<div id="carouselImagenes" class="carousel slide" data-mdb-ride="carousel">'+
                    '<div class="carousel-indicators">'+
                      '<button'+
                        ' type="button"'+
                        'data-mdb-target="#carouselImagenes"'+
                        'data-mdb-slide-to="0"'+
                        'class="active"'+
                        'aria-current="true"'+
                        'aria-label="Slide 1"'+
                      '></button>'+
                      '<button'+
                        ' type="button"'+
                        'data-mdb-target="#carouselImagenes"'+
                        'data-mdb-slide-to="1"'+
                        'aria-label="Slide 2"'+
                      '></button>'+
                      '<button'+
                        ' type="button"'+
                        'data-mdb-target="#carouselImagenes"'+
                        'data-mdb-slide-to="2"'+
                        'aria-label="Slide 3"'+
                      '></button>'+
                    '</div>'+
                    '<div class="carousel-inner" id="img">'+
                   
                    
                    '</div>' +
                    '<button'+
                      ' class="carousel-control-prev"'+
                      'type="button"'+
                      'data-mdb-target="#carouselImagenes"'+
                      'data-mdb-slide="prev">'+
                      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                      '<span class="visually-hidden">Previous</span>'+
                    '</button>'+
                    '<button'+
                      ' class="carousel-control-next"'+
                      'type="button"'+
                      'data-mdb-target="#carouselImagenes"'+
                      'data-mdb-slide="next">'+
                      '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                      '<span class="visually-hidden">Next</span>'+
                    '</button>'+
                  '</div>'+
                  '<br>'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<img'+
                        ' src="../img/app-icons/'+ i.icono + '"'+
                       'id="iconoview"'+
                        'alt=""'+
                        'class="img-fluid rounded"'+
                      '/>'+
                    '</div>'+
                    '<div class="col-md-8">'+
                      '<p id="nombreview" class="fw-bold h1 mb-1">'+i.nombre+'</p>'+
                      '<span id="calificacionview" style="color: #FEB817;"><i class="fas fa-star"></i>'+
                      '<i class="fas fa-star"></i><i class="fas fa-star"></i><i'+
                        'class="fas fa-star-half-alt"></i><i class="far fa-star"></i></span>'+
                        '<p id="calificacionview" class="text-muted mb-0">'+
                        ''+i.descripcion+'</p>'+
                        '<p id="precioview" class="fw-bold text-muted small text-uppercase mb-1">'+i.precio+'</p>'+
                    '</div>'+
                  '</div>'+
                  '<hr style="background-color: hsl(0, 0%, 75%)" />'+
                  '<p class="text-uppercase text-muted small fw-bold">Comentarios</p>'+
                  '<div id="comen"></div>'+
                  '<div class="modal-footer">'+
                  '<a class="btn btn-danger text-white" type="button" onclick="EliminarApp('+i.codigo+');">Eliminar</a>'+
                  '<button type="submit" class="btn btn-secondary" data-mdb-dismiss="modal">Cerrar</button>'+
                    '<button type="submit" class="btn btn-primary">Instalar</button>'+
                  '</div></div></div>');
                 
                  for (let j of i.Comentarios) {
                   
                    $('#comen').append(
                      '<div class="d-flex align-items-center">'+
                      '<div class="flex-shrink-0">'+
                        '<img'+
                          ' src="../img/user.webp"'+
                          'class="rounded-circle"'+
                          'alt=""'+
                          'style="width: 45px; height: 45px"'+
                        '/>'+
                      '</div>'+
                      '<div class="flex-grow-1 ms-3">'+
                        '<p class="fw-bold mb-1">'+j.usuario+'</p>'+
                        '<p class="text-muted mb-0">'+j.comentario+'</p>'+
                      '</div>'+
                    '</div>'+
                    
                 ' </div><br>'


                   );
                    
                 
                  }
                  $('#img').append(
                  '<div class="carousel-item active">'+
                      '<img'+
                        ' src="'+i.Imagenes[0]+'"'+
                        'class="d-block w-100"'+
                        'alt="..."'+
                      '/>');
                  
                  for (let k = 1; k < i.Imagenes.length; k++) {
                    
                    $('#img').append(
                    '</div>'+
                    '<div class="carousel-item ">'+
                      '<img'+
                        ' src="'+i.Imagenes[k]+'"'+
                        'class="d-block w-100"'+
                        'alt="..."'+
                      '/>'+
                    '</div>' ); 
                    
                  }
                  
              }}    
    },
    error: function (jqXhr, textStatus, erroMensaje) {
      console.log("Error" + jqXhr)
      console.log("Error detalle" + erroMensaje)
    }
  })
}

function ShowSelected() {
  let select = document.getElementById("categoria"); /*Obtener el SELECT */
  id = select.options[select.selectedIndex].value;

}

function ShowSelected2() {
  let select2 = document.getElementById("categorias"); /*Obtener el SELECT */
  id2 = select2.options[select2.selectedIndex].value;

  consultarAplicacion();
}

$('#guardarAplicacion').click(function () {

  let nombre = $('#nombre').val();
  let precio = $('#precio').val();
  let descripcion = $('#descripcion').val();
  let icono = $('#icono').val();
  let instalada = 0;
  let calificacion = 0;
  let descargas = 0;
  let desarrollador = $('#desarrollador').val();
  let idCategoria = id;


  if (nombre == null || precio == null || descripcion == null || icono == null || instalada == null || 
    calificacion == null || descargas == null || desarrollador == null || idCategoria == null) {
    alert("Llene todos los campos");
  } else {
    if(precio < 0) {
      alert("El precio no puede ser menor a cero");
    } else {
    guardarAplicacion(nombre, precio, descripcion, icono, instalada, calificacion, descargas, desarrollador, idCategoria);
  }
  }
})