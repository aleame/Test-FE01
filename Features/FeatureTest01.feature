Feature: Regresion navegabilidad MeLi 

#AF-------------------------------Flujo Roles-----------------------------------------------------------------------------
Scenario Outline: Navegabilidad de categorias en MercadoLibre 
	Given El Usuario ingresa al sitio de MercadoLibre "https://www.mercadolibre.com.ar/" 
	And El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu 
	And El Usuario hace clic en el submenu "<submenu>" y visualiza el desplegable 
	And El Usuario hace clic en el deplegable "<desplegable>" y visauliza la categoria solicitada 
	And El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region
	And Finalmente el Usuario selecciona una publicacion y visualiza su detalle 
	
	Examples: 
	
		| ambiente | submenu					| desplegable				|
		| homo1    | Hogar y Electrodomésticos	| Climatización				|
		| homo1    | Tecnología					| Celulares y Smartphones	|
		| homo1    | Deportes y Aire Libre		| Bicicletas				|
		| homo1    | Herramientas e Industria	| Industria Textil			|
		| homo1    | Juguetes y Bebés			| Cuarto del Bebé			|
		| homo1    | Libros						| Historia					|
		
      