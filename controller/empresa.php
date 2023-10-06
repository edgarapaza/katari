<?php

class Empresa extends Controller
{

	function __construct()
	{
		parent::__construct();
	}

	function render()
	{
		$this->view->Render('empresa/index');
	}
}