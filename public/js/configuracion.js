$(document).ready(function () {
  tablaCostos();
  tablaAplicaciones();
  tablaServicios();
  tablaLenguajes();
  tablaDificultad();
});
function tablaCostos() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/configuracion/tablaCostos",
    success: function (response) {
      data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += ` <tr>
                            <td>${element.servicio}</td>
                            <td>${element.descripcion}</td>
                            <td>${element.precio}</td>
                            <td><button class="button warning">Editar</button></td>
                            <td><button class="button alert">Eliminar</button></td>
                        </tr>`;
      });
      $("#tabla-costos").html(html);
      initPaginador(3, "tabla-costos", "costos-paginacion");
    },
    error: function (error) {
      console.log("ERROR", error);
    },
  });
}
function tablaAplicaciones() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/configuracion/tablaAplicaciones",
    success: function (response) {
      data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `   <tr>
                        <td>${element.aplicacion}</td>
                        <td>${element.descripcion}</td>
                        <td>${element.precio}</td>
                        <td><button class="button warning">Editar</button></td>
                        <td><button class="button alert">Eliminar</button></td>
                    </tr>`;
      });
      $("#tabla-aplicaciones").html(html);
      initPaginador(3, "tabla-aplicaciones", "aplicaciones-paginacion");
    },
    error: function (error) {
      console.log("ERROR", error);
    },
  });
}
function tablaServicios() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/configuracion/tablaServicios",
    success: function (response) {
        data = JSON.parse(response);
        html = "";
        data.forEach((element) => {
          html += `   <tr>
                          <td>${element.idservicio}</td>
                          <td>${element.servicio}</td>
                          <td><button class="button warning">Editar</button></td>
                          <td><button class="button alert">Eliminar</button></td>
                      </tr>`;
        });
        $("#tabla-servicios").html(html);
        initPaginador(3, "tabla-servicios", "servicios-paginacion");
    },
    error: function (error) {
      console.log("ERROR", error);
    },
  });
}
function tablaLenguajes() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/configuracion/tablaLenguajes",
    success: function (response) {
        data = JSON.parse(response);
        html = "";
        data.forEach((element) => {
          html += `   <tr>
                          <td>${element.lenguaje}</td>
                          <td>${element.precio}</td>
                          <td><button class="button warning">Editar</button></td>
                          <td><button class="button alert">Eliminar</button></td>
                      </tr>`;
        });
        $("#tabla-lenguajes").html(html);
        initPaginador(3, "tabla-lenguajes", "lenguajes-paginacion");
    },
    error: function (error) {
      console.log("ERROR", error);
    },
  });
}
function tablaDificultad() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/configuracion/tablaDificultad",
    success: function (response) {
        data = JSON.parse(response);
        html = "";
        data.forEach((element) => {
          html += `   <tr>
                          <td>${element.factor}</td>
                          <td>${element.porcentaje}</td>
                          <td><button class="button warning">Editar</button></td>
                          <td><button class="button alert">Eliminar</button></td>
                      </tr>`;
        });
        $("#tabla-dificultad").html(html);
        initPaginador(3, "tabla-dificultad", "dificultad-paginacion");
    },
    error: function (error) {
      console.log("ERROR", error);
    },
  });
}
