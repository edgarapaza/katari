<?php
class BlogModel extends Model
{
  function __construct()
  {
    parent::__construct();
  }

  public function post1()
  {
    $sql = "SELECT titulo, descripcion, contenido, imagen, fecCreate FROM katari.blog ORDER BY idblog DESC LIMIT 1;";
    $res = $this->conn->ConsultaArray($sql);
    return $res;
  }
}