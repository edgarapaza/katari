<!doctype html>
<html class="no-js" lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E-Stat | Welcome</title>
    <!-- Compressed CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/css/foundation.min.css" crossorigin="anonymous">

    <!-- Compressed JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Oswald:wght@200;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:wght@200;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="<?php echo constant('URL')?>public/css/header.css">
    <link rel="stylesheet" href="<?php echo constant('URL')?>public/css/footer.css">
    <script defer src="<?php echo constant('URL')?>public/js/index.js"></script>

  </head>

  <body>

    <header class="header">
        <nav class="nav">
            <a href="#" class="logo">
                <img src="<?php echo constant('URL')?>public/img/logo1.png" alt="Logo">
            </a>
            <button class="nav-toggle" area-label="Abrir menú">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-menu nav-menu_visible">
                <li class="nav-menu-item"><a href="<?php echo constant('URL'); ?>main" class="nav-menu-link nav-link">Inicio</a></li>
                <li class="nav-menu-item"><a href="<?php echo constant('URL'); ?>catalogo" class="nav-menu-link nav-link">Software</a></li>
                <li class="nav-menu-item"><a href="<?php echo constant('URL'); ?>productos"class="nav-menu-link nav-link">Servicios</a></li>
                <li class="nav-menu-item"><a href="<?php echo constant('URL'); ?>blog" class="nav-menu-link nav-link">Blog</a></li>

                <li class="nav-menu-item"><a href="<?php echo constant('URL'); ?>contacto" class="nav-menu-link nav-link">
                    <i class="fa-solid fa-phone"></i>
                    Contacto
                  </a></li>

            </ul>
      </nav>
    </header>

    <div class="grid-container-fluid">
      <div class="grid-x">
        <div class="cell">

        </div>
      </div>
    </div>

    <div class="grid-container-fluid">
      <div class="grid-x fondo">
          <div class="cell small-12 medium-6 large-6 ladoA">
            <div class="imagen">
              <img src="<?php echo constant('URL');?>public/img/logo1.png" alt="logo">
            </div>
          </div>

          <div class="cell small-12 medium-6 large-6 ladoB">
            <div class="text-header">
              <h2 class="text-header-title">SOBRE NOSOTROS</h2>
              <p class="title3">Se realiza: Analisis Estadistico para Tesis de Pre Grado, Postgrado o Doctarado.</p>
              <p class="title3">Asesoramiento en Archivística, Redes de computadoras y Desarrollo de Software</p>
              <button class="button text-header-button">Leer mas +</button>
            </div>
          </div>

      </div>

      <br>
      <div class="grid-x">
        <div class="cell division">
          <h2 class="title"><em>La vida es muy simple, pero insistimos en hacerla complicada</em></h2>
        </div>
      </div>

      <br>
      <div class="grid-x">

        <div class="cell analisis">
          <h2 class="title">Analisis Estadistico</h2>
          <h4>Te ayudamos con Tesis de Pre grado, Post grado o doctarado usando el Software R </h4>

          <button class="button miboton">Contactanos</button>
          <button class="button miboton warning">FAQ</button>
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-12 medium-6 large-6">
          <div class="card">
            <img src="<?php echo constant('URL');?>public/img/a_estadistica.png ">
            <div class="card-section">
            <h4 class="title2"><b>Analisis Estadistico para Tesis con R</b></h4>
              <p>Amplia experiencia en analisis como: T-Student, Chi-Cuadrado, ANOVA, ANCOVA entre otros</p>
              <p>Se crean graficos modernos en R, haciendo uso de la libreria ggplot2.  Se hacen uso de software como SPSS, y otros paquetes estadisticos.</p>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-6 large-6">
          <div class="card">
            <img src="<?php echo constant('URL');?>public/img/a_archivos.png">
            <div class="card-section">
            <h4 class="title2"><b>Asesoramiento en Archivística</b></h4>
              <p>Se asesora/Capacitación en temas de Archivística en instituciones.  Tambien se desarrollan los instrumentos archivisticos como: Diagnostico Archivístico, Tabla de Retención de Documentos, Fichas Técnicas de Series documentales y el PCDA para instituciones públicas o privadas.</p>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-6 large-6">
          <div class="card">
            <img src="<?php echo constant('URL');?>public/img/a_excel.png">
            <div class="card-section">
              <h4 class="title2"><b>Capacitación en Excel (Basico, Avanzado). Otros Software</b></h4>
              <p>Realizamos Capacitaciones en Excel básicos o avanzados de forma presional o virtual.  Tambien se crean programas en lenguajes como JAVA, Python, PHP, Paginas Web.</p>
            </div>
          </div>
        </div>
        <div class="cell small-12 medium-6 large-6">
          <div class="card">
            <img src="<?php echo constant('URL');?>public/img/a_software.png">
            <div class="card-section">
              <h4 class="title2"><b>Desarrollo de Software</b></h4>
              <p>Creamos programas en lenguajes como JAVA, Python, PHP, Paginas Web. Aulas virtuales, sistemas de Ventas, Base de Datos entre otros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


<?php require('views/footer.php'); ?>
