$(document).ready(function () {
  pagoDetalles();
  deudas()
  $("#pago-modal").hide();
  $("#registrar-pago").click(function () {
    $("#pago-modal").show();
  });
  $("#guardar-pago").click(function () {
    postPago()
  });
  $("#cancelar-pago").click(function () {
    $("#pago-modal").hide();
  });

});
// DETALLES DE PAGOS DE UN PROYECTO EN ESPECIFICO
function pagoDetalles() {
  let idpago = $("#idpago").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/pagoDetalle",
    data: { idpago },
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      let i = 1;
      data.forEach(element => {
        html += `
                    <tr id="${element.idpagodetalle}">
                        <td>${i}</td>
                        <td>${element.concepto}</td>
                        <td>${element.fecha}</td>
                        <td class="text-right">${element.monto}</td>
                    </tr>
                        `;
        i = i + 1;
      });
      $("#tabla-pago").html(html);
      // initPaginador(5, "tabla-pago", "pago-paginacion")
    }, error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    }
  });
}
function deudas() {
  let idproyecto = $("#idproyecto").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/deudaDetalle",
    data: { idproyecto },
    success: function (response) {
      let data = JSON.parse(response);
      $("#total-pagos").html(data.monto);
      $("#deuda").html(data.saldo);
      $("#total").html(data.total);
    }, error: function (error) {
      console.log("ERROR EN LA PETICION deudas: " + error);
    }
  });
}
// DETALLES DE PAGOS DE UN PROYECTO EN ESPECIFICO END

// -*-*-*-*-*-*-*-*-*-GUARDAR PAGO-*-*-*-*-*-*-*-*-*--*
function postPago() {
  let idproyecto = $("#idproyecto").val();
  let idpago = $("#idpago").val();
  let monto = $("#monto").val();
  let concepto = $("#concepto").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/postPago",
    data: { idproyecto, idpago, monto, concepto },
    success: function (response) {
      confirmation(1, "Pago Guardado Con Exito!");
      $("#pago-modal").hide();
      pagoDetalles();
      deudas()
    }, error: function (error) {
      confirmation(0, "Error al Guardar el Pago");
      //console.log("ERROR EN POST:"+error)
    }
  });
}
// -*-*-*-*-*-*-*-*-*-GUARDAR PAGO-END*-*-*-*-*-*-*-*-*--*

// ++++++++++++VALIDA LOS INPUTS PARA QUE NO INTRODUZCA DATOS ERRONEOS++++++++++++++++
$(document).ready(function () {
  //numberFloat(selector)
  //justStrings(selector)
  //numberLeght(selector, maxLength)
  numberFloat("#monto");
});
// ++++++++++++VALIDA LOS INPUTS PARA QUE NO INTRODUZCA DATOS ERRONEOS++++++++++++++++
