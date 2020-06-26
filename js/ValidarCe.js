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
	examenes = [];	
	var cont = 0;
	var ip =  "200.82.139.154:80";
// Funcion que se ejecuta cuando el evento click es activado
var validarCheckboxH = function () {
	for (var i = 0; i < elementosH.length; i++) {
		if (elementosH[i].type == 'checkbox') {	
				if (elementosH[i].checked) {
					examenes[cont] = elementosH[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxQ = function () {
	for (var i = 0; i < elementosQ.length; i++) {
		if (elementosQ[i].type == 'checkbox') {
				if (elementosQ[i].checked) {
					examenes[cont] = elementosQ[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxS = function () {
	for (var i = 0; i < elementosS.length; i++) {
		if (elementosS[i].type == 'checkbox') {
				if (elementosS[i].checked) {
					examenes[cont] = elementosS[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxHr = function () {
	for (var i = 0; i < elementosHr.length; i++) {
		if (elementosHr[i].type == 'checkbox') {
				if (elementosHr[i].checked) {
					examenes[cont] = elementosHr[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxHc = function () {
	for (var i = 0; i < elementosHc.length; i++) {
		if (elementosHc[i].type == 'checkbox') {
				if (elementosHc[i].checked) {
					examenes[cont] = elementosHc[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxO = function () {
	for (var i = 0; i < elementosO.length; i++) {
		if (elementosO[i].type == 'checkbox') {
				if (elementosO[i].checked) {
					examenes[cont] = elementosO[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxMt = function () {
	for (var i = 0; i < elementosMt.length; i++) {
		if (elementosMt[i].type == 'checkbox') {
				if (elementosMt[i].checked) {
					examenes[cont] = elementosMt[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxI = function () {
	for (var i = 0; i < elementosI.length; i++) {
		if (elementosI[i].type == 'checkbox') {
				if (elementosI[i].checked) {
					examenes[cont] = elementosI[i].value;
					cont ++;
				}
		 }
	}
};
var validarCheckboxB = function () {
	for (var i = 0; i < elementosB.length; i++) {
		if (elementosB[i].type == 'checkbox') {
				if (elementosB[i].checked) {
					examenes[cont] = elementosB[i].value;
					cont ++;
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
				console.log('El campo ' + elementosOt[i].name + ' esta incompleto');
				elementosOt[i].className = elementosOt[i].className + ' error';
				return false;
			} else {
				elementosOt[i].className = elementosOt[i].className.replace(' error', '');
			}
		}
	}
	return true;
};
function enviar() {
	validarCheckboxH();
	validarCheckboxQ();
	validarCheckboxS();
	validarCheckboxHr();
	validarCheckboxHc();
	validarCheckboxO();
	validarCheckboxMt();
	validarCheckboxI();
	validarCheckboxB();
	validarTextareaOt();
	var examen = JSON.stringify(examenes);
	sessionStorage.setItem('Examenes', examen);
	alert(examen);
	document.location.href = 'http:// ' + ip  +'/Programa-cma-master/index-cajaD.html';
}

