$(document).ready(function () {
    var appHtml = `
	<div class="jumbotron">
	  <h1>Productos</h1>
	</div>
        <div class='container'>
            <!-- Aquí es donde el contenido se va a mostrar. -->
            <div id='page-content'></div> 
        </div>`;

    // Inyecta en 'app' en index.html
    $("#app").html(appHtml);
});

// Función para convertir los valores de un formulario a json.
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};