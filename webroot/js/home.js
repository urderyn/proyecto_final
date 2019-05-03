// Para administrar el div de main i el modal
function targetMainiModal () {

var main = document.getElementById("main");
var modal = document.getElementById("modal");

}

// Funciones de inyeccion

function inyectarModal () {

$("#main").fadeTo("slow", 0.2);

var divContent = "";

divContent +='<div class="popupContainer">';
divContent +=				'<header class="popupHeader">' 	;
divContent +=						'<span class="header_title">Login</span>';
divContent +=						'<span class="modal_close"><i class="fa fa-times"></i></span>';
divContent +=				'</header>';

divContent +=				'<section class="popupBody">';

divContent +=						'<!-- Social Login -->';
divContent +=						'<div class="social_login">';
divContent +=								'<div class="">';
divContent +=										'<a href="#" class="social_box fb">';
divContent +=												'<span class="icon"><i class="fa fa-facebook"></i></span>';
divContent +=												'<span class="icon_title">Connect with Facebook</span>';
divContent +=										'</a>';

divContent +=										'<a href="#" class="social_box google">';
divContent +=												'<span class="icon"><i class="fa fa-google-plus"></i></span>';
divContent +=												'<span class="icon_title">Connect with Google</span>';
divContent +=										'</a>';
divContent +=								'</div>';

divContent +=								'<div class="centeredText">';
divContent +=										'<span>Or use your Email address</span>';
divContent +=								'</div>';

divContent +=								'<div class="action_btns">';
divContent +=										'<div class="one_half"><a href="#" id="login_form" class="btn">Login</a></div>';
divContent +=										'<div class="one_half last"><a href="#" id="register_form" class="btn">Sign up</a></div>';
divContent +=								'</div>';
divContent +=						'</div>';

									// <!-- Username & Password Login form -->
divContent +=						'<div class="user_login">';
divContent +=								'<form id="login">';
divContent +=										'<label> Username</label>';
divContent +=										'<input name="username" type="text" />';
divContent +=										'<br />';

divContent +=										'<label>Password</label>';
divContent +=										'<input type="password" name="password" />';
divContent +=										'<br />';

// divContent +=										'<div class="checkbox">';
// divContent +=												'<input id="remember" type="checkbox" />';;
// divContent +=												'<label for="remember">Recordarme en este ordenador</label>';
// divContent +=										'</div>';
divContent+=										'<div id=validation2></div>';

divContent +=										'<div class="action_btns">';
divContent +=												'<div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>';
divContent +=												'<div class="one_half last" onclick="validarLogin()"><a href="#" class="btn btn_red">Login</a></div>';
divContent +=										'</div>';
divContent +=								'</form>';

divContent +=								'<a href="#" class="forgot_password">Olvidaste el password?</a>';
divContent +=						'</div>';
;
						// <!-- Register Form -->						

divContent +=						'<div class="user_register">';
divContent +=								'<form id="registro">';
divContent+=										'<div id=validation></div>'

divContent +=										'<label>Nickname</label>';
divContent +=										'<input class="txt-value" type="text" name = "username" onkeyup="validarTexto(0)"/>';
divContent +=										'<br />';
divContent +=										'<div class="txt-rslt">Mínimo 3 caracteres y sin números</div>';
divContent +=										'<br/>'
													
divContent +=										'<label>Password</label>';
divContent +=										'<input class="txt-value" type="text" name ="password" onkeyup="validarTexto(1)"/>';
divContent +=										'<br />';
divContent +=										'<div class="txt-rslt">Mínimo 3 caracteres</div>';
divContent +=										'<br/>'

divContent +=										'<label>DNI</label>';
divContent +=										'<input id="txt-dni" type="text" maxlength = "9" name="dni" onkeyup="validarDNI()"/>';
divContent +=										'<br />';
divContent +=										'<div id="dni-rslt">Validación del DNI</div>';
divContent +=										'<br/>'

divContent +=										'<label>Telefono</label>';
divContent +=										'<input type="text" id="txt-tlfn" maxlength = "9" name="tlfn" onkeyup="validarTlfn()"/>';
divContent +=										'<br />';
divContent +=										'<div id="tlfn-rslt">Validación Teléfono</div>';
divContent +=										'<br/>'

divContent +=										'<div class="checkbox">';
divContent +=												'<input id="política" name="política" type="checkbox"/>';
divContent +=												'<label for="send_updates">Acepto la política de privacidad</label>';
divContent +=										'</div>';

divContent +=										'<div class="action_btns">';
divContent +=												'<div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>';
divContent +=												'<div class="one_half last" onclick="validarRegistro()"><a href="#" class="btn btn_green">Register</a></div>';
divContent +=										'</div>';
divContent +=								'</form>';
divContent +=						'</div>';
divContent +=				'</section>';
divContent +=		'</div>';

		modal.innerHTML = divContent;

// Gestion de los botones del modal
	$(function() {

			// Calling Login Form
			$("#login_form").click(function() {
					$(".social_login").hide();
					$(".user_login").show();
					return false;
			});

			// Calling Register Form
			$("#register_form").click(function() {
					$(".social_login").hide();
					$(".user_register").show();
					$(".header_title").text('Register');
					return false;
			});

			// Going back to Social Forms
			$(".back_btn").click(function() {
					$(".user_login").hide();
					$(".user_register").hide();
					$(".social_login").show();
					$(".header_title").text('Login');
					return false;
			});

			$(".modal_close").click(function() {
					$("#modal").html("");
					$("#main").fadeTo("slow", 1);				
					
			});
	});

}

// Funciones navegacion

function mostrar_user () {
	main.innerHTML = "";			
}

function mostrar_crear_remedio () {
	main.innerHTML = "";	
}

function mostrar_home (){
	main.innerHTML = "";
	inyectarBuscador();
	inyectarCards();
}

// Funciones para validar el formulario

function validarTexto(num){

	var txt = document.getElementsByClassName("txt-value")[num];
	var divtxt = document.getElementsByClassName("txt-rslt")[num];
	var regex = /^[A-Za-z]{3,}$/;


	if (num == 0 || num == 1){

		if (txt.value.length < 3 || !regex.test(txt.value)) {
			divtxt.style.color = "red";
			return false;
		}

		else {
			divtxt.style.color = "green";
			return true;
			}
		}

	else {

		if (txt.value.length < 3) {
			divtxt.style.color = "red";
			return false;
		}

		else {
			divtxt.style.color = "green";
			return true;
			}
	}
}

function validarDNI () {

	var dni = document.getElementById("txt-dni").value;
	var divdni = document.getElementById("dni-rslt");
	var dni_nmbr = parseInt(dni.slice(0,-1));
	var dni_ltr = dni.slice(8).toUpperCase();
	
	function averigualetra (dni_nmbr){

	cadena="TRWAGMYFPDXBNJZSQVHLCKET";
	posicion = dni_nmbr % 23;
	letra = cadena.substring(posicion,posicion+1);
		
	return letra;

	}

	if (dni.length != 9 || averigualetra(dni_nmbr) != dni_ltr) {
		divdni.style.color = "red";
		return false;	
	}

	else{
		divdni.style.color = "green";
		return true;
	}
}

function validarTlfn () {

	var tlfn = document.getElementById("txt-tlfn").value;
	var divtlfn = document.getElementById("tlfn-rslt");
	
	

	if (tlfn.length == 9 && (tlfn.slice(0,1) == 6 || tlfn.slice(0,1) == 7 || tlfn.slice(0,1) == 9)) {
		divtlfn.style.color = "green";
		return true;	
	}

	else{
		divtlfn.style.color = "red";
		return false;	
	}
}

// falta evitar que se pinte de rojo el div del validar tlfn

function validarRegistro () {

	var divval =  document.getElementById("validation");
	
	if (validarTlfn() && validarTexto(0) && validarTexto(1) &&  validarDNI()) {  		

  			$.ajax({

  				type: 'post',
  				url: '/proyecto_final/home/registro',
  				data: $("#registro").serialize(),
  				dataType: 'json',

  				beforeSend: function(){
  					$("#validation").html("Enviando datos...");
  				},

  				success: function(data){

  					$("#validation").html(data);

  					// setTimeout(function(){ location.href = "muro.php"; }, 2000);
  					
  				},

  				error: function(){
  					$("#validation").html("Error en el envío de datos al server");
  				}

  			});

	}

	else {

		divval.innerHTML ="REVISA LOS CAMPOS";
		divval.style.color = "red";
	}
	
}

function validarLogin () {

	
  			$.ajax({

  				type: 'post',
  				url: '/proyecto_final/home/login',
  				data: $("#login").serialize(),
  				dataType: 'json',

  				beforeSend: function(){
  					$("#validation2").html("Enviando datos...");
  				},

  				success: function(data){

  					$("#validation2").html(data);

  					//setTimeout(function(){ location.href = "muro.php"; }, 2000);
  					
  				},

  				error: function(){
  					$("#validation2").html("Error en el envío de datos al server");
  				}

  			});	
}



// Mascara cards

function mostrar(id){
	var x = document.getElementsByClassName("mascara");	
	x[id].style.display = 'block';					
}


function desaparecer(id){
	var x = document.getElementsByClassName("mascara");
	x[id].style.display = 'none';					
}