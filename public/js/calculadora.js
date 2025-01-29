$(document).ready(function () {
    calcularSoftware();
});

function getDificultad() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/calculadora/getDificultad",
    success: function (response) {
      //console.log(response);
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.factor}">${element.iddificultad}</option>`;
      });
      $("#dificultad").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
function getLenguaje() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/calculadora/getLenguaje",
    success: function (response) {
      //console.log(response);
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.precio}">${element.lenguaje}</option>`;
      });
      $("#lenguaje").html(html);
    },
    error: function (error) {},
  });
}
function getAplicacion() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/calculadora/getAplicacion",
    success: function (response) {
      //console.log(response);
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.precio}">${element.aplicacion}</option>`;
      });
      $("#aplicacion").html(html);
    },
    error: function (error) {},
  });
}
function getServicio() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/calculadora/getServicio",
    success: function (response) {
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.precio}" data-id="${element.idcosto}">${element.descripcion}</option>`;
      });
      $("#servicio-software").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}

function calcularSoftware() {
    $("#calcular").show();
    $("#guardar-software").hide();
    $("#costo-total").hide();
    getDificultad();
    getLenguaje();
    getAplicacion();
    getServicio();
    // CHECKBOX ACTIVATE
    $("#conservidor").on("change", function () {
      if (this.checked) {
        $("#sinservidor").prop("checked", false);
      }
    });
    $("#sinservidor").on("change", function () {
      if (this.checked) {
        $("#conservidor").prop("checked", false);
      }
    });
    // CHECKBOX ACTIVATE END
    // SPRINTS Y DURACION
    $("#sprints").on("change", function () {
      let sprints = $("#sprints").val();
      $("#duracion").val(sprints * 3);
    });
    //cerrar
    $("#close-software").on("click", function () {
      $("#contenido-software").hide();
    });
    // calcular
    $("#calcular").on("click", function () {
      // acciones al presionar CALCULAR
      $("#costo-total").show();
      // acciones al presionar CALCULAR end
      // OBTENER TODOS LOS DATOS PARA EL CALCULO
      let dificultad = parseFloat($("#dificultad").val());
      let lenguaje = parseFloat($("#lenguaje").val());
      let aplicacion = parseFloat($("#aplicacion").val());
      let tipoServicio = parseFloat($("#servicio-software").val());
      let costMantenimiento =
        $("#cost-mantenimiento").val() == ""
          ? 0
          : parseFloat($("#cost-mantenimiento").val());
      let tiempoMantenimiento =
        $("#tiempo-mantenimiento").val() == ""
          ? 0
          : parseFloat($("#tiempo-mantenimiento").val());
      let sprints = $("#sprints").val() == "" ? 1 : parseInt($("#sprints").val());
      let servidorPrecio = $("#conservidor").prop("checked") == false ? 0 : 300;
      // OBTENER TODOS LOS DATOS PARA EL CALCULO END
      // CALCULO DE PRECIO---------------------------------------------------------------------------------***************************
      let costoXsprint = sprints * 50;
      let precioDificultad =
        (tipoServicio +
          aplicacion +
          lenguaje +
          costMantenimiento * tiempoMantenimiento +
          servidorPrecio) *
        dificultad;
      let subtotal =
        precioDificultad +
        (tipoServicio +
          aplicacion +
          lenguaje +
          costMantenimiento * tiempoMantenimiento +
          costoXsprint +
          servidorPrecio);
      let igv = subtotal * 0.18;
      let total = subtotal + igv;
      // INSERCION DEL TOTAL E IGV A LOS INPUTS PARA DESPUES INSERTAR A LA BASE DE DATOS
      $("#mostrar-total").html(`s/. ${total}`);
      $("#total-software").val(total);
      $("#subtotal-software").val(subtotal);
      $("#igv-software").val(igv);
      $("#precio").val(total);
      // CALCULO DE PRECIO END------------------------------------------------------------------------------**********************
    });
  }