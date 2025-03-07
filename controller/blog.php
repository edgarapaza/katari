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
        $this->view->Render('blog/index');
    }



}
