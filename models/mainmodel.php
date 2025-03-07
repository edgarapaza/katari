<?php
class MainModel extends Model
{
  function __construct()
  {
    parent::__construct();
  }

  function Visitas($fecha, $hora, $ip)
  {
  	echo "aqui";
  	$sql = "INSERT INTO visitas (fecha, hora, ip) VALUES ('$fecha', '$hora', '$ip')";
  	echo $sql;
  	//$res = $this->conn->ConsultaSin($sql);
  }
}