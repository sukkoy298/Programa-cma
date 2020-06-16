// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
var formulario = document.form_inicioSeccion,
	elementos = formulario.elements;

// Funcion que se ejecuta cuando el evento click es activado
var validarInputs = function () {
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == 'text' || elementos[i].type == 'password') {
			// Si es tipo texto o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				if (elementos[i].name == 'user') {
					Swal.fire({
						title: 'El campo nombre esta incompleto',
						icon: 'error',
						timer: '4000',
						timerProgressBar: true,
						toast: true,
						position: 'top-end',
						allowEscapeKey: false,
						stopKeydownPropagation: false,
						showConfirmButton: false,
					});
				} else if (elementos[i].name == 'pass') {
					Swal.fire({
						title: 'El campo contraseña esta incompleto',
						icon: 'error',
						timer: '4000',
						timerProgressBar: true,
						toast: true,
						position: 'top-end',
						allowEscapeKey: false,
						stopKeydownPropagation: false,
						showConfirmButton: false,
					});
				}
				// console.log('El campo ' + elementos[i].name + ' esta incompleto');
				elementos[i].className = elementos[i].className + ' error';
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(' error', '');
			}
		}
	}
	return true;
};

var enviar = function () {
	if (!validarInputs()) {
		console.log('Falto validar los Input');
	} else {
		// console.log('Enviando');
		Swal.fire({
			title: 'Enviando',
			icon: 'success',
			timer: '4000',
			timerProgressBar: true,
			toast: true,
			position: 'top-end',
			allowEscapeKey: false,
			stopKeydownPropagation: false,
			showConfirmButton: false,
		});
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

// --- Eventos ---
var button = document.getElementById('btn-submit');
button.addEventListener('click', enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == 'text' || elementos[i].type == 'password') {
		elementos[i].addEventListener('focus', focusInput);
		elementos[i].addEventListener('blur', blurInput);
	}
}
