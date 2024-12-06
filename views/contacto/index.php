<?php require('views/header.php'); ?>
<div class="grid-container">
    <!-- codigo en HTML aqui -->
    <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/contacto.css">
    <div class="tie large text-center">
      <h1>CONTÁCTANOS</h1>
      <img src="<?php echo constant('URL'); ?>public/img/callcenter1.jpg" alt="Contactos"/>
    </div>
    <br>

<br>

<div class="grid-x">

  <!-- formaulario de contacto-->
  <div class="columns small-12  large-7">
    <form action="../controller/gmail.php" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" required>

        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button class="submit success button" type="submit">ENVIAR</button>
    </form>
  </div>

  <!-- Datos institucion -->

  <div class="columns small-12 large-5 text-center">
    <table class="responsive-card-table unstriped " >
      <thead>
        <tr>
          <th></th>
          <th>Datos</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th>Direccion:</th>
          <td>
            <span class="icon-location"></span>
              Pasaje Manuel A. Segura 144 - Barrio Miraflores - Puno
          </td>
        <tr>
          <th>Telefono:</th>
          <td>
            <span class="icon-phone"></span>
            +(051) 935 017 466
          </td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>
            <p>
            <span class="icon-mail"></span>
            edgarapaza@katari.pe | edgarapazac@gmail.com
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <hr>
</div>

  <br>
<div class="row text-center">
    <h4>Horario de atencion</h4>
    <h6>Horario corrido de 8:00 a.m - 4:00 p.m de lunes a viernes</h6>
    <h2></h2>
</div>
<!-- <div class="row text-center">
    <h3>Ubicación</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5427.813546723747!2d-70.01611579712919!3d-15.854296913775734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6988bf294ca5%3A0xefb4b3011ada2eb4!2sArchivo%20Regional%20de%20Puno!5e0!3m2!1ses-419!2spe!4v1694015263789!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> -->

</div>
<br>
<?php require('views/footer.php');?>
