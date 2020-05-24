<?php
include ('Conexion.php');
$nombre = $_POST['valor1'];
$apellido = $_POST['valor2'];
$cedula = $_POST['valor3'];
$FechaNacimiento = $_POST['valor4'];
$valor5 = $_POST['valor5'];
$Servicio = $_POST['valor6'];
$fecha;
$data= json_decode($_POST['examenes']); 
/*comunicacion con la Base de datos*/
    $encuesta = "INSERT INTO pacientes(Name, lastName, Fecha_Nacimiento, CI) VALUES('$nombre', '$apellido', '$FechaNacimiento','$cedula')";
    $resultado = AddIndatabase($encuesta);
    $encuesta = "SELECT ID_Num FROM pacientes WHERE Name = '$nombre' AND lastName = '$apellido' AND Fecha_Nacimiento = '$FechaNacimiento' AND CI = '$cedula'";
        $resultado = query($encuesta, 'ID_Num');
        $ID_Paciente = 'P' . $resultado;
        $sumador = 0;
        $Precio_Factura = 0.0;
    if ($Servicio == 'Ex') {
        /*determinacion del precio en factura y si se cuentan con los reactivos necesarios*/
        while ($data) {
        $encuesta = "SELECT Costo FROM Examenes WHERE ID_Alfa = 'E' AND ID_Num = '$data[$sumador]'";
        $resultado = query($encuesta, 'Costo');
        $Precio_Factura = $Precio_Factura + $resultado;
        $encuesta = "SELECT Cant_Requerida, ID_Reacti  FROM Reactivos_Examenes WHERE ID_Examen = 'P . $data[$sumador]'";
        $CantidadRequerida = query($encuesta, 'Cant_Requerida');
        $ID_Reactivo = query($encuesta, 'ID_Reacti');
        $encuesta = "SELECT Existencia FROM Reactivos WHERE ID_Reacti = '$ID_Reactivo";
        $CantidadExistente = query($encuesta, 'Existencia');
        if ($CantidadExistente < $CantidadRequerida) {
            die('No se cuentan con los reactivos necesarios para realizar el examen');
        break;
        }else {
            $encuesta = "UPDATE Reactivos SET Existencia = Existencia - '$CantidadRequerida' WHERE ID_Reacti = '$ID_Reactivo";
            Update($encuesta);
        }
        $sumador ++;
        }         
    }
    /*Factura creada*/ 
         $encuesta = "INSERT INTO facturas(ID_Pacient, Fecha, Costo, tip_Servi) VALUES('$ID_Paciente', '$fecha', '$Precio_Factura' , '$Servicio')";
         $resultado = AddIndatabase($encuesta);
echo $resultado;
