<?php
class CatalogoModel extends Model
{
  function __construct()
  {
    parent::__construct();
  }

  function verpost($id)
  {
  	$sql = "SELECT p.idproducto,(SELECT c.nombre FROM categoria AS c WHERE c.idcategoria = p.idcategoria) AS categoria,p.imagen,p.nombre,p.caracteristicas,p.preciototal,p.porcentaje,p.preciodsct,p.ahorro,p.cupon,p.cupondsto FROM productos as p WHERE p.idproducto = ".$id;
    $res = $this->conn->ConsultaArray($sql);
    return $res;
  }

  public function post1()
  {
  	// Muestra el listado de todas las filas de la tabla productos
  	$items = [];
    $sql = "SELECT p.idproducto,(SELECT c.nombre FROM categoria AS c WHERE c.idcategoria = p.idcategoria) AS categoria,p.imagen,p.nombre,p.caracteristicas,p.preciototal,p.porcentaje,p.preciodsct,p.ahorro,p.cupon,p.cupondsto FROM productos as p;";
    $res = $this->conn->ConsultaCon($sql);

    while($row = $res->fetch_array(MYSQLI_ASSOC))
    {
    	$prod = new Productos();
  		$prod->idproducto     = $row['idproducto'];
  		$prod->categoria      = $row['categoria'];
  		$prod->imagen         = $row['imagen'];
  		$prod->nombre         = $row['nombre'];
  		$prod->caracteristicas= $row['caracteristicas'];
  		$prod->preciototal    = $row['preciototal'];
  		$prod->porcentaje     = $row['porcentaje'];
  		$prod->preciodsct     = $row['preciodsct'];
  		$prod->ahorro         = $row['ahorro'];
  		$prod->cupon          = $row['cupon'];
  		$prod->cupondsto      = $row['cupondsto'];

  		array_push($items, $prod);
    }

    return $items;
  }
}