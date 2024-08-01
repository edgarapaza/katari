<!doctype html>
<html lang="es">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo constant('COMPANY'); ?></title>
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/foundation.css">
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/index.css">
  <link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/app.css">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--   <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"> -->
</head>

<body>

  <!-- about -->
  <div class="about">
    <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
    </a>
    <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
    </a>
    <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
    </a>
    <a class="bg_links logo"></a>
  </div>
  <!-- end about -->

  <nav class="mainNav">
    <div class="mainNav__logo">Logo</div>
    <div class="mainNav__links">
      <a href="" class="mainNav__link">About</a>
      <a href="" class="mainNav__link">Projects</a>
      <a href="" class="mainNav__link">Team</a>
      <a href="" class="mainNav__link">Contacts</a>
    </div>
    <div class="mainNav__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2" fill="#9197AE">
          <g data-name="menu-2">
            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
            <circle cx="4" cy="12" r="1" />
            <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
            <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
            <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
          </g>
        </g>
      </svg>
    </div>
  </nav>
  <header class="mainHeading">
    <div class="mainHeading__content">
      <article class="mainHeading__text">
        <p class="mainHeading__preTitle">nature</p>
        <h2 class="mainHeading__title">behind the mountains</h2>
        <p class="mainHeading__description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <button class="cta">know more</button>
      </article>

      <figure class="mainHeading__image">
        <img src="https://images.unsplash.com/photo-1520856707909-75c4048cc858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="" />
      </figure>
    </div>
  </header>



  <br><br><br><br><br>
  <!-- <div class="hero">
    <div class="slider">
      <div class="slide current">
        <div class="content">
          <h3>Curso: ELABORACION DE PLAN ANUAL DE ARCHIVOS 2023-2024</h3>
          <p>En coordinacion y apoyo del <span class="resaltado">Archivo Regional de Moquegua</span>, es que
            se dictará el curso. Dirigido al personal de Archivos de todas las instituciones.</p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h3>SERVICIO Y MANTENIMIENTO DE COMPUTADORAS Y LAPTOPS AL 50% DE DESCUENTO</h3>
          <p>Aproveche esta oportunidad por apertura, <span class="resaltado">ELIMINACION DE VIRUS, FORMATEOS
              de PCs y Laptos</span> a <span class="resaltado">Mitad de precio!!</span>.</p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h3>Servicio: ANALISIS ESTADISTICO PARA TESIS Y MACHINE LEARNIGN</h3>
          <p>Se ofrece: Analisis de encuestas, pruebas <span class="resaltado">Estadisticas para Tesis
              (Chi-cuadrado, Prueba de Hipotesis, etc)</span>, uso de R-Studio y SPSS</p>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button id="prev"><i class="fas fa-arrow-left"></i></button>
      <button id="next"><i class="fas fa-arrow-right"></i></button>
    </div>

  </div> -->

  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <section>
          <h2>Seccion</h2>
        </section>
      </div>
    </div>
  </div>

  <hr>

  <div class="grid-container">
    <div class="row text-center">
      <h1>Nuestros servicios</h1>
    </div>
    <div class="grid-x">
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#desarrollo-software" class="activate">
          <div class="card">
            <img class="thumbnail" src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Software">
            <div class="card-servicios">
              <h4>Desarrollo de software</h4>
              <p>Tecnologias: JAVA, C++, PHP, Javascript</p>
            </div>
          </div>
        </a>

      </div>
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#redes-cableado" class="activate">
          <div class="card">
            <img class="thumbnail" src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cableado de Redes">
            <div class="card-servicios">
              <h4>Redes y Cableado estructurado</h4>
              <p>Mejoras internas de la institución</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#analisis-estadistico" class="activate">
          <div class="card">
            <img class="thumbnail" src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Analisis Estadistico">
            <div class="card-servicios">
              <h4>Analisis Estadistico</h4>
              <p>Analisis Bigdata con Machine Learnign</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="grid-x">
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#especialista-archivos" class="activate">
          <div class="card">
            <img class="thumbnail" src="https://images.pexels.com/photos/6334780/pexels-photo-6334780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Especialista en Archivos">
            <div class="card-servicios">
              <h4>Especialista en Archivos</h4>
              <p>Experiencia en la organización de Archivos, Archivo Central</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#estudio-mercado" class="activate">
          <div class="card">
            <img class="thumbnail" src="https://images.pexels.com/photos/18627851/pexels-photo-18627851/free-photo-of-vendedora-de-comida-mexicana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Estudio de mercado">
            <div class="card-servicios">
              <h4>Estudio de Mercado</h4>
              <p>Analisis comercial estadistico</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cell small-12 medium-6 large-4">

      </div>
    </div>
  </div>
  <hr>


  <div class="grid-container">
    <div class="row text-center">
      <h2>¿Por qué trabajar con nosotros?</h2>
    </div>

    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-6 large-4">
        <div class="card">
          <!--<img src="<?php echo constant('URL'); ?>public/img/reloj.png">-->
          <i class="fa-solid nosotros fa-gauge-simple-high"></i>
          <div class="card-section">
            <h4>RAPIDO</h4>
            <p>Nuestra experiencia nos permite culminar proyectos en el tiempo requerido con máxima calidad.</p>
          </div>
        </div>
      </div>
      <div class="cell small-12 medium-6 large-4">
        <div class="card">
          <!--<img src="<?php echo constant('URL'); ?>public/img/databases.png">-->
          <i class="fa-solid nosotros fa-comments-dollar"></i>
          <div class="card-section">
            <h4>ACCESIBLE</h4>
            <p>Brindamos precios justos y accesibñes, dependiendo de nuestros planes web. Compara nuestros precios</p>
          </div>
        </div>
      </div>
      <div class="cell small-12 medium-6 large-4">
        <div class="card">
          <!--<img src="<?php echo constant('URL'); ?>public/img/profesional.png">-->
          <i class="fa-solid nosotros fa-people-group"></i>
          <div class="card-section">
            <h4>PROFESIONALES</h4>
            <p>Contamos con personal 100% profesional, capacitado y calificado, expertos en Diseño Web, profesionales.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="grid-container">
		<div class="row text-center">
			<h1>NUESTRO PORTAFOLIO</h1>
		</div>
		<div class="grid-x text-center">
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
		</div>
		<div class="grid-x text-center">
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
			<div class="cell small-12 medium-6 large-3"><img class="thumbnail" src="https://placehold.it/350x350"></div>
		</div>
	</div>-->



  <?php require('views/footer.php'); ?>