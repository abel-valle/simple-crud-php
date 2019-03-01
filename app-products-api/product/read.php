<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

error_reporting(E_ALL);
ini_set('display_errors', 1);

include_once '../config/database.php';
include_once '../objects/product.php';

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

$stmt = $product->read();
$num = $stmt->rowCount();

if($num > 0) {
    $productArray = array();
    $productArray['records'] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $productItem = array( 
            "id_product" => $id_product,
            "name" => $name,
            "description" => $description,
            "brand" => $brand,
            "price" => $price,
            "image" => $image
        );
        array_push($productArray["records"], $productItem);
    }
    http_response_code(200);
    echo json_encode($productArray);
} else {
    http_response_code(404);
    echo json_encode(array("mensaje" => "No se encontraron productos."));
}

?>















