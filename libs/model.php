<?php

class Model
{
    private $_conn;

    public function __construct()
    {
        //echo "<h1>Model Base</h1>";
        $this->_conn = new Conexion();
    }
}
