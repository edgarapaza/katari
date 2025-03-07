<?php
class Conexion
{
    private $link;

    public function __construct()
    {
        $host = constant('HOST');
        $user = constant('USER');
        $pass = constant('PASSWORD');
        $db   = constant('DB');

        $this->link = new mysqli($host, $user, $pass, $db);

        if ($this->link->connect_errno) {
            echo "Error al contenctar a MySQL: (" . $this->link->connect_errno . ") " . $this->link->connect_error;
            exit();
        }

        //echo $this->link->host_info . "KATARI";
        return $this->link;
    }

    public function ConsultaSin($sql)
    {
        // Sirve para: INSERT, UPDATE, DELETE
        try {
            $this->link->query($sql);
            $res = true;
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
            $res = false;
        }

        return $res;
    }

    public function ConsultaCon($sql)
    {
        // Sirve para: SELECT
        try {
            $result = $this->link->query($sql);
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
        }

        return $result;
    }

    public function ConsultaArray($sql)
    {
        // Sirve para: SELECT convertido en array
        try {
            $result = $this->link->query($sql);
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
        }

        $data = $result->fetch_array(MYSQLI_ASSOC);

        return $data;
    }
}
