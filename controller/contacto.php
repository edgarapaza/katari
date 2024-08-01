<?php

class Contacto extends Controller
{

  function __construct()
  {
    parent::__construct();
  }

  function render()
  {
    $this->view->Render('contacto/index');
  }
}
