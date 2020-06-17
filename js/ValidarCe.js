// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
var formularioH = document.form_hematologia,
	elementosH = formularioH.elements,
	formularioQ = document.form_quimica,
	elementosQ = formularioQ.elements,
	formularioS = document.form_serologia,
	elementosS = formularioS.elements,
	formularioHr = document.form_hormonas,
	elementosHr = formularioHr.elements,
	formularioHc = document.form_heces,
	elementosHc = formularioHc.elements,
	formularioO = document.form_orina,
	elementosO = formularioO.elements,
	formularioMt = document.form_marcadoresT,
	elementosMt = formularioMt.elements,
	formularioI = document.form_inmunologia,
	elementosI = formularioI.elements,
	formularioB = document.form_bact,
	elementosB = formularioB.elements,
	formularioOt = document.form_otros,
	elementosOt = formularioOt.elements;

// Funcion que se ejecuta cuando el evento click es activado

var validarCheckboxH = function () {
	var opcionesH = document.getElementsByName('hematologia'),
		resultado = false;

	for (var i = 0; i < elementosH.length; i++) {
		if (elementosH[i].type == 'checkbox') {
			for (var o = 0; o < opcionesH.length; o++) {
				if (opcionesH[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosH[i].parentNode.className = elementosH[i].parentNode.className + ' error';
				// console.log('El formulario Hematologia esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosH[i].parentNode.className = elementosH[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxQ = function () {
	var opcionesQ = document.getElementsByName('quimica'),
		resultado = false;

	for (var i = 0; i < elementosQ.length; i++) {
		if (elementosQ[i].type == 'checkbox') {
			for (var o = 0; o < opcionesQ.length; o++) {
				if (opcionesQ[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosQ[i].parentNode.className = elementosQ[i].parentNode.className + ' error';
				// console.log('El formulario Quimica esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosQ[i].parentNode.className = elementosQ[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxS = function () {
	var opcionesS = document.getElementsByName('serologia'),
		resultado = false;

	for (var i = 0; i < elementosS.length; i++) {
		if (elementosS[i].type == 'checkbox') {
			for (var o = 0; o < opcionesS.length; o++) {
				if (opcionesS[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosS[i].parentNode.className = elementosS[i].parentNode.className + ' error';
				// console.log('El formulario Serologia esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosS[i].parentNode.className = elementosS[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxHr = function () {
	var opcionesHr = document.getElementsByName('hormonas'),
		resultado = false;

	for (var i = 0; i < elementosHr.length; i++) {
		if (elementosHr[i].type == 'checkbox') {
			for (var o = 0; o < opcionesHr.length; o++) {
				if (opcionesHr[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosHr[i].parentNode.className = elementosHr[i].parentNode.className + ' error';
				// console.log('El formulario Hormonas esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosHr[i].parentNode.className = elementosHr[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxHc = function () {
	var opcionesHc = document.getElementsByName('heces'),
		resultado = false;

	for (var i = 0; i < elementosHc.length; i++) {
		if (elementosHc[i].type == 'checkbox') {
			for (var o = 0; o < opcionesHc.length; o++) {
				if (opcionesHc[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosHc[i].parentNode.className = elementosHc[i].parentNode.className + ' error';
				// console.log('El formulario Heces esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosHc[i].parentNode.className = elementosHc[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxO = function () {
	var opcionesO = document.getElementsByName('orina'),
		resultado = false;

	for (var i = 0; i < elementosO.length; i++) {
		if (elementosO[i].type == 'checkbox') {
			for (var o = 0; o < opcionesO.length; o++) {
				if (opcionesO[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosO[i].parentNode.className = elementosO[i].parentNode.className + ' error';
				// console.log('El formulario Orina esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosO[i].parentNode.className = elementosO[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxMt = function () {
	var opcionesMt = document.getElementsByName('marcadoresT'),
		resultado = false;

	for (var i = 0; i < elementosMt.length; i++) {
		if (elementosMt[i].type == 'checkbox') {
			for (var o = 0; o < opcionesMt.length; o++) {
				if (opcionesMt[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosMt[i].parentNode.className = elementosMt[i].parentNode.className + ' error';
				// console.log('El formulario Marcadores Tumulares esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosMt[i].parentNode.className = elementosMt[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxI = function () {
	var opcionesI = document.getElementsByName('inmunologia'),
		resultado = false;

	for (var i = 0; i < elementosI.length; i++) {
		if (elementosI[i].type == 'checkbox') {
			for (var o = 0; o < opcionesI.length; o++) {
				if (opcionesI[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosI[i].parentNode.className = elementosI[i].parentNode.className + ' error';
				// console.log('El formulario Inmunologa esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosI[i].parentNode.className = elementosI[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarCheckboxB = function () {
	var opcionesB = document.getElementsByName('bact'),
		resultado = false;

	for (var i = 0; i < elementosB.length; i++) {
		if (elementosB[i].type == 'checkbox') {
			for (var o = 0; o < opcionesB.length; o++) {
				if (opcionesB[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementosB[i].parentNode.className = elementosB[i].parentNode.className + ' error';
				// console.log('El formulario Bacterologia esta incompleto');
				Swal.fire({
					title: 'No selecciono ninguna de las opciones',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementosB[i].parentNode.className = elementosB[i].parentNode.className.replace(' error', '');
				return true;
			}
		}
	}
};

var validarTextareaOt = function () {
	for (var i = 0; i < elementosOt.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementosOt[i].type == 'textarea') {
			// Si es tipo texto, email o password vamos a comprobar que esten completados los input
			if (elementosOt[i].value.length == 0) {
				// console.log('El campo ' + elementosOt[i].name + ' esta incompleto');
				Swal.fire({
					title: 'El campo otros examenes esta incompleto',
					icon: 'error',
					timer: '4000',
					timerProgressBar: true,
					toast: true,
					position: 'top-end',
					allowEscapeKey: false,
					stopKeydownPropagation: false,
					showConfirmButton: false,
				});
				elementosOt[i].className = elementosOt[i].className + ' error';
				return false;
			} else {
				elementosOt[i].className = elementosOt[i].className.replace(' error', '');
			}
		}
	}
	return true;
};

var enviarH = function () {
	if (!validarCheckboxH()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarQ = function () {
	if (!validarCheckboxQ()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarS = function () {
	if (!validarCheckboxS()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarHr = function () {
	if (!validarCheckboxHr()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarHc = function () {
	if (!validarCheckboxHc()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarO = function () {
	if (!validarCheckboxO()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarMt = function () {
	if (!validarCheckboxMt()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarI = function () {
	if (!validarCheckboxI()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarB = function () {
	if (!validarCheckboxB()) {
		console.log('Falto validar por lo menos un checkbox');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

var enviarOt = function () {
	if (!validarTextareaOt()) {
		console.log('Falto validar el textarea');
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
		//Antoni aqui tienes que colocar el codigo para enviar los datos a la base de datos xd
	}
};

// --- Eventos ---
var buttonH = document.getElementById('btn-submitH'),
	buttonQ = document.getElementById('btn-submitQ'),
	buttonS = document.getElementById('btn-submitS'),
	buttonHr = document.getElementById('btn-submitHr'),
	buttonHc = document.getElementById('btn-submitHc'),
	buttonO = document.getElementById('btn-submitO'),
	buttonMt = document.getElementById('btn-submitMt'),
	buttonI = document.getElementById('btn-submitI'),
	buttonB = document.getElementById('btn-submitB'),
	buttonOt = document.getElementById('btn-submitOt');

buttonH.addEventListener('click', enviarH);
buttonQ.addEventListener('click', enviarQ);
buttonS.addEventListener('click', enviarS);
buttonHr.addEventListener('click', enviarHr);
buttonHc.addEventListener('click', enviarHc);
buttonO.addEventListener('click', enviarO);
buttonMt.addEventListener('click', enviarMt);
buttonI.addEventListener('click', enviarI);
buttonB.addEventListener('click', enviarB);
buttonOt.addEventListener('click', enviarOt);
