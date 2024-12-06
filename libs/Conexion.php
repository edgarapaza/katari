<?php

class Conexion
{
    private $_conn;

    public function __construct()
    {
        $host = constant('HOST');
        $user = constant('USER');
        $pass = constant('PASSWORD');
        $db   = constant('DB');

        $this->_conn = new mysqli($host, $user, $pass, $db);

        if ($this->_conn->_connect_errno) {
            echo "Error al contenctar a MySQL: (" . $this->_conn->_connect_errno . ") " . $this->_conn->_connect_error;
            exit();
        }

        //echo $this->_conn->host_info . "KATARI";
        return $this->_conn;
    }

    public function ConsultaSin($sql)
    {
        // Sirve para: INSERT, UPDATE, DELETE
        try {
            $this->_conn->query($sql);
            $res = true;
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
            $res = false;
        }

        mysqli_close($this->_conn);

        return $res;
    }

    public function ConsultaCon($sql)
    {
        // Sirve para: SELECT
        try {
            $result = $this->_conn->query($sql);
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
        }

        return $result;
        mysqli_close($this->_conn);

    }

    public function ConsultaArray($sql)
    {
        // Sirve para: SELECT convertido en array
        try {
            $result = $this->_conn->query($sql);
        } catch (Exception $e) {
            echo 'Excepción: ',  $e->getMessage();
        }

        $data = $result->fetch_array(MYSQLI_ASSOC);

        return $data;
        mysqli_close($this->_conn);

    }
}
