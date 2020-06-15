/*datos provenientes del php y mysql*/
var idexamen = [];
var contador = 0;
var ValorPromedio = [];
var factura;
/*evento de carga*/
window.addEventListener('load', function () {
	var columna = '';
	var textos = '';
	var filaNombres = '';
	var filaResultados = '';
	var cajaResultados = '';
	contador = 0;
	$.ajax({
		type: 'GET',
		url: 'php/Laboratorio_Inicio.php',
		success: function (response) {
			console.log(response);
			var datos = JSON.parse(response);
			factura = datos[0].Factura;
			document.getElementById('label1').innerHTML = datos[0].Paciente;
			document.getElementById('label2').innerHTML = datos[0].NroPaciente;
			datos.forEach((Examen) => {
				idexamen[contador] = Examen['ID'];
				columna = document.createElement('tr');
				document.getElementById('cuerpo').appendChild(columna);
				filaNombres = document.createElement('th');
				textos = document.createTextNode(Examen['Nombre']);
				filaNombres.appendChild(textos);
				columna.appendChild(filaNombres);
				filaResultados = document.createElement('th');
				cajaResultados = document.createElement('input');
				cajaResultados.type = 'text';
				cajaResultados.id = 'resultado' + contador;
				cajaResultados.placeholder = 'Ingrese el resultado del examen';
				filaResultados.appendChild(cajaResultados);
				columna.appendChild(filaResultados);
				valorPromedio = document.createElement('th');
				textos = document.createTextNode(Examen['valorPromedio']);
				ValorPromedio[contador] = textos;
				valorPromedio.appendChild(textos);
				columna.appendChild(valorPromedio);
				contador++;
			});
		},
	});
}); /*aqui termina el evento load*/
function Cancel() {
	for (var i = 0; i <= cantidadValores; i++) {
		document.getElementById('resultado' + i).value = '';
	}
} /*cierre del evento cancel*/
function enviar() {
	contador = 0;
	var comprobante = true;
	var resultados = [];
	while (document.getElementById('resultado' + contador) != undefined) {
		if ($('#' + 'resultadol' + contador).attr('value') != '') {
			resultados[contador] = document.getElementById('resultado' + contador).value;
			contador++;
		} else {
			comprobante = false;
			alert('verifique que ha llenado todos las cajas de texto');
			break;
		}
	}
	Rectificar();
	$.ajax({
		type: 'POST',
		url: 'php/Laboratorio.php',
		data: { resultado: JSON.stringify(resultados), idExamen_realizado: JSON.stringify(idexamen), factura },
		success: function (response) {
			if (response == true) {
				document.location.href = 'http://localhost/Programa-cma-master/index-MenuLaboratorio.html';
			}
		},
	});
} /* cierre envento enviar*/
function Rectificar() {
	var unstable = [];
	var contador = 0;
	for (var i = 0; i <= contador; i++) {
		if (ValorPromedio[i] != '' || undefined) {
			//     2.2    / 2                                         1                 2.2   * 2                                         2
			if (ValorPromedio[i] / 2 > document.getElementById('resultado' + i).value || ValorPromedio[i] * 2 < document.getElementById('resultado' + i).value) {
				unstable[contador] = idexamen[i];
				contador++;
			}
		} else {
			alert('Error,  estandares iguales o menores a 0');
			break;
		}
	}
	for (var x = 0; x < unstable.length; x++) {
		alert('Valor  ' + unstable[x] + '  fuera de los estandares, por favor revisar');
	}
} /*cierre evento rectifiar*/
function irmenu() {
	document.location.href = 'http://localhost/Programa-cma-master/index-MenuLaboratorio.html';
}
