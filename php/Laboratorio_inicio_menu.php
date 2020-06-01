<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
$compilacion = array();
include ('Conexion.php');
try {
$encuesta = "SELECT ID_Num, ID_Pacient FROM facturas WHERE Fecha = '$fecha'";
$conectar = mysqli_query($conexion,$encuesta);
while ($resul = mysqli_fetch_array($conectar)) {
    $encuesta = "SELECT ID_Alfa FROM historial_medico WHERE ID_Factura = 'F$resul[ID_Num]'";
    $comprobante = query($encuesta, 'ID_Alfa');
    $id_Paciente = explode("P" ,$resul['ID_Pacient']);
    $encuesta = "SELECT Name, lastName FROM Pacientes WHERE ID_Num = '$id_Paciente[1]'";
    $conectar2= mysqli_query($conexion,$encuesta);
    $paciente = mysqli_fetch_array($conectar2);
if ($comprobante == "H") {
    $compilacion[] = array('id' => $resul['ID_Num'], 'Comprobante' => 'true', 'idPaciente' => $id_Paciente[1], 'Nombre' => $paciente['Name'], 'apellido' => $paciente['lastName']);
}else{
    $compilacion[] = array('id' => $resul['ID_Num'], 'Comprobante' => 'false' ,  'idPaciente' => $id_Paciente[1], 'Nombre' => $paciente['Name'], 'apellido' => $paciente['lastName']);  
}
}
} catch (\Throwable $th) {
    die('ERROR  ' . $th);
 }
$json = json_encode($compilacion);
echo $json;
?>