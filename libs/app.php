<?php
session_start();

class App
{
  function __construct()
  {
    #echo "<p>Nueva APP</p>";

    $url = $_GET['url'];
    $url = rtrim($url, '/');
    $url = explode('/', $url);

    if (empty($url[0])) {

        $archivoController = "controller/main.php";
        require_once $archivoController;
        $controller = new main;
        $controller->loadModel('main');
        $controller->render();
        return false;
    }

      #echo "con parametros";
    $archivoController = "controller/" . $url[0] . ".php";

    if (file_exists($archivoController))
    {
        #echo "Si existe";
        require_once $archivoController;
        $controller = new $url[0];
        $controller->loadModel($url[0]);

        if (isset($url[1])) {
          $controller->{$url[1]}();
        } else {
          $controller->render();
        }
    } else {
        #echo "no existe";
        require "controller/error.php";
        $controller = new ErrorGeneral();
        $controller->render();
    }
  }
}
