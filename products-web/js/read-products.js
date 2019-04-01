$(document).ready(function () {
    showProducts();
});

function showProducts() {
    // Muestra la lista de productos.
    var apiURL = "http://[your-domain-here]/apps/products-api/";
    
    $.getJSON(apiURL + "product/read.php", function (data) {
        var read_products_html = `
            <!-- Al hacer clic, cargará el formulario para crear un nuevo producto. -->
            <div class='text-right'>
                <button class='btn btn-primary create-product-button'>
                    <i class='fa fa-plus'></i> Crear Producto
                </button>
            </div>

            <!-- Comienza la tabla. -->
            <table class='table table-bordered table-hover'>
        
            <!-- Encabezado de tabla. -->
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>`;

        $.each(data.records, function (key, val) {
            // Crea cada renglón de la tabla.
            read_products_html += `
                <tr>
                    <td>` + val.id_product + `</td>
                    <td>` + val.name + `</td>
                    <td>` + val.description + `</td>
                    <td>` + val.brand + `</td>
                    <td>` + val.price + `</td>
                    <td> <img src='` + apiURL + val.image + `' height='80px'> </td>
                    <td>
                        <!-- Botón para editar -->
                        <button class='btn btn-info update-product-button' data-id='` + val.id_product + `'>
                            <i class="fa fa-edit"></i> Editar
                        </button>
                        
                        <!-- Botón para eliminar -->
                        <button class='btn btn-danger delete-product-button' data-id='` + val.id_product + `'>
                            <i class="fa fa-trash"></i> Eliminar
                        </button>
                    </td>
                </tr>`;
        });
        // Termina la tabla.
        read_products_html += `</table>`;
        // Inyecta en 'page-content' de la aplicación.
        $("#page-content").html(read_products_html);
    });
}

// Al hacer clic en el botón de 'mostrar productos'.
$(document).on('click', '.read-products-button', function(){
    showProducts();
});
