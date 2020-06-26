<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
$examenes = array();
$id_factura = $_POST['value'];
include ('Conexion.php');
try {
$encuesta = "SELECT Estado, lugar FROM Historia WHERE ID_relacionario = '$id_factura' AND Tipo = 'Examen'";
$buscar = mysqli_query($conexion, $encuesta);
$resultados_historia = mysqli_fetch_array($buscar);
$resultados = array();
$resultados [] = array(
    'Estado' => $resultados_historia['Estado'], 'Lugar' => $resultados_historia['lugar']
);
$json = json_encode($resultados);
echo $json;
} catch (\Throwable $th) {
    die('ERROR  ' . $th);
}
?>