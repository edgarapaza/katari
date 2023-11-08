<?php

class Catalogo extends Controller
{

	function __construct()
	{
		parent::__construct();
	}

	function ver($param = null)
	{
		$post = $param[0];
		$data = $this->model->verpost($post);
		$this->view->datos = $data;
		$this->view->Render('catalogo/index');
	}

	function render()
	{
		$data = $this->model->post1();
		$this->view->datos = $data;
		$this->view->Render('catalogo/lista');
	}
}