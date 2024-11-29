<?php

defined('BASEPATH') or exit('No direct script access allowed');
/* @param Type var Description*/

class Blog extends CI_Controller
{
    public function index()
    {
        $this->load->view('holamundo.html');
    }

    public function inicio($home = "inicio")
    {
        if (!file_exists("applications/views/".$home.".php")) {
            show_404();
        }

        $this->load->view($home);
    }
}
