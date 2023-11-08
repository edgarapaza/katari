<?php require('views/header.php'); ?>
<br>
<div class="grid-container">

    <div class="grid-x grid-padding-x">
        <div class="cell">
            <h3>Listado de Software</h3>
        </div>

        <div class="cell">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre Software</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        include_once "models/productos.php";

                        foreach ($this->datos as $data) {
                            $prod = new Productos();
                            $prod = $data;
                    ?>
                    <tr>
                        <td><img src="<?php echo $prod->imagen; ?>" alt="miniatura" width="150px"></td>
                        <td>
                            <strong><?php echo $prod->nombre; ?></strong>
                            <br>
                            <?php echo $prod->caracteristicas; ?>
                        </td>
                        <td><?php echo $prod->categoria; ?></td>
                        <td><a href="<?php echo constant('URL'); ?>catalogo/ver/<?php echo $prod->idproducto; ?>">Ver + detalles</a></td>
                    </tr>
                    <?php }?>
                </tbody>
            </table>
        </div>
    </div>

    <div class="grid-x">
        <div class="cell">
            <h3>Productos similares</h3>
        </div>
    </div>
</div>



<?php require('views/footer.php'); ?>