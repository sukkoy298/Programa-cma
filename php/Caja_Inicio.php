<?php
include ('Conexion.php');
$encuesta = 'SELECT COUNT(ID) as total FROM factura';
$cantidad = query($encuesta, 'total');
$ultimo;
if ($cantidad > 0 && is_numeric($cantidad)) {
  $encuesta = 'SELECT ID FROM factura';
  $conectar = mysqli_query($conexion,$encuesta);
  while ($resultado = mysqli_fetch_array($conectar)) {
    $ultimo = $resultado['ID']; 
  }
      echo $ultimo + 1;
  }else {
    echo 1; 
  }
?>
