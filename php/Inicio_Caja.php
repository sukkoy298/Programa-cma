<?php
include ('Conexion.php');
$encuesta = 'SELECT Count(ID_Num) as total FROM facturas';
$campo = 'total';
$resultado = query($encuesta, $campo);
echo $resultado + 1;
?>