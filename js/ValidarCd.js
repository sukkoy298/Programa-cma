// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
var formulario = document.form_datosP,
	elementos = formulario.elements;
	var ip =  "200.82.139.154:80";
// Funcion que se ejecuta cuando el evento click es activado
var validarInputs = function () {
	for (var i = 1; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == 'text' || elementos[i].type == 'number' || elementos[i].type == 'date') {
			// Si es tipo texto o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				// console.log('El campo ' + elementos[i].name + ' esta incompleto');
				if (elementos[i].name == 'fname') {
					fire('El campo nombre esta incompleto', 'error');
				} else if (elementos[i].name == 'flastn') {
					fire('El campo apellido esta incompleto', 'error');
				} else if (elementos[i].name == 'fcedula') {
					fire('El campo cedula esta incompleto', 'error');
				} else if (elementos[i].name == 'fdateN') {
					fire('El campo fecha esta incompleto', 'error');
				}
				elementos[i].className = elementos[i].className + ' error';
				return false;
			} else { 
				elementos[i].className = elementos[i].className.replace(' error', '');
			}
		}
	}
	return true;
};
function guardar(id) {
	if (id == 'fname') {
	sessionStorage.setItem('Nombre', $('#' + id).val());
	} else if (id == 'flastn') {
	sessionStorage.setItem('Apellido',  $('#' + id).val());
	} else if (id == 'fcedula') {
	sessionStorage.setItem('CI', $('#' + id).val());
	} else if (id == 'fdateN') {
	sessionStorage.setItem('fechas', $('#' + id).val()); 
	}
}
function fire(Titulo, icono) {
	Swal.fire({
		title: Titulo,
		icon: icono,
		timer: '4000',
		timerProgressBar: true,
		toast: true,
		position: 'top-end',
		allowEscapeKey: false,
		stopKeydownPropagation: false,
		showConfirmButton: false,
	});
}
var enviar = function () {
	if (!validarInputs()) {
		console.log('Falto validar los Input');
	} else {
		fire('Enviando', 'success');
		var valor6;
		var examenes  = JSON.parse(sessionStorage.getItem('Examenes'));
		console.log(examenes[0]);
		valor6 = examenes_comprobar();
	comprobar();
	var id_factura = $('#idfactura').val();
		var valor1 = $('#fname').val();
		var valor2 = $('#flastn').val();
		var valor3 = $('#fcedula').val();
		var valor4 = $('#fdateN').val();
		var valor5 = $('#ftelf').val();
		var size;
		valor3 += '-0'
		size = examenes.length;
		$.ajax({
			type: "POST",
			url: "php/Caja.php",
			data: { id_factura ,valor1, valor2, valor3, valor4, valor5, valor6,'examenes' : JSON.stringify(examenes), size},
			success: function (response) {
				if (response != '1') {
					alert('Error:  ' + response);
					$("#fsubmit").on('submit', function(evt){
						evt.preventDefault();  
					 });
				}else{
					fire('Factura Creada', 'success');
					document.location.href = 'http://' + ip  +'/Programa-cma-master/index-cajaR.html';
				}
			}
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

var focusInputD = function () {
	this.parentElement.children[1].className = 'labelD active';
	this.parentElement.children[0].className = this.parentElement.children[0].className.replace('error', '');
};

var blurInputD = function () {
	if (this.value <= 0) {
		this.parentElement.children[1].className = 'labelD';
		this.parentElement.children[0].className = this.parentElement.children[0].className + ' error';
	}
};

// --- Eventos ---
var button = document.getElementById('btn-submit');
button.addEventListener('click', enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == 'text' || elementos[i].type == 'number' || elementos[i].type == 'tel') {
		elementos[i].addEventListener('focus', focusInput);
		elementos[i].addEventListener('blur', blurInput);
	}
}

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == 'date') {
		elementos[i].addEventListener('focus', focusInputD);
		elementos[i].addEventListener('blur', blurInputD);
	}
}
function comprobar() {
	$.ajax({
		type: "GET",
		url: "php/Caja_Inicio.php",
		success: function (response) {
			$('#idfactura').focus();
			$('#idfactura').val(response);	
			$('#idfactura').attr('disabled', 'false');
		}
	});
}
window.addEventListener('load', function () {  
	comprobar();
	examenes_comprobar();
	var nombre_Paciente = sessionStorage.getItem('Nombre');
	var apellido_Paciente = sessionStorage.getItem('Apellido');
	var cedula_Paciente = sessionStorage.getItem('CI');
	var Fecha_Nacimiento_Paciente = sessionStorage.getItem('fechas'); 
	if (nombre_Paciente != "") {
		$('#fname').focus();
		$('#fname').val(nombre_Paciente);
		$('#fname').attr('onchange', 'guardar(id)');
		$('#flastn').focus();
		$('#flastn').val(apellido_Paciente);
		$('#flastn').attr('onchange', 'guardar(id)');
		$('#fcedula').focus();
		$('#fcedula').val(cedula_Paciente); 
		$('#fcedula').attr('onchange', 'guardar(id)');
		$('#fdateN').focus();
		$('#fdateN').val(Fecha_Nacimiento_Paciente); 
		$('#fdateN').attr('onchange', 'guardar(id)');
	}
});
var count = 0;
function examenes_comprobar() {
	count++;
	let examenes = JSON.parse(sessionStorage.getItem('Examenes'));
		console.log(examenes);
		if (examenes != null) {
			if (examenes.length > 0) {
				$('#btn-submit').css({'border-color':'98FB98'});
				val = 'Examenes';
			}
		}else{
			$('#btn-submit').css({'border-color':'aqua'});
			val = 'Consulta';
		}
		return val;
}
  window.onload = function() {
    setInterval(examenes_comprobar, 10000);
  }
