<?php

class View
{
    public $mensaje;
    public $datos;

    public function __construct()
    {
        //echo "<h1>View Base</h1>";
    }

    public function Render($nombre)
    {
        include_once 'views/' . $nombre . '.php';
    }
}
