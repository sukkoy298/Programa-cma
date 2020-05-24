<?php 
function query($encuesta, $campo){
    $conexion = mysqli_connect('localhost', 'root', '','cma');
    if (!$conexion){
        echo("Error en la conexion ". mysqli_error($conexion));
    }else{
        $resultado = mysqli_query($conexion,$encuesta);
        $columnas = mysqli_fetch_array($resultado);  
    }
    if ($columnas != null) {
        return($columnas[$campo]);
    } else{
        return("nothing");
    }    
}
function Update($encuesta){
    $conexion = mysqli_connect('localhost', 'root', '','cma');
    if (!$conexion){
        echo("Error en la conexion ". mysqli_error($conexion));
    }else{
         mysqli_query($conexion,$encuesta);  
    }
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
