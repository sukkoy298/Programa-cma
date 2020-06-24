// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
var formulario = document.form_buscar,
	elementos = formulario.elements;

// Funcion que se ejecuta cuando el evento click es activado
var validarInputs = function () {
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == 'number') {
			// Si es tipo texto o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				// console.log('El campo ' + elementos[i].name + ' esta incompleto');
				Swal.fire({
					title: 'El campo cedula esta incompleto',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
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
		//Antoni coloca el codigo para enviar los datos a la base de datos aqui :v
		var cedulaP = document.getElementById('cedula').value;

		Swal.fire({
			title: 'Pacientes registrados',
			html:
				'<div class="pacientesR"><table><thead><tr><th>Cedula</th><th>Nombre</th><th>Fecha de nacimiento</th><th>Ver registro</th></tr></thead><tbody><tr><td><label id="1"></label></td><td><label id="2"></label></td><td><label id="3"></label></td><td><label id="4"></label></td></tr><tr><td><label id="5"></label></td><td><label id="6"></label></td><td><label id="7"></label></td><td><label id="8"></label></td></tr></tbody></table></div>',
			width: '50%',
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			stopKeydownPropagation: false,
			showConfirmButton: false,
			showCloseButton: true,
			closeButtonAriaLabel: 'Cerrar',
		});
		var label1 = document.getElementById('1'),
			label5 = document.getElementById('5');

		label1.innerText = cedulaP;
		label5.innerText = cedulaP;
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

/* ------------------------- */
/* Eventos */
/* ------------------------- */

/* ----- ----- Boton para validar la cedula ----- ----- */
var button = document.getElementById('btn-search');
button.addEventListener('click', enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == 'number') {
		elementos[i].addEventListener('focus', focusInput);
		elementos[i].addEventListener('blur', blurInput);
	}
}

/* ----- ----- Boton para mostrar si se quiere buscar la cedula del cliente ----- ----- */
var opcion = function () {
	var inputS = document.getElementById('inputSelect').value;
	var SelectBox = document.getElementById('select');
	if (inputS == 'No') {
		formulario.className += ' visible';
		SelectBox.className = SelectBox.className.replace(' error', '');
	} else if (inputS == 'Si') {
		document.location.href = 'http://localhost/Programa-cma-master/index-cajaD.html';
		SelectBox.className = SelectBox.className.replace(' error', '');
	} else {
		Swal.fire({
			title: 'Seleccione una opcion',
			icon: 'error',
			timer: '4000',
			timerProgressBar: true,
			toast: true,
			position: 'top-end',
			allowEscapeKey: false,
			stopKeydownPropagation: false,
			showConfirmButton: false,
		});
		SelectBox.className = SelectBox.className + ' error';
	}
};

var enviar = document.getElementById('btn-submit');
enviar.addEventListener('click', opcion);

/* ------------------------- */
/* Select de si se desea registrar un paciente */
/* ------------------------- */
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});
