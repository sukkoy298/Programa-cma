<?php 
function query($encuesta, $fila){
    $conexion = mysqli_connect('localhost', 'root', '','cma');
    if (!$conexion){
        echo("Error en la conexion ". mysqli_error($conexion));
    }else{
        $resultado = mysqli_query($conexion,$encuesta);
        $columnas = mysqli_fetch_array($resultado);  
    }
    if ($columnas != null) {
        return($columnas[$fila]);
    } else{
        return("nothing");
    }    
}
function queryInArea($encuesta){
    $conexion = mysqli_connect('localhost', 'root', '','cma');
    if (!$conexion){
        echo("Error en la conexion ". mysqli_error($conexion));
    }else{
        $resultado = mysqli_query($conexion,$encuesta);  
    }
    return($resultado);
}
function AddIndatabase($encuesta){
    $conexion = mysqli_connect('localhost', 'root', '','cma');
    if (!$conexion){
        echo("Error en la conexion ". mysqli_error($conexion));
    }else{
        $resultado = mysqli_query($conexion,$encuesta);  
    }
    if (!$resultado) {
return('Error en agregar los datos' . mysqli_error($conexion));
    }else {
        return('datos agregados correctamente');
    }
}
?>