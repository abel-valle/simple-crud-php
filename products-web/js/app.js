$(document).ready(function () {
    var appHtml = `
	<div class="jumbotron">
	  <h1>Productos</h1>
	</div>
        <div class='container'>
            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div> 
        </div>`;

    // inject to 'app' in index.html
    $("#app").html(appHtml);
});
