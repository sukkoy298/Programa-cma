// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
var formulario = document.form_buscar,
	elementos = formulario.elements;
var ip =  "200.82.139.154:80";
// Funcion que se ejecuta cuando el evento click es activado
var validarInputs = function () {
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == 'number') {
			// Si es tipo texto o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				// console.log('El campo ' + elementos[i].name + ' esta incompleto');
				fire('El campo cedula esta incompleto', 'error');
				elementos[i].className = elementos[i].className + ' error';
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(' error', '');
			}
		}
	}
	return true;
};
var nombres = [];
var apellidos = [];
var fechas = [];
var ci = [];
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
		var cedula = $('#cedula').val();
		var contador = 0;
		
		$.ajax({
			type: "POST",
			url: "php/Buscar_cliente_registrado.php",
			data: {cedula},
			success: function (response) {
				let paciente = JSON.parse(response);
				paciente.forEach(element => {
					nombres[contador]	= element.nombre;
					apellidos[contador] =	element.apellido;
					ci[contador] =	element.Cedula_Paciente;
					fechas[contador] =	element.Fecha_Nacimiento;
					contador ++;
				});
				if (contador == 1) {
					sessionStorage.setItem('Nombre', nombres[0]);
					sessionStorage.setItem('Apellido', apellidos[0]);
					sessionStorage.setItem('CI', ci[0]);
					sessionStorage.setItem('fechas', fechas[0]);
					document.location.href = 'http://' + ip  +'/Programa-cma-master/index-cajaD.html';
				}else if(contador == 0){
					fire('Paciente No Registrado', 'error');
				}else{
					Swal.fire({
						title: 'Pacientes registrados',
						html:
							'<div class="pacientesR"><table><thead><tr><th>Cedula</th><th>Nombre</th><th>apellido</th><th>Fecha de nacimiento</th><th>Ver registro</th></tr></thead><tbody id = "cuerpo"></table></div>',
						width: '50%',
						allowOutsideClick: false,
						allowEscapeKey: false,
						allowEnterKey: false,
						stopKeydownPropagation: false,
						showConfirmButton: false,
						showCloseButton: true,
						closeButtonAriaLabel: 'Cerrar',
					});
					for (let i = 0; i < contador; i++) {
						var tr = document.createElement('tr');
						tr.value = i;
						$(tr).attr('onclick','Seleccion(value, id)');
						var cipas = document.createElement('th');
						cipas.innerHTML = ci[i];
						cipas.id = i + 'cipas';
						tr.appendChild(cipas);
						var nom = document.createElement('th');
						nom.innerHTML = nombres[i];
						nom.id = i + 'nom';
						tr.appendChild(nom);
						var apellido = document.createElement('th');
						apellido.innerHTML =  apellidos[i];
						apellido.id = i + 'ape';	
						tr.appendChild(apellido);					
						var fec = document.createElement('th');
						fec.innerHTML = fechas[i];
						fec.id = i + 'fec'
						tr.appendChild(fec);
						document.getElementById('cuerpo').appendChild(tr);
					}
				}			
			}
		});
	}
};
function Seleccion(value, id) {
	sessionStorage.setItem('Nombre', document.getElementById(value + 'nom').innerHTML);
	sessionStorage.setItem('Apellido', document.getElementById(value + 'ape').innerHTML);
	sessionStorage.setItem('CI', document.getElementById(value + 'cipas').innerHTML);
	sessionStorage.setItem('fechas', document.getElementById(value + 'fec').innerHTML);
	document.location.href = 'http://' + ip  +'/Programa-cma-master/index-cajaD.html';
}
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
		sessionStorage.clear('Nombre');
		sessionStorage.clear('Apellido');
		sessionStorage.clear('CI');
		sessionStorage.clear('fechas');
		sessionStorage.clear('Examenes');
		document.location.href = 'http://' + ip  +'/Programa-cma-master/index-cajaD.html';
		SelectBox.className = SelectBox.className.replace(' error', '');
	} else {
		fire('Seleccione una opcion', 'error');
		SelectBox.className = SelectBox.className + ' error';
	}
};

var enviar = document.getElementById('opciones');
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
window.addEventListener('load', function () {
	sessionStorage.clear('Nombre');
	sessionStorage.clear('Apellido');
	sessionStorage.clear('CI');
	sessionStorage.clear('fechas');
	sessionStorage.clear('Examenes');
});
