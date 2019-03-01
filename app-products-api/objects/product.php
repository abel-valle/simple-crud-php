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
        $statement = $this->conn->prepare($query);
        $statement->execute();
        return $statement;
    }

    public function delete() {
        $query = "delete from " . $this->tableName . " where id_product = ?";
        $statement = $this->conn->prepare($query);
        $statement->bindParam(1, $this->id_product);
        if($statement->execute()) {
            return true;
        }
        return false;
    }
}
?>









