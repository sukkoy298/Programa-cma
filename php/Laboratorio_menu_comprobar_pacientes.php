<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
$compilacion = array();
include ('Conexion.php');
$cantidad = $_POST['cantidad'];
try {
$encuesta = "SELECT COUNT(ID_Alfa) as total FROM facturas WHERE Fecha = '$fecha' AND Tip_Servi = 'Examen'";
$resultado = query($encuesta, 'total');
if ($resultado != $cantidad) {
    die('positivo');
}
} catch (\Throwable $th) {
    die('ERROR  ' . $th);
 }
echo 'negativo';
?>
