<?php
class Main extends Controller
{
	function __construct()
	{
		parent::__construct();
	}

	function render()
	{
		$ip = $_SERVER['REMOTE_ADDR'];
        // Obtener la fecha y hora actual
        $fecha = date("Y-m-d");
        $hora = date("H:i:s");

        $this->model->Visitas($fecha, $hora, $ip);

		$this->view->Render('main/index');
	}
}
