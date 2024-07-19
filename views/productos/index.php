<?php require('views/header.php'); ?>

<br>
<!--CARDS-->
<div class="grid-container">

  <div class="cell text-center">
    <h3>Productos y Servicios</h3>
    <b><em>Elija entre nuestras opciones</em></b>
  </div>

  <div class="grid-x">

    <div class="cell small-12 large-4">
      <div class="card" style="width: 380px;">
        <div class="card-divider">
          Katari Software
        </div>
        <img src="<?php echo constant('URL'); ?>public/img/desarrolloSoftware.jpg" alt="Preview">
        <div class="card-section">
          <h3>Desarrollo de software</h3>
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
          Katari Software
        </div>
        <img src="<?php echo constant('URL'); ?>public/img/cableado.jpg" alt="Preview">
        <div class="card-section">
          <h3>Redes y Cableado estructurado</h3>
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
          Katari Estadistica
        </div>
        <img src="<?php echo constant('URL'); ?>public/img/estadisticas2.jpg" alt="Preview">
        <div class="card-section">
          <h3>Analisis Estadistico</h3>
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
          Katari Documentos
        </div>
        <img src="<?php echo constant('URL'); ?>public/img/archivos.jpg" alt="Preview">
        <div class="card-section">
          <h3>Especialista en Archivos</h3>
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
          Katari Estadistica
        </div>
        <img src="<?php echo constant('URL'); ?>public/img/estudioMercado.jpg" alt="Preview">
        <div class="card-section">
          <h3>Estudio de Mercado</h3>
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
    <h3>Escoja entre nuestros productos para ver su descripción</h3>
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
    <div class="cell small-12 large-12 text-center">
      <h3>
        Mas sobre los Productos y servicios.
      </h3>
      <p>En esta seccion usted podra profundizar sobre nuestros productos y servicios, que es lo que brindamos a
        nuestros clientes, que servicios ofrecemos, a quienes esta dirigido estos servicios, y por que deberia
        tener estas tecnologias, estos productos y servicios con usted y para su futura empresa exitosa.
      </p>
    </div>
  </div>

  <div class="grid-x grid-margin-x">
    <div class="cell text-center">
      <h3 id="desarrollo-software">
        Desarrollo de Software
      </h3>
    </div>
    <div class="cell small-12 large-6">
      <img src="<?php echo constant('URL'); ?>public/img/desarrolloSoftware.jpg" alt="Lavender Field">
    </div>
    <div class="cell small-12 large-6">
      <p class="desproducto">Utilizamos las ultimas tecnologias para brindar un servicio de calidad en la contruccion de aplicaciones
        WEB, aplicaciones de escritorio y cualquier software que requiera ustes o su empresa.
        Tecnologias como: JAVA, C++, PHP, JavaScript, C#, Python, dependiendo a sus necesidades.
        Con los mas aptops Ingenieros en el campo de la programacion
      </p>
    </div>
  </div>
  <br>

  <div class="grid-x grid-margin-x">
    <div class="cell text-center">
      <h3 id="desarrollo-software">
        Redes y cableado estructurado
      </h3>
    </div>
    <div class="cell small-12 large-6">
      <p class="desproducto">El cableado estructurado permite la integración de
        diferentes servicios como datos, telefonía, control…etc. que dependen del tendido de cables.Su funcion
        es transportar señales desde unos dispositivos a otros con el objetivo de crear la red de arealocal del
        mismo.
        Brindamos este servicio con su correspondiente certificado que garantice que: Se han utilizado
        materiales de calidad y que el procesode instalacion se ha realizado segun normativa. El cableado que
        ofrecemos contribuye a satisfacer las crecientes necesitades tecnologicas de unos edificios cada vez mas
        inteligentes como su empresa.</p>
    </div>
    <div class="cell small-12 large-6">
      <img src="<?php echo constant('URL'); ?>public/img/cableado.jpg" alt="Autumn">
    </div>
  </div>

  <br>

  <div class="grid-x grid-margin-x">
    <div class="cell text-center">
      <h3 id="analisis-estadistico">
        Analisis Estadistico
      </h3>
    </div>
    <div class="cell small-12 large-6">
      <img src="<?php echo constant('URL'); ?>public/img/estadisticas.jpg" alt="Summer">
    </div>
    <div class="cell small-12 large-6">
      <p class="desproducto">¿Qué es el análisis estadístico? Es la ciencia de recopilar, explorar y presentar grandes cantidades de
        datos para descubrir patrones y tendencias implícitos. Las estadísticas se aplican todos los días - en
        la investigación, la industria y el gobierno - para volvernos más científicos acerca de las decisiones
        que se necesitan tomar. Tome las mejores decisiones para usted y su empresa con el analisis estadistico
        que ofrecemos, con nuestra experiencia y nuestro servicio su empresa crecera, al hacer uso de la
        inteligencia artificial, subira a su empresa a un nuevo nivel tecnologico.</p>
    </div>
  </div>
  <br>

  <div class="grid-x grid-margin-x">
    <div class="cell text-center">
      <h3 id="especialista-archivos">
        Especialista en Archivos
      </h3>
    </div>
    <div class="cell small-12 large-6">
      <p class="desproducto">Experiencia en la organización de Archivos, Archivo Central. Con nosotros el manejo, procesamiento y
        organizacion de sus archivos sera mucho mas sencillo y eficaz, con nuestra experiencia y con las ultimas
        tecnologias que usamos aseguramos un buen servicio en Archivos de cualquier tipo.
      </p>
    </div>
    <div class="cell small-12 large-6">
      <img src="<?php echo constant('URL'); ?>public/img/archivos12.jpg" alt="Forest">
    </div>
  </div>
  <br>

  <div class="grid-x grid-margin-x">
    <div class="cell text-center">
      <h3 id="estudio-mercado">
        Estudio de Mercado
      </h3>
    </div>
    <div class="cell small-12 large-6">
      <img src="<?php echo constant('URL'); ?>public/img/estudioMercado.jpg" alt="Forest">
    </div>
    <div class="cell small-12 large-6">
      <p class="desproducto">Un estudio de mercado es un conjunto de acciones realizadas por organizaciones comerciales que tienen como objetivo obtener información sobre el estado actual de un segmento determinado mercado. Su finalidad es conocer en profundidad el nicho que se pretende conquistar, como así también su grado de rentabilidad</p>
    </div>
  </div>
  <hr>
</div>

  <?php require('views/footer.php'); ?>