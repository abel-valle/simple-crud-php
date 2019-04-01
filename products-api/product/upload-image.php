<?php
// Se obtiene el nombre de la imagen.
$fileName = $_FILES['image']['name'];
$fileName = strtolower($fileName);
$uploadOk = 1;

// Indica dónde se guardará la imagen.
$location = "../images/" . $fileName;
$fileType = pathinfo($location, PATHINFO_EXTENSION);

// Extensiones válidas.
$validExtensions = array("jpg", "jpeg", "png");

// Verifica que la extensión sea válida.
if (!in_array(strtolower($fileType), $validExtensions)) {
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo 0;
} else {
    // El archivo se copia de la carpeta temporal a la carpeta indicada.
    if (move_uploaded_file($_FILES['image']['tmp_name'], $location)) {
        echo $fileName;
    } else {
        echo 0;
    }
}
