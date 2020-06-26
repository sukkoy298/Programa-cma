<?php
include('Conexion.php');
$id = $_POST['value'];
$examen = array();
$estado_buscar= "SELECT Estado FROM Resultados_Examenes WHERE ID_relacionario = '$valor'";
$estado = query($estado_buscar, 'Estado');
$Buscar = "SELECT ID_Examen, resultado FROM Resultados_Examenes WHERE ID_relacionario = '$id'";
$conectar = mysqli_query($conexion, $Buscar);
while($examenes = mysqli_fetch_array($conectar)){
    $Buscar = "SELECT Name FROM Examenes WHERE ID = '$examenes[ID_Examen]'";
    $nombre = query($buscar, 'Name');
    $examen [] = array(
    'examen' => $nombre, 'resultado' => $examenes['resultado'], 'Estado' => $estado);
}
if ($estado != 4) {
    $acutalizar_estado = "UPDATE Resultados_Examenes SET Estado = 4  WHERE ID_relacionario = '$valor'";
    Update($acutalizar_estado);
}
$json = json_encode($examen);
echo $json;
?>