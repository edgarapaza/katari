<?php

class Blog extends Controller
{

    function __construct()
    {
        parent::__construct();
    }

    function render()
    {
        $post1 = $this->model->post1();
        $this->view->datos = $post1;
        $this->view->Render('blog/index');
    }
}