<?php
include('Conexion.php');
try {
$ID_paciente = $_POST['id'];
$facturas = "SELECT ID, Fecha FROM Factura WHERE Paciente = '$ID_paciente'";
$conetar = mysqli_query($conexion, $facturas);
$ID_Factura = array();
while ($resultado = mysqli_fetch_array($conetar)) {
$ID_Factura [] = array(
'ID' => $resultado['ID'], 'Fecha' => $resultado['Fecha']
);
}
$json = json_encode($ID_Factura);
echo $json;
} catch (\Throwable $th) {
    die('ERROR:  ' . $th);
}
?>
