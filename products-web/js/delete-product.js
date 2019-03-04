$(document).ready(function () {
    // Se ejecuta si se da clic en el botón de eliminar.
    $(document).on('click', '.delete-product-button', function () {
        // Se obtiene el ID de producto.
        var id_product = $(this).attr('data-id');
        // bootbox para pop up de confirmación. 
        bootbox.confirm({
            message: "<h4>Estás seguro?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Si',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> No',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if (result == true) {
                    // Envía la petición de eliminar a la api / servidor remoto.
                    $.ajax({
                        url: "http://[your-domain-here]/apps/app-products-api/product/delete.php",
                        type: "POST",
                        dataType: 'json',
                        data: JSON.stringify({ id_product: id_product }),
                        success: function (result) {
                            // Recarga la lista de productos.
                            showProducts();
                        },
                        error: function (xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });

                }
            }
        });
    });
});