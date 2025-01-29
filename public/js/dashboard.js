$(document).ready(function () {
  datos();
  proyectos();
  graficoPastel();
  graficoBarras();
  graficoLineal();
  graficoArea();
});
// DATOS
function datos() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/dashboard/datos",
    success: function (response) {
      let data = JSON.parse(response);
      $("#total-cotizaciones").html(data.cotizaciones);
      $("#total-proyectos").html(data.proyectos);
      let recaudado = parseFloat(data.recaudado);
      $("#total-recaudado").html(recaudado.toFixed(2));
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
function proyectos() {
  let id = $("#idpersonal").val();
  $.ajax({
    type: "POST",
    url: "http://localhost/katariPrice/dashboard/proyectos",
    data: { id },
    success: function (response) {
      let data = JSON.parse(response);
      html = "";
      data.forEach((element) => {
        html += `
            <div class="grid-x align-spaced">
              <p>${element.proyecto}</p><a href="http://localhost/katariPrice/listado/proyectoNaturalDetalle/${element.idproyecto}"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
                `;
      });
      $("#mis-proyectos").html(html);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// DATOS END

// ///////////////////////////////GRAFICOS////////////////////////////////////////////
// BARRAS END*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
function graficoBarras() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/dashboard/graficoBarras",
    success: function (response) {
      let datos = JSON.parse(response);
      const data = {
        labels: ["Espera", "Aceptado", "Proyecto", "Cancelado"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              datos.espera,
              datos.aceptado,
              datos.proyecto,
              datos.rechazado,
            ],
            borderWidth: 1,
          },
        ],
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
      new Chart($("#barras"), config);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}
// BARRAS END*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// PASTEL --------------------------------------------------
function graficoPastel() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/dashboard/graficoPastel",
    success: function (response) {
      let datos = JSON.parse(response);
      const data = {
        labels: ["Estadistica", "Software", "Redes"],
        datasets: [
          {
            label: "My First Dataset",
            data: [datos.estadistica, datos.software, datos.redes],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "doughnut",
        data: data,
      };
      new Chart($("#pastel"), config);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}

// PASTEL END--------------------------------------------------
// LINEAS *******************************************************
function graficoLineal() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/dashboard/graficoLineal",
    success: function (response) {
      let datos = JSON.parse(response);
      const labels = datos.mes;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: datos.total,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
      const config = {
        type: "line",
        data: data,
      };
      new Chart($("#lineal"), config);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}


// LINEAS END*******************************************************
// AREA /*/*/*/*/*/*/*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/*/*/*/*/*/*/* */
function graficoArea() {
  $.ajax({
    type: "GET",
    url: "http://localhost/katariPrice/dashboard/graficoArea",
    success: function (response) {
      let datos = JSON.parse(response);
      const data = {
        labels: datos.nombre,
        datasets: [
          {
            label: "My First Dataset",
            data: datos.total,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(201, 203, 207)",
              "rgb(54, 162, 235)",
            ],
          },
        ],
      };
      const config = {
        type: "polarArea",
        data: data,
        options: {},
      };
      new Chart($("#area"), config);
    },
    error: function (error) {
      console.log("ERROR EN LA PETICION: " + error);
    },
  });
}


// AREA END/*/*/*/*/*/*/*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/*/*/*/*/*/*/*
///////////////////////////////////////GRAFICOS END//////////////////////////////////
