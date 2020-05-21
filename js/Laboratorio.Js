/*datos provenientes del php y mysql*/
var examen = [];
var rectify = [];
var datosPaciente = ['', 'Juan Jose Perez Mendoza', '1', '20', '27.255.368'];
var cantidadValores = 10; /*se utiliza en la mayoria de functions, es la cantidad de objetos que tiene que generar y leer*/
var envia = []; /* datos a enviar, se utiliza en la function enviar*/
/*rutas de los objetos*/
var Opacacion = document.getElementById('Opacacion');

/*evento de carga*/
window.addEventListener('load', function () {
	for (var x = 0; x <= cantidadValores; x++) {
		var columna = document.createElement('tr'); /*Columna*/

		examen[x] = 'Tipo Examen';
		rectify[x] = '0000000.0000000';
		/*Nombre del valor del examen*/
		var filaUno = document.createElement('th');
		filaUno.id = 'filaUno' + x;
		var textoCelda = document.createTextNode(examen[x]);
		filaUno.appendChild(textoCelda);
		columna.appendChild(filaUno);
		/*Donde se llenaran los datos*/
		var filaDos = document.createElement('th'); /*la fila donde estara*/
		filaDos.id = 'filaDos' + x;
		var textfile = document.createElement('input'); /*donde se pondran los datos*/
		filaDos.appendChild(textfile);
		columna.appendChild(filaDos);
		textfile.type = 'text';
		textfile.id = 'textfile' + x;
		textfile.placeholder = '000000000.00000000';
		/*El valor promedio*/
		var filaTres = document.createElement('th');
		filaTres.id = 'filaTres' + x;
		var textoCelda2 = document.createTextNode(rectify[x]);
		filaTres.appendChild(textoCelda2);
		columna.appendChild(filaTres);
		/*agregar la columna al body de la tabla*/
		cuerpo.appendChild(columna);
	}
	/*datos del paciente*/

	for (var i = 1; i <= 4; i++) {
		var texto = document.createTextNode(datosPaciente[i]);
		document.getElementById('label' + i).appendChild(texto);
	}
}); /*aqui termina el evento load*/
/*Eventos de interaccion del usuario*/
function Cancel() {
	for (var i = 0; i <= cantidadValores; i++) {
		document.getElementById('textfile' + i).value = '';
	}
} /*cierre del evento cancel*/
function enviar() {
	var comprobante = true;
	for (var i = 0; i <= cantidadValores; i++) {
		if (document.getElementById('textfile' + i).value != '' && document.getElementById('textfile' + i).value != undefined) {
			enviar[i] = document.getElementById('textfile' + i).value;
			console.log(enviar[i]);
		} else {
			alert('Verifique que los resultados no estan vacios');
			comprobante = false;
			break;
		}
		if ((comprobante = true)) {
			document.location.href = 'file:file:../Programa-cma-master/MenuLaboratorio.html';
		}
	}
} /* cierre envento enviar*/
function Rectificar() {
	var unstable = [];
	var contador = 0;
	for (var i = 0; i <= cantidadValores; i++) {
		if (rectify[i] != '' && undefined) {
			//     2.2    / 2                                         1                 2.2   * 2                                         2
			if (rectify[i] / 2 > document.getElementById('textfile' + i).value || rectify[i] * 2 < document.getElementById('textfile' + i).value) {
				unstable[contador] = examen[i];
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
	document.location.href = 'file:../Programa-cma-master/MenuLaboratorio.html';
} /*cierre eventro ir menu*/
