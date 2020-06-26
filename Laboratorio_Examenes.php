<?php
include('Conexion.php');
$id_relacionario = $_POST['value'];
$ID_Examenes = array();
$Resultado_Examenes = array();
$examen = array();
$contador = 0;
try {
    $buscar_examenes = "SELECT ID_Examen, resultado FROM Resultados_Examenes WHERE ID_relacionario = '$id_relacionario'";
    $conectar = mysqli_query($conexion, $buscar_examenes);
    while ($datos = mysqli_fetch_array($conectar)) {
        $Examen_datos = explode('-', $datos['ID_Examne']);
        $datos_Examenes = "SELECT nombre FROM Examenes WHERE ID = '$Examen_datos[0]'";
        $nombre_Examen = query($datos_Examenes, 'nombre');
        $Valor_Promedio_Examenes = "SELECT Valor_Referencial FROM Examenes_datos WHERE Categoria = '$Examen_datos[1]' AND ID = '$Examen_datos[0]'";
        $Valor_Referencial = query($Valor_Promedio_Examenes ,'Valor_Referencial');
        $examen [] = array(
            'Nombre' => $nombre_Examen,
            'Resultado' => $datos['resultado'],
            'valorPromedio' => $Valor_Referencial,
            'ID_Examen' => $datos['ID_Examne']
        );
        $contador ++ ;
    }
$json = json_encode($Valor_Referencial);
echo $json;
} catch (\Throwable $th) {
    //throw $th;
}
?>