<?php
include('Conexion.php');
$datos_Paciente = array();
$pacientes = "SELECT * FROM Pacientes";
$conectar = mysqli_query($conexion, $pacientes);
while ($datos_Pacient = mysqli_fetch_array($conectar)) {
    $datos_Paciente[] = array(
        'ID' => $datos_Pacient['ID_Num'],
        'Nombre' => $datos_Pacient['Name'],
        'Apellido' => $datos_Pacient['lastName'],
        'Cedula' => $datos_Pacient['CI'],
        'Fecha_Nacimiento' => $datos_Pacient['Fecha_Nacimiento']
    );
}
$json = json_encode($datos_Paciente);
echo $json;
?>