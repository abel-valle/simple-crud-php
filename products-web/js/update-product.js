$(document).ready(function () {

    var apiURL = "http://[your-domain-here]/apps/products-api/";

    // Muestra el formulario cuando el botón de actualizar es presionado.
    $(document).on('click', '.update-product-button', function () {
        // Se obtiene el ID de producto.
        var idProduct = $(this).attr('data-id');

        // Se obtiene el registro con base en el id de producto. 
        $.getJSON(apiURL + "product/read-one.php?idproduct=" + idProduct, function (data) {

            // Los valores se utilizan para llenar los campos del formulario.
            var name = data.name;
            var description = data.description;
            var brand = data.description;
            var price = data.price;
            var image = data.image;

            // Variable que almacena html.
            var update_product_html = `
            <!-- Botón para mostrar la lista de productos -->
            <div class='text-right'>
                <button class='btn btn-primary read-products-button'>
                    <i class='fa fa-eye'></i> Mostrar productos
                </button>
            </div>
            
            <!-- Formulario html para 'modificar producto' -->
            <form id='create-product-form' action='#' method='post' border='0' enctype='multipart/form-data'>
                <table class='table table-hover table-responsive table-bordered'>
                    <!-- campo id_producto -->
                    <tr>
                        <td>ID:</td>
                        <td>` + idProduct + `</td>
                    </tr>

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
                                src='` + apiURL + image + `'
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
            $("#page-content").html(update_product_html);
        });
    });

});