<?php

/** @param Type var Description
 * **/

class Blog extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function articulo()
    {
        echo "DEntro del articulo";
        return true;
    }

    public function render()
    {
        $this->view->Render('blog/index');
    }



}
