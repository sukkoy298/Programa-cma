/* TAPS(Pestañas) */
window.addEventListener('load', function () {
	$('#defaultOpen').click();
});
function openPage(pageName, elmnt, color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablink');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = '';
	}
	document.getElementById(pageName).style.display = 'block';
	elmnt.style.backgroundColor = color;
}
var seleccionado = false;
var datosPaciente = [];
var contador = 0;
var diferenteDe = false;
function enviar() {
	while (document.getElementById('dtPaciente' + contador) != undefined) {
		datosPaciente[contador] = document.getElementById('dtPaciente' + contador).value;
		if (datosPaciente[contador] != '') {
			diferenteDe = true;
		} else {
			diferenteDe = false;
			break;
		}
		contador++;
	}
	if (diferenteDe == true) {
		if (seleccionado == true) {
		} else {
			openPage('Exams', document.getElementById('tabExam'), '#1E79E0');
		}
	}
}
function check(checked) {
	if (checked == true) {
		seleccionado = true;
	} else {
		seleccionado = false;
	}
}
