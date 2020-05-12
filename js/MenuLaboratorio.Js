var nroCliente = [];
var datosUsuario = ["","maria jose","0.0","0"];
var cuerpo = document.getElementById("cuerpo_T_Cliente");
var clientes = 6;
var manual = [];
manual[0] = document.getElementById("btn1"); 
window.addEventListener("load", function iniciar(){
   
    for (var x = 0; x <= clientes; x++) {
        var columna = document.createElement("tr");/*Columna*/
        columna.id = "columna" + x;

        nroCliente[x] = x + 1;
        var filaDos = document.createElement("th");
        filaDos.id = "filaDos" + x;
      var textfile = document.createElement("input");
      filaDos.appendChild(textfile);
      columna.appendChild(filaDos);
      textfile.type = "checkbox";
      textfile.id = "textfile" + x;
      textfile.disabled = "true";
      
      /*El valor promedio*/
      var filaTres = document.createElement("th");
      filaTres.id = "filaTres" + x;
      var textoCelda2 = document.createTextNode(nroCliente[x]);
          filaTres.appendChild(textoCelda2);
          columna.appendChild(filaTres);
      /*agregar la columna al body de la tabla*/
        cuerpo.appendChild(columna);
    /*esto no tiene nada que ver aqui*/
    manual[x] = document.getElementById("btn1");      
    }
          for (var i = 1; i <= 3; i ++) {
            var texto = document.createTextNode(datosUsuario[i]);
            document.getElementById("label" + i).appendChild(texto);
            }
});
function siguiente() {
    document.location.href="file:../Programa-cma/Laboratorio.html";
}
var condi = true;
function seleccionManual() {
    if (condi === true) {
    for (var i = 0; i <= clientes; i++) {
     var columna = document.getElementById("columna" + i);   
     var filauno = document.createElement("th");
      var textfile = document.createElement("input");
      textfile.type = "Button";
      textfile.id = "btn" + (i + 6);
      textfile.value = i;
      filauno.appendChild(textfile);
      columna.appendChild(filauno);  
      manual[i] = document.getElementById("btn"+(i+6));
    }
    condi=false;
    Cuestionar();
}
}
var aumenta = 0; 
function Cuestionar() {
while (condi === false) {
    manual[aumenta].addEventListener("click", function(){
        document.location.href="file:../Programa-cma/Laboratorio.html";
    });    
    aumenta ++;
}
}
function Historial() {
    document.location.href="file:../Programa-cma/Historial Medico.html";  
}
