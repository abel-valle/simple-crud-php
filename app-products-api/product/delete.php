<?php
// Encabezados requeridos.
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/product.php';

// Se obtiene la conexión a la BD.
$database = new Database();
$db = $database->getConnection();

// Preparamos el objeto de producto.
$product = new Product($db);

// Obtenemos el ID de producto.
$data = json_decode(file_get_contents("php://input"));

// Establecemos el ID del producto que se va a eliminar.
$product->product_id = $data->product_id;

// Eliminamos el producto.
if($product->delete()) {
    http_response_code(200);
    echo json_encode(array("mensaje" => "El producto fue eliminado."));
} else {
    http_response_code(503);
    echo json_encode(array("mensaje" => "No fue posible borrar el producto."));
}
?>