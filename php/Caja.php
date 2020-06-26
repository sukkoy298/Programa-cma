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
    $data = json_decode($_POST['examenes']);
    $size = $_POST['size'];
    $ID_Paciente;
/*comunicacion con la Base de datos*/
try {
    if ($Nombre != "" && $Apellido != "" && $Cedula != "" && $FechaNacimiento != "") {
        $CI = explode('-', $Cedula);
        $ComprobarPaciente = "SELECT ID FROM pacientes WHERE Name = '$Nombre' AND lastName = '$Apellido' AND Fecha_Nacimiento = '$FechaNacimiento' AND CI = '$CI[0]' AND Categoria = '$CI[1]'";
        $ID_Paciente= query($ComprobarPaciente, 'ID');
        if (!is_numeric($ID_Paciente)) {
            $encuesta = "INSERT INTO pacientes(Name, lastName, Fecha_Nacimiento, CI, Categoria) VALUES('$Nombre', '$Apellido', '$FechaNacimiento','$CI[0]', '$CI[1]')";
            $ID_Paciente = AddIndatabase($encuesta); 
            $encuesta = "SELECT ID FROM pacientes WHERE Name = '$Nombre' AND lastName = '$Apellido' AND Fecha_Nacimiento = '$FechaNacimiento' AND CI = '$CI[0]' AND Categoria = '$CI[1]'";
            $ID_Paciente= query($encuesta, 'ID');
        }  
        $Precio_Factura = 0.0;
        $sumador = 0;
        $año_nacimiento = explode('-', $FechaNacimiento);
        $Edad = date('Y') - $año_nacimiento[0];
      if ($Servicio == 'Examenes' || $Servicio == 'Ambos') {
     /*determinacion del precio en factura y si se cuentan con los reactivos necesarios*/
     for ($i=0; $i < sizeof($data); $i++) {  
             $encuesta = "SELECT Costo FROM Examenes WHERE ID = '$data[$i]'";
             $Costo_Examenes = query($encuesta, 'Costo');
            $encuesta = "SELECT Reactivo, cantidad_N, Categoria FROM examenes_datos WHERE ID  = '$data[$i]' AND definidor_minimo < '$Edad' AND definidor_maximo > '$Edad'";
             $establecer_conexion = mysqli_query($conexion, $encuesta);
             $fila_Reactivos = mysqli_fetch_row($establecer_conexion);
             if ($fila_Reactivos[1] == null || !is_numeric($fila_Reactivos[1])) {
                 die('Examen No disponible para la edad del paciente');
             }
             $encuesta = "SELECT existencia FROM reactivos WHERE ID = '$fila_Reactivos[0]'";
             $Cantidad_reactivos = query($encuesta, 'existencia');
           if ($Cantidad_reactivos < $fila_Reactivos[1]) {
                die('No se cuentan con los reactivos necesarios para realizar el examen');
            }else {
                $encuesta = "UPDATE reactivos SET existencia = existencia - '$fila_Reactivos[1]' WHERE ID = '$fila_Reactivos[0]'";
                Update($encuesta);
             if ($Cantidad_reactivos < $fila_Reactivos[1]) {
                $encuesta = "UPDATE Examenes SET Disponible = 'false' WHERE ID = '$data[$i]'";
                Update($encuesta);
                }
                $Precio_Factura = $Precio_Factura + $Costo_Examenes;
            }
            $id_Ex = $data[$i] . '-' . $fila_Reactivos[2];
            $encuesta = "INSERT INTO Resultados_Examenes VALUES('$ID_Factura', '$id_Ex', '0.0')";
            $resultado = AddIndatabase($encuesta);
            $sumador ++;
        }  
        $contar = "SELECT COUNT(ID_relacionario) as total FROM Historia WHERE Fecha = '$fecha' AND Tipo = 'Examenes'";
        $lugar = query($contar ,'total');
        if ($lugar < 1) {
            $lugar = 1;
        }
        $encuesta =  "INSERT INTO Historia VALUES('$ID_Factura', '$fecha', '0', $lugar, 'Examenes')";
        AddIndatabase($encuesta);
      }
      if ($Servicio == "Consulta" || $Servicio == 'Ambos'){
            $encuesta = "INSERT INTO Resultados_Consulta VALUES('$ID_Factura', '$Consulta', 'false')";
            $resultado = AddIndatabase($encuesta);
            $encuesta = "SELECT Costo FROM Consulta WHERE ID = '$consulta'";
            $precio_Consulta = query($encuesta , 'Costo');
            $Precio_Factura = $Precio_Factura + $precio_Consulta;
            $contar = "SELECT count('ID_relacionario') as total FROM Historia WHERE Fecha = '$fecha' AND Tipo = 'Consulta'";
            $lugar = query($contar ,'total');
            $encuesta =  "INSERT INTO Historia VALUES('$ID_Factura', '$fecha', '0', $lugar)";
        }
        $encuesta = "INSERT INTO factura(Fecha, Paciente, Precio) VALUES('$fecha', '$ID_Paciente','$Precio_Factura')";
        $resultado = AddIndatabase($encuesta);  
    }else{
        die('Rellene todos los campos');
    }  
} catch (\Throwable $th) {
 die("Error:  " . $th);
}
echo '1';
?>
