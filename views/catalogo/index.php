<?php require 'views/header.php'; ?>

<br>
<div class="grid-container">

    <div class="grid-x grid-padding-x">
        <div class="cell small-12 large-12 text-center">
            <h3>Catalogo de Software</h3>
        </div>
        <div class="cell small-12 medium-6 large-6">
            <img class="thumbnail" src="<?php echo constant('URL').$this->datos['imagen'];?>" alt="miniatura">
        </div>
        <div class="cell small-12 medium-6 large-6 info">
            <h4><?php echo $this->datos['nombre'];?></h4>
            <h5>Principales caracteristicas:</h5>
            <?php echo $this->datos['caracteristicas'];?>

            <div class="info flex-container align-middle">
                <label class="">5.0</label> &nbsp; &nbsp;
                <ul class="menu">
                    <li><i class="fa-solid fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa-solid fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa-solid fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa-solid fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa-solid fa-star" aria-hidden="true"></i></li>
                    <li> &nbsp; 14 Per.s  &nbsp; </li>
                </ul>
                &nbsp;
                <span>102,814 valoraciones </span> &nbsp; | &nbsp;
                <span>498 preguntas respondidas</span>
            </div>
            <div class="info">
                <hr>
                <p>Categoria:  <?php echo $this->datos['categoria'];?></p>
                <label>Precio recomendado: <span class=""><?php echo $this->datos['preciototal'];?></span> <a href="#">Mas info</a></label>
                <label>Precio con descuento: <?php echo $this->datos['preciodsct'];?> <span class="rojo">(- S/ <?php echo $this->datos['ahorro'];?>)</span></label>
                <label>Ahorras: S/ <?php echo $this->datos['ahorro'];?> <span class="rojo">(<?php echo $this->datos['porcentaje'];?> %)</span></label>

                <p><b><a href="#">Suscribite ahora</a></b></p>
                <hr>
            </div>
            <div class="info">
                <p><i class="fa-solid fa-phone"> </i> Llamar a: (+051) 935 017 466 - Ing. Edgar Apaza Choque </p>

                <p><i class="fa-solid fa-envelope"></i> Correo electrónico: informes@katari.org.pe</p>

            </div>
        </div>
    </div>

        <hr>
    <div class="grid-x">
        <div class="cell">
            <h3>Productos similares</h3>
        </div>
    </div>
</div>



<?php require 'views/footer.php'; ?>
