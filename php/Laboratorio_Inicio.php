<?php
$conectar;//exclucivo para el mysqli_query
$conectar2;//exclucivo para el mysql_query cuando el $conectar este en un bucle
$fecha = date('Y-m-d');//fecha del dia: Años-Meses-Dias
$examenes = array();
include ('Conexion.php');
try {
$encuesta = "SELECT ID_Num, ID_Pacient FROM facturas WHERE Siguiente_Pasar = '1' AND Tip_Servi = 'Examenes' AND Fecha = '$fecha'";
$conectar = mysqli_query($conexion, $encuesta);
$ID_Necesarios = mysqli_fetch_array($conectar);
$ID_Factura = "F" . $ID_Necesarios['ID_Num'];
$ID_Paciente = $ID_Necesarios['ID_Pacient'];
/*determinar el numero de pacientes del dia*/
$encuesta = "SELECT ID_Num FROM facturas WHERE Tip_Servi = 'Examenes' AND Fecha = '$fecha'";
$conectar= mysqli_query($conexion, $encuesta);
$Facturas_Del_Dia = mysqli_fetch_array($conectar);
$NroPaciente = 1;
for ($i=1; $i <= sizeof($Facturas_Del_Dia); $i++) { 
    if ('F' . $Facturas_Del_Dia['ID_Num']== $ID_Factura) {
    break;
    }
    $NroPaciente ++;
}
$ID_NumPaciente = explode("P" ,$ID_Paciente);
$Encuesta_Paciente = "SELECT Name, lastName FROM pacientes WHERE ID_Num = '$ID_NumPaciente[1]'";
$conectar= mysqli_query($conexion, $Encuesta_Paciente);
$NombrePaciente = mysqli_fetch_array($conectar);
$ID_Examenes = "SELECT Dat_Es FROM datos_extras_factura WHERE ID_Factura = '$ID_Factura'";
$conectar = mysqli_query($conexion, $ID_Examenes);
while ($resultado_ID_Examenes = mysqli_fetch_array($conectar)) {
    $ID_Examen = explode("E" ,$resultado_ID_Examenes['Dat_Es']);
    $encuesta = "SELECT Name, ValuePr FROM Examenes WHERE ID_Num = '$ID_Examen[1]'";
    $conectar2 = mysqli_query($conexion, $encuesta);
    $Datos_Examenes = mysqli_fetch_array($conectar2);
    $examenes[] = array('ID' => $resultado_ID_Examenes['Dat_Es'], 'Nombre' => $Datos_Examenes['Name'], 'valorPromedio' => $Datos_Examenes['ValuePr'], 'Paciente' => $NombrePaciente['Name'] . "  " . $NombrePaciente['lastName'], 'NroPaciente' => $NroPaciente, 'Factura' => $ID_Factura);
}
$json = json_encode($examenes);
echo $json;
} catch (\Throwable $th) {
    die('ERROR  ' . $th);
}
?>