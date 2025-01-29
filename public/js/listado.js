// tablas cotizaciones y proyectos
$(document).ready(() => {
  $("#tabla-cotizaciones").show();
  $("#tabla-proyectos").hide();
  $("#lista").change(function () {
    // Oculta todos los divs con clase "contenido"
    $(".tabla").hide();
    // Obtiene el valor seleccionado en el select
    const opcionSeleccionada = $(this).val();
    // Muestra el div correspondiente a la opción seleccionada
    $("#tabla-" + opcionSeleccionada).show();
  });
});
// tablas cotizaciones y proyectos*--------------------------***

// COTIZACIONES SEPARAS DE NATURALES Y JURIDICAS
$(document).ready(() => {
  getCotizacionesNatural();
  getCotizacionesJuridica();
  $("#tabla-juridicas").hide();
  $("#tipo-persona").change(function () {
    $(".contenido").hide();
    const opcionSeleccionada = $(this).val();
    $("#tabla-" + opcionSeleccionada).show();
  });
});
// ESTADO DE LAS COTIZACIONES- SEGUN NATURALES Y JURIDICAS
$(document).ready(() => {
  $("#estado").change(function () {
    let estado = $(this).val();
    let tipoPersona = $("#tipo-persona").val();
    if (tipoPersona == "naturales") {
      getCotizacionesNaturalEstado(estado);
    } else if (tipoPersona == "juridicas") {
      getCotizacionesJuridicaEstado(estado);
    }
  });
});
function getCotizacionesNatural() {
  $.ajax({
    type: "GET",
    url: `http://localhost/katariPrice/listado/listarCotizacionesNatural`,
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.nombres}</td>
                    <td>${element.telefono}</td>
                    <td>${element.servicio}</td>
                    <td>${element.precio}</td>
                    <td>${element.estado}</td>
                    <td>${element.fechaLimite}</td>
                    <td><a href="http://localhost/katariPrice/listado/cotizacionNaturalDetalle/${element.idcotizacion}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/cotizacion/proforma/${element.idcotizacion}" class="button success" target="_blank">Imprimir</a></td>
                </tr>`;
      });
      $("#tbody-cotizaciones-natural").html(html);
      initPaginador(5, "tbody-cotizaciones-natural", "natural-paginacion")
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}
function getCotizacionesJuridica() {
  $.ajax({
    type: "GET",
    url: `http://localhost/katariPrice/listado/listarCotizacionesJuridica`,
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.razonsocial}</td>
                    <td>${element.telefono}</td>
                    <td>${element.servicio}</td>
                    <td>${element.precio}</td>
                    <td>${element.estado}</td>
                    <td>${element.fechaLimite}</td>
                    <td><a href="http://localhost/katariPrice/listado/cotizacionJuridicaDetalle/${element.idcotizacion}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/cotizacion/proforma/${element.idcotizacion}" class="button success" target="_blank">Imprimir</a></td>
                </tr>`;
      });
      $("#tbody-cotizaciones-juridica").html(html);
      initPaginador(5, "tbody-cotizaciones-juridica", "juridica-paginacion")
    },
    error: function (error) { },
  });
}
// TABLA COTIZACIONES POR SU ESTADO, DE LOS NATURALES Y JURIDICAS
function getCotizacionesNaturalEstado(estado) {
  $.ajax({
    type: "POST",
    url: `http://localhost/katariPrice/listado/listarCotizacionesEstadoNatural`,
    data: { estado },
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.nombres}</td>
                    <td>${element.telefono}</td>
                    <td>${element.servicio}</td>
                    <td>${element.precio}</td>
                    <td>${element.estado}</td>
                    <td>${element.fechaLimite}</td>
                    <td><a href="http://localhost/katariPrice/listado/cotizacionNaturalDetalle/${element.idcotizacion}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/cotizacion/proforma/${element.idcotizacion}" class="button success" target="_blank">Imprimir</a></td>
                </tr>`;
      });
      $("#tbody-cotizaciones-natural").html(html);
    },
    error: function (error) { },
  });
}
function getCotizacionesJuridicaEstado(estado) {
  $.ajax({
    type: "POST",
    url: `http://localhost/katariPrice/listado/listarCotizacionesEstadoJuridica`,
    data: { estado },
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.razonsocial}</td>
                    <td>${element.telefono}</td>
                    <td>${element.servicio}</td>
                    <td>${element.precio}</td>
                    <td>${element.estado}</td>
                    <td>${element.fechaLimite}</td>
                    <td><a href="http://localhost/katariPrice/listado/cotizacionJuridicaDetalle/${element.idcotizacion}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/cotizacion/proforma/${element.idcotizacion}" class="button success" target="_blank">Imprimir</a></td>
                </tr>`;
      });
      $("#tbody-cotizaciones-juridica").html(html);
    },
    error: function (error) { },
  });
}
// COTIZACIONES SEPARAS DE NATURALES Y JURIDICAS----------------

// -------------------------------------PROYECTOS -----------------------------------
$(document).ready(() => {
  getProyectosNatural();
  getProyectosJuridica();
  $("#tabla-juridicas-proyect").hide();
  $("#tipo-persona-proyect").change(function () {
    $(".contenido-proyect").hide();
    const opcionSeleccionada = $(this).val();
    $("#tabla-" + opcionSeleccionada).show();
  });
});
// ESTADO DE LOS PROYECTOS-> SEGUN NATURALES Y JURIDICAS
$(document).ready(() => {
  $("#estado-proyect").change(function () {
    let estado = $(this).val();
    let tipoPersona = $("#tipo-persona-proyect").val();
    if (tipoPersona == "naturales-proyect") {
      getProyectosNaturalEstado(estado);
    } else if (tipoPersona == "juridicas-proyect") {
      getProyectosJuridicaEstado(estado);
    }
  });
});
function getProyectosNatural() {
  $.ajax({
    type: "GET",
    url: `http://localhost/katariPrice/listado/listarProyectosNatural`,
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.proyecto}</td>
                    <td>${element.usuario}</td>
                    <td>${element.servicio}</td>
                    <td>${element.estado}</td>
                    <td>${element.pendiente}</td>
                    <td>${element.total}</td>
                    <td>${element.entrega}</td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoNaturalDetalle/${element.idproyecto}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoAvances/${element.idproyecto}" class="button success">Avances</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoPagos/${element.idproyecto}" class="button warning">Pagos</a></td>
                </tr>`;
      });
      $("#tbody-proyectos-natural").html(html);
      initPaginador(5, "tbody-proyectos-natural", "proyectos-natural-paginacion")
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}
function getProyectosJuridica() {
  $.ajax({
    type: "GET",
    url: `http://localhost/katariPrice/listado/listarProyectosJuridica`,
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.proyecto}</td>
                    <td>${element.empresa}</td>
                    <td>${element.servicio}</td>
                    <td>${element.estado}</td>
                    <td>${element.pendiente}</td>
                    <td>${element.total}</td>
                    <td>${element.entrega}</td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoJuridicaDetalle/${element.idproyecto}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoAvances/${element.idproyecto}" class="button success">Avances</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoPagos/${element.idproyecto}" class="button warning">Pagos</a></td>
                </tr>`;
      });
      $("#tbody-proyectos-juridica").html(html);
      initPaginador(5, "tbody-proyectos-juridica", "proyectos-juridica-paginacion")
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}
function getProyectosNaturalEstado(estado) {
  $.ajax({
    type: "POST",
    url: `http://localhost/katariPrice/listado/listarProyectosNaturalEstado`,
    data: { estado },
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.proyecto}</td>
                    <td>${element.usuario}</td>
                    <td>${element.servicio}</td>
                    <td>${element.estado}</td>
                    <td>${element.pendiente}</td>
                    <td>${element.total}</td>
                    <td>${element.entrega}</td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoNaturalDetalle/${element.idproyecto}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoAvances/${element.idproyecto}" class="button success">Avances</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoPagos/${element.idproyecto}" class="button warning">Pagos</a></td>
                </tr>`;
      });
      $("#tbody-proyectos-natural").html(html);
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}
function getProyectosJuridicaEstado(estado) {
  $.ajax({
    type: "POST",
    url: `http://localhost/katariPrice/listado/listarProyectosJuridicaEstado`,
    data: { estado },
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.proyecto}</td>
                    <td>${element.empresa}</td>
                    <td>${element.servicio}</td>
                    <td>${element.estado}</td>
                    <td>${element.pendiente}</td>
                    <td>${element.total}</td>
                    <td>${element.entrega}</td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoJuridicaDetalle/${element.idproyecto}" class="button">detalles</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoAvances/${element.idproyecto}" class="button success">Avances</a></td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoPagos/${element.idproyecto}" class="button warning">Pagos</a></td>
                </tr>`;
      });
      $("#tbody-proyectos-juridica").html(html);
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}

// -------------------------------------PROYECTOS END-----------------------------------
