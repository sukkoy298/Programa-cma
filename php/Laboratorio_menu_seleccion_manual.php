<?php
include('Conexion.php');
$valor = $_POST['value'];
$fecha = date("Y-m-d");
$Modificar = "UPDATE facturas SET Siguiente_Pasar = 0 WHERE Fecha = '$fecha' AND Siguiente_Pasar = 1 AND Tip_Servi = 'Examenes'";
Update($Modificar);
$Modificar2 = "UPDATE facturas SET Siguiente_Pasar = 1 WHERE Fecha = '$fecha' AND ID_Num = '$valor'";
Update($Modificar2);
echo $valor;
?>