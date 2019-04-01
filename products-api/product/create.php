<?php
// Encabezados requeridos.
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/product.php';

// Se obtiene la conexión a la BD.
$database = new Database();
$db = $database->getConnection();

// Preparamos el objeto de producto.
$product = new Product($db);

// Se obtienen los datos enviados.
$data = json_decode(file_get_contents("php://input"));

// Se verifica que los datos no esten vacíos
if(
    !empty($data->name) &&
    !empty($data->description) &&
    !empty($data->brand) &&
    !empty($data->price) &&
    !empty($data->image)
) {
    // Coloca los valores de $data en $product.
    $product->name = $data->name;
    $product->description = $data->description;
    $product->brand = $data->brand;
    $product->price = $data->price;
    $product->image = $data->image;

    // Se crea el producto.
    if($product->create()) {
        http_response_code(200);
        echo json_encode(array("mensaje" => "El producto se ha creado."));
    } else {
        http_response_code(503);
        echo json_encode(array("mensaje" => "No fue posible crear el producto."));
    }
} else {
    http_response_code(400); 
    echo json_encode(array("mensaje" => "Imposible crear el producto. Los datos están incompletos."));
}
?>