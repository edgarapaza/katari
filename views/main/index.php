<?php require('views/header.php'); ?>

<link rel="stylesheet" href="<?php echo constant('URL');?>public/css/title.css">

  <div class="grid-container">
    <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
    <div class="orbit-wrapper">
      <div class="orbit-controls">
        <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
        <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
      </div>
      <ul class="orbit-container">
        <li class="is-active orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="<?php echo constant('URL');?>public/img/slider1.png" alt="Space">
            <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="<?php echo constant('URL');?>public/img/slider1.png" alt="Space">
            <figcaption class="orbit-caption">Lets Rocket!</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="<?php echo constant('URL');?>public/img/slider1.png" alt="Space">
            <figcaption class="orbit-caption">Encapsulating</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="<?php echo constant('URL');?>public/img/slider1.png" alt="Space">
            <figcaption class="orbit-caption">Outta This World</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  <nav class="orbit-bullets">
    <button class="is-active" data-slide="0">
      <span class="show-for-sr">First slide details.</span>
      <span class="show-for-sr" data-slide-active-label>Current Slide</span>
    </button>
    <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
  </nav>
</div>
  </div>

  <br>

  <div class="grid-container">
    <div class="row text-center">
      <h1><em>Nuestros servicios</em></h1>
    </div>
    <div class="grid-x">

      <div class="cell small-12 medium-6 large-4">
        <a href="productos#analisis-estadistico" class="activate">
          <div class="card">
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Analisis Estadistico">
            <div class="card-servicios">
              <h4>Analisis Estadistico</h4>
              <p>Analisis Bigdata con Machine Learnign</p>
            </div>
          </div>
        </a>
      </div>

      <div class="cell small-12 medium-6 large-4">
        <a href="productos#analisis-estadistico" class="activate">
          <div class="card">
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Analisis Estadistico">
            <div class="card-servicios">
              <h4>Machine Learning con R y Python</h4>
              <p>Analisis Bigdata con Machine Learnign</p>
            </div>
          </div>
        </a>
      </div>

      <div class="cell small-12 medium-6 large-4">
        <a href="productos#desarrollo-software" class="activate">
          <div class="card">
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Software">
            <div class="card-servicios">
              <h4>Desarrollo de software</h4>
              <p>Tecnologias: JAVA, C++, PHP, Javascript</p>
            </div>
          </div>
        </a>

      </div>

    </div>

    <div class="grid-x">
      <div class="cell small-12 medium-6 large-4">
        <a href="productos#especialista-archivos" class="activate">
          <div class="card">
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Software">
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
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Estudio de mercado">
            <div class="card-servicios">
              <h4>Estudio de Mercado</h4>
              <p>Analisis comercial estadistico</p>
            </div>
          </div>
        </a>
      </div>
      <div class="cell small-12 medium-6 large-4">
        <div class="cell small-12 medium-6 large-4">
        <a href="productos#redes-cableado" class="activate">
          <div class="card">
            <img class="thumbnail" src="<?php echo constant('URL');?>public/img/img1.png" alt="Cableado de Redes">
            <div class="card-servicios">
              <h4>Redes y Cableado estructurado</h4>
              <p>Mejoras internas de la institución</p>
            </div>
          </div>
        </a>
      </div>
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
