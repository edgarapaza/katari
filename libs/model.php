<?php

class Model
{
    public $conn;

    public function __construct()
    {
        //echo "<h1>Model Base</h1>";
        $this->conn = new Conexion();
    }
}