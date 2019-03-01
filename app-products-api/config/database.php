<?php
class Database {
    private $host   = "[database-host-here]";
    private $db     = "[database-name-here]";
    private $user   = "[user-here]";
    private $pass   = "[pass-here]";

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










