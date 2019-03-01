<?php
class Database {
    private $host   = "sql202.byethost.com";
    private $db     = "b4_22610925_dci3db";
    private $user   = "b4_22610925";
    private $pass   = "abel12345";

    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->pass);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Error en la conexión: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>










