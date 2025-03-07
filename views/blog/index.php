<?php require 'views/header.php'; ?>

<div class="grid-container">
    <div class="row text-center">
        <h2>BLOG</h2>
        <hr>
    </div>
    <div class="grid-x">
        <div class="cell small-12 medium-6 large-8">
            <div class="row text-center">
                <h2><?php echo $this->datos['titulo']; ?></h2>
            </div>
            <img class="thumbnail" src="<?php echo $this->datos['imagen']; ?>">
            <div class="row text-center">
                <em><?php echo $this->datos['descripcion']; ?></em>
            </div>

            <div><?php echo $this->datos['contenido']; ?></div>

            <div class="callout">
                <ul class="menu simple">
                    <li><a href="#">Autor: Edgar Apaza Choque</a></li>
                    <li><a href="#">Comentarios: 3</a></li>
                    <li><a href="#">Comentar</a></li>
                </ul>
            </div>
        </div>
        <div class="cell small-12 medium-6 large-1"></div>
        <div class="cell small-12 medium-6 large-3">
            <h4>Categorias</h4>
            <ul>
                <li><a href="#">Estadistica</a></li>
                <li><a href="#">Redes</a></li>
                <li><a href="#">Desarrollo de Software</a></li>
                <li><a href="#">Estudio de Mercado</a></li>
            </ul>

            <h4>Autores</h4>
            <ul>
                <li><a href="#">Edgar Apaza</a></li>
            </ul>
            <hr>
            <div class="cell small-12 medium-6 large-12">
                <div class="card">
                    <img class="thumbnail" src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo of Uranus.">
                    <div class="card-section">
                        <h4>Tema 2</h4>
                        <p>Test Chi-Cuadrado</p>
                    </div>
                </div>
                <div class="card">
                    <img class="thumbnail" src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo of Uranus.">
                    <div class="card-section">
                        <h4>Proyectos en curso</h4>
                        <p>Actualmente desarrollando una aplicacion para el manejo de Archivos Fisico y su Digitalización</p>
                    </div>
                </div>

            </div>

        </div>
        <!-- <style>
            .zetadev {
                border: 1px solid red;


            }
        </style> -->
    </div>
</div>

<?php require 'views/footer.php'; ?>
