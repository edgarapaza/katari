function numberFloat(selector) {
  $(selector).on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9.]/g, "")
    );
  });
}
function justStrings(selector) {
  $(selector).on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^a-zA-Z\s.,&-]/g, "")
    );
  });
}
function numberLeght(selector, maxLength) {
  $(selector).on("input", function () {
    let valor = $(this)
      .val()
      .replace(/[^0-9]/g, "");
    if (valor.length > maxLength) {
      valor = valor.slice(0, maxLength);
    }
    $(this).val(valor);
  });
}

// OCULTA LOS MODALES
$(document).ready(function () {
  $('.modal-confirmacion-global, .modal-error-global').css({ 'display': 'none' });
})
// CONFIRMACION ,,, 1=EXITO, 0=ERROR
function confirmation(type, mensaje,reload = 0) {
  if (type == 1) {
    $('.modal-confirmacion-global').css({ 'display': 'flex' });
    $("#mensaje-modal").html(mensaje);
    $("#modal-confirmacion-global").fadeIn();
    //$("#modal-confirmacion-global").show();
  }
  if (type == 0) {
    $('.modal-error-global').css({ 'display': 'flex' });
    $("#mensaje-modal-error").html(mensaje);
    $("#modal-error-global").fadeIn();
    //$("#modal-error-global").show();
  }
  $("#btn-confirm,#btn-error").on("click", function () {
    $("#modal-confirmacion-global").fadeOut();
    $("#modal-error-global").fadeOut();
    if(reload == 1){
      window.location.href = 'http://localhost/katariPrice/listado';
      //window.location.reload();
    }
    if(reload == 2){
      window.location.href = 'http://localhost/katariPrice/clientes';
      //window.location.reload();
    }
    // $("#modal-confirmacion-global").hide();
    // $("#modal-error-global").hide();
  });
}


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// NUMS = NUMERO DE FILAS
// IDTABLE = ID DE LA TALBA SIN EL #
// IDPAGINADOR = ID DEL PAGINADOR-> ES UN DIV VACIO CON ID
function initPaginador(nums, idtable, idpaginador) {
  var parametros = {
    items: nums,
    namecookies: "tabla",
    next: "Siguiente",
    previous: "Anterior",
    inicial: "Primero",
    final: "Último",
    minimize: true,
    tablecontent: idtable,
    basenumerador: idpaginador,
  };
  $(`#${idtable}`).jPaginate(parametros);
}

//-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
