<?php

class Productos extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function insertar()
    {
        echo "function insertar";
    }

    public function render()
    {
        $this->view->Render('productos/index');
    }
}
