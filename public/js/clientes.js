$(document).ready(function () {
  $("#natural-modal").show();
  $("#juridica-modal").hide();
  // $(".contenido-clientes").show();
  postPersonal()
  tablaNatural();
  tablaJuridica();
  // Manejador de clic para el botón "Natural"
  $("#natural-boton").click(function () {
    $("#juridica-modal").hide();
    $("#natural-modal").show();
  });

  // Manejador de clic para el botón "Jurídica"
  $("#juridica-boton").click(function () {
    $("#natural-modal").hide();
    $("#juridica-modal").show();
  });
  // tabla natural inicio
  $(document).ready(function () {
    $("#formulario-edicion").hide();
    tablaNatural();

    $("#task-form").submit(function (e) {
      e.preventDefault();
      const feCreate = $("#feCreate").val() || null;
      const feUpdate = getCurrentDate(); // Obtener la fecha actual
      const posData = {
        idnatural: $("#taskId").val(),
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        dni: $("#dni").val(),
        sexo: $("#sexo").val(),
        ciudad: $("#ciudad").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val(),
        direccion: $("#direccion").val(),
        feCreate: feCreate,
        feUpdate: feUpdate,
      };
      $.post(
        "http://localhost/katariPrice/clientes/actualizarNatural",
        posData,
        function (response) {
          const res = JSON.parse(response);
          if (res.success) {
            alert("Datos actualizados correctamente");
            tablaNatural();
            $("#task-form").trigger("reset");
            $("#natural-modal").show();
            $("#formulario-edicion").hide();
          } else {
            alert("Error al actualizar los datos");
          }
        }
      );
    });

    $(document).on("click", ".task-edit", function () {
      let element = $(this)[0].parentElement.parentElement;
      let idnatural = $(element).attr("taskId");
      console.log(idnatural);
      $.post(
        "http://localhost/katariPrice/clientes/verificarNatural",
        { idnatural },
        function (response) {
          const task = JSON.parse(response);
          $("#nombre").val(task.nombre);
          $("#apellidos").val(task.apellidos);
          $("#dni").val(task.dni);
          $("#sexo").val(task.sexo);
          $("#ciudad").val(task.ciudad);
          $("#telefono").val(task.telefono);
          $("#email").val(task.email);
          $("#direccion").val(task.direccion);
          $("#feCreate").val(task.feCreate);
          $("#feUpdate").val(task.feUpdate);
          $("#taskId").val(task.idnatural);
          $("#natural-modal").hide();
          $("#formulario-edicion").show();
        }
      );
    });

    $("#cerrar-boton").click(function () {
      $("#formulario-edicion").hide();
      $("#natural-modal").show();
    });

    $("#natural-search").on("input", function () {
      buscarNatural($(this).val());
    });
  });

  function tablaNatural() {
    $.ajax({
      type: "GET",
      url: "http://localhost/katariPrice/clientes/verNatural",
      success: function (response) {
        tasks = JSON.parse(response);
        template = "";
        tasks.forEach((task) => {
          template += `
                    <tr taskId="${task.idnatural}" id="${task.idnatural}">
                        <td>${task.idnatural}</td>
                        <td><a href="#">${task.nombre}</a></td>
                        <td>${task.dni}</td>
                        <td>${task.ciudad}</td>
                        <td><button class="task-edit success button">Detalles</button></td>
                    </tr>
                `;
        });
        $("#tasks").html(template);
        initPaginador(5, "tasks", "natural-paginador");
      },
      error: function (error) {
        console.log("ERROR EN LA PETICION: " + error);
      },
    });
  }

  function buscarNatural(query) {
    $.ajax({
      type: "GET",
      url: "http://localhost/katariPrice/clientes/buscarNatural",
      data: { query: query },
      success: function (response) {
        tasks = JSON.parse(response);
        let template = "";
        tasks.forEach((task) => {
          template += `
                    <tr taskId="${task.idnatural}" id="${task.idnatural}">
                        <td>${task.idnatural}</td>
                        <td><a href="#">${task.nombre}</a></td>
                        <td>${task.dni}</td>
                        <td>${task.ciudad}</td>
                        <td><button class="task-edit success button">Detalles</button></td>
                    </tr>
                `;
        });
        $("#tasks").html(template);
      },
      error: function (error) {
        console.log("ERROR EN LA PETICION: " + error);
      },
    });
  }

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses comienzan en 0
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // tabla natural fin

  // tablajuridica
  function tablaJuridica() {
    $.ajax({
      type: "GET",
      url: "http://localhost/katariPrice/clientes/verJuridica",
      success: function (response) {
        // console.log(response);
        tasks = JSON.parse(response);
        template = "";
        tasks.forEach((task) => {
          template += `
              <tr id="${task.idjuridica}">
                <td>${task.idjuridica}</td>
                <td>${task.razonsocial}</td>
                <td>${task.ruc}</td>
                <td>${task.telefono}</td>
                <td>${task.email}</td>
                <td>${task.rubro}</td>
                <td>${task.web}</td>
                <td><a href="http://localhost/katariPrice/clientes/detallesJuridica/${task.idjuridica}" class="task-edit success button">Detalles</a></td>
              </tr>
          `;
        });
        $("#task-juridica").html(template);
        // seleccionarNatural(response);
        initPaginador(5, "task-juridica", "juridica-paginador");
      },
      error: function (error) {
        console.log("ERROR EN LA PETICION: " + error);
      },
    });
  }

  // Manejadores para los inputs de búsqueda

  $("#juridica-search-btn").click(function () {
    buscar("juridica");
  });

  $("#natural-search-btn").click(function () {
    buscar("natural");
  });
});

function postPersonal() {
  $("#update-juridica").on("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        confirmation(1, "Actualizado Correctamente!",2);
      },
      error: function (error) {
        confirmation(0, "ERROR AL CREAR");
      },
    });
  });
}