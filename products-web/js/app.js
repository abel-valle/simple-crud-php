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
