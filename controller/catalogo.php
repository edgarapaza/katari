<?php
class Catalogo extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function ver($param = "")
    {
        //echo $param[0];
        //$post = $param[0];
        //$data = $this->model->verpost($post);
        //$this->view->datos = $data;
        //$this->view->Render('catalogo/lista');
    }

    public function render()
    {
        #$data = $this->model->post1();
        #$this->view->datos = $data;
        $this->view->Render('catalogo/index');
    }
}
