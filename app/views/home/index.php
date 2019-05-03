<?php defined('BASEPATH') or exit ('No se permite acceso directo');?>

<div id='portada'>
	<img id='knodit' src='webroot/img/knodit.png'>		
		<div class=wrap>
	<form id='search' action='' method='get'>
			<div class=search>				
				<input type=text class=searchTerm placeholder=Busca un remedio...>
					<button type=submit class=searchButton>				
						<i class="fa fa-search"></i>
   						</button>
   		<div id='radios'>
			<input type='radio' name='search-filter' value='Uso'>Uso
			<input class='marginlft' type='radio' name='search-filter' value='Ingrediente'>Nombre
			<input class='marginlft' type='radio' name='search-filter' value='Ingrediente'>Ingrediente		
		</div>	
   				</div>
					</div>
	</form>
</div>

<?php

$divContent = "<div id='contenedor-cards'>";


	for ($i = 0; $i < 20; $i++) {

		
		$divContent .= "<div class='card' onmouseover='mostrar($i)' onmouseleave='desaparecer($i)'>";
		$divContent .=		"<div class='typeremedy'>Infusión</div>";
		$divContent .=		"<div class='image' style='background-image: url(webroot/img/1.jpg)'>";
		$divContent .=			"<div class='mascara'>";
		$divContent .=				"<div class='foot-masc'>";
		$divContent .=					"<div class='author'>";
		$divContent .=						"<img src='webroot/img/avatar.png'>";								
		$divContent .=					"</div>";
		$divContent .=					"<div class='save'>";
		$divContent .=						"<div style='clear: both;'></div>";
		$divContent .=						"<span class='nlikes'>13</span>";
		$divContent .=						"<img  src='webroot/img/heart.svg'>";								
		$divContent .=					"</div>";											
		$divContent .=				"</div>";
		$divContent .=			"</div>";
		$divContent .=		"</div>";
		$divContent .=		"<div class='name'><h3>Té de pimienta negra y miel</h3></div>";
		$divContent .=		"<div class='text'>Uso: Curar la tos</div>";
		$divContent .=		"<div class='ingredients text'>Ingredientes: Agua, pimienta negra y miel</div>";
		$divContent .=		"<div class='social'>";
		$divContent .=			"<div class='rank'>";
		$divContent .=				"<img class='centr_iz hoja'  src='webroot/img/hoja.svg'>";
		$divContent .=				"<img class='hoja' src='webroot/img/hoja.svg'>";
		$divContent .=				"<img class='hoja' src='webroot/img/hoja.svg'>";
		$divContent .=				"<img class='hoja' src='webroot/img/hoja.svg'>";
		$divContent .=				"<img class='hoja' src='webroot/img/hoja.svg'>";
		$divContent .=			"</div>";
		$divContent .=			"<div class='visits'>Visitas: 33</div>";
		$divContent .=		"</div>";
		$divContent .=		"<div class='border'></div>";
		$divContent .=	"</div>";		
	}

	$divContent .= "</div>";

	echo $divContent;

	?>
						