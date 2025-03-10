<!-- Pie de pagina -->
<div class="grid-container-fluid footer">
    <div class="grid-x grid-padding-y">
      <div class="cell small-12 medium-4 large-3 titulo-footer">
        <h3>Herramientas y servicios</h3>
        <ul>
          <li><a href="<?php echo constant('URL'); ?>productos" class="foot">Todos los productos</a></li>
          <li><a href="<?php echo constant('URL'); ?>catalogo" class="foot">Catalogo de productos</a></li>
          <li><a href="<?php echo constant('URL'); ?>costos" class="foot">Costos por servicios</a></li>
        </ul>
      </div>
      <div class="cell small-12 medium-4 large-3 titulo-footer">
        <h3>Empresa</h3>
        <ul>
          <li><a href="<?php echo constant('URL'); ?>blog" class="foot">Blog</a></li>
          <li><a href="<?php echo constant('URL'); ?>api" class="foot">API</a></li>
          <li><a href="<?php echo constant('URL'); ?>trabajo" class="foot">Bolsa de Trabajo</a></li>
          <li><a href="<?php echo constant('URL'); ?>empresa" class="foot">Mision y Vision</a></li>
        </ul>
      </div>
      <div class="cell small-12 medium-4 large-3 titulo-footer">
        <h3>Siganos en Redes Sociales</h3>
        <a href="https://web.facebook.com/edgarapazac" target="_blank" class="rss"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/edgar-apaza-941745139/" target="_blank" class="rss"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UC1UuS6WNsEkTYJFSrbsJU7wi" target="_blank" class="rss"><i class="fa-brands fa-youtube"></i></a>

      </div>
      <div class="cell small-12 medium-4 large-3 titulo-footer">
        <h3>E-Stat | 2025</h3>
        <ul>
          <li><a href="<?php echo constant('URL'); ?>terminos" class="foot">Terminos y condiciones</a></li>
          <li><a href="<?php echo constant('URL'); ?>privacidad" class="foot">Privacidad</a></li>
        </ul>

        <small class="copyright">
          <span class=""> ©
            <script>
              document.write(new Date().getFullYear())
            </script> E-Stat SOFTWARE
          </span>
          Copyrigth E-Stat. Inc.</small>
        <small class="copyright">Todos los derechos reservados.</small>

      </div>
    </div>
</div>


<script src="<?php echo constant('URL'); ?>public/js/core/jquery.min.js"></script>
<script src="<?php echo constant('URL'); ?>public/js/main.js"></script>
<script src="<?php echo constant('URL'); ?>public/js/foundation.min.js"></script>

<script>
  $(document).foundation();
</script>
</body>

</html>
