<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
include ('Conexion.php');
    $ID_Factura = $_POST['id_factura'];
    $Apellido = $_POST['valor2'];
    $Nombre = $_POST['valor1'];
    $Cedula = $_POST['valor3'];
    $FechaNacimiento = $_POST['valor4'];
    $valor5 = $_POST['valor5'];
    $Servicio = $_POST['valor6'];
    $data= json_decode($_POST['examenes']); 
/*comunicacion con la Base de datos*/
try {
    if ($Nombre != "" && $Apellido != "" && $Cedula != "" && $FechaNacimiento != "") {
        $ComprobarPaciente = "SELECT ID_Alfa FROM pacientes WHERE Name = '$Nombre' AND lastName = '$Apellido' AND Fecha_Nacimiento = '$FechaNacimiento' AND CI = '$Cedula'";
        $resultado = query($ComprobarPaciente, 'ID_Alfa');
        if ($resultado != 'P') {
            $encuesta = "INSERT INTO pacientes(Name, lastName, Fecha_Nacimiento, CI) VALUES('$Nombre', '$Apellido', '$FechaNacimiento','$Cedula')";
            $resultado = AddIndatabase($encuesta); 
        }  
        $encuesta = "SELECT ID_Num FROM pacientes WHERE Name = '$Nombre' AND lastName = '$Apellido' AND Fecha_Nacimiento = '$FechaNacimiento' AND CI = '$Cedula'";
        $resultado = query($encuesta, 'ID_Num');
        $ID_Paciente = 'P' . $resultado;
        $siguiente_Pasar = '1';
        $encuesta = "SELECT ID_Alfa FROM facturas WHERE Fecha = '$fecha' AND Siguiente_Pasar = 1 AND tip_Servi = '$Servicio'";
        $resultado = query($encuesta, 'ID_Alfa');
        if ($resultado == 'F') {
            $siguiente_Pasar = '0';
        }
        $Precio_Factura = 0.0;
        $sumador = 0;
      if ($Servicio == 'Examenes') {
     /*determinacion del precio en factura y si se cuentan con los reactivos necesarios*/
         while ($sumador < sizeof($data)) {  
             $encuesta = "SELECT ID_Alfa FROM examenes WHERE ID_Num = '$data[$sumador]'";
             $comprobar_Existencia_Examen = query($encuesta, 'ID_Alfa');
             if ($comprobar_Existencia_Examen != 'E') {
                 die('Examen No Registrado');
             }
             $id_examen = "E" . $data[$sumador];
             $encuesta = "SELECT ID_Reacti, Cantidad_Requerida FROM Reactivos_Necesarios WHERE ID_Examen = '$id_examen'";
             $CantidadRequerida = query($encuesta, 'Cantidad_Requerida');
             if (!is_numeric($CantidadRequerida)) {
                die('Examen Y/O reactivos no registrados');
             }
             $id_Reactivo = query($encuesta, 'ID_Reacti');
             $id_Num_Reactivos = explode("R", $id_Reactivo);
             $encuesta = "SELECT Existencia FROM reactivos WHERE ID_Num = '$id_Num_Reactivos[1]'";
             $CantidadExistente = query($encuesta, 'Existencia');
           if ($CantidadExistente < $CantidadRequerida) {
                die('No se cuentan con los reactivos necesarios para realizar el examen');
            }else {
             $encuesta = "UPDATE reactivos SET Existencia = '$CantidadExistente' - '$CantidadRequerida' WHERE ID_Num = '$id_Num_Reactivos[1]'";
             Update($encuesta);
                $encuesta = "SELECT Costo FROM Examenes WHERE ID_Alfa = 'E' AND ID_Num = '$data[$sumador]'";
                $resultado = query($encuesta, 'Costo');
                $Precio_Factura = $Precio_Factura + $resultado;
            }
            $encuesta = "INSERT INTO datos_extras_factura VALUES('F$ID_Factura', '$id_examen')";
            $resultado = AddIndatabase($encuesta);
            $sumador ++;
     }   
      }elseif ($Servicio == 'Consulta'){
     }
        $encuesta = "INSERT INTO facturas(ID_Pacient, Fecha, Siguiente_Pasar, Costo, tip_Servi) VALUES('$ID_Paciente', '$fecha', '$siguiente_Pasar','$Precio_Factura' , '$Servicio')";
        $resultado = AddIndatabase($encuesta);  
    }else{
        die('Rellene todos los campos');
    }  
} catch (\Throwable $th) {
 die("Error:  " . $th);
}
echo '1';
?>
