$(document).ready(function () {
  // CAMBIAR DE ESTADO----------------------------------------------------------
  $("#entregado").click(function () {
    if (confirm("¿Estás seguro de que deseas marcar como entregado este proyecto?")) {
      let estado = "entregado";
      let id = $("#idproyecto").val();
      cambiarEstado(id, estado);
      location.reload();
    } else {
      console.log("Acción de cancelación abortada por el usuario.");
    }
  });
  $("#atrasado").click(function () {
    if (confirm("¿Estás seguro de que deseas marcar como atrasado este proyecto?")) {
      let estado = "atrasado";
      let id = $("#idproyecto").val();
      cambiarEstado(id, estado);
      location.reload();
    } else {
      console.log("Acción de cancelación abortada por el usuario.");
    }
  });
  $("#cancelado").click(function () {
    if (confirm("¿Estás seguro de que deseas cancelar este proyecto?")) {
      let estado = "cancelado";
      let id = $("#idproyecto").val();
      cambiarEstado(id, estado);
      location.reload();
    } else {
      console.log("Acción de cancelación abortada por el usuario.");
    }
  });
  //CAMBIAR DE ESTADO END-------------------------------------------------------
});
// ACTUALIZAR
$(document).ready(function () {
  $("#actualizar").hide();
  
  $("#totalactividades,#feEntrega,#descripcion").prop("disabled", true);
  $("#editar").click(function () {
    $("#totalactividades,#feEntrega,#descripcion").prop("disabled", false);
    $("#editar").hide();
    $("#actualizar").show();
  });
  $("#actualizar").click(function(){
    actualizar();
  });
})
function cambiarEstado(id, estado) {
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/proyectoEstado",
    data: { id, estado },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}

function actualizar(){
  let id = $("#idproyecto").val();
  let totalactividades = $("#totalactividades").val();
  let feEntrega = $("#feEntrega").val();
  let descripcion = $("#descripcion").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/proyectoActualizar",
    data: { id, totalactividades, feEntrega, descripcion },
    success: function (response) {
      console.log(response);
      location.reload();
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}