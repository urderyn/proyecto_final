<?php defined('BASEPATH') or exit ('No se permite acceso directo');

class home extends Model {

		public function insertReg ($dato){

		$username = $dato['username'];
		$password = $dato['password'];
		$dni = $dato['dni'];
		$tlfn = $dato['tlfn'];
		$id = null;

		$connect = Model::getInstanceDB();
		$sql = 'insert into usuarios values (:id,:username,:password,:dni,:tlfn)';
		$stmt = $connect->prepare($sql);
		$stmt->bindParam(':id', $id);
		$stmt->bindParam(':username', $username);
		$stmt->bindParam(':password', $password);
		$stmt->bindParam(':dni', $dni);
		$stmt->bindParam(':tlfn', $tlfn);

		//si se ejecuta correctamente el INSERT, retorno al controlador el mensaje de OK
		if(!$stmt->execute()) {

			return json_encode('Fallo en la inserción del dato en la DB');

		} else {

			return json_encode('Usuario registrado correctamente');

		}

	}

	public function validarLogin($dato) {

		$username = $_POST['username'];
		$pass = $_POST['password'];

		$connect = Model::getInstanceDB();

		$sql = "select * from  usuarios WHERE username = :usuario AND pass = :pass;";

		$stmt = $connect->prepare($sql);
		$stmt->bindParam(':usuario', $username);
		$stmt->bindParam(':pass', $pass);

		$stmt->execute();
		$rows = $stmt->rowCount();

		sleep(1);

		if ($rows > 0) {

			
			return json_encode("Datos de login correctos. Entrando...");

			
		}else {

			return json_encode("Datos incorrectos...");

		}



	}

}
