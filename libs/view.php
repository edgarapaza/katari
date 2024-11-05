<?php

class View
{
  public $mensaje;
  public $datos;

  function __construct()
  {
    #echo "<h1>View Base</h1>";
  }

  function Render($nombre)
  {
    require 'views/' . $nombre . '.php';
  }
}
