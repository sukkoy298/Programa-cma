<?php
include('Conexion.php');
$id = $_POST['IDs'];
$ci = $_POST['ci'];
$fecha_nacimiento = $_POST['Fecha_Nacimiento'];
$nombre = $_POST['Nombre'];
$datos_Paciente = array();
$pacientes = "SELECT * FROM Pacientes WHERE ID_Num = '$id'";
$conectar = mysqli_query($conexion, $pacientes);
if ($id != '') {
    $pacientes = "SELECT * FROM Pacientes WHERE ID_Num = '$id'";
$conectar = mysqli_query($conexion, $pacientes);
}elseif($ci != "" && $nombre != "" && $fecha_nacimiento != ''){
    $pacientes = "SELECT * FROM Pacientes WHERE CI = '$ci' AND Name = '$nombre' AND Fecha_Nacimiento";
    $conectar = mysqli_query($conexion, $pacientes);
}elseif($ci != "" && $nombre != "" && $fecha_nacimiento == ''){
    $pacientes = "SELECT * FROM Pacientes WHERE CI = '$ci' AND Name = '$nombre'";
$conectar = mysqli_query($conexion, $pacientes);
}elseif($ci != "" && $nombre == "" && $fecha_nacimiento != ''){
    $pacientes = "SELECT * FROM Pacientes WHERE CI = '$ci' AND Fecha_Nacimiento = '$fecha_nacimiento'";
$conectar = mysqli_query($conexion, $pacientes);
}elseif($ci != "" && $nombre == "" && $fecha_nacimiento == ''){
    $pacientes = "SELECT * FROM Pacientes WHERE CI = '$ci'";
    $conectar = mysqli_query($conexion, $pacientes);
}elseif($ci == "" && $nombre != "" && $fecha_nacimiento == ''){
    $pacientes = "SELECT * FROM Pacientes WHERE Name LIKE '%$nombre%'";
$conectar = mysqli_query($conexion, $pacientes);
}elseif($ci == "" && $nombre != "" && $fecha_nacimiento != ''){
    $pacientes = "SELECT * FROM Pacientes WHERE Name = '$nombre' AND Fecha_Nacimiento = '$fecha_nacimiento'";
$conectar = mysqli_query($conexion, $pacientes);
}elseif($ci == "" && $nombre == "" && $fecha_nacimiento != ''){
    $pacientes = "SELECT * FROM Pacientes  WHERE Fecha_Nacimiento = '$fecha_nacimiento'";
$conectar = mysqli_query($conexion, $pacientes);
}
while ($datos_Pacient = mysqli_fetch_array($conectar)) {
    $datos_Paciente[] = array(
        'ID' => $datos_Pacient['ID_Num'],
        'Nombre' => $datos_Pacient['Name'],
        'Apellido' => $datos_Pacient['lastName'],
        'Fecha_Nacimiento' => $datos_Pacient['Fecha_Nacimiento']
    );
}
$json = json_encode($datos_Paciente);
echo $json;

?>