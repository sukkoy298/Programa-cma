window.addEventListener('load', function () {
    var columna;
    var IDs;
    var Nombre;
    var Fecha_Nacimiento;
    var texto;
    $.ajax({
        type: "GET",
        url: "php/Historial_Medico.php",
        success: function (response) {
           let Pacientes = JSON.parse(response);  
           Pacientes.forEach(datos => {
            columna = document.createElement('tr');
            columna.id = 'P' + datos['ID'];
            $(columna).attr('onmouseover', "ver(id)");   
            IDs = document.createElement('th');    
            texto = document.createTextNode('P' + datos['ID']);
            IDs.appendChild(texto);
            columna.appendChild(IDs);
            Nombre = document.createElement('th');
            texto = document.createTextNode(datos['Nombre'] + "  " + datos['Apellido']);
             Nombre.appendChild(texto);
             columna.appendChild(Nombre);
            Fecha_Nacimiento = document.createElement('th');
            texto = document.createTextNode(datos['Fecha_Nacimiento']);
            Fecha_Nacimiento.appendChild(texto);
            columna.appendChild(Fecha_Nacimiento);
            document.getElementById('cuerpo').appendChild(columna);
           }); 
              
        }
      });
});
function volver() {
    document.location.href="file:../Programa-cma-master/MenuLaboratorio.html"; 
}
var idAnterior = '';
function buscar(id) { 
    if (idAnterior != id || idAnterior == "") {
        idAnterior = id;
        document.getElementById('pacientHistorial').innerHTML = document.getElementById(id+'Nom').innerHTML;
        $(".fechas").css({'visibility':'visible'});
        console.log($('#'+ id).attr('value'));
    }
}
var id_Anterior;
function ver(id) { 
    if (idAnterior != id) {
        var name = 'ola';
        $.ajax({
            type: "POST",
            url: "php/Historial_Medico_ExaConsul.php",
            data: { id, name },
            success: function (response) {
                console.log(response);
            }
        });
     idAnterior = id;      
    }  
}
function historia(id) {
    $('.HistorialEspecifico').css({'visibility':'visible'});
}
 function closeHistorialEspecifico() {
    $('.HistorialEspecifico').css({'visibility':'hidden'});
}

