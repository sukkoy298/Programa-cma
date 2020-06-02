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

	// --- Eventos ---
	formulario.addEventListener('submit', enviar);

	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].type == 'password') {
			elementos[i].addEventListener('focus', focusInput);
			elementos[i].addEventListener('blur', blurInput);
		}
	}

	// --- Select ---
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
}());
