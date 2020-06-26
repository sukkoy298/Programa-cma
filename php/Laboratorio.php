<?php
$fecha = date('Y-m-d');
$siguiente = false;
include('Conexion.php');
$ID_Factura = $_POST['factura'];
$Resultados = json_decode($_POST['resultado']); 
$ID_Examen = json_decode($_POST['idExamen_realizado']);
try {
$insertar_historial = "INSERT INTO historial_medico(ID_Factura) VALUES ('$ID_Factura')";
AddIndatabase($insertar_historial);
$buscar_Historial = "SELECT ID_Num FROM historial_medico WHERE ID_Factura = '$ID_Factura'";
$ID_HistorialM = "H" . query($buscar_Historial, 'ID_Num'); 
for ($i=0; $i < sizeof($Resultados); $i++) {  
    $insertar_Resultados = "INSERT INTO Resultados_Historial(ID_Historial, Evaluacion, resultado) VALUES('$ID_HistorialM', ' $ID_Examen[$i]', '$Resultados[$i]')";
    AddIndatabase($insertar_Resultados);
}
$actualizar = "UPDATE facturas SET Siguiente_Pasar = 0 WHERE ID_Num = '$ID_Factura'";
Update($actualizar);
$facturas = "SELECT ID_Num FROM facturas WHERE Fecha = '$fecha' AND Siguiente_Pasar = 0 AND Tip_Servi = 'Examenes'";
$conectar = mysqli_query($conexion, $facturas);
while ($IDs = mysqli_fetch_array($conectar)) {
    $encuesta = "SELECT ID_Alfa FROM historial_medico WHERE ID_Factura = 'F$IDs[ID_Num]'";
    $comprobante = query($encuesta, 'ID_Alfa');
    if ($comprobante != 'H') {
        $Modificar2 = "UPDATE facturas SET Siguiente_Pasar = 1 WHERE ID_Num = '$IDs[ID_Num]'";
        Update($Modificar2);
    break;
    }
}
echo true;
} catch (\Throwable $th) {
    die('ERROR ' . $th);
}
?>