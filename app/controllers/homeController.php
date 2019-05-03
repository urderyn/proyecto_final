<?php defined('BASEPATH') or exit ('No se permite acceso directo');

class homeController extends Controller {

    public function index() {

        $this->render('index');

    }

    public function registro () {

        if (isset($_POST['dni'])){
    

            require_once(ROOT . DS . 'app' . DS . 'models' . DS . 'homeModel.php');

            $insertar = new home;

            echo json_encode($insertar->insertReg($_POST));

        }else {

            header('Location: ' . BASE_DOMAIN_DIR_URL . 'webroot/404.php');
        }

	}

	public function login () {

        if (isset($_POST['username'])){

            require_once(ROOT . DS . 'app' . DS . 'models' . DS . 'homeModel.php');

            $validar = new home;

            echo json_encode($validar->validarLogin($_POST));

        }else {

            header('Location: ' . BASE_DOMAIN_DIR_URL . 'webroot/404.php');

        }

	
	}
}
