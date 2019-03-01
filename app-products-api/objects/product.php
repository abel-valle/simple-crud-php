<?php
class Product {
    private $conn;
    private $tableName = "products";
    
    public $id_product;
    public $name;
    public $description;
    public $brand;
    public $price;
    public $image;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function read() {
        $query = "select * from " . $this->tableName;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>









