<?php
class MainModel extends Model
{
  function __construct()
  {
    parent::__construct();
  }

  function nuevo()
  {
    echo "dentro de nuevo";
  }

  public function Visitas($fecha, $hora, $ip)
  {
  	$sql = "INSERT INTO visitas VALUES (NULL, '$fecha', '$hora', '$ip')";

  	$this->conn->ConsultaSin($sql);
  }
}