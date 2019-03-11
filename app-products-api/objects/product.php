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
        // query para consultar el registro
        $query = "select * from " . $this->tableName;
        $statement = $this->conn->prepare($query);
        $statement->execute();
        return $statement;
    }

    public function delete() {
        // query para borrar el registro
        $query = "delete from " . $this->tableName . " where id_product = ?";
        $statement = $this->conn->prepare($query);
        $statement->bindParam(1, $this->id_product);
        if($statement->execute()) {
            return true;
        }
        return false;
    }

    public function create() {
        // query para insertar el registro
        $query = "insert into " . $this->tableName . " (name,description,brand,price,image) "
        + "values (:name, :description, :brand, :price, :image)";

        // se prepara el query
        $statement = $this->conn->prepare($query);

        // se limpian los datos
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->brand = htmlspecialchars(strip_tags($this->brand));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->image = htmlspecialchars(strip_tags($this->image));

        // se sustituyen los valores
        $statement->bindParam(":name", $this->name);
        $statement->bindParam(":description", $this->description);
        $statement->bindParam(":brand", $this->brand);
        $statement->bindParam(":price", $this->price);
        $statement->bindParam(":image", $this->image);
        // se ejecuta el query
        if($statement->execute()) {
            return true;
        }
        return false;
    }
}
?>









