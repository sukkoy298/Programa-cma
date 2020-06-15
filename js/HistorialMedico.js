var columna_fechas = document.getElementById('fechas');
var btnCerrarPopup = document.getElementById('btn-cerrar-popup');
var columna;
var cuerp; /*tbody de la tabla pacientes*/
var idAnterior;
var comprobacion_datos = 1;
var texto;
function inicio(response) {
	var comporbante = 1;
	cuerp = document.createElement('tbody');
	cuerp.id = 'pacientes';
	document.getElementById('tabla_pacientes').appendChild(cuerp);
	let Pacientes = JSON.parse(response);
	Pacientes.forEach((datos) => {
		crear(datos['ID'], datos['Nombre'], datos['Apellido'], datos['Fecha_Nacimiento']);
		comporbante++;
	});
	if (comporbante == 1) {
		alert('pacientes no registrados');
	}
	columna = '';
}
function crear(id, nombre, apellido, fecha_Nacimiento) {
	var IDs;
	var Nombre;
	var Fecha_Nacimiento;
	columna = document.createElement('tr');
	columna.id = 'P' + id;
	columna.value = nombre + '  ' + apellido;
	$(columna).attr('onmouseover', 'ver(id, value)');
	IDs = document.createElement('th');
	texto = document.createTextNode('P' + id);
	IDs.appendChild(texto);
	columna.appendChild(IDs);
	Nombre = document.createElement('th');
	texto = document.createTextNode(nombre + '  ' + apellido);
	Nombre.appendChild(texto);
	columna.appendChild(Nombre);
	Fecha_Nacimiento = document.createElement('th');
	texto = document.createTextNode(fecha_Nacimiento);
	Fecha_Nacimiento.appendChild(texto);
	columna.appendChild(Fecha_Nacimiento);
	document.getElementById('pacientes').appendChild(columna);
}
function conexion_php_inicio() {
	$.ajax({
		type: 'GET',
		url: 'php/Historial_Medico.php',
		success: function (response) {
			inicio(response);
		},
	});
}
window.addEventListener('load', function () {
	conexion_php_inicio();
});
function volver() {
	document.location.href = 'file:../Programa-cma-master/MenuLaboratorio.html';
}
function quitarColumnas(objeto, TB) {
	while (objeto.firstChild) {
		objeto.removeChild(objeto.firstChild);
	}
	if (TB == 'fechas') {
		$('#fechas').hide();
	}
}
function buscar() {
	var busqueda = [];
	for (let index = 0; index < 4; index++) {
		if ($('#ftxt' + index).val() == '' || $('#ftxt' + index).val() == undefined) {
			busqueda[index] = '';
		} else {
			busqueda[index] = $('#ftxt' + index).val();
		}
	}
	if (busqueda[0] != '' || busqueda[1] != '' || busqueda[2] != '' || busqueda[3] != '') {
		IDs = busqueda[0];
		var ci = busqueda[1];
		Fecha_Nacimiento = busqueda[2];
		Nombre = busqueda[3];
		$.ajax({
			type: 'POST',
			url: 'php/Historia_Medico_Buscar.php',
			data: { IDs, ci, Fecha_Nacimiento, Nombre },
			success: function (response) {
				$('tbody').remove();
				inicio(response);
				quitarColumnas(columna_fechas, 'fechas');
				idAnterior = '';
			},
		});
	} else {
		conexion_php_inicio();
	}
}
function ver(id, texto) {
	var contador_columnas = 1;
	var fecha;
	var titulo_factura;
	if (idAnterior != id) {
		quitarColumnas(columna_fechas, 'fechas');
		columna = document.createElement('tr');
		titulo_factura = document.createElement('th');
		titulo_factura.id = 'titulo_factura';
		titulo_factura.colSpan = '3';
		titulo_factura.innerHTML = texto;
		columna.appendChild(titulo_factura);
		columna_fechas.appendChild(columna); /*Linea 1 del codigo*/
		columna = document.createElement('tr');
		campo = document.createElement('td');
		campo.innerHTML = 'Fechas';
		columna.appendChild(campo);
		columna_fechas.appendChild(columna);
		$.ajax({
			type: 'POST',
			url: 'php/Historial_Medico_ExaConsul.php',
			data: { id },
			success: function (response) {
				let datos = JSON.parse(response);
				datos.forEach((element) => {
					columna = document.createElement('tr');
					fecha = document.createElement('td');
					fecha.innerHTML = element['Fecha']; /*fecha*/
					fecha.colspan = '2';
					columna.id = element['ID'];
					columna.value = element['Fecha'] + '  ' + texto;
					$(columna).attr('onclick', 'datos_Especificos(id, value)');
					columna.appendChild(fecha);
					columna_fechas.appendChild(columna);
					contador_columnas++;
				});
				campo.rowSpan = contador_columnas;
				if (contador_columnas > 1) {
					$('#fechas').show();
				} else {
					alert('Este paciente no posee ningun registro medico en esta base de datos');
					quitarColumnas(columna_fechas, 'fechas');
				}
			},
		});
		idAnterior = id;
	}
}
function datos_Especificos(id, fecha) {
	document.getElementById('titulo').innerHTML = fecha;
	var tabla = document.getElementById('resultados_servicios');
	var nombre_examen;
	var resultado;
	var label;
	$.ajax({
		type: 'POST',
		url: 'php/Historial_Medico_Datos_Resultados.php',
		data: { id },
		success: function (response) {
			console.log(response);
			let datos = JSON.parse(response);
			datos.forEach((examen) => {
				columna = document.createElement('tr');
				nombre_examen = document.createElement('th');
				label = document.createElement('label');
				label.innerHTML = examen['Nombre'];
				nombre_examen.appendChild(label);
				columna.appendChild(nombre_examen);
				resultado = document.createElement('th');
				label = document.createElement('label');
				label.innerHTML = examen['Result'];
				resultado.appendChild(label);
				columna.appendChild(resultado);
				tabla.appendChild(columna);
				comprobacion_datos++;
			});
			if (comprobacion_datos > 1) {
				$('.overlay').addClass('active');
				$('.popup').addClass('active');
			} else {
				alert('Examen y/o consulta no realizada aun');
				quitarColumnas(tabla, 'resultados');
			}
		},
	});
}
function cerrar_popup() {
	$('.overlay').removeClass('active');
	$('.popup').removeClass('active');
}
btnCerrarPopup.addEventListener('click', function () {
	cerrar_popup();
});
