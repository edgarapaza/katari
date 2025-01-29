<?php require('views/header.php'); ?>

<br>
<!--CARDS-->
<link rel="stylesheet" href="<?php echo constant('URL'); ?>public/css/productos.css">
<div class="grid-container">

  <div class="cell text-center">
    <h3 class="title">Productos y Servicios</h3>
    <b><em>Elija entre nuestras opciones</em></b>
  </div>

  <div class="grid-x">

    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          E-Stat Software
        </div>
        <img src="<?php echo constant('URL');?>public/img/img1.png" alt="Preview">
        <div class="card-section">
          <h3 class="title2">Desarrollo de software</h3>
          <p>
            Los lenguajes de programación que usamos son: JAVA, .NET, PHP Y Python <br>
            <a href="#desarrollo-software" class="read-more" title="Leer mas +">
              Leer mas +
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          E-Stat Software
        </div>
        <img src="<?php echo constant('URL');?>public/img/img1.png" alt="Preview">
        <div class="card-section">
          <h3 class="title2">Redes y Cableado estructurado</h3>
          <p>
            Realizamos armado de redes en Categoria 6 y 6A, con cableado estructurado, uso de bandejas
            y canaletas, faciles de instalar y de dar mantenimiento.
            <br>
            <a href="#redes-cableado" class="read-more" title="Leer mas +">
              Leer mas +
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          E-Stat Estadistica
        </div>
        <img src="<?php echo constant('URL');?>public/img/img1.png" alt="Preview">
        <div class="card-section">
          <h3 class="title2">Analisis Estadistico</h3>
          <p>
            Las empresas e instituciones, deben analizar sus datos para poder tomar desiciones para su
            negocio o empresa, asi que hacemos uso de Machine Learnig con Inteligencia artificial
            para predecir y modelar la información. Si desea saber mas, contactenos: Celular 935 017 466
            <br>
            <a href="#analisis-estadistico" class="read-more">
              Leer mas +
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-x">
    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          E-Stat Documentos
        </div>
        <img src="<?php echo constant('URL');?>public/img/img1.png" alt="Preview">
        <div class="card-section">
          <h3 class="title2">Especialista en Archivos</h3>
          <p>
            En materia de archivos, contamos con gran experiencia en: A) Diagnostico de la documentación
            archivistica b) Elaboración de los instrumentos de gestión C) Organización de documentos,
            Descripción y otros procesos archivisticos D) Digitalización de documentos.
            <br>
            <a href="#especialista-archivos" class="read-more" title="Leer mas +">
              Leer mas +
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          E-Stat Estadistica
        </div>
        <img src="<?php echo constant('URL');?>public/img/img1.png" alt="Preview">
        <div class="card-section">
          <h3 class="title2">Estudio de Mercado</h3>
          <p>
            Los estudios de mercado, son una herramienta importante, no solo para las empresas que se
            encargan de la venta de los productos, sino de las instituciones que brindan servicio, permitiendo
            conocer las opiniones de sus clientes, para mejorar sus productos e innovar nuevos servicios.
            Si no se realizan estos estudios, ¿Como mejorará sus procesos e innovaciones?
            <br>
            <a href="#estudio-mercado" class="read-more" title="Leer mas +">
              Leer mas +
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="cell small-12 large-4">.</div>
  </div>

  <!--ANIMATION ROTATION Cambiar imagenes-->
  <div class="cell text-center">
    <h3 class="title2">Escoja entre nuestros productos para ver su descripción</h3>
  </div>

  <div class="grid-x">
    <div class="cell small-12 large-12">
      <div class="grid-zeta">
        <div class="box">
          <span style="--i:1;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image1.jpg" alt=""></a></span>
          <span style="--i:2;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image2.jpg" alt=""></a></span>
          <span style="--i:3;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image3.jpg" alt=""></a></span>
          <span style="--i:4;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image4.jpg" alt=""></a></span>
          <span style="--i:5;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image5.jpg" alt=""></a></span>
          <span style="--i:6;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image6.jpg" alt=""></a></span>
          <span style="--i:7;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image7.jpg" alt=""></a></span>
          <span style="--i:8;"><a href=""><img src="<?php echo constant('URL'); ?>public/img/image8.jpg" alt=""></a></span>
        </div>
      </div>
    </div>
  </div>


  <hr>
  <!-- explicacion mas profuncda de los productos y servicios -->

  <div class="grid-x">
    <div class="cell small-12 large-12 text-center callout">
      <h3 class="title2">
        Mas sobre los Productos y servicios.
      </h3>
      <p>En esta seccion usted podra profundizar sobre nuestros productos y servicios, que es lo que brindamos a
        nuestros clientes, que servicios ofrecemos, a quienes esta dirigido estos servicios, y por que deberia
        tener estas tecnologias, estos productos y servicios con usted y para su futura empresa exitosa.
      </p>
    </div>
  </div>

</div>

  <?php require('views/footer.php'); ?>