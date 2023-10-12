<?php

class Catalogo extends Controller
{

	function __construct()
	{
		parent::__construct();
	}

	function render()
	{
		$this->view->Render('catalogo/index');
	}
}