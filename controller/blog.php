<?php
class Blog extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function articulo()
    {
        echo "Dentro del articulo";
        return true;
    }

    public function render()
    {
        $post = $this->model->post1();
        $this->view->datos = $post;
        $this->view->Render('blog/index');
    }



}
