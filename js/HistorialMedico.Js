window.addEventListener('load', function () {});
function volver() {
	document.location.href = 'file:../Programa-cma/MenuLaboratorio.html';
}
var idAnterior = '';
function buscar(id) {
	if (idAnterior != id || idAnterior == '') {
		idAnterior = id;
		document.getElementById('pacientHistorial').innerHTML = document.getElementById(id + 'Nom').innerHTML;
		$('.fechas').css({ visibility: 'visible' });
		console.log($('#' + id).attr('value'));
	}
}
function historia(id) {
	$('.HistorialEspecifico').css({ visibility: 'visible' });
}
function closeHistorialEspecifico() {
	$('.HistorialEspecifico').css({ visibility: 'hidden' });
}
