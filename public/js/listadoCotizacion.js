// cambios de estado
$(document).ready(function () {
  //-*-*-*-*-*-*-CAMBIAR DE ESTADO*-*-*-*-*-
  $("#cancelar").click(function () {
    if (confirm("¿Estás seguro de que deseas cancelar esta cotización?")) {
      let estado = "cancelado";
      let id = $("#idcotizacion").val();
      cambiarEstado(id, estado);
    } else {
      console.log("Acción de cancelación abortada por el usuario.");
    }
  });
  $("#aceptar").click(function () {
    let estado = "aceptado";
    let id = $("#idcotizacion").val();
    cambiarEstado(id, estado);
  });
  //-*-*-*-*-*-*-CAMBIAR DE ESTADO END*-*-*-*-*-
});
// Pasar a proyecto
$(document).ready(function () {
  $("#modal-proyecto").hide();
  $("#show-modal").click(function () {
    $("#modal-proyecto").show();
  });
  $("#cerrar").click(function () {
    event.preventDefault();
    $("#modal-proyecto").hide();
  });
  $("#postProyecto").click(function () {
    postProyecto();
  });
});
function cambiarEstado(id, estado) {
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/cotizacionEstado",
    data: { id, estado },
    success: function (response) {
      location.reload();
    },
    error: function (error) {
      confirmation(0,"Error al Actualizar");
      //console.log("error:" + error);
    },
  });
}

function postProyecto() {
  $("#form-proyecto").on("submit", function (event) {
    event.preventDefault();
    // var naturalValue = $('#natural').length ? $('#natural').val() : null;
    // var juridicaValue = $('#juridica').length ? $('#juridica').val() : null;
    if ($('#idnatural').length) {
        var id = $("#idnatural").val();
        var tipoCliente = "natural";
      } else if ($('#idjuridica').length) {
        var id = $("#idjuridica").val();
        var tipoCliente = "juridica";
      }else{
        alert("Debe seleccionar un cliente");
      }
    var formData = new FormData(this);
    // esto aumenta el numero de datos a enviar como formulario
    var idcotizacion = $("#idcotizacion").val();
    var idservicio = $("#idservicio").val();
    var idpersonal = $("#idpersonal").val();
    formData.append("idcotizacion", idcotizacion);
    formData.append("idservicio", idservicio);
    formData.append("idpersonal", idpersonal);
    formData.append("tipoCliente", tipoCliente);
    formData.append("id", id);
    $.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        //console.log(response);
        location.reload();
        //$("#modal-proyecto").hide();
        //$("#idpersonal-nuevo").val(response);
      },
      error: function (error) {
        console.error("Error:", error);
        // Aquí puedes manejar los errores
        confirmation(0,"Falta rellenar el formulario");
      },
    });
  });
}
