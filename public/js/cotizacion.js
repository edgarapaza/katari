// BOTONES FUNCIONES- REGISTRAR Y GUARDA NATURAL Y JURIDICO-POP UPS--->> NO TOCAR -------------
$(document).ready(function () {
  $("#main-form").hide();
  // OCULTA LOS MODALES
  $("#natural-modal").hide();
  $("#juridica-modal").hide();
  $("#natural-form").hide();
  $("#juridica-form").hide();
  //ocultar datos ->natural y juridica
  $("#datos-natural").hide();
  $("#datos-juridica").hide();
  // MUESTRA INPUT ESTADISTICA
  $("#contenido-estadistica").show();
  // INPUT ESTADISTICA END
  // SELECT PARA QUE APAREZCA EL FORMULARIO
  $("#servicio").change(function () {
    // Oculta todos los divs con clase "contenido"
    $(".contenido").hide();
    // Obtiene el valor seleccionado en el select
    var opcionSeleccionada = $(this).val();
    // Muestra el div correspondiente a la opción seleccionada
    $(
      "#contenido-" +
        opcionSeleccionada +
        ",#contenido1-" +
        opcionSeleccionada +
        ",#contenido2-" +
        opcionSeleccionada
    ).show();
  });
  // SELECT PARA QUE APAREZCA EL FORMULARIO END
  // BOTONES NATURAL
  $("#natural-btn").click(function () {
    $("#main-form").show();
    $("#idjuridica").val("");
    $("#juridica-modal").hide();
    $("#natural-modal").show();
  });
  $("#natural-new-btn").click(function () {
    $("#natural-form").show();
  });
  // BOTON NATURAL END
  // BOTONES JURIDICO
  $("#juridica-btn").click(function () {
    $("#main-form").show();
    $("#idnatural").val("");
    $("#natural-modal").hide();
    $("#juridica-modal").show();
  });
  $("#juridica-new-btn").click(function () {
    $("#juridica-form").show();
  });
  // BOTON JURIDICO END
  // FORMULARIO NATURAL MODAL
  $("#natural-modal-form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/cotizacion/natural",
      data: $(this).serialize(),
      success: function (response) {
        tablaNatural();
        //modal de confirmacion
        confirmation(1, "Cliente Natural Creado!");
        $("#natural-form").hide();
        $("#natural-modal-form")[0].reset();
      },
      error: function (error) {
        //modal de confirmacion
        confirmation(0, "Falta rellenar el formulario");
        $("#natural-modal-form")[0].reset();
      },
    });
  });
  // FORMULARIO NATURAL MODEL END
  // FORMULARIO JURIDICA MODAL
  $("#juridica-modal-form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/cotizacion/juridica",
      data: $(this).serialize(),
      success: function (response) {
        tablaJuridica();
        $("#juridica-form").hide();
        //modal de confirmacion
        confirmation(1, "Cliente Juridica Creado!");
        $("#juridica-modal-form")[0].reset();
      },
      error: function (error) {
        //modal de confirmacion
        confirmation(0, "Falta rellenar el formulario");
        $("#juridica-modal-form")[0].reset();
      },
    });
  });
  // FORMULARIO JURIDICA MODEL END
  // CANCELAR BOTONES MODAL FORMULARIO NUEVO NATURAL Y JURIDICA
  $("#cancelar-natural-btn").click(function () {
    $("#natural-form").hide();
  });
  $("#cancelar-juridica-btn").click(function () {
    $("#juridica-form").hide();
  });

  // LLAMADA A FUNCIONES;
  tablaNatural();
  tablaJuridica();
  searchNatural();
  searchJuridica();
});
// BOTONES FUNCIONES- REGISTRAR Y GUARDA NATURAL Y JURIDICO-POP UPS--->> NO TOCAR END-------------
// /-/-/-/-/-/-/-/-/-/-/-/-/---CALCULADORA DE MASTER--/-/-/-/-/-/-/-/-/-/-/-/-/-/
$(document).ready(function () {
  function attachEventsAndCalculate() {
    let servicio = $("#servicio").val();
    $("#dias, #cantidad, #precio").off("change");
    $("#dias, #cantidad, #precio").val("");
    if (servicio == "estadistica") {
      calcularEstadistica();
    } else if (servicio == "software") {
      calcularSoftware();
    } else if (servicio == "redes") {
      calcularRedes();
    } else {
      console.log("ninguna calculadora o ERROR GRAVE");
    }
  }
  $("#servicio").on("change", function () {
    attachEventsAndCalculate();
  });
  attachEventsAndCalculate();
});
// /-/-/-/-/-/-/-/-/-/-/-/-/---CALCULADORA DE MASTER-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// FUNCIONES
// -----------------TABLA NATURAL----------------
function tablaNatural() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/cotizacion/getNatural",
    success: function (response) {
      //console.log(response);
      data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `
              <tr id="${element.idnatural}">
                <td>${element.nombres}</td>
                <td>${element.dni}</td>
                <td>${element.ciudad}</td>
                <td>
                  <button class="button success seleccionar-natural">Seleccionar</button>
                </td>
              </tr>
          `;
      });
      $("#datos-natural-table").html(html);
      seleccionarNatural(response);
      initPaginador(5, "datos-natural-table", "natural-paginacion");
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// -----------------TABLA NATURAL-END-------------
// -----------------TABLA JURIDICA----------------
function tablaJuridica() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/cotizacion/getJuridica",
    success: function (response) {
      //console.log(response);
      data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `
              <tr id="${element.idjuridica}">
                <td>${element.razonsocial}</td>
                <td>${element.ruc}</td>
                <td>${element.telefono}</td>
                <td>
                  <button class="button success seleccionar-juridica">Seleccionar</button>
                </td>
              </tr>
          `;
      });
      $("#datos-juridica-table").html(html);
      seleccionarJuridica(response);
      initPaginador(5, "datos-juridica-table", "juridica-paginacion");
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// -----------------TABLA JURIDICA-END-------------
// **************FUNCION SEARCH NATURAL**************
function searchNatural() {
  $("#natural-nombre, #natural-dni").on("keyup", function () {
    let nombres = $("#natural-nombre").val();
    let dni = $("#natural-dni").val();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/cotizacion/searchNatural",
      data: { nombres, dni },
      success: function (response) {
        console.log(response);
        let data = JSON.parse(response);
        let html = "";
        data.forEach((element) => {
          html += `
                <tr id="${element.idnatural}">
                    <td>${element.nombres}</td>
                    <td>${element.dni}</td>
                    <td>${element.ciudad}</td>
                    <td>
                      <button class="button seleccionar-natural">Seleccionar</button>
                    </td>
                </tr>`;
        });
        $("#datos-natural-table").html(html);
        seleccionarNatural(response);
      },
      error: function (error) {
        console.error("Error en la solicitud", error);
      },
    });
  });
}
// **************FUNCION SEARCH NATURAL*END*************
// **************FUNCION SEARCH JURIDICA**************
function searchJuridica() {
  $("#juridica-razonsocial, #juridica-ruc").on("keyup", function () {
    let razonsocial = $("#juridica-razonsocial").val();
    let ruc = $("#juridica-ruc").val();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/cotizacion/searchJuridica",
      data: { razonsocial, ruc },
      success: function (response) {
        console.log(response);
        let data = JSON.parse(response);
        let html = "";
        data.forEach((element) => {
          html += `
                <tr id="${element.idjuridica}">
                    <td>${element.razonsocial}</td>
                    <td>${element.ruc}</td>
                    <td>${element.telefono}</td>
                    <td>
                        <button class="button seleccionar-juridica">Seleccionar</button>
                    </td>
                </tr>`;
        });
        $("#datos-juridica-table").html(html);
        seleccionarJuridica(response);
      },
      error: function (error) {
        console.error("Error en la solicitud", error);
      },
    });
  });
}
// **************FUNCION SEARCH JURIDICA*END*************
// -----------------FUNCION SELECCIONAR NATURAL----------------
function seleccionarNatural(data) {
  $(document).on("click", ".seleccionar-natural", function () {
    //console.log("clickeado" + data);
    let id = $(this).parent().parent().attr("id");
    //console.log(id);
    let datos = JSON.parse(data);
    // Buscar por valor
    for (var i = 0; i < datos.length; i++) {
      //console.log(datos[i]);
      for (let key in datos[i]) {
        //console.log(key, datos[i][key]);
        if (datos[i][key] === id) {
          //console.log("Valor encontrado en la clave:", key);
          //console.log(datos[i]["nombres"]);
          $("#idnatural").val(datos[i]["idnatural"]);
          $("#nombres").val(datos[i]["nombres"]);
          $("#dni").val(datos[i]["dni"]);
          $("#telefono").val(datos[i]["telefono"]);
          $("#email").val(datos[i]["email"]);
          $("#direccion").val(datos[i]["direccion"]);
          $("#ciudad").val(datos[i]["ciudad"]);

          // en ves de esto-> hacer funcion para ocultar y vaciar elementos(inputs)
          $("#datos-juridica").hide();

          $("#datos-natural").show();
          $("#natural-modal").hide();
          return;
        }
      }
    }
  });
}
// -----------------FUNCION SELECCIONAR NATURAL-END---------------
// -----------------FUNCION SELECCIONAR JURIDICA----------------
function seleccionarJuridica(data) {
  $(document).on("click", ".seleccionar-juridica", function () {
    //console.log("clickeado" + data);
    let id = $(this).parent().parent().attr("id");
    //console.log(id);
    let datos = JSON.parse(data);
    // Buscar por valor
    for (var i = 0; i < datos.length; i++) {
      //console.log(datos[i]);
      for (let key in datos[i]) {
        //console.log(key, datos[i][key]);
        if (datos[i][key] === id) {
          //console.log("Valor encontrado en la clave:", key);
          //console.log(datos[i]["nombres"]);
          $("#idjuridica").val(datos[i]["idjuridica"]);
          $("#razonsocial").val(datos[i]["razonsocial"]);
          $("#ruc").val(datos[i]["ruc"]);
          $("#telefono-juridica").val(datos[i]["telefono"]);
          $("#email-juridica").val(datos[i]["email"]);
          $("#rubro").val(datos[i]["rubro"]);
          $("#web").val(datos[i]["web"]);
          // en ves de esto-> hacer funcion para ocultar y vaciar elementos(inputs)
          $("#datos-natural").hide();

          $("#datos-juridica").show();
          $("#juridica-modal").hide();
          return;
        }
      }
    }
  });
}
// -----------------FUNCION SELECCIONAR JURIDICA-END---------------

// *-*-*-*-*-*-*-FUNCIONES CALCULADORA ESTADISTICA-*-*-*-*-*-*-
function calcularEstadistica() {
  getCostosEstadistica();
  // precio MODIFICAR
  $("#nivel-estadistica,#dias,#cantidad").on("change", function () {
    // Obtencion de los datos y verificacion si estan vacios
    let costo_nivel =
      $("#nivel-estadistica").val() == ""
        ? 0
        : parseFloat($("#nivel-estadistica").val());
    let dias = $("#dias").val() == "" ? 0 : parseFloat($("#dias").val());
    let cantidad =
      $("#cantidad").val() == "" ? 1 : parseFloat($("#cantidad").val());
    // calculos para sacar precio
    let total = ((costo_nivel + dias * 10) * cantidad).toFixed(2);
    console.log(costo_nivel, dias, cantidad, total);
    $("#precio").val(total);
  });
}
function getCostosEstadistica() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/cotizacion/getCostosEstadistica",
    success: function (response) {
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.precio}" data-id="${element.idcosto}">${element.descripcion}</option>`;
      });
      $("#nivel-estadistica").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// *-*-*-*-*-*-*-FUNCIONES CALCULADORA ESTADISTICA END-*-*-*-*-*-*-

// *-*-*-*-*-*-*-FUNCIONES CALCULADORA DE SOFTWARE-*-*-*-*-*-*-
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
    $("#calcular").hide();
    $("#guardar-software").show();
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
    guardarSoftware();
  });
}
function guardarSoftware() {
  // OBTENDRA TODOS LOS VALORES DE LOS INPUTS DE CALCULADORA DE SOFTWARE Y GUARDARA
  // EN LA BASE DE DATOS
  $("#guardar-software").on("click", function () {
    let nombre = $("#nombre-proyecto").val();
    let descripcion = $("#miTextareaCalc").val();
    let selectedDificultad = $("#dificultad").find("option:selected"); // selector
    let iddificultad = selectedDificultad.data("id");
    let selectedLenguaje = $("#lenguaje").find("option:selected"); // selector
    let idlenguaje = selectedLenguaje.data("id");
    let selectedAplicacion = $("#aplicacion").find("option:selected"); // selector
    let idaplicacion = selectedAplicacion.data("id");
    let costoservicio = $("#servicio-software").val();
    let duracionsemanas = $("#duracion").val() == "" ? 0 : $("#sprints").val();
    let costomantenimiento =
      $("#cost-mantenimiento").val() == "" ? 0 : $("#cost-mantenimiento").val();
    let tiempomantenimiento =
      $("#tiempo-mantenimiento").val() == ""
        ? "No Definido"
        : `${$("#tiempo-mantenimiento").val()} meses`;
    let opciones =
      $("#conservidor").prop("checked") == false
        ? "sin servidor"
        : "con servidor";
    let subtotal = $("#subtotal-software").val();
    let igv = $("#igv-software").val();
    let total = $("#total-software").val();
    let idpersonal = $("#idpersonal").val();
    $.ajax({
      type: "POST",
      url: "http://localhost/katariPrice/cotizacion/calcSoftware",
      data: {
        nombre,
        descripcion,
        iddificultad,
        idlenguaje,
        idaplicacion,
        costoservicio,
        duracionsemanas,
        costomantenimiento,
        tiempomantenimiento,
        opciones,
        subtotal,
        igv,
        total,
        idpersonal,
      },
      success: function (response) {
        if (response) {
          confirmation(1, "Costos Guardado, Siga llenando la cotización");
          $("#contenido-software").hide();
          $("#idcalcSoftware").val(response);
        }
      },
      error: function (error) {
        confirmation(0, "Falta rellenar el formulario");
        //console.log("ERROR EN LA PETICION: " + error);
      },
    });
  });
}
function getDificultad() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/calculadora/getDificultad",
    success: function (response) {
      //console.log(response);
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.factor}" data-id="${element.iddificultad}">${element.iddificultad}</option>`;
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
        html += `<option value="${element.precio}" data-id="${element.idlenguaje}">${element.lenguaje}</option>`;
      });
      $("#lenguaje").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
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
        html += `<option value="${element.precio}" data-id="${element.idaplicacion}">${element.aplicacion}</option>`;
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
// *-*-*-*-*-*-*-FUNCIONES CALCULADORA DE SOFTWARE -END-*-*-*-*-*-*-
// *-*-*-*-*-*-*-FUNCIONES CALCULADORA DE REDES -*-*-*-*-*-*-
function calcularRedes() {
  getRedesServicios();
  $("#redes,#dias,#cantidad").on("change", function () {
    let redes = parseFloat($("#redes").val());
    let dias = $("#dias").val() == "" ? 0 : parseFloat($("#dias").val());
    let cantidad =
      $("#cantidad").val() == "" ? 1 : parseFloat($("#cantidad").val());
    let total = (redes + dias * 25 + cantidad).toFixed(2);
    $("#precio").val(total);
  });
}
function getRedesServicios() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/cotizacion/getRedes",
    success: function (response) {
      console.log(response)
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `<option value="${element.precio}" data-id="${element.idcosto}">${element.descripcion}</option>`;
      });
      $("#redes").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// *-*-*-*-*-*-*-FUNCIONES CALCULADORA DE REDES -END-*-*-*-*-*-*-

// *-*-*-*-*-*-*-GUARDAR TODO EL FORMULARIO->PRINCIPAL
$(document).ready(function () {
  $("#guardar-todo").click(function () {
    let type_form = $("#servicio").val();
    if (type_form == "estadistica") {
      postEstadistica();
    } else if (type_form == "software") {
      postSoftware();
    } else if (type_form == "redes") {
      postRedes();
    } else {
      console.log("ERROR EN SELECCIONAR TIPO DE SERVICIO");
    }
  });
});
//CREAR FUNCIONES PARA GUARDAR CADA TIPO DE SERVICIO
function postEstadistica() {
  var id = "";
  if ($("#idnatural").val() !== "") {
    var id = $("#idnatural").val();
    var tipoCliente = "natural";
  } else if ($("#idjuridica").val() !== "") {
    var id = $("#idjuridica").val();
    var tipoCliente = "juridica";
  } else {
    confirmation(0, "SELECCIONE UNA PERSONA PARA CONTINUAR");
    return;
  }
  let servicio = "100";
  let selectedNivel = $("#nivel-estadistica").find("option:selected"); // selector
  let costo = selectedNivel.data("id");
  let idpersonal = $("#idpersonal").val();
  let dias = $("#dias").val();
  let cantidad = $("#cantidad").val();
  let precio = $("#precio").val();
  let fecha = $("#fecha").val();
  let descripcion = $("#miTextarea").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/cotizacion/postEstadistica",
    data: {
      id,
      servicio,
      costo,
      idpersonal,
      dias,
      precio,
      cantidad,
      fecha,
      descripcion,
      tipoCliente,
    },
    beforeSend: function () {
      $("#en-espera").show();
      $("#guardar-todo").hide();
    },
    success: function (response) {
      confirmation(1, "Cotizacion de Estadistica Guardada!",1);
    },
    error: function (error) {
      confirmation(0, "Falta rellenar el formulario");
    },
  });
}
function postSoftware() {
  var id = "";
  if ($("#idnatural").val() !== "") {
    var id = $("#idnatural").val();
    var tipoCliente = "natural";
  } else if ($("#idjuridica").val() !== "") {
    var id = $("#idjuridica").val();
    var tipoCliente = "juridica";
  } else {
    confirmation(0, "SELECCIONE UNA PERSONA PARA CONTINUAR");
    return;
  }
  // Id de la ultima cotizacion insertada-> NO TOCAR--?>>> HACER UNA VALIDACION SI ESTA VACIO ESTE CAMPO
  let idcalcSoftware = $("#idcalcSoftware").val();
  let servicio = "200";
  let selectedCosto = $("#servicio-software").find("option:selected"); // selector
  let idcosto = selectedCosto.data("id");
  let idpersonal = $("#idpersonal").val();
  let dias = $("#dias").val();
  let cantidad = $("#cantidad").val();
  let precio = $("#precio").val();
  let fecha = $("#fecha").val();
  let descripcion = $("#miTextarea").val();
  if (idcalcSoftware == "") {
    alert("Por favor ingrese datos en los calculos de la cotizacion");
    $("#contenido-software").show();
    return;
  }
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/cotizacion/postSoftware",
    data: {
      id,
      servicio,
      idcosto,
      idpersonal,
      dias,
      precio,
      cantidad,
      fecha,
      descripcion,
      idcalcSoftware,
      tipoCliente,
    }, 
    beforeSend: function () {
      $("#en-espera").show();
      $("#guardar-todo").hide();
    },
    success: function (response) {
      //console.log(response);
      confirmation(1, "Cotizacion de Software Guardada!",1);
    },
    error: function (error) {
      //console.log("ERROR EN LA PETICION SOFTWARE: " + error);
      confirmation(0, "Falta rellenar el formulario");
    },
  });
}
function postRedes() {
  var id = "";
  if ($("#idnatural").val() !== "") {
    var id = $("#idnatural").val();
    var tipoCliente = "natural";
    var nombre = $("#nombres").val();
  } else if ($("#idjuridica").val() !== "") {
    var id = $("#idjuridica").val();
    var tipoCliente = "juridica";
    var nombre = $("#razonsocial").val();
  } else {
    confirmation(0, "SELECCIONE UNA PERSONA PARA CONTINUAR");
    return;
  }
  let servicio = "300";
  let selectedRed = $("#redes").find("option:selected");
  let costo = selectedRed.data("id");
  let idpersonal = $("#idpersonal").val();
  let dias = $("#dias").val();
  let cantidad = $("#cantidad").val();
  let precio = $("#precio").val();
  let fecha = $("#fecha").val();
  let descripcion = $("#miTextarea").val();
  let fileInput = document.getElementById("file-upload");
  let file = fileInput.files[0]; // Obtén el primer archivo seleccionado
  // Crear un objeto FormData y agregar todos los datos del formulario
  let formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("id", id);
  formData.append("servicio", servicio);
  formData.append("costo", costo);
  formData.append("idpersonal", idpersonal);
  formData.append("dias", dias);
  formData.append("cantidad", cantidad);
  formData.append("precio", precio);
  formData.append("fecha", fecha);
  formData.append("descripcion", descripcion);
  formData.append("tipoCliente", tipoCliente);
  formData.append("excel", file);
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/cotizacion/postRedes",
    data: formData,
    processData: false, // No procesar los datos, es decir, enviar tal cual
    contentType: false, // No establecer ningún tipo de contenido
    beforeSend: function () {
      $("#en-espera").show();
      $("#guardar-todo").hide();
    },
    success: function (response) {
      //console.log(response);
      confirmation(1, "Cotizacion de Redes Guardada!",1);
    },
    error: function (error) {
      //console.log("ERROR EN LA PETICION REDES: " + error);
      confirmation(0, "Falta rellenar el formulario");
    },
  });
}
// *-*-*-*-*-*-*-GUARDAR TODO EL FORMULARIO->PRINCIPAL END

// ++++++++++++VALIDA LOS INPUTS PARA QUE NO INTRODUZCA DATOS ERRONEOS++++++++++++++++
$(document).ready(function () {
  //numberFloat(selector)
  //justStrings(selector)
  //numberLeght(selector, maxLength)
  numberLeght("#dias,#cantidad,#sprints,#tiempo-mantenimiento", 3);
  numberLeght("#nat-dni,#natural-dni", 8);
  numberLeght("#nat-telefono,#jur-telefono", 9);
  numberFloat("#precio,#cost-mantenimiento");
  justStrings(
    "#nat-nombre,#nat-apellidos,#nat-ciudad,#jur-razonsocial,#jur-rubro,#natural-nombre,#juridica-razonsocial"
  );
  numberLeght("#jur-ruc,#juridica-ruc", 11);
});
// ++++++++++++VALIDA LOS INPUTS PARA QUE NO INTRODUZCA DATOS ERRONEOS++++++++++++++++
$(document).ready(function () {
  dni();
  ruc();
});
function dni() {
  var token = "apis-token-8574.bPsef4wHOYjVwA7bFoDMZqLLrNrAMKiY";
  $("#nat-dni").on("keyup", function () {
    var dni = $("#nat-dni").val();
    if (dni.length == 8) {
      $.ajax({
        url: "http://localhost/katariPrice/actions/dni",
        type: "POST",
        data: { dni: dni },
        success: function (response) {
          let data = JSON.parse(response);
          if (data == 1) {
            alert("El DNI debe tener 8 dígitos");
          } else {
            console.log(data);
            $("#nat-nombre").val(data.nombres);
            $("#nat-apellidos").val(
              data.apellidoPaterno + " " + data.apellidoMaterno
            );
          }
        },
        error: function (xhr, status, error) {
          console.log(error + "->No se pudo hacer la solicitud a la API");
        },
      });
    } else {
      console.log("no hay dni");
    }
  });
}
function ruc() {
  $("#jur-ruc").on("keyup", function () {
    var ruc = $("#jur-ruc").val();
    if (ruc.length == 11) {
      $.ajax({
        type: "POST",
        url: "http://localhost/katariPrice/actions/ruc",
        data: { ruc: ruc },
        dataType: "json",
        success: function (data) {
          if (data == 1) {
            alert("El RUC tiene que tener 11 dígitos");
          } else {
            console.log(data);
            $("#jur-razonsocial").val(data.nombre);
            $("#jur-direccion").val(data.direccion);
          }
        },
      });
    } else {
      console.log("no hay ruc");
    }
  });
}
