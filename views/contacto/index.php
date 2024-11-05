<?php require('views/header.php'); ?>
<div class="grid-container">
    <!-- codigo en HTML aqui -->
    <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/contacto.css">
    <div class="tie large text-center">
      <h1>CONTÁCTANOS</h1>
      <img src="<?php echo constant('URL'); ?>public/img/callcenter.jpg" alt="Una imagen">
    </div>
    <br>

    <div class="grid-x grid-margin-x">
    <div class="cell small-12 medium-12 large-6 callout">
        <div class="cell text-center">
          <h4 class="tie">Mandanos un mensaje</h4>
        </div>
        <form action="../controller/gmail.php" method="POST">
          <label for="nombre">Nombre
            <input type="text" id="nombre" name="nombre" required placeholder="Nombre">
          </label>
          <label for="txtcosto">Correo Electrónico
            <input type="email" id="correo" name="correo" required placeholder="Correo Electrónico">
          </label>
          <label for="txtcosto">Telefono
            <input type="tel" id="telefono" name="telefono" required placeholder="Numero de Telefono"> 
          </label>
          <label for="txtcosto">Mensaje
            <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Mensaje de texto"></textarea>
          </label>
          <div class="cell text-center">
            <button class="submit success button" type="submit">ENVIAR</button>
          </div>
        </form>
    </div>
    <div class="cell small-12 medium-12 large-6 callout">
    <div class="cell text-center">
          <h4 class="tie">Datos de Contacto</h4>
        </div>
          <table class="responsive-card-table text-center unstriped">
            <thead>
              <tr>
                <th class="datos text-center">Información</th>
                <th class="datos text-center">Datos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Direccion:</th>
                <td>
                  <span class="icon-location"></span>
                  Jr. Victor E. Chave 153 - Puno
                </td>
              <tr>
                <th>Telefono:</th>
                <td>
                  <span class="icon-phone"></span>
                  (051) 935 017 466
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <p>
                    <span class="icon-mail"></span>
                    edgarapaza@katari.org.pe <br>
                    edgarapazac@gmail.com
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr>
          <div class="row text-center">
            <h4 class="tie">Horario de atencion</h4>
            <h6>Horario de 8:00 a.m - 4:00 p.m de lunes a viernes</h6>
            <h6>Horario de 9:00 a.m - 2:00 p.m Sabados</h6>
          </div>
    </div>
  </div>
    
    <div class="row text-center">
      <h3 class="ub">Nos Ubicamos en:</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.3891353688305!2d-70.02193498980809!3d-15.83613222391986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69961a4f9ded%3A0x7abf4a9f2e045066!2sV%C3%ADctor%20Echave%20153%2C%20Puno%2021001!5e0!3m2!1ses-419!2spe!4v1730392882247!5m2!1ses-419!2spe" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <hr>
</div>
<?php require('views/footer.php'); ?>