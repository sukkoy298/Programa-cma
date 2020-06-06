// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function () {
	var formulario = document.formulario_registro,
		elementos = formulario.elements;
	// Funcion que se ejecuta cuando el evento click es activado
	var validarInputs = function () {
		for (var i = 0; i < elementos.length; i++) {
			// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
			if (elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].type == 'password') {
				// Si es tipo texto, email o password vamos a comprobar que esten completados los input
				if (elementos[i].value.length == 0) {
					console.log('El campo ' + elementos[i].name + ' esta incompleto');
					elementos[i].className = elementos[i].className + ' error';
					return false;
				} else {
					elementos[i].className = elementos[i].className.replace(' error', '');
				}
			}
		}
		// Comprobando que las contraseñas coincidan
		if (elementos.pass.value !== elementos.pass2.value) {
			elementos.pass.value = '';
			elementos.pass2.value = '';
			elementos.pass.className = elementos.pass.className + ' error';
			elementos.pass2.className = elementos.pass2.className + ' error';
		} else {
			elementos.pass.className = elementos.pass.className.replace(' error', '');
			elementos.pass2.className = elementos.pass2.className.replace(' error', '');
		}
		return true;
	};
	var enviar = function (e) {
		if (!validarInputs()) {
			console.log('Falto validar los Input');
			e.preventDefault();
		} else {
			console.log('Envia');
			e.preventDefault();
		}
	};

	var focusInput = function () {
		this.parentElement.children[1].className = 'label active';
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace('error', '');
	};

	var blurInput = function () {
		if (this.value <= 0) {
			this.parentElement.children[1].className = 'label';
			this.parentElement.children[0].className = this.parentElement.children[0].className + ' error';
		}
	};

	// ----- ----- Eventos ----- -----
	formulario.addEventListener('submit', enviar);
	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].type == 'password') {
			elementos[i].addEventListener('focus', focusInput);
			elementos[i].addEventListener('blur', blurInput);
		}
	}
} () );
var zona;
var password;
var password2;
var usuario1;
window.addEventListener('load', function () {
	var div1 = document.getElementById('opciones');
	var div2;
	var div3;
	var a1;
	var img;
	var h2;
	var p1;
	var arreglo = ['admin', 'Administracion', 'Caja', 'Laboratorio'];
	for (let index = 0; index < 4; index++) {
		a1 = document.createElement('a');
		$(a1).addClass('opcion');
		div2 = document.createElement('div');
		$(div2).addClass('contenido-opcion"');
		div3 = document.createElement('div');
		$(div3).addClass('textos');
		h2 = document.createElement('h2');
		$(h2).addClass('titulo');
		h2.id = arreglo[index];
		$(h2).attr('onclick', 'seleccionar(id)');
		h2.innerHTML = arreglo[index];
		p1 = document.createElement('p');
		$(p1).addClass('descripcion');
		div3.appendChild(h2);
		div3.appendChild(p1);
		div2.appendChild(div3);
		a1.appendChild(div2);
		div1.appendChild(a1);
	}
	$('.opciones').hide();
});
var condicion = 1;
function mostrar() {
	if (condicion == 1) {
		$('.opciones').show();
		condicion = 0;
	} else {
		$('.opciones').hide();
		condicion = 1;
	}
}
function seleccionar(id) {
	zona = id;
	document.getElementById('titulo_seleccion').innerHTML = id;
	mostrar();
}
function registrar() {
	usuario = $('#nombre').val();
	password = $('#pass').val();
	password2 = $('#pass2').val();
	if (usuario1 != '' && password != '' && password2 != '' && zona != '') {
		if (password == password2) {
			$.ajax({
				type: 'POST',
				url: 'php/Registro_Usuario.php',
				data: { usuario1, password, zona },
				success: function (response) {
					alert('OLA');
					alert(response);
				},
			});
		}
	}
}
