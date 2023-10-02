<?php
class Controller
{
  public $view;
  public $model;

  function __construct()
  {
    #echo "<h1>Controlador Base</h1>";
    $this->view = new View();
  }

  function loadModel($model)
  {
    $url = 'models/' . $model . "model.php";

    if (file_exists($url)) {

      require $url;

      $modelName = $model . 'Model';
      $this->model = new $modelName();
    }
  }
}
