<!doctype html>
<html class="no-js" lang="es">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E-Stat | Welcome</title>

  <!-- <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"> -->
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/foundation.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link rel="stylesheet" href="<?php echo constant('URL')?>public/css/header.css">
  <link rel="stylesheet" href="<?php echo constant('URL')?>public/css/footer.css">

</head>

<body>

<div class="grid-container-fluid">

  <div class="grid-x fondo">

      <div class="cell small-12 medium-6 large-6 ladoA">
        <div class="imagen">
          <img src="<?php echo constant('URL');?>public/img/logo1.png" alt="logo">

        </div>

      </div>
      <div class="cell small-12 medium-6 large-6 ladoB">

        <nav class="menu">
          <ul class="">
            <li><a href="<?php echo constant('URL'); ?>main">Inicio</a></li>
            <li><a href="<?php echo constant('URL'); ?>catalogo">Software</a></li>
            <li><a href="<?php echo constant('URL'); ?>productos">Servicios</a></li>
            <li><a href="<?php echo constant('URL'); ?>blog">Blog</a></li>

            <li class="activate"><a href="<?php echo constant('URL'); ?>contacto">
                <i class="fa-solid fa-phone"></i>
                Contacto
              </a></li>
              <li><pre>    </pre></li>
          </ul>
        </nav>

        <div class="text-header">
          <h2 class="text-header-title">SOBRE NOSOTROS</h2>
          <p class="text-header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum distinctio vero fugit, at rerum consequuntur adipisci ipsum beatae aliquid voluptates esse libero. Voluptas, corporis fuga facere blanditiis. Tempora, quas.</p>
          <button class="button text-header-button">Leer mas +</button>
        </div>
      </div>

  </div>

  <br><br>
  <div class="grid-x">
    <div class="cell division">
      <h2>La vida es muy simple, pero insistimos en hacerla complicada</h2>
    </div>
  </div>

  <br><br>
  <div class="grid-x">

    <div class="cell analisis">
      <h2>Analisis Estadistico</h2>
      <h4>Te ayudamos con Tesis de Pre grado, Post grado o doctarado usando el Software R </h4>

      <button class="button miboton">Contactanos</button>
      <button class="button miboton warning">FAQ</button>
    </div>
  </div>
</div>

<div class="grid-container">
  <div class="grid-x grid-margin-x small-up-2 medium-up-3">
    <div class="cell">
      <div class="card">
        <img src="assets/img/generic/rectangle-1.jpg">
        <div class="card-section">
        <h4>This is a row of cards.</h4>
          <p>This row of cards is embedded in an X-Y Block Grid.</p>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="card">
        <img src="assets/img/generic/rectangle-1.jpg">
        <div class="card-section">
          <h4>This is a card.</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="card">
        <img src="assets/img/generic/rectangle-1.jpg">
        <div class="card-section">
          <h4>This is a card.</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<?php require('views/footer.php'); ?>
