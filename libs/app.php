<?php
session_start();

class App
{
    function __construct()
    {
        //echo "<p>Nueva APP</p>";
        $url = isset($_GET['url']) ? $_GET['url'] : null;
        $url = rtrim($url, '/');
        $url = explode('/', $url);
        //var_dump($url);

        if (empty($url[1])) {
            //echo "URL vacio";
            $archivoController = "controller/main.php";
            include_once $archivoController;
            $controller = new Main();
            $controller->render();
            return false;
        }


        $archivoController = "controller/" . $url[1] . ".php";

        if (file_exists($archivoController)) {
            //echo "Si existe";
            include_once $archivoController;
            $controller = new $url[1]();
            $controller->loadModel($url[1]);


            if (!empty($url[2])) {
                //echo "Metodo".$url[2];

                $nparam = sizeof($url);

                if ($nparam > 2) {
                    $param = [];
                    for ($i = 2; $i < $nparam; $i++) {
                        array_push($param, $url[$i]);
                    }
                    $controller->{$url[2]}($param[0]);
                } else {
                    //echo "no hay parametros";
                    $controller->{$url[2]}();
                }

                $controller->render();

            } else {
                //echo "Sin Metodo";
                $controller->render();
            }

        } else {
            //echo "no existe";
            include "controller/error.php";
            $controller = new ErrorGeneral();
            $controller->render();
        }

    }
}
