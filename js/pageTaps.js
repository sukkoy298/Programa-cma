/* TAPS(Pestañas) */
function inicio() {
	$('#defaultOpen').click();
	$.ajax({
		type: "GET",
		url: "php/Caja_Inicio.php",
		success: function (response) {
			$('#idfactura').attr('value', response);
		}
	});
}
window.addEventListener('load', function () { 
inicio();
	var checkboxs = 1;
	while (document.getElementById(checkboxs) != undefined) {
	$('#' + checkboxs).attr('value', checkboxs);
	checkboxs ++; 
	}
 });
function openPage(pageName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
	tablinks[i].style.backgroundColor = "";
}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}
function enviar() {	
	var checkboxs = 1;
	var chekeados = 0;
	var examenes = [];
	var valor6;
	var comporbanteVacios = false;
	while (document.getElementById(checkboxs) != undefined) {
		if (document.getElementById(checkboxs).checked == true) {
		examenes[chekeados] = $('#' + checkboxs).attr('value');
		console.log(examenes[chekeados]);
		comporbanteVacios = true;
		chekeados ++;
		}
		checkboxs ++; 
	}
	if (comporbanteVacios == false) {
	valor6 = 'Consulta';
	}else{
	valor6 = 'Examenes';	
}
var id_factura = $('#idfactura').val();
	var valor1 = $('#fname').val();
	var valor2 = $('#flastn').val();
	var valor3 = $('#fcedula').val();
	var valor4 = $('#fdateN').val();
	var valor5 = $('#ftelf').val();
	$.ajax({
		type: "POST",
		url: "php/Caja.php",
		data: { id_factura ,valor1, valor2, valor3, valor4, valor5, valor6,'examenes' : JSON.stringify(examenes)},
		success: function (response) {
			if (response != '1') {
				alert('Error:  ' + response);
				$("#fsubmit").on('submit', function(evt){
					evt.preventDefault();  
				 });
			}else{
				alert('Factura creada correctamente');
				inicio();
			}
		}
	});
}
