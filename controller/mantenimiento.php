<?php
class Mantenimiento extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function render()
    {
        $this->view->Render('mantenimiento/index');
    }
}
