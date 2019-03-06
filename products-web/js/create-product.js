$(document).ready(function () {
    $(document).on('click', '.create-product-button', function() {
        // Muestra el formulario html al hacer clic en el botón 'crear producto'.
        var create_product_html = `
        <!-- 'read products' button to show list of products -->
        <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
            <span class='glyphicon glyphicon-list'></span> Mostrar productos
        </div>

        <!-- Formulario html de 'crear producto' -->
        <form id='create-product-form' action='#' method='post' border='0'>
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
                    <td><input type="file" name='image' class="form-control-file"></td>
                </tr>
        
                <!-- Botón para enviar el formulario -->
                <tr>
                    <td></td>
                    <td>
                        <button type='submit' class='btn btn-primary'>
                            <span class='glyphicon glyphicon-plus'></span> Crear producto
                        </button>
                    </td>
                </tr>
        
            </table>
        </form>`;

        // Inyecta el html a 'page-content' de nuestra app.
        $("#page-content").html(create_product_html);
    });

    // Se ejecutará si el formulario de crear producto ha sido enviado.
    $(document).on('submit', '#create-product-form', function () {
        // Obtiene datos del formulario.
        var form_data = JSON.stringify($(this).serializeObject());

        // Envía los datos del formulario a la API
        $.ajax({
            url: "http://[your-domain-here]/apps/app-products-api/product/create.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                // Si el producto ha sido creado, entonces muestra el listado de productos.
                showProducts();
            },
            error: function (xhr, resp, text) {
                // Muestra el error en la consola.
                console.log(xhr, resp, text);
            }
        });
    });

});