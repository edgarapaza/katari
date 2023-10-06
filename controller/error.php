<?php

class ErrorGeneral extends Controller
{

	function __construct()
	{
		parent::__construct();
	}

	function render()
	{
		$this->view->Render('error/index');
	}
}