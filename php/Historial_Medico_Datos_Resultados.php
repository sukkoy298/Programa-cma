<?php
include('Conexion.php');
try {
$ID_Factura = $_POST['id'];
$resultados_consulta = "SELECT ID_Consulta, resultado FROM Resultados_Consulta WHERE ID_Relacionario = '$ID_Factura'";
$establecer_conexion = mysqli_query($conexion, $datos_Consulta);
$resultado_C = mysqli_fetch_row($establecer_conexion);
$Nombre_Consulta = "SELECT Nombre FROM Consulta WHERE ID = '$resultado_C[0]'";
$nombre_C = query($Nombre_Consulta,'Nombre');
$resultados_Examenes = "SELECT ID_Examen, resultado FROM Resultados_Examenes WHERE ID_Relacionario = '$ID_Factura'";
$establecer_conexion = mysqli_query($conexion, $datos_Examenes);
$servicio= array();
while ($resultado_E = mysqli_fetch_array($establecer_conexion)) {
    $nombre_examen = "SELECT Nombre FROM Examenes WHERE ID = '$resultado_E[ID_Examen]'";
    $nombre = query($nombre_examen, 'Nombre');
    $servicio [] = array(
    'Nombre' => $nombre, 'Result' => $resultado_E['resultado']
    );
}
$servicio [] = array(
    'Nombre' => $nombre_C, 'Result' => $resultado_C[1]
    );
$json = json_encode($servicio);
echo $json;
} catch (\Throwable $th) {
    die('ERROR:  ' . $th);
}
?>