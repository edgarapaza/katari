$(document).ready(function () {
  pagos();
});
function pagos() {
  $.ajax({
    type: "GET",
    url: `http://localhost/katariPrice/pagos/pagos`,
    success: function (response) {
      let data = JSON.parse(response);
      let html = "";
      data.forEach((element) => {
        html += `
                <tr>
                    <td>${element.idproyecto}</td>
                    <td>${element.proyecto}</td>
                    <td>${element.cliente}</td>
                    <td>${element.estado}</td>
                    <td>${element.fecha}</td>
                    <td>${element.deuda}</td>
                    <td>${element.total}</td>
                    <td>${element.telefono}</td>
                    <td><a href="http://localhost/katariPrice/listado/proyectoPagos/${element.idproyecto}" class="button warning">Detalles</a></td>
                </tr>`;
      });
      $("#pagos").html(html);
      initPaginador(5, "pagos", "pago-paginacion")
    },
    error: function (error) {
      console.log("error:" + error);
    },
  });
}
