$(document).ready(function () {

    var apiURL = "http://[your-domain-here]/apps/products-api/";

    $(document).on('click', '#id-btn-upload', function () {
        var formData = new FormData();
        var files = $('#id-image-file')[0].files[0];

        formData.append('image', files);

        $.ajax({
            url: apiURL + 'product/upload-image.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response != 0) {
                    $('#id-image-name').attr('value', 'images/' + response);
                    $('#id-image').attr('src', apiURL + 'images/' + response);
                    $('#id-image').show();
                } else {
                    alert('Archivo no cargado.');
                }
            }
        });
    });

    // Se ejecutará si el formulario para crear producto ha sido enviado.
    $(document).on('submit', '#create-product-form', function () {
        // Obtiene datos del formulario.        
        var formData = JSON.stringify($(this).serializeObject());
        
        // Envía los datos del formulario a la API.
        $.ajax({
            url: apiURL + "product/create.php",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: formData,
            success: function (response) {
                console.log(response);
                // Si el producto ha sido creado, entonces muestra el listado de productos.
                showProducts();
            },
            error: function (xhr, resp, text) {
                // Muestra el error en la consola.
                console.log(xhr, resp, text);
            }
        });
    });

    $(document).on('click', '.create-product-button', function () {
        // Muestra el formulario html al hacer clic en el botón 'crear producto'.
        var create_product_html = `
        <!-- Botón para mostrar la lista de productos -->
        <div class='text-right'>
            <button class='btn btn-primary read-products-button'>
                <i class='fa fa-eye'></i> Mostrar productos
            </button>
        </div>

        <!-- Formulario html para 'crear producto' -->
        <form id='create-product-form' action='#' method='post' border='0' enctype='multipart/form-data'>
            <table class='table table-hover table-responsive table-bordered'>
        
                <!-- campo nombre -->
                <tr>
                    <td>Nombre de producto:</td>
                    <td><input type='text' name='name' class='form-control' required ></td>
                </tr>
        
                <!-- campo descripción -->
                <tr>
                    <td>Descripción</td>
                    <td><textarea name='description' class='form-control' required></textarea></td>
                </tr>

                <!-- campo marca -->
                <tr>
                    <td>Marca:</td>
                    <td><input type='text' name='brand' class='form-control' required ></td>
                </tr>

                <!-- campo precio -->
                <tr>
                    <td>Precio:</td>
                    <td><input type='number' min='1' name='price' class='form-control' required ></td>
                </tr>
        
                <!-- campo imagen -->
                <tr>
                    <td>Foto:</td>
                    <td>
                        <input type='hidden' id='id-image-name' name='image' value=''>
                        <input type='file' id='id-image-file'>
                        <input type='button' class='button' value='Cargar' id='id-btn-upload'>
                    </td>
                </tr>
                <tr>
                    <td colspan='2'>
                        <img id='id-image'
                            src='` + apiURL + `images/no-image-icon.png'
                            class='img-thumbnail mx-auto d-block'
                            style='height: 100px;'>
                    </td>
                </tr>
        
                <!-- Botón para enviar el formulario -->
                <tr>
                    <td colspan='2'>
                        <div class='text-center'>
                            <button type='submit' class='btn btn-primary'>
                                <i class='fa fa-plus'></i> Crear producto
                            </button>
                        </div>
                    </td>
                </tr>
        
            </table>
        </form>`;

        // Inyecta el html a 'page-content' de nuestra app.
        $("#page-content").html(create_product_html);
    });

});
