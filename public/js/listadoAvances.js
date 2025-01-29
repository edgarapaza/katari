$(document).ready(function () {
  $("#modal-informe").hide();
  personalAvances();
  selectPersonal();
  agregarPersonal();
  subirInforme()
});
function personalAvances() {
  let id = $("#idproyecto").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/avancesPersonal",
    data: { id },
    success: function (response) {
      //console.log(response)
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr id="${element.idpersonal}">
                    <td>${element.num}</td>
                    <td>${element.nombres}</td>
                    <td>${element.reportes}</td>
                    <td><button class="button alert" id="subir">Subir Informe</button></td>
                </tr>`;
      });
      $("#tabla-participantes").html(html);
    },
    error: function (error) {
      console.log("error en ver personal avances" + error);
    },
  });
}

function selectPersonal() {
  let id = $("#idproyecto").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/listado/personalAvances",
    data: { id },
    success: function (response) {
      //console.log(response)
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                    <option value="${element.idpersonal}">${element.nombres}</option>
                    `;
      });
      $("#personal").html(html);
    },
    error: function (error) {
      console.log("error en ver personal avances" + error);
    },
  });
}

function subirInforme() {
  $(document).on("click", "#subir", function () {
    $("#modal-informe").show();
    let idpersonal = $(this).parent().parent().attr("id");
    let idproyecto = $("#idproyecto").val();
    let asunto = $("#asunto").val();
    let descripcion = $("#descripcion").val();
    let iniciales = $("#iniciales").val();
    $("#subir-informe").click(function () {
      $.ajax({
        type: "POST",
        url: "http://localhost/katariPrice/listado/subirInforme",
        data: { idpersonal, idproyecto, asunto, descripcion,iniciales },
        success: function (response) {
          confirmation(1, "Informe Subido Con Exito!");
          $("#modal-informe").hide();
          //console.log(response);
          personalAvances();
        },
        error: function (error) {
          confirmation(0, "ERROR AL SUBIR EL INFORME");
          //console.log("error:" + error);
        },
      });
    });
  });
}
function agregarPersonal() {
  $(document).on("click", "#agregar", function () {
    let idproyecto = $("#idproyecto").val();
    let idpersonal = $("#personal").val();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/listado/agregar",
      data: { idproyecto, idpersonal },
      success: function (response) {
        confirmation(1,"Personal Agregado al Proyecto Con Exito!");
        //console.log(response);
        personalAvances();
        selectPersonal();
      },
      error: function (error) {
        confirmation(0,"ERROR AL AGREGAR AL PERSONAL");
        //console.log("error:" + error);
      },
    });
  });
}
