var nroCliente = [];
var cuerpo = document.getElementById("cuerpo_T_Cliente"); 
var seleccion_Manual_Activa = 'false';
var exist = false;
window.addEventListener("load", function iniciar(){
    var contador = 1;
    var columna;
    var NroPaciente;
    var texto;
    var nombre;
    $.ajax({
            type: "GET",
            url: "php/Laboratorio_inicio_menu.php",
            success: function (response) {
                console.log(response);
               let Pacientes = JSON.parse(response);
               Pacientes.forEach(datos => {  
                exist = false;
                columna = document.createElement("tr");/*Columna*/
                columna.id = "columna" + contador;
                columna.value = datos.id; 
                NroPaciente = document.createElement("th");
                 NroPaciente.id = "fila1" + contador;
                texto = document.createTextNode(contador);
                NroPaciente.appendChild(texto);
                columna.appendChild(NroPaciente);
                nombre = document.createElement("th");
                nombre.id = "fila2" + contador;
                texto = document.createTextNode(datos.Nombre +"  "+ datos.apellido);
                nombre.appendChild(texto);
                columna.appendChild(nombre);
                cuerpo.appendChild(columna);
                $(columna).attr('onclick','Seleccion(value)');
                $(columna).attr('value', datos.id);
                $(NroPaciente).css({"padding":"10"});
                 if (datos.Comprobante == 'true') {
                    $(columna).attr('onclick','');
                    $(columna).css({"background-color":"#A6A6A6"});
                    $(NroPaciente).css({"background-color":"#A6A6A6"});
                }
                exist = true;
                contador ++;
               });    
            }           
         }); 
        console.log(exist);
    }); 
    function seleccionManual(id){
        if (seleccion_Manual_Activa == 'false') {
            $("#" + id).css({"background-color":"#009245"});
            seleccion_Manual_Activa = 'true'        
        }else if(seleccion_Manual_Activa == 'true'){
            $("#" + id).css({"background-color":"#6E6E6E"});
            seleccion_Manual_Activa = 'false'   
        }       
    }
        function Seleccion(value) {
           if (seleccion_Manual_Activa == 'true' && exist == true) {
            $.ajax({
                type: "POST",
                url: "php/Laboratorio_menu_seleccion_manual.php",
                data: {value},
                success: function (response) {
                   console.log(response);
                }
            });
            document.location.href="http://localhost/Programa-cma-master/index-Laboratorio.HTML"
           }     
        }
function siguiente() {
    if (exist == true) {    
    document.location.href="http://localhost/Programa-cma-master/index-Laboratorio.HTML";
    }
}
function Historial() {
    document.location.href="http://localhost/Programa-cma-master/index-historialMedico.html";  
}
