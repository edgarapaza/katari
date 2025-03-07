<?php

class Controller
{
    public $view;
    public $model;

    public function __construct()
    {
        //echo "<h1>Controlador Base</h1>";
        $this->view = new View();
        $this->model = new Model();
    }

    public function loadModel($model)
    {
        $url = 'models/' . $model . "model.php";

        if (file_exists($url)) {

            include $url;

            $modelName = $model . 'Model';
            $this->model = new $modelName();
        }
    }
}
