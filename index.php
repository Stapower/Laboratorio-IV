<?php
	use \Psr\Http\Message\ServerRequestInterface as Request;
	use \Psr\Http\Message\ResponseInterface as Response;

	require './vendor/autoload.php';
	require './vendor/Usuarios/Usuarios.php';

	$app = new \Slim\App;
	$app->get('/hello/{name}', function (Request $request, Response $response) {
		$name = $request->getAttribute('name');
		$response->getBody()->write("Hello, $name");

		return $response;
	});
	
	$app->get('/', function (Request $request, Response $response) {
			echo "Hola";
	});
	
		$app->get('/Usuarios', function (Request $request, Response $response) {
			
			return Usuario::leer();
	});
	
	$app->run();