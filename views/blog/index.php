<?php require 'views/header.php'; ?>

<div class="grid-container">
    <div class="row text-center">
        <h1>BLOG</h1>
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
                    <li><a href="#">Autor: Alguien de katari</a></li>
                    <li><a href="#">Comentarios: 3</a></li>
                    <li><a href="#">Comentar</a></li>
                </ul>
            </div>
        </div>
        <div class="cell small-12 medium-6 large-1"></div>
        <div class="cell small-12 medium-6 large-3 zetadev">
            <h4>Categorias</h4>
            <ul>
                <li><a href="#">Estadistica</a></li>
                <li><a href="#">Redes</a></li>
                <li><a href="#">Desarrollo de Software</a></li>
                <li><a href="#">Estudio de Mercado</a></li>
            </ul>

            <h4>Autores</h4>
            <ul>
                <li><a href="#">ING. Edgar</a></li>
                <li><a href="#">Zeta</a></li>
                <li><a href="#">Elmer-loquinto</a></li>
                <li><a href="#">Johan</a></li>
            </ul>
            <hr>
            <div class="cell small-12 medium-6 large-12 zetadev">
                <div class="card">
                    <img class="thumbnail" src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo of Uranus.">
                    <div class="card-section">
                        <h4>Este seria otro blog</h4>
                        <p>El contenido de este blog es presentado desde una base de datos</p>
                    </div>
                </div>
                <div class="card">
                    <img class="thumbnail" src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo of Uranus.">
                    <div class="card-section">
                        <h4>Este podria ser un enlace para ver un proyecto en curso</h4>
                        <p>ESte proyecto tambien su informacion es sacada de una base de datos</p>
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
