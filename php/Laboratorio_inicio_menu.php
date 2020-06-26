<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
$compilacion = array();
$id_anterior = 1;
include ('Conexion.php');
try {
$datos_lab = "SELECT ID_relacionario, Estado, lugar FROM Historia WHERE Fecha = '$fecha'";
$conectar = mysqli_query($conexion,$datos_lab);
while ($datos = mysqli_fetch_array($conectar)) {
    if ($id_anterior != $datos['id_relacionario']){
        $id_anterior = $datos['id_relacionario'];  
        $fatura_query = "SELECT Paciente FROM Factura WHERE ID_Num = '$datos[id_relacionario]'";
        $ID_Paciente = query($factura_query, 'Paciente');
        $Datos_Paciente_query = "SELECT Name, lastName, Fecha_Nacimiento FROM Pacientes WHERE ID_Num = '$ID_Paciente'";
        $resultado_paciente = mysqli_query($conexion, $Datos_Paciente_query);
        $Datos_Paciente = mysqli_fetch_array($resultado_paciente);
        $compilacion[] = array('id' => $datos['id_relacionario'], 
        'nombre' => $Datos_Paciente['Name'], 
        'apellido' => $Datos_Paciente['lastName'], 
        'nacimiento' => $Datos_Paciente['Fecha_Nacimiento'],
        'Estado' => $datos['Estado'],
        'lugar' => $datos['lugar']);    
    }
}
} catch (\Throwable $th) {
    die('ERROR  ' . $th);
 }
$json = json_encode($compilacion);
echo $json;
?>