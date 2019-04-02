<?php
// Encabezados requeridos.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once '../config/database.php';
include_once '../objects/product.php';

// Se obtiene la conexión a la BD.
$database = new Database();
$db = $database->getConnection();

// Preparamos el objeto de producto.
$product = new Product($db);

// Asigna el ID del producto a recuperar.
$product->id_product = isset($_GET['idproduct']) ? $_GET['idproduct'] : die();

// Se recupera desde la BD los datos del producto.
$product->readOne();

if ($product->name != null) {
    // Se crea un arreglo.
    $productArr = array(
        "id_product" => $product->id,
        "name" => $product->name,
        "description" => $product->description,
        "brand" => $product->brand,
        "price" => $product->price,
        "image" => $product->image
    );

    http_response_code(200);
    echo json_encode($productArr);
} else {
    http_response_code(404);
    echo json_encode(array("mensaje" => "El producto no existe."));
}
