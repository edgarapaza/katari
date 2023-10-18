<!doctype html>
<html class="no-js" lang="es">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Katari | Welcome</title>

  <!-- <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"> -->
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/foundation.css">
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/main.css">
  <!-- If you are using the gem version, you need this only -->

  <!-- Insert this within your head tag and after foundation.css -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/motion-ui@1.2.3/dist/motion-ui.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--   <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"> -->
</head>

<body>

  <div class="header">
    <div>
      <a href="<?php echo constant('URL'); ?>main">
        <img src="<?php echo constant('URL'); ?>public/img/katari.png" alt="Logo Katari" class="img-logo">
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="<?php echo constant('URL'); ?>main">Inicio</a></li>
        <li><a href="<?php echo constant('URL'); ?>empresa">Empresa</a></li>
        <li><a href="<?php echo constant('URL'); ?>productos">Productos y Servicios</a></li>
        <li><a href="<?php echo constant('URL'); ?>clientes">Clientes</a></li>
        <li class="activate"><a href="<?php echo constant('URL'); ?>contacto">
            <i class="fa-solid fa-phone"></i>
            Contacto
          </a></li>
      </ul>
    </nav>

  </div>