<?php
class Clientes extends Controller
{

  function __construct()
  {
    parent::__construct();
  }

  function render()
  {
    $this->view->Render('clientes/index');
  }
}
